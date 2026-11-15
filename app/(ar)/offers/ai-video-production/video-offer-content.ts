export type VideoPackageId = "edit" | "ai" | "ads";

export const videoPackages = [
  {
    id: "edit",
    step: "EDIT",
    demo: "/videos/dewank-method-edit.webp",
    priceKey: "video-edit",
    priceSAR: 990,
    count: 4,
    length: "15–45",
    ar: {
      fit: "لديك تصوير جاهز؟",
      title: "مونتاج ريلز احترافي",
      description: "حوّل مقاطعك المصوّرة إلى فيديوهات قصيرة جاهزة للنشر.",
      features: ["4 فيديوهات رأسية", "مونتاج وإيقاع وانتقالات", "نصوص متحركة وترجمة", "جولة تعديل واحدة لكل فيديو"],
      note: "يلزم توفير المقاطع الأصلية من العميل.",
    },
    en: {
      fit: "Have footage already?",
      title: "Professional Reels Editing",
      description: "Turn your existing footage into sharp, ready-to-post short videos.",
      features: ["4 vertical videos", "Editing, pacing and transitions", "Captions and motion text", "One revision round per video"],
      note: "You provide the original footage.",
    },
  },
  {
    id: "ai",
    step: "CREATE",
    demo: "/videos/dewank-method-create.webp",
    priceKey: "video-ai",
    priceSAR: 1290,
    count: 3,
    length: "15–30",
    ar: {
      fit: "لديك فكرة أو منتج؟",
      title: "فيديوهات AI من الصفر",
      description: "من فكرتك أو منتجك إلى فيديوهات بصرية دون الحاجة إلى جلسة تصوير.",
      features: ["3 فيديوهات رأسية", "فكرة وسكريبت لكل فيديو", "مشاهد AI أو موشن جرافيك", "تعليق صوتي وترجمة وجولة تعديل"],
      note: "تُحدّد المشاهد المعقّدة والشخصيات الثابتة بعرض منفصل.",
    },
    en: {
      fit: "Have an idea or a product?",
      title: "AI Videos from Scratch",
      description: "Turn a product or idea into visual content without a full film shoot.",
      features: ["3 vertical videos", "Concept and script for each", "AI visuals or motion graphics", "Voiceover, captions and one revision"],
      note: "Complex scenes or consistent custom characters require a separate quote.",
    },
  },
  {
    id: "ads",
    step: "SELL",
    demo: "/videos/dewank-method-sell.webp",
    priceKey: "video-ads",
    priceSAR: 1890,
    count: 3,
    length: "15–30",
    ar: {
      fit: "تريد إعلانًا يبيع؟",
      title: "فيديوهات إعلانية للبيع",
      description: "إعلانات قصيرة مبنية على العرض والرسالة والدعوة إلى اتخاذ إجراء.",
      features: ["3 فيديوهات إعلانية رأسية", "سكريبت إعلاني وCTA واضح", "افتتاحيتان بديلتان لكل فيديو", "مقاسان للتصدير وجولة تعديل"],
      note: "لا تشمل إدارة الحملات أو ضمان نتائج إعلانية.",
    },
    en: {
      fit: "Need an ad that sells?",
      title: "Short-Form Video Ads",
      description: "Purpose-built creatives with a focused offer and a clear call to action.",
      features: ["3 vertical ad videos", "Ad scripts and clear CTAs", "Two alternative hooks per video", "Two export sizes and one revision"],
      note: "Media buying and performance guarantees are not included.",
    },
  },
] as const;

export const videoFaq = {
  ar: [
    ["ما الفرق بين مونتاج الريلز وإنتاج فيديو AI؟", "المونتاج يبدأ من فيديوهاتك المصوّرة، بينما إنتاج AI يبدأ من فكرة أو صور منتج ومشاهد يتم تصميمها أو توليدها حسب الاحتياج."],
    ["هل يمكن إنتاج إعلان من دون تصوير؟", "نعم، عندما تسمح طبيعة المنتج والفكرة بذلك. نقترح مشاهد AI أو موشن جرافيك أو معالجة هجينة، ونؤكد الأسلوب قبل البدء."],
    ["هل الأسعار نهائية؟", "هذه أسعار بداية لباقات محددة النطاق. يتم تأكيد السعر والمدة بعد مراجعة الفكرة والخامات والتعقيد والمقاسات المطلوبة، وقبل أي دفعة."],
    ["هل تشمل الباقات تصويرًا ميدانيًا أو نشرًا وإدارة إعلانات؟", "لا. التصوير الميداني، نشر المحتوى، إدارة الحملات، شراء الوسائط والاشتراكات الخارجية تُسعّر منفصلة عند الحاجة."],
    ["هل يمكن استخدام صوت أو صورة شخص حقيقي بالذكاء الاصطناعي؟", "فقط بوجود موافقة واضحة وحقوق استخدام مناسبة. لا ننشئ انتحالًا لشخص أو ادعاءات واقعية مضللة."],
    ["كم جولة تعديل متاحة؟", "تتضمن كل باقة جولة تعديل واحدة لكل فيديو ضمن السكريبت والاتجاه المتفق عليه. تغيير الفكرة بالكامل يُسعّر بشكل مستقل."],
  ],
  en: [
    ["What is the difference between editing and AI video production?", "Editing starts from footage you supply. AI production starts with an idea, product images, and designed or generated scenes suitable for your brief."],
    ["Can I order a video ad without a photoshoot?", "Often yes, depending on the product and concept. We propose AI visuals, motion graphics or a hybrid, and agree the production approach before work starts."],
    ["Are the listed prices final?", "These are starting prices for defined scopes. Final price and delivery are confirmed after reviewing the brief, assets, complexity and export formats, before payment."],
    ["Does this include filming or managing ads?", "No. On-site filming, publishing, media buying, campaign management and third-party subscriptions are separate services."],
    ["Can you use a real person's likeness or voice?", "Only with clear consent and suitable rights. We do not create impersonation or misleading real-world claims."],
    ["How many revisions are included?", "Each package includes one revision round per video within the approved concept. A full change of direction is quoted separately."],
  ],
} as const;
