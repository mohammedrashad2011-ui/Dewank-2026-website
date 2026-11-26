// Keep the existing contact flow unless an explicitly approved release enables capture.
// Preview never makes live requests, even if the flag is present.
export const crmPreview = process.env.VERCEL_ENV === "preview";
export const crmLive = process.env.CRM_CAPTURE_ENABLED === "true" && !process.env.VERCEL_ENV;
export const crmVisible = crmPreview || crmLive;
