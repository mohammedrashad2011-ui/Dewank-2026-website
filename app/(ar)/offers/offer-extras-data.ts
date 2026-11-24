// Content for the shared offer blocks (offer-extras.tsx): an illustrative sample, the problems each package solves, a
// comparison with the alternatives, business types and extra FAQs. Every row stays inside the published scope of its
// package. No price is written as text here.

export type OfferExtraKey = "whatsapp" | "ads" | "seo" | "landing" | "instagram" | "bundle";
export type Pair = readonly [string, string];
export type Triple = readonly [string, string, string];

export type OfferExtra = {
  micro: string;
  sample: { title: string; lead: string; head: string; rows: readonly Pair[]; foot: string };
  problems: { title: string; items: readonly Pair[] };
  compare: { title: string; heads: Triple; rows: readonly Triple[] };
  sectors: { title: string; items: readonly Pair[]; link?: Pair };
  faqs: readonly Pair[];
};

export const offerExtras: Record<"ar" | "en", Record<OfferExtraKey, OfferExtra>> = {
  ar: {
    whatsapp: {
      micro: "بدون أي التزام. أرسل نشاطك وأكثر 3 أسئلة تصلك، ونوضح لك هل تكفيك الباقة.",
      sample: {
        title: "مسار محادثة جاهز للتشغيل",
        lead: "نموذج لمحادثة عيادة. مسارك يُبنى على أسئلة عملائك وخطوات فريقك.",
        head: "مسار رد · عيادة",
        rows: [
          ["الترحيب", "رسالة تعريف قصيرة وقائمة: الخدمات، المواعيد، الموقع."],
          ["السؤال", "كم سعر جلسة التنظيف؟ رد جاهز ثم سؤال عن الخدمة المطلوبة."],
          ["البيانات", "الاسم والخدمة والوقت المناسب، وتُحفظ في سجل منظم."],
          ["التحويل", "حالة طبية أو شكوى تنتقل مباشرة إلى موظف الاستقبال."],
        ],
        foot: "العميل الذي يتوقف قبل إكمال الخطوة تصله رسالة متابعة ضمن المسار المتفق عليه.",
      },
      problems: {
        title: "ثلاث مشاكل يعالجها بوت واتساب",
        items: [
          ["رد متأخر وقت الزحمة", "العميل يصله رد أولي وخطوة واضحة فورًا."],
          ["نفس الأسئلة كل يوم", "الردود الأساسية تُجهز مرة واحدة وتُراجع بعد التشغيل."],
          ["الموظف يبدأ من الصفر", "تصله المحادثة ومعها الاسم والطلب والبيانات المهمة."],
        ],
      },
      compare: {
        title: "واتساب أعمال أم بوت واتساب أم نظام كامل؟",
        heads: ["الخيار", "متى يناسبك", "ما الذي تحصل عليه"],
        rows: [
          ["تطبيق واتساب أعمال", "عدد رسائل قليل وشخص واحد يرد", "رسالة ترحيب وردود سريعة محفوظة ترسلها بنفسك"],
          ["الباقة التأسيسية", "أسئلة متكررة وعملاء يضيعون قبل الموظف", "مسار رد وتأهيل وجمع بيانات وتحويل للموظف ومتابعة أساسية"],
          ["نظام واتساب وCRM كامل", "عدة فروع أو فرق مبيعات وتكاملات", "مراحل بيع وتقارير وحجز وربط مع أنظمتك، بتسعير مستقل"],
        ],
      },
      sectors: {
        title: "بوت واتساب حسب نشاطك",
        items: [
          ["عيادة أو مركز تجميل", "الخدمات والأسعار المعلنة وطلب موعد ثم تحويل للاستقبال."],
          ["متجر إلكتروني", "أسئلة الشحن والاستبدال والمقاسات قبل الطلب."],
          ["عقار", "نوع الوحدة والميزانية والمنطقة قبل تحويل العميل للمسوّق."],
          ["مطعم أو كافيه", "الفروع وساعات العمل ورابط الطلب."],
          ["معهد أو مدرب", "البرامج والمواعيد وبيانات التسجيل الأولية."],
          ["شركة خدمات أو صيانة", "نوع الخدمة والحي والوقت المناسب للزيارة."],
        ],
        link: ["كم تكلفة أتمتة واتساب في السعودية؟", "/guides/whatsapp-crm-automation-cost-saudi-arabia"],
      },
      faqs: [
        ["ما هو بوت واتساب للشركات؟", "هو مسار رد آلي على واتساب يجيب عن الأسئلة المتكررة ويجمع بيانات العميل ويوجهه إلى الخطوة المناسبة، ثم يحوّل المحادثة إلى موظف عند الحاجة. لا يلغي فريقك، بل يختصر عليه بداية المحادثة."],
        ["هل أحتاج واتساب API؟", "يعتمد على عدد المحادثات والتكاملات التي تحتاجها. نراجع وضعك الحالي قبل البدء ونوضح طريقة الربط المناسبة ورسومها إن وجدت، وهي منفصلة عن سعر الباقة."],
        ["هل يكفيني بوت واتساب مجاني؟", "قد يكفي لرسالة ترحيب وردود بسيطة. إذا كنت تحتاج تأهيل العميل وجمع بياناته وتحويله للموظف واختبار الحالات الاستثنائية، فأنت تحتاج مسارًا مصممًا على نشاطك."],
      ],
    },
    ads: {
      micro: "بدون أي التزام. أرسل رابط صفحتك، ونخبرك هل هي مناسبة قبل أن تبدأ الصرف.",
      sample: {
        title: "هكذا نرتب كلمات حملتك",
        lead: "نموذج لحملة شركة صيانة مكيفات. كلماتك تُختار من بحث فعلي على خدمتك وسوقك.",
        head: "خطة كلمات · شركة صيانة",
        rows: [
          ["نستهدف", "صيانة مكيفات الرياض، شركة تنظيف مكيفات"],
          ["نستبعد", "وظائف، دورة، شرح، قطع غيار"],
          ["الإعلان", "عنوان بالخدمة والمدينة ودعوة واضحة للتواصل"],
          ["القياس", "ضغطة واتساب أو نموذج أو مكالمة كهدف رئيسي واحد"],
        ],
        foot: "تستلم الكلمات والإعلانات للمراجعة والاعتماد قبل تشغيل الميزانية.",
      },
      problems: {
        title: "ثلاث مشاكل نمنعها قبل الإطلاق",
        items: [
          ["كلمات عامة تستهلك الميزانية", "نبدأ بكلمات قريبة من الطلب وقائمة كلمات سلبية."],
          ["نقرات بلا نتيجة معروفة", "نربط هدفًا رئيسيًا واحدًا لتعرف ما حدث بعد النقرة."],
          ["إعدادات افتراضية واسعة", "نضبط الموقع واللغة والجدول والشبكة قبل التشغيل."],
        ],
      },
      compare: {
        title: "تشغّل إعلانات جوجل بنفسك أم باقة إطلاق أم إدارة شهرية؟",
        heads: ["الخيار", "متى يناسبك", "ما الذي تحصل عليه"],
        rows: [
          ["تشغيلها بنفسك", "لديك وقت للتعلم وميزانية تجربة", "تحكم كامل، وأنت من يبني الكلمات والقياس"],
          ["باقة الإطلاق", "صفحة جاهزة وتريد بداية صحيحة", "حملة Search واحدة وكلمات وإعلانات وقياس و7 أيام متابعة تقنية"],
          ["إدارة شهرية", "تريد تحسينًا مستمرًا وحملات متعددة", "متابعة وتعديل وتقارير طوال الشهر، خدمة منفصلة"],
        ],
      },
      sectors: {
        title: "إعلانات جوجل حسب نشاطك",
        items: [
          ["شركة صيانة أو تنظيف", "كلمات الخدمة والمدينة، وهدف المكالمة أو واتساب."],
          ["عيادة", "كلمات الخدمة بوضوح، مع الالتزام بسياسات جوجل وضوابط القطاع."],
          ["مكتب محاماة أو استشارات", "كلمات الاستشارة والتخصص، ونموذج تواصل."],
          ["مقاولات وتشطيبات", "كلمات طلب عرض سعر، واستبعاد الباحثين عن وظائف."],
          ["تدريب وتعليم", "اسم البرنامج والمدينة، واستبعاد الباحثين عن المجاني."],
          ["خدمات أعمال B2B", "كلمات متخصصة قليلة العدد وقريبة من القرار."],
        ],
        link: ["كم تكلفة إعلانات جوجل في السعودية؟", "/guides/google-ads-cost-saudi-arabia"],
      },
      faqs: [
        ["ما الفرق بين جوجل ادز وإعلانات جوجل؟", "هما الشيء نفسه. Google Ads، ويكتبها البعض جوجل ادز أو قوقل ادز، هي منصة إعلانات جوجل. وهذه الباقة تخص إعلانات البحث فيها، أي الإعلانات التي تظهر لمن يبحث عن خدمتك."],
        ["كم ميزانية إعلانات جوجل المناسبة للبداية؟", "تعتمد على سعر النقرة في مجالك وعدد الكلمات والمدينة. نراجع تقديرات الكلمات مع نشاطك قبل الإطلاق، وأنت من يحدد الميزانية ويدفعها مباشرة إلى جوجل."],
        ["هل تضمنون عدد عملاء من الحملة؟", "لا. لا يمكن ضمان نتائج إعلانية. نضمن نطاق الباقة: حملة مبنية على كلمات بنية شراء، وإعلانات، وكلمات سلبية، وقياس، وفحص قبل الإطلاق."],
      ],
    },
    seo: {
      micro: "أرسل رابط موقعك فقط. بدون اشتراك وبدون التزام بالتنفيذ معنا.",
      sample: {
        title: "هكذا تُكتب المشكلة في تقريرك",
        lead: "نموذج لطريقة العرض، وليس نتيجة موقع فعلي. تقريرك يعتمد على ما نجده في موقعك.",
        head: "تقرير فحص · صفحة خدمة",
        rows: [
          ["المشكلة", "صفحة الخدمة الأهم غير موجودة في خريطة الموقع."],
          ["الأثر", "قد يتأخر وصول جوجل إليها وفهرستها."],
          ["الأولوية", "حرجة، ضمن أول أسبوع من الخطة."],
          ["الحل", "إضافتها إلى خريطة الموقع وربطها من الصفحة الرئيسية."],
        ],
        foot: "كل مشكلة معها مكانها في الموقع وأثرها وترتيبها في خطة 30 يومًا.",
      },
      problems: {
        title: "ثلاثة أسئلة يجيب عنها الفحص",
        items: [
          ["لماذا لا يظهر موقعي في جوجل؟", "نراجع الفهرسة والزحف وما يمنع الوصول إلى صفحاتك."],
          ["ما الذي أصلحه أولًا؟", "أهم 10 مشكلات مرتبة حسب الأثر، لا قائمة بلا نهاية."],
          ["هل تفهمني أنظمة الذكاء الاصطناعي؟", "نراجع الهيكل والأسئلة والبيانات المنظمة التي تعتمد عليها."],
        ],
      },
      compare: {
        title: "أداة فحص مجانية أم فحص بشري أم إدارة SEO؟",
        heads: ["الخيار", "متى يناسبك", "ما الذي تحصل عليه"],
        rows: [
          ["أداة فحص مجانية", "نظرة أولى سريعة", "قائمة أخطاء تقنية آلية بدون ترتيب حسب نشاطك"],
          ["باقة الفحص", "تريد معرفة المشكلة قبل الدفع للتنفيذ", "تقرير PDF وأهم 10 مشكلات وفرص كلمات وخطة 30 يومًا"],
          ["إدارة SEO مستمرة", "تعرف المشكلة وتريد من ينفذ", "تنفيذ تقني ومحتوى ومتابعة، خدمة منفصلة"],
        ],
      },
      sectors: {
        title: "فحص الموقع حسب نوعه",
        items: [
          ["موقع شركة خدمات", "صفحات الخدمات والمدن ووضوح طلب التواصل."],
          ["متجر إلكتروني", "صفحات التصنيف والمنتج والتكرار والسرعة."],
          ["عيادة", "صفحات الخدمات والموقع والأسئلة المتكررة."],
          ["موقع جديد", "الأساس التقني وبنية الصفحات قبل كتابة المحتوى."],
          ["موقع نزل ترتيبه", "ما تغير في الصفحات والفهرسة والمحتوى."],
          ["موقع عربي وإنجليزي", "ربط اللغتين وتكرار الصفحات والعناوين."],
        ],
        link: ["ما الفرق بين SEO وAEO؟", "/guides/seo-vs-aeo"],
      },
      faqs: [
        ["ما هو فحص السيو؟", "فحص السيو (SEO) هو مراجعة للموقع تحدد ما يعيق ظهوره في نتائج البحث: الفهرسة والزحف والسرعة والمحتوى والكلمات والروابط الداخلية، ثم ترتيب المشكلات حسب أثرها."],
        ["ما الفرق بين فحص السيو وخدمات السيو الشهرية؟", "الفحص تشخيص لمرة واحدة ينتهي بتقرير وخطة. خدمات السيو الشهرية تنفيذ مستمر للتحسينات والمحتوى. البدء بالفحص يوضح لك ما تحتاج تنفيذه فعلًا."],
        ["هل الفحص يضمن تصدر نتائج جوجل؟", "لا. لا أحد يضمن ترتيبًا محددًا. الفحص يوضح ما يعيق الظهور وما الأولوية، والنتيجة تعتمد على التنفيذ والمنافسة."],
      ],
    },
    landing: {
      micro: "بدون أي التزام. أرسل خدمتك وهدف الصفحة، ونؤكد لك النطاق قبل البدء.",
      sample: {
        title: "ماذا نضع في صفحة الهبوط؟",
        lead: "نموذج لصفحة مركز تدريب. ترتيب صفحتك يُبنى على عرضك وجمهورك.",
        head: "هيكل صفحة هبوط · مركز تدريب",
        rows: [
          ["أول شاشة", "اسم البرنامج وما يستفيده المتدرب وزر التسجيل."],
          ["الإقناع", "المحتوى والمدة ولمن يناسب وما لا يشمله."],
          ["الاعتراضات", "أسئلة السعر والمواعيد والشهادة."],
          ["الإجراء", "نموذج قصير أو واتساب برسالة جاهزة، مع تتبع الضغطات."],
        ],
        foot: "هدف واحد للصفحة، وكل قسم يقرّب الزائر منه.",
      },
      problems: {
        title: "ثلاث مشاكل تعالجها صفحة الهبوط",
        items: [
          ["الإعلان يوصل لصفحة عامة", "صفحة واحدة تكمل وعد الإعلان نفسه."],
          ["أكثر من زر يشتت الزائر", "خطوة واحدة واضحة: واتساب أو نموذج."],
          ["لا تعرف من أين جاء الطلب", "تتبع ضغطات واتساب والنماذج عبر GA4 وGTM."],
        ],
      },
      compare: {
        title: "صفحة هبوط أم موقع أم الصفحة الرئيسية؟",
        heads: ["الخيار", "متى يناسبك", "ما الذي تحصل عليه"],
        rows: [
          ["الصفحة الرئيسية الحالية", "زوار يعرفونك ويبحثون عنك", "تعريف عام وروابط كثيرة"],
          ["صفحة هبوط", "إعلان أو عرض واحد بهدف واحد", "صفحة مخصصة بنص وتصميم ونموذج وتتبع"],
          ["موقع من عدة صفحات", "عدة خدمات وحضور رسمي", "حتى 5 صفحات في باقة الموقع الصغير"],
        ],
      },
      sectors: {
        title: "صفحة هبوط حسب نشاطك",
        items: [
          ["عيادة أو مركز تجميل", "خدمة واحدة وطلب موعد عبر واتساب."],
          ["عقار", "مشروع واحد ونموذج اهتمام قصير."],
          ["مركز تدريب", "برنامج واحد وتسجيل مبدئي."],
          ["شركة خدمات", "خدمة ومدينة وطلب عرض سعر."],
          ["تطبيق أو منصة", "الفكرة والفائدة وزر التحميل أو التسجيل."],
          ["فعالية أو إطلاق منتج", "التاريخ والتفاصيل وحجز المقعد."],
        ],
        link: ["قارن أسعار تصميم المواقع في السعودية", "/guides/website-design-cost-saudi-arabia"],
      },
      faqs: [
        ["ما هي صفحة الهبوط (لاندنج بيج)؟", "صفحة الهبوط أو Landing Page هي صفحة واحدة يصل إليها الزائر من إعلان أو رابط، ولها هدف واحد مثل طلب أو تسجيل أو حجز. تختلف عن الموقع في أنها لا تعرض كل شيء، بل ما يساعد على اتخاذ خطوة واحدة."],
        ["كم سعر تصميم صفحة هبوط؟", "سعر الباقة الأساسية والباقة الكاملة ظاهر في الصفحة بعملة بلدك. الأساسية لمن لديه دومين واستضافة، والكاملة تشمل دومينًا واستضافة لمدة عام."],
        ["ما الفرق بينها وبين قوالب صفحات الهبوط الجاهزة؟", "القالب يعطيك شكلًا وتبقى عليك الرسالة والنص والربط والتتبع. هنا نكتب النص ونصمم الصفحة حول عرضك ونربط واتساب والنموذج والتحليلات، مع جولتي تعديل."],
      ],
    },
    instagram: {
      micro: "بدون أي التزام. أرسل رابط حسابك، ونخبرك هل الباقة مناسبة له.",
      sample: {
        title: "بايو انستقرام: قبل وبعد",
        lead: "نموذج لحساب مخبز. بايو حسابك يُكتب على نشاطك وعرضك وعميلك.",
        head: "بايو وهايلايت · مخبز منزلي",
        rows: [
          ["قبل", "حلويات ومعجنات، للطلب خاص."],
          ["بعد", "كيك مناسبات بالطلب في جدة. اطلب قبل يومين عبر الرابط."],
          ["الهايلايت", "القائمة · طريقة الطلب · آراء العملاء · الأسئلة"],
          ["الرابط", "واتساب برسالة جاهزة بدل خاص غير منظم."],
        ],
        foot: "الأسماء والترتيب والنصوص تُسلّم جاهزة للتطبيق على حسابك.",
      },
      problems: {
        title: "ثلاث مشاكل نعالجها في الحساب",
        items: [
          ["بايو لا يقول ماذا تقدم", "تعريف واضح ودعوة إجراء واحدة."],
          ["هايلايت عشوائي", "أسماء وترتيب يجيب عن أسئلة العميل."],
          ["منشورات بلا اتجاه", "محاور محتوى و6 تصميمات وخطة 14 يومًا."],
        ],
      },
      compare: {
        title: "تعديل بنفسك أم باقة تطوير أم إدارة شهرية؟",
        heads: ["الخيار", "متى يناسبك", "ما الذي تحصل عليه"],
        rows: [
          ["تعديل البايو بنفسك", "الحساب منظم ويحتاج لمسة", "نص جديد دون مراجعة للحساب كله"],
          ["باقة 14 يومًا", "حساب قائم يحتاج ترتيبًا واضحًا", "مراجعة وبايو وهايلايت ومحاور و6 تصميمات وخطة"],
          ["إدارة شهرية", "تحتاج نشرًا ومتابعة مستمرة", "محتوى ونشر وإدارة، خدمة منفصلة"],
        ],
      },
      sectors: {
        title: "تطوير حساب انستقرام حسب نشاطك",
        items: [
          ["متجر", "المنتجات وطريقة الطلب والشحن في أول نظرة."],
          ["مطعم أو كافيه", "القائمة والفروع وساعات العمل في الهايلايت."],
          ["عيادة أو صالون", "الخدمات والحجز وآراء العملاء بضوابط القطاع."],
          ["مدرب أو مستشار", "التخصص ولمن تقدم خدمتك وكيف يبدأ العميل."],
          ["عقار", "المشاريع والمناطق وطريقة التواصل."],
          ["مشروع منزلي", "الطلب والمدة ومناطق التوصيل."],
        ],
      },
      faqs: [
        ["كيف أكتب بايو انستقرام احترافيًا؟", "اذكر ما تقدمه ولمن وأين في سطر واضح، ثم ما يميزك بمعلومة محددة، ثم دعوة إجراء واحدة تقود إلى الرابط. ضمن الباقة نكتب البايو ودعوة الإجراء بناءً على نشاطك."],
        ["كم عدد الهايلايت المناسب للحساب؟", "يكفي عادة من 4 إلى 6 تجيب عن أسئلة العميل الأساسية: الخدمات، طريقة الطلب، الآراء، الأسئلة، والتواصل. نقترح الأسماء والترتيب والمحتوى الأساسي لكل منها."],
        ["هل تحتاجون كلمة مرور الحساب؟", "نبدأ من الحساب العام والمواد التي ترسلها. إذا احتاج التطبيق صلاحية، نتفق معك على الطريقة المناسبة قبل البدء، ولا نطلب كلمة المرور في رسالة واتساب."],
      ],
    },
    bundle: {
      micro: "بدون أي التزام. أرسل فكرة مشروعك، ونؤكد لك النطاق قبل البدء.",
      sample: {
        title: "من الفكرة إلى علامة جاهزة",
        lead: "نموذج لتسلسل ما تستلمه في مشروع مقهى. أسماؤك وهويتك تُبنى على مشروعك.",
        head: "مسار الباقة · مقهى جديد",
        rows: [
          ["الأسماء", "10–15 اسمًا بمعناها وسبب اختيارها، وأفضل 3 ترشيحات."],
          ["الفحص", "فحص مبدئي للتشابه والدومين وحسابات التواصل."],
          ["الشعارات اللفظية", "3 شعارات لفظية للاسم الذي تختاره."],
          ["الهوية", "شعار ونسخة مبسطة وألوان وخطوط و3 تطبيقات."],
        ],
        foot: "لا نبدأ تصميم الشعار إلا بعد اعتمادك للاسم.",
      },
      problems: {
        title: "ثلاث مشاكل تمنعها الباقة",
        items: [
          ["شعار لاسم تغيّره لاحقًا", "الهوية تبدأ بعد اعتماد الاسم وفحصه مبدئيًا."],
          ["مصمم لا يعرف سبب الاسم", "الفريق نفسه ينقل منطق الاسم إلى الشكل."],
          ["تكلفة مشروعين منفصلين", "سعر واحد أقل من طلب الباقتين منفصلتين."],
        ],
      },
      compare: {
        title: "اسم فقط أم هوية فقط أم الباقة المجمعة؟",
        heads: ["الخيار", "متى يناسبك", "ما الذي تحصل عليه"],
        rows: [
          ["باقة الاسم التجاري", "لديك مصمم وتحتاج اسمًا", "10–15 اسمًا وفحص مبدئي وأفضل 3 و3 شعارات لفظية"],
          ["باقة الهوية البصرية", "لديك اسم معتمد", "شعار وألوان وخطوط و3 تطبيقات وجولتا تعديل"],
          ["الباقة المجمعة", "مشروع يبدأ من الصفر", "المرحلتان معًا بسعر أقل من طلبهما منفصلتين"],
        ],
      },
      sectors: {
        title: "اسم وهوية حسب مشروعك",
        items: [
          ["مطعم أو كافيه", "اسم سهل النطق وهوية تُقرأ على اللافتة والقائمة."],
          ["متجر إلكتروني", "اسم بدومين مناسب وشعار واضح كأيقونة."],
          ["شركة خدمات أو مقاولات", "اسم رصين وهوية تناسب العروض والعقود."],
          ["علامة أزياء أو عطور", "اسم له معنى وتفاصيل راقية في التطبيق."],
          ["عيادة أو مركز", "اسم يعطي ثقة وألوان هادئة."],
          ["شركة تقنية", "اسم قصير قابل للتوسع ونظام بسيط على الشاشات."],
        ],
        link: ["كيف تختار اسمًا تجاريًا في السعودية؟", "/guides/how-to-choose-brand-name-saudi-arabia"],
      },
      faqs: [
        ["أيهما أولًا: الاسم التجاري أم الشعار؟", "الاسم أولًا. الشعار والألوان والخطوط تُبنى على معنى الاسم وطوله ولغته، وتغيير الاسم بعد التصميم يعني إعادة الشعار والتطبيقات."],
        ["ماذا لو لم يعجبني أي اسم من الترشيحات؟", "نبدأ بأسئلة عن نشاطك وجمهورك وما تحبه وما ترفضه لتقليل هذا الاحتمال، ونؤكد معك حدود التعديل في كل مرحلة قبل البدء."],
        ["هل الفحص يعني أن الاسم متاح للتسجيل؟", "لا. الفحص مبدئي يقلل المخاطر ولا يؤكد القبول. القرار النهائي للجهات المختصة."],
      ],
    },
  },
  en: {
    whatsapp: {
      micro: "No obligation. Send your business and your three most common questions, and we will tell you if the starter is enough.",
      sample: {
        title: "A conversation path, ready to run",
        lead: "An example for a clinic. Your path is built on your customers' questions and your team's steps.",
        head: "Reply path · clinic",
        rows: [
          ["Welcome", "A short introduction and a menu: services, opening hours, location."],
          ["Question", "How much is a cleaning session? A ready reply, then a question about the service needed."],
          ["Details", "Name, service and preferred time, stored in an organised record."],
          ["Handover", "A medical case or a complaint goes straight to reception."],
        ],
        foot: "A customer who stops before finishing receives a follow-up message within the agreed path.",
      },
      problems: {
        title: "Three problems a WhatsApp chatbot solves",
        items: [
          ["Slow replies at busy times", "The customer gets a first reply and a clear next step."],
          ["The same questions every day", "Core replies are prepared once and reviewed after launch."],
          ["Your team starts from zero", "The conversation arrives with the name, the request and the key details."],
        ],
      },
      compare: {
        title: "WhatsApp Business app, chatbot or full system?",
        heads: ["Option", "When it suits you", "What you get"],
        rows: [
          ["WhatsApp Business app", "Few messages and one person replying", "A greeting and saved quick replies you send yourself"],
          ["Starter package", "Repeated questions and leads lost before the team", "Replies, qualification, data capture, handover and basic follow-up"],
          ["Full WhatsApp and CRM system", "Several branches, sales teams or integrations", "Sales stages, reports, booking and connections, priced separately"],
        ],
      },
      sectors: {
        title: "WhatsApp chatbot by business type",
        items: [
          ["Clinic or beauty centre", "Services, published prices and appointment requests, then handover to reception."],
          ["Online store", "Shipping, returns and size questions before the order."],
          ["Real estate", "Unit type, budget and area before passing the lead to an agent."],
          ["Restaurant or café", "Branches, opening hours and the ordering link."],
          ["Training centre or coach", "Programmes, dates and initial registration details."],
          ["Services or maintenance", "Type of service, area and a suitable time to visit."],
        ],
        link: ["WhatsApp and CRM automation explained", "/en/guides/whatsapp-crm-automation"],
      },
      faqs: [
        ["What is a WhatsApp chatbot for business?", "It is an automated reply path on WhatsApp that answers common questions, collects customer details and guides people to the right step, then hands the conversation to a person when needed. It does not replace your team. It shortens the start of each conversation."],
        ["Do I need the WhatsApp Business API?", "It depends on your number of conversations and the integrations you need. We review your current setup before we start and explain the suitable connection and its fees, if any. Those fees are separate from the package price."],
        ["Is a free WhatsApp bot enough?", "It may be enough for a greeting and simple replies. If you need to qualify leads, collect details, hand over to a person and test unusual cases, you need a path designed around your business."],
      ],
    },
    ads: {
      micro: "No obligation. Send your page link, and we will tell you if it is suitable before you spend.",
      sample: {
        title: "How we arrange your campaign keywords",
        lead: "An example for an air-conditioning repair company. Yours come from research on your service and market.",
        head: "Keyword plan · repair company",
        rows: [
          ["Target", "ac repair near me, air conditioning repair company"],
          ["Exclude", "jobs, course, how to, spare parts"],
          ["Ad", "A headline with the service and city, and a clear call to action"],
          ["Measure", "One main goal: a WhatsApp click, a form or a call"],
        ],
        foot: "You review and approve the keywords and ads before the budget runs.",
      },
      problems: {
        title: "Three problems we prevent before launch",
        items: [
          ["General keywords that use up the budget", "We start with keywords close to a request, plus a negative keyword list."],
          ["Clicks with no known result", "We connect one main goal so you know what happens after the click."],
          ["Wide default settings", "We set location, language, schedule and network before it runs."],
        ],
      },
      compare: {
        title: "Do it yourself, a launch package or monthly management?",
        heads: ["Option", "When it suits you", "What you get"],
        rows: [
          ["Running it yourself", "You have time to learn and a budget for testing", "Full control, and you build the keywords and tracking"],
          ["Launch package", "You have a page and want a correct start", "One Search campaign, keywords, ads, tracking and 7 days of technical follow-up"],
          ["Monthly management", "You want continuous optimisation and several campaigns", "Monitoring, changes and reports all month, a separate service"],
        ],
      },
      sectors: {
        title: "Google Ads for small business, by type",
        items: [
          ["Maintenance or cleaning", "Service and city keywords, with a call or WhatsApp goal."],
          ["Clinic", "Clear service keywords, within Google policies and sector rules."],
          ["Law or consulting office", "Consultation and speciality keywords, and a contact form."],
          ["Contracting and fit-out", "Quote-request keywords, excluding job seekers."],
          ["Training and education", "Programme and city, excluding searches for free courses."],
          ["B2B services", "A small set of specialist keywords close to a decision."],
        ],
        link: ["Google Ads or Meta Ads?", "/en/guides/google-ads-vs-meta-ads"],
      },
      faqs: [
        ["What is included in a Google Ads setup?", "A Google Ads setup covers the structure a campaign needs before it runs: keyword research, ad groups, ad copy, negative keywords, location and language settings, conversion tracking and a pre-launch check. This package covers one Search campaign with up to two ad groups."],
        ["How much budget do I need to start?", "It depends on the cost per click in your field, the number of keywords and the location. We review keyword estimates with you before launch. You set the budget and pay it directly to Google."],
        ["Do you guarantee a number of leads?", "No. Advertising results cannot be guaranteed. What we commit to is the scope: a campaign built on buyer-intent keywords, ads, negative keywords, tracking and a check before launch."],
      ],
    },
    seo: {
      micro: "Just send your website link. No subscription, and no obligation to implement with us.",
      sample: {
        title: "How an issue appears in your report",
        lead: "An example of the format, not a real site result. Your report depends on what we find on your site.",
        head: "Audit report · service page",
        rows: [
          ["Issue", "The most important service page is missing from the sitemap."],
          ["Effect", "Google may take longer to reach and index it."],
          ["Priority", "Critical, in the first week of the plan."],
          ["Fix", "Add it to the sitemap and link to it from the home page."],
        ],
        foot: "Every issue comes with its location, its effect and its place in the 30-day plan.",
      },
      problems: {
        title: "Three questions the audit answers",
        items: [
          ["Why does my site not appear on Google?", "We review indexing, crawling and whatever blocks access to your pages."],
          ["What do I fix first?", "The 10 most important issues ranked by effect, not an endless list."],
          ["Do AI answer engines understand my site?", "We review the structure, questions and structured data they rely on."],
        ],
      },
      compare: {
        title: "Free audit tool, SEO audit service or ongoing SEO?",
        heads: ["Option", "When it suits you", "What you get"],
        rows: [
          ["Free audit tool", "A quick first look", "An automated list of technical errors, not ranked for your business"],
          ["Audit package", "You want the diagnosis before paying for work", "A PDF report, the top 10 issues, keyword opportunities and a 30-day plan"],
          ["Ongoing SEO", "You know the problem and need implementation", "Technical work, content and follow-up, a separate service"],
        ],
      },
      sectors: {
        title: "Website audit by site type",
        items: [
          ["Services company", "Service and city pages, and how clear the enquiry step is."],
          ["Online store", "Category and product pages, duplication and speed."],
          ["Clinic", "Service pages, location and common questions."],
          ["New website", "The technical base and page structure before content."],
          ["A site that lost rankings", "What changed in pages, indexing and content."],
          ["Multilingual site", "How languages are linked, duplicate pages and titles."],
        ],
        link: ["SEO and AEO: the difference", "/en/guides/seo-vs-aeo"],
      },
      faqs: [
        ["What is an SEO audit?", "An SEO audit is a review of a website that identifies what is holding back its visibility in search: indexing, crawling, speed, content, keywords and internal links. The issues are then ranked by their effect."],
        ["What is an AEO audit?", "An AEO (answer engine optimisation) audit checks how easily AI answer engines can understand and quote your pages: clear answers, headings, questions and structured data. It is part of this package."],
        ["Does the audit guarantee a top ranking?", "No. Nobody can guarantee a specific position. The audit shows what holds back visibility and what comes first. Results depend on implementation and competition."],
      ],
    },
    landing: {
      micro: "No obligation. Send your service and the goal of the page, and we confirm the scope before work starts.",
      sample: {
        title: "What goes on a landing page?",
        lead: "An example for a training centre. Your page is arranged around your offer and audience.",
        head: "Landing page structure · training centre",
        rows: [
          ["First screen", "The programme, what the trainee gains and the registration button."],
          ["Persuasion", "Content, duration, who it suits and what is not included."],
          ["Objections", "Questions about price, dates and the certificate."],
          ["Action", "A short form or WhatsApp with a ready message, with clicks tracked."],
        ],
        foot: "One goal for the page, and every section moves the visitor closer to it.",
      },
      problems: {
        title: "Three problems a landing page solves",
        items: [
          ["The ad leads to a general page", "One page that continues the promise of the ad."],
          ["Several buttons distract the visitor", "One clear step: WhatsApp or a form."],
          ["You do not know where enquiries come from", "WhatsApp clicks and forms tracked through GA4 and GTM."],
        ],
      },
      compare: {
        title: "Landing page, website or your home page?",
        heads: ["Option", "When it suits you", "What you get"],
        rows: [
          ["Your current home page", "Visitors who already know you", "A general introduction and many links"],
          ["Landing page", "One ad or offer with one goal", "A dedicated page with copy, design, a form and tracking"],
          ["Multi-page website", "Several services and an official presence", "Up to five pages in the small business website package"],
        ],
      },
      sectors: {
        title: "Landing page design by business type",
        items: [
          ["Clinic or beauty centre", "One service and an appointment request on WhatsApp."],
          ["Real estate", "One project and a short interest form."],
          ["Training centre", "One programme and initial registration."],
          ["Services company", "A service, a city and a quote request."],
          ["App or platform", "The idea, the benefit and a download or sign-up button."],
          ["Event or product launch", "The date, the details and seat booking."],
        ],
        link: ["Small business website package", "/en/offers/small-business-website"],
      },
      faqs: [
        ["What is a landing page?", "A landing page is a single page a visitor reaches from an ad or a link, with one goal such as an enquiry, a registration or a booking. Unlike a website, it does not show everything. It shows what helps the visitor take one step."],
        ["How much do landing page design services cost?", "The base and full package prices are shown on this page in your local currency. Base suits you if you have a domain and hosting. Full includes a domain and hosting for one year."],
        ["How is this different from a landing page template?", "A template gives you a layout and leaves the message, copy, connections and tracking to you. Here we write the copy, design the page around your offer and connect WhatsApp, the form and analytics, with two revision rounds."],
      ],
    },
    instagram: {
      micro: "No obligation. Send your account link, and we will tell you if the package suits it.",
      sample: {
        title: "Instagram bio: before and after",
        lead: "An example for a home bakery. Yours is written around your business, offer and customer.",
        head: "Bio and highlights · home bakery",
        rows: [
          ["Before", "Sweets and pastries, DM to order."],
          ["After", "Custom celebration cakes in your city. Order two days ahead through the link."],
          ["Highlights", "Menu · How to order · Reviews · Questions"],
          ["Link", "WhatsApp with a ready message instead of scattered DMs."],
        ],
        foot: "Names, order and copy are handed over ready to apply to your account.",
      },
      problems: {
        title: "Three problems we fix in the account",
        items: [
          ["A bio that does not say what you offer", "A clear introduction and one call to action."],
          ["Random highlights", "Names and an order that answer customer questions."],
          ["Posts with no direction", "Content themes, six designs and a 14-day plan."],
        ],
      },
      compare: {
        title: "Edit it yourself, an upgrade package or monthly management?",
        heads: ["Option", "When it suits you", "What you get"],
        rows: [
          ["Editing the bio yourself", "The account is organised and needs a touch", "New text without a review of the whole account"],
          ["14-day package", "An existing account that needs clear order", "Review, bio, highlights, themes, six designs and a plan"],
          ["Monthly management", "You need continuous posting and follow-up", "Content, posting and management, a separate service"],
        ],
      },
      sectors: {
        title: "Instagram profile optimization by business type",
        items: [
          ["Online store", "Products, how to order and shipping at first glance."],
          ["Restaurant or café", "Menu, branches and opening hours in highlights."],
          ["Clinic or salon", "Services, booking and reviews within sector rules."],
          ["Coach or consultant", "Your speciality, who you serve and how to start."],
          ["Real estate", "Projects, areas and how to get in touch."],
          ["Home business", "Orders, lead time and delivery areas."],
        ],
      },
      faqs: [
        ["What is Instagram profile optimization?", "It is improving the parts a visitor sees first: the name, bio, call to action, link, highlights and the look of the feed, so a customer understands what you offer and what to do next."],
        ["Does the package include an Instagram audit?", "Yes. The first three days are a review of the account, audience, offer and competitors, and the issues are put in priority order before any change."],
        ["Do you need my password?", "We start from the public account and the materials you send. If applying the changes needs access, we agree on a suitable way with you first, and we never ask for a password in a WhatsApp message."],
      ],
    },
    bundle: {
      micro: "No obligation. Send your project idea, and we confirm the scope before work starts.",
      sample: {
        title: "From an idea to a ready brand",
        lead: "An example of what you receive for a new café. Your names and identity are built on your project.",
        head: "Package path · new café",
        rows: [
          ["Names", "10–15 names with their meaning and reason, and a top three."],
          ["Checks", "A preliminary check of similarity, domain and social handles."],
          ["Taglines", "Three taglines for the name you choose."],
          ["Identity", "A logo and simplified version, colours, typefaces and three applications."],
        ],
        foot: "We do not start the logo until you approve the name.",
      },
      problems: {
        title: "Three problems the package prevents",
        items: [
          ["A logo for a name you change later", "The identity starts after the name is approved and checked."],
          ["A designer who does not know the reason for the name", "The same team carries the thinking from the name to the look."],
          ["Paying for two separate projects", "One price, lower than ordering both packages separately."],
        ],
      },
      compare: {
        title: "Name only, identity only or the full package?",
        heads: ["Option", "When it suits you", "What you get"],
        rows: [
          ["Brand naming package", "You have a designer and need a name", "10–15 names, preliminary checks, a top three and 3 taglines"],
          ["Visual identity package", "You have an approved name", "Logo, colours, typefaces, three applications and two revision rounds"],
          ["Name + identity package", "A project starting from scratch", "Both stages for less than ordering them separately"],
        ],
      },
      sectors: {
        title: "Branding package by business type",
        items: [
          ["Restaurant or café", "A name that is easy to say and an identity that reads on a sign."],
          ["Online store", "A name with a suitable domain and a logo that works as an icon."],
          ["Services or contracting", "A restrained name and an identity that suits proposals."],
          ["Fashion or perfume brand", "A name with meaning and refined details."],
          ["Clinic or centre", "A name that builds trust and calm colours."],
          ["Tech company", "A short name that can grow and a simple system for screens."],
        ],
      },
      faqs: [
        ["Which comes first, the brand name or the logo?", "The name. The logo, colours and typefaces are built on the meaning, length and language of the name. Changing the name after design means redoing the logo and the applications."],
        ["Is this branding package suitable for a small business?", "Yes. It suits a new project that needs a name and an essential identity for a consistent start. A larger company that needs a full strategy and a detailed manual should see our brand strategy and identity service."],
        ["Do the checks mean the name is available to register?", "No. The checks are preliminary. They reduce risk and do not confirm acceptance. The final decision belongs to the competent authorities."],
      ],
    },
  },
};
