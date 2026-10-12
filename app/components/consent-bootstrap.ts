import { GA_MEASUREMENT_ID, GTM_CONTAINER_ID, META_PIXEL_ID } from "../lib/tracking-ids";
import { consentBannerCss } from "./consent-banner-styles";

// Consent storage key. The value holds only the two category choices and a timestamp: no identifiers, no personal data.
export const CONSENT_STORAGE_KEY = "dewank-consent-v1";
// Event fired after every choice, so pages can react. The detail is { analytics, advertising }.
export const CONSENT_CHANGE_EVENT = "dewank:consent-change";
// Attribute on any element (the footer control) that reopens the preferences dialog.
export const CONSENT_OPEN_ATTRIBUTE = "data-dewank-consent-open";

// Copy for both languages. It states what runs and what does not. It does not claim legal compliance. The preferences
// dialog carries the full description of each category; the banner only summarises it.
const copy = {
  ar: {
    bannerTitle: "ملفات تعريف الارتباط والقياس",
    bannerBody: "نستخدم أدوات قياس وإعلان لفهم استخدام الموقع وقياس الحملات. لا تعمل هذه الأدوات إلا إذا وافقت عليها.",
    accept: "قبول الكل",
    reject: "رفض الكل",
    manage: "إدارة التفضيلات",
    privacy: "سياسة الخصوصية",
    privacyHref: "/privacy",
    dialogTitle: "تفضيلات ملفات تعريف الارتباط",
    dialogIntro: "الموقع يعمل كاملًا دون هذه الأدوات. يُحفظ اختيارك في متصفحك فقط، ولا يحتوي على بيانات شخصية.",
    optionsLegend: "اختر ما تسمح به",
    analyticsLabel: "قياس الاستخدام",
    analyticsDesc: "Google Tag Manager وGoogle Analytics 4 لمعرفة الصفحات المستخدمة وأداء الموقع. قد تضع ملفات تعريف ارتباط مثل _ga، وتُرسل معلومات الزيارة إلى Google.",
    advertisingLabel: "القياس الإعلاني",
    advertisingDesc: "Google Ads وMeta Pixel لقياس الإعلانات والتحويلات. قد تضع ملفات تعريف ارتباط مثل _fbp، وتُرسل أحداث الموقع إلى Google وMeta.",
    withdraw: "يمكنك تغيير اختيارك أو سحبه في أي وقت من «إعدادات ملفات تعريف الارتباط» أسفل الصفحة. عند السحب تُعاد تحميل الصفحة دون هذه الأدوات، وتُحذف ملفات القياس التي يحملها المتصفح لهذا الموقع.",
    save: "حفظ الاختيارات",
    regionLabel: "إعدادات ملفات تعريف الارتباط",
  },
  en: {
    bannerTitle: "Cookies and measurement",
    bannerBody: "We use measurement and advertising tools to understand how the site is used and to measure campaigns. They run only if you agree.",
    accept: "Accept all",
    reject: "Reject all",
    manage: "Manage preferences",
    privacy: "Privacy notice",
    privacyHref: "/en/privacy",
    dialogTitle: "Cookie preferences",
    dialogIntro: "The site works fully without these tools. Your choice is stored in your browser only and holds no personal data.",
    optionsLegend: "Choose what you allow",
    analyticsLabel: "Usage measurement",
    analyticsDesc: "Google Tag Manager and Google Analytics 4, to see which pages are used and how the site performs. They may set cookies such as _ga and send visit information to Google.",
    advertisingLabel: "Advertising measurement",
    advertisingDesc: "Google Ads and the Meta Pixel, to measure ads and conversions. They may set cookies such as _fbp and send site events to Google and Meta.",
    withdraw: "You can change or withdraw your choice at any time from Cookie settings at the bottom of the page. Withdrawing reloads the page without these tools and removes the measurement cookies this browser holds for this site.",
    save: "Save choices",
    regionLabel: "Cookie settings",
  },
};

