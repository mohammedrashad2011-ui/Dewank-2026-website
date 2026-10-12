// Standalone HTTP 404 document for unknown URLs. Used by the catch-all route handlers in each language group:
// app/(ar)/[...slug]/route.ts and app/(en)/en/[...slug]/route.ts. Every real route is a static segment and is matched
// first, so these handlers only answer URLs that match nothing. The language decides lang, dir and the copy.
const copy = {
  ar: {
    lang: "ar",
    dir: "rtl",
    title: "الصفحة غير موجودة | ديوانك",
    heading: "404",
    message: "الصفحة التي تبحث عنها غير موجودة.",
    link: "العودة إلى الرئيسية",
    href: "/",
  },
  en: {
    lang: "en",
    dir: "ltr",
    title: "Page not found | Dewank",
    heading: "404",
    message: "This page could not be found.",
    link: "Back to the homepage",
    href: "/en",
  },
} as const;

export function notFoundDocument(language: "ar" | "en"): string {
  const c = copy[language];
  return `<!DOCTYPE html>
<html lang="${c.lang}" dir="${c.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${c.title}</title>
<style>
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f5f0e7;color:#0a0a0a;font-family:system-ui,Arial,sans-serif;text-align:center}
main{padding:24px}
h1{font-size:48px;margin:0 0 12px}
p{margin:0 0 20px;font-size:18px}
a{color:#0a0a0a;font-weight:700}
</style>
</head>
<body>
<main>
<h1>${c.heading}</h1>
<p>${c.message}</p>
<a href="${c.href}">${c.link}</a>
</main>
</body>
</html>
`;
}

export const notFoundResponse = (language: "ar" | "en") =>
  new Response(notFoundDocument(language), {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
