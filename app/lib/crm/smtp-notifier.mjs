// Runtime dependency is resolved by CI and pinned before deployment.
export async function createCrmMailSender(env=process.env,{verifyOnly=false}={}){
  const {SMTP_USER,SMTP_PASSWORD,CRM_NOTIFY_TO}=env;
  const host=env.SMTP_HOST||"smtp.hostinger.com";
  const port=Number(env.SMTP_PORT||465);
  const validAddress=v=>typeof v==="string"&&/^[^\s@<>;,]+@[^\s@<>;,]+\.[^\s@<>;,]+$/.test(v);
  if(!validAddress(SMTP_USER)||!validAddress(CRM_NOTIFY_TO)||!SMTP_PASSWORD||![465,587].includes(port))throw Error("CRM mail configuration missing");
  const {default:nodemailer}=await import("nodemailer");
  const transport=nodemailer.createTransport({host,port,secure:port===465,requireTLS:port===587,auth:{user:SMTP_USER,pass:SMTP_PASSWORD},connectionTimeout:8000,greetingTimeout:8000,socketTimeout:10000,tls:{rejectUnauthorized:true,minVersion:"TLSv1.2"}});
  if(verifyOnly){try{await transport.verify();return true;}finally{transport.close();}}
  return async lead=>{
    const info=await transport.sendMail({from:SMTP_USER,to:CRM_NOTIFY_TO,subject:"DEWANK | New website enquiry",messageId:"<crm-"+lead.reference+"@dewank.com>",text:["New enquiry from the website","Reference: "+lead.reference,"Name: "+lead.name,"WhatsApp: "+lead.phone,"Service: "+lead.service].join("\n")});
    if(!info.accepted?.length||info.rejected?.length)throw Error("Mail not accepted");
  };
}