// Inline script, rendered in <body> before any other content (see RootBodyStart). It runs while the document is parsing,
// not after the app's JavaScript, so the consent default and the banner do not wait for the app. Rules:
//   - Google Consent Mode defaults to denied for analytics and advertising, unless a choice is already stored.
//   - Nothing is requested from GTM, GA4 or Meta until a category is allowed. No noscript fallback exists (see
//     RootBodyStart): a visitor without JavaScript cannot consent, so nothing is requested for them either.
//   - In production, analytics events pushed to dataLayer before a choice are dropped, so a later choice cannot send old
//     events, and events are dropped after Reject all.
//   - Measurement cookies left by an earlier visit are removed on every load where no category is allowed.
//   - In a preview build the vendors never load, whatever the stored choice. dataLayer events are recorded as before.
// The banner and the preferences dialog are built here, not as React components, so the root layouts add no client code.
export function consentBootstrapScript(vendorsAllowed: boolean): string {
  const vendors = vendorsAllowed ? "true" : "false";
  return `(function(){
  var KEY=${JSON.stringify(CONSENT_STORAGE_KEY)};
  var VENDORS=${vendors};
  var GTM=${JSON.stringify(GTM_CONTAINER_ID)};
  var GA=${JSON.stringify(GA_MEASUREMENT_ID)};
  var FB=${JSON.stringify(META_PIXEL_ID)};
  var OPEN_ATTR=${JSON.stringify(CONSENT_OPEN_ATTRIBUTE)};
  var CHANGE_EVENT=${JSON.stringify(CONSENT_CHANGE_EVENT)};
  var CSS=${JSON.stringify(consentBannerCss)};
  var COPY=${JSON.stringify(copy)};
  var dl=window.dataLayer=window.dataLayer||[];
  var nativePush=Array.prototype.push;
  var choice=null;
  try{
    var raw=window.localStorage.getItem(KEY);
    if(raw){ var parsed=JSON.parse(raw); if(parsed&&parsed.v===1){ choice={analytics:!!parsed.analytics,advertising:!!parsed.advertising}; } }
  }catch(e){ choice=null; }
  var state={analytics:!!(choice&&choice.analytics),advertising:!!(choice&&choice.advertising),gtm:false,ga:false,fb:false};
  function gtag(){ dl.push(arguments); }
  function consentArgs(c){
    return {
      analytics_storage:c.analytics?'granted':'denied',
      ad_storage:c.advertising?'granted':'denied',
      ad_user_data:c.advertising?'granted':'denied',
      ad_personalization:c.advertising?'granted':'denied',
      functionality_storage:'granted',
      security_storage:'granted'
    };
  }
  function isCommand(item){ return Object.prototype.toString.call(item)==='[object Arguments]'; }
  function isEvent(item){ return !!item && typeof item==='object' && !isCommand(item) && !Array.isArray(item) && typeof item.event==='string'; }
  function allowed(item){
    if(!VENDORS) return true;
    if(state.analytics||state.advertising) return true;
    return !isEvent(item);
  }
  if(VENDORS){
    dl.push=function(){
      var keep=[];
      for(var i=0;i<arguments.length;i++){ if(allowed(arguments[i])) keep.push(arguments[i]); }
      return keep.length?nativePush.apply(dl,keep):dl.length;
    };
  }
  gtag('consent','default',consentArgs(state));
  function loadGtm(){
    if(state.gtm) return;
    state.gtm=true;
    dl.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var s=document.createElement('script');
    s.async=true;
    s.src='https://www.googletagmanager.com/gtm.js?id='+GTM;
    document.head.appendChild(s);
  }
  function loadGa(){
    if(state.ga) return;
    state.ga=true;
    var s=document.createElement('script');
    s.async=true;
    s.src='https://www.googletagmanager.com/gtag/js?id='+GA;
    document.head.appendChild(s);
    gtag('js',new Date());
    gtag('config',GA);
  }
  function loadMeta(){
    if(state.fb) return;
    state.fb=true;
    !function(f,b,e,v,n,t,s){
      if(f.fbq)return; n=f.fbq=function(){ n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments); };
      if(!f._fbq)f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0'; n.queue=[];
      t=b.createElement(e); t.async=!0; t.src=v; s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init',FB);
    window.fbq('track','PageView');
  }
  function loadPermitted(){
    if(!VENDORS) return;
    if(state.analytics||state.advertising) loadGtm();
    if(state.analytics) loadGa();
    if(state.advertising) loadMeta();
  }
  function deleteCookie(name){ document.cookie=name+'=; Max-Age=0; path=/; SameSite=Lax'; }
  function removeMeasurementCookies(){
    var names=['_ga','_gid','_gcl_au','_gcl_aw','_fbp','_fbc'];
    var parts=document.cookie?document.cookie.split(';'):[];
    for(var i=0;i<parts.length;i++){
      var n=parts[i].split('=')[0].replace(/^\\s+|\\s+$/g,'');
      if(n.indexOf('_ga_')===0) names.push(n);
    }
    for(var j=0;j<names.length;j++) deleteCookie(names[j]);
  }
  function currentLang(){ return (document.documentElement.lang||'ar').indexOf('en')===0?'en':'ar'; }
  function el(tag, props, kids){
    var node=document.createElement(tag);
    if(props){ for(var k in props){ if(k==='text') node.textContent=props[k]; else if(k==='on') node.addEventListener('click',props[k]); else node.setAttribute(k,props[k]); } }
    if(kids){ for(var i=0;i<kids.length;i++) node.appendChild(kids[i]); }
    return node;
  }
  function removeNode(node){ if(node&&node.parentNode) node.parentNode.removeChild(node); }
  var banner=null, dialog=null, lastTrigger=null, inertNodes=[];
  function focusMain(){
    var target=document.querySelector('main')||document.body;
    if(!target.hasAttribute('tabindex')) target.setAttribute('tabindex','-1');
    try{ target.focus({preventScroll:true}); }catch(e){}
  }
  function injectStyle(){
    if(document.getElementById('dewank-consent-style')) return;
    var s=document.createElement('style');
    s.id='dewank-consent-style';
    s.textContent=CSS;
    document.head.appendChild(s);
  }
  function setInert(on){
    if(on){
      [].slice.call(document.body.children).forEach(function(node){
        if(node===dialog||node.hasAttribute('inert')) return;
        node.setAttribute('inert','');
        inertNodes.push(node);
      });
    } else {
      inertNodes.forEach(function(node){ node.removeAttribute('inert'); });
      inertNodes=[];
    }
  }
  function focusables(root){
    return [].slice.call(root.querySelectorAll('button,input,a[href]')).filter(function(n){ return !n.disabled; });
  }
  // Keeps Tab inside the open dialog and closes it on Escape.
  function trapKey(event){
    if(!dialog) return;
    if(event.key==='Escape'){ event.preventDefault(); closeDialog(); return; }
    if(event.key!=='Tab') return;
    var items=focusables(dialog);
    if(!items.length) return;
    var idx=items.indexOf(document.activeElement);
    if(event.shiftKey){
      if(idx<=0){ event.preventDefault(); items[items.length-1].focus(); }
    } else if(idx===-1||idx===items.length-1){
      event.preventDefault(); items[0].focus();
    }
  }
  function acceptAll(){ saveChoice({analytics:true,advertising:true}); }
  function rejectAll(){ saveChoice({analytics:false,advertising:false}); }
  function buildBanner(){
    var lang=currentLang(), t=COPY[lang];
    var manage=el('button',{type:'button',class:'dewank-consent-manage',text:t.manage,on:function(){ openDialog(manage); }});
    return el('section',{class:'dewank-consent dewank-consent-banner',lang:lang,dir:lang==='ar'?'rtl':'ltr','aria-labelledby':'dewank-consent-title'},[
      el('h2',{id:'dewank-consent-title',class:'dewank-consent-title',text:t.bannerTitle}),
      el('p',{class:'dewank-consent-body',text:t.bannerBody}),
      el('div',{class:'dewank-consent-actions'},[
        el('button',{type:'button',class:'dewank-consent-btn',text:t.reject,on:rejectAll}),
        el('button',{type:'button',class:'dewank-consent-btn',text:t.accept,on:acceptAll})
      ]),
      el('div',{class:'dewank-consent-links'},[manage,el('a',{href:t.privacyHref,text:t.privacy})])
    ]);
  }
  function buildDialog(){
    var lang=currentLang(), t=COPY[lang], current=choice||{analytics:false,advertising:false};
    var analytics=el('input',{type:'checkbox',id:'dewank-consent-analytics'}); analytics.checked=!!current.analytics;
    var advertising=el('input',{type:'checkbox',id:'dewank-consent-advertising'}); advertising.checked=!!current.advertising;
    var form=el('form',{class:'dewank-consent-form'},[
      el('p',{class:'dewank-consent-body',text:t.dialogIntro}),
      el('fieldset',{class:'dewank-consent-fieldset'},[
        el('legend',{text:t.optionsLegend}),
        el('label',{class:'dewank-consent-option'},[analytics,el('span',null,[el('strong',{text:t.analyticsLabel}),el('small',{text:t.analyticsDesc})])]),
        el('label',{class:'dewank-consent-option'},[advertising,el('span',null,[el('strong',{text:t.advertisingLabel}),el('small',{text:t.advertisingDesc})])])
      ]),
      el('p',{class:'dewank-consent-small',text:t.withdraw}),
      el('div',{class:'dewank-consent-actions'},[
        el('button',{type:'button',class:'dewank-consent-btn',text:t.reject,on:rejectAll}),
        el('button',{type:'button',class:'dewank-consent-btn',text:t.accept,on:acceptAll}),
        el('button',{type:'submit',class:'dewank-consent-btn dewank-consent-save',text:t.save})
      ]),
      el('p',{class:'dewank-consent-small'},[el('a',{href:t.privacyHref,text:t.privacy})])
    ]);
    form.addEventListener('submit',function(event){ event.preventDefault(); saveChoice({analytics:analytics.checked,advertising:advertising.checked}); });
    var title=el('h2',{id:'dewank-consent-dialog-title',class:'dewank-consent-title',tabindex:'-1',text:t.dialogTitle});
    var panel=el('div',{class:'dewank-consent dewank-consent-dialog',role:'dialog','aria-modal':'true','aria-labelledby':'dewank-consent-dialog-title',lang:lang,dir:lang==='ar'?'rtl':'ltr'},[title,form]);
    return el('div',{class:'dewank-consent-backdrop'},[panel]);
  }
  function showBanner(){
    if(!document.body||banner||dialog) return;
    injectStyle();
    banner=buildBanner();
    document.body.appendChild(banner);
  }
  function openDialog(trigger){
    if(!document.body) return;
    injectStyle();
    lastTrigger=trigger||document.activeElement;
    removeNode(banner); banner=null;
    removeNode(dialog);
    dialog=buildDialog();
    document.body.appendChild(dialog);
    setInert(true);
    document.addEventListener('keydown',trapKey);
    dialog.querySelector('#dewank-consent-dialog-title').focus();
  }
  function closeDialog(){
    if(!dialog) return;
    removeNode(dialog); dialog=null;
    setInert(false);
    document.removeEventListener('keydown',trapKey);
    if(choice===null) showBanner();
    var target=lastTrigger&&document.body.contains(lastTrigger)?lastTrigger:(banner?banner.querySelector('.dewank-consent-manage'):null);
    if(target) target.focus(); else focusMain();
  }
  function saveChoice(next){
    removeNode(banner); banner=null;
    if(dialog){ removeNode(dialog); dialog=null; setInert(false); document.removeEventListener('keydown',trapKey); }
    window.dewankConsent.set(next);
    focusMain();
  }
  window.dewankConsent={
    get:function(){ return choice?{analytics:choice.analytics,advertising:choice.advertising}:null; },
    set:function(next){
      var previous=choice;
      choice={analytics:!!next.analytics,advertising:!!next.advertising};
      try{ window.localStorage.setItem(KEY,JSON.stringify({v:1,analytics:choice.analytics,advertising:choice.advertising,at:new Date().toISOString()})); }catch(e){}
      state.analytics=choice.analytics;
      state.advertising=choice.advertising;
      var withdrew=!!previous&&((previous.analytics&&!choice.analytics)||(previous.advertising&&!choice.advertising));
      if(withdrew&&VENDORS&&(state.gtm||state.ga||state.fb)){
        // Loaded vendor code cannot be unloaded from the page, so a withdrawal reloads it without the tags.
        removeMeasurementCookies();
        window.location.reload();
        return;
      }
      if(VENDORS) gtag('consent','update',consentArgs(choice));
      loadPermitted();
      window.dispatchEvent(new CustomEvent(CHANGE_EVENT,{detail:choice}));
    }
  };
  if(VENDORS){
    // Without a permitted category, measurement cookies left by an earlier visit are removed on every load. A page that
    // was unloaded during a withdrawal can write them again, so the check is repeated here.
    if(state.analytics||state.advertising) loadPermitted(); else removeMeasurementCookies();
  }
  // The footer control reopens the preferences dialog. Delegated, so it works on every page without a component.
  document.addEventListener('click',function(event){
    var target=event.target&&event.target.closest?event.target.closest('['+OPEN_ATTR+']'):null;
    if(target){ event.preventDefault(); openDialog(target); }
  });
  function showIfNeeded(){
    injectStyle();
    if(choice===null) showBanner();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',showIfNeeded); else showIfNeeded();
})();`;
}
