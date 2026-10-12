import { GA_MEASUREMENT_ID, GTM_CONTAINER_ID, META_PIXEL_ID } from "../lib/tracking-ids";
import { consentBannerCss } from "./consent-banner-styles";

// Consent storage key. The value holds only the two category choices and a timestamp: no identifiers, no personal data.
export const CONSENT_STORAGE_KEY = "dewank-consent-v1";
// Event fired after every choice, so pages can react. The detail is { analytics, advertising }.
export const CONSENT_CHANGE_EVENT = "dewank:consent-change";
// Attribute on any element (the footer control) that reopens the consent dialog in manage mode.
export const CONSENT_OPEN_ATTRIBUTE = "data-dewank-consent-open";

// Copy for both languages. The dialog states what runs and what does not. It does not claim legal compliance.
const copy = {
  ar: {
    title: "ملفات تعريف الموقع والقياس",
    body: "نستخدم أدوات قياس وإعلان (Google Analytics وGoogle Tag Manager وMeta Pixel) لفهم استخدام الموقع وقياس الحملات. لا تعمل هذه الأدوات إلا إذا اخترت ذلك.",
    essential: "الموقع يعمل كاملًا دون هذه الأدوات. يُحفظ اختيارك في متصفحك فقط.",
    privacy: "سياسة الخصوصية",
    accept: "قبول الكل",
    reject: "رفض الكل",
    manage: "إدارة الاختيارات",
    save: "حفظ الاختيارات",
    manageTitle: "اختر ما تسمح به",
    analyticsLabel: "قياس الاستخدام",
    analyticsDesc: "Google Analytics (GA4) وGoogle Tag Manager، لمعرفة الصفحات المستخدمة وأداء الموقع.",
    advertisingLabel: "القياس الإعلاني",
    advertisingDesc: "Google Ads وMeta Pixel، لقياس الإعلانات والتحويلات.",
    regionLabel: "إعدادات ملفات تعريف الارتباط",
    privacyHref: "/privacy",
  },
  en: {
    title: "Cookies and measurement",
    body: "We use measurement and advertising tools (Google Analytics, Google Tag Manager and the Meta Pixel) to understand how the site is used and to measure campaigns. They run only if you choose to allow them.",
    essential: "The site works fully without them. Your choice is stored in your browser only.",
    privacy: "Privacy notice",
    accept: "Accept all",
    reject: "Reject all",
    manage: "Manage choices",
    save: "Save choices",
    manageTitle: "Choose what you allow",
    analyticsLabel: "Usage measurement",
    analyticsDesc: "Google Analytics (GA4) and Google Tag Manager, to see which pages are used and how the site performs.",
    advertisingLabel: "Advertising measurement",
    advertisingDesc: "Google Ads and the Meta Pixel, to measure ads and conversions.",
    regionLabel: "Cookie settings",
    privacyHref: "/en/privacy",
  },
};

// Inline script, rendered in <head> before any other script. It runs before the first paint and decides which vendor
// requests may be made. Rules:
//   - Google Consent Mode defaults to denied for analytics and advertising, unless a choice is already stored.
//   - Nothing is requested from GTM, GA4 or Meta until a category is allowed. No noscript fallback exists (see
//     RootBodyStart): a visitor without JavaScript cannot consent, so nothing is requested for them either.
//   - Analytics events pushed to dataLayer before a choice are dropped, so a later choice cannot send old events.
//   - Measurement cookies left by an earlier visit are removed on every load where no category is allowed.
//   - In a preview build the vendors never load, whatever the stored choice. dataLayer events are recorded as before.
// The consent dialog is built here as well, not as a React component, so the root layout adds no client component.
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
  var dialog=null;
  function removeDialog(){ if(dialog&&dialog.parentNode) dialog.parentNode.removeChild(dialog); dialog=null; }
  function saveChoice(next){ removeDialog(); window.dewankConsent.set(next); }
  function buildDialog(manage){
    var t=COPY[currentLang()];
    var lang=currentLang();
    var children=[el('h2',{id:'dewank-consent-title',class:'dewank-consent-title',text:t.title}),
      el('p',{class:'dewank-consent-body',text:t.body}),
      el('p',{class:'dewank-consent-essential',text:t.essential})];
    var link=el('a',{href:t.privacyHref,text:t.privacy});
    children[1].appendChild(document.createTextNode(' '));
    children[1].appendChild(link);
    if(manage){
      var current=choice||{analytics:false,advertising:false};
      var a=el('input',{type:'checkbox',id:'dewank-consent-analytics'}); a.checked=!!current.analytics;
      var b=el('input',{type:'checkbox',id:'dewank-consent-advertising'}); b.checked=!!current.advertising;
      var form=el('form',{class:'dewank-consent-form'},[
        el('fieldset',{class:'dewank-consent-fieldset'},[
          el('legend',{text:t.manageTitle}),
          el('label',{class:'dewank-consent-option'},[a,el('span',null,[el('strong',{text:t.analyticsLabel}),el('small',{text:t.analyticsDesc})])]),
          el('label',{class:'dewank-consent-option'},[b,el('span',null,[el('strong',{text:t.advertisingLabel}),el('small',{text:t.advertisingDesc})])])
        ]),
        el('div',{class:'dewank-consent-actions'},[
          el('button',{type:'submit',class:'dewank-consent-btn',text:t.save}),
          el('button',{type:'button',class:'dewank-consent-btn',text:t.reject,on:function(){ saveChoice({analytics:false,advertising:false}); }})
        ])
      ]);
      form.addEventListener('submit',function(event){ event.preventDefault(); saveChoice({analytics:a.checked,advertising:b.checked}); });
      children.push(form);
    } else {
      children.push(el('div',{class:'dewank-consent-actions'},[
        el('button',{type:'button',class:'dewank-consent-btn',text:t.accept,on:function(){ saveChoice({analytics:true,advertising:true}); }}),
        el('button',{type:'button',class:'dewank-consent-btn',text:t.reject,on:function(){ saveChoice({analytics:false,advertising:false}); }}),
        el('button',{type:'button',class:'dewank-consent-manage',text:t.manage,on:function(){ removeDialog(); openDialog(true); }})
      ]));
    }
    var section=el('section',{class:'dewank-consent',lang:lang,dir:lang==='ar'?'rtl':'ltr','aria-labelledby':'dewank-consent-title','aria-label':t.regionLabel},children);
    return section;
  }
  function openDialog(manage){
    if(!document.body) return;
    removeDialog();
    dialog=buildDialog(manage);
    document.body.appendChild(dialog);
  }
  function injectStyle(){
    if(document.getElementById('dewank-consent-style')) return;
    var s=document.createElement('style');
    s.id='dewank-consent-style';
    s.textContent=CSS;
    document.head.appendChild(s);
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
  // The footer control reopens the dialog in manage mode. Delegated, so it works on every page without a component.
  document.addEventListener('click',function(event){
    var target=event.target&&event.target.closest?event.target.closest('['+OPEN_ATTR+']'):null;
    if(target){ event.preventDefault(); injectStyle(); openDialog(true); }
  });
  function showIfNeeded(){
    injectStyle();
    if(choice===null && !dialog) openDialog(false);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',showIfNeeded); else showIfNeeded();
})();`;
}
