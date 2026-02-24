export interface Machine {
  id: number;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  image: string;
}

export const machines: Machine[] = [
  {
    id: 1,
    nameAr: "سرير التبريد",
    nameEn: "Cooling Bed",
    descAr: "الوظيفة: تبريد الأسياخ بعد الدرفلة لتفادي الالتواء وتقليل الإجهادات الداخلية.",
    descEn: "Function: Controlled cooling of rebars after rolling to avoid bending and residual stresses.",
    image: "/image/1.jpeg"
  },
  {
    id: 2,
    nameAr: "راكات سرير التبريد",
    nameEn: "Cooling Bed Rakes",
    descAr: "الوظيفة: حمل ونقل الأسياخ على سرير التبريد أثناء عملية التبريد.",
    descEn: "Function: Supports and transfers bars along the cooling bed.",
    image: "/image/2.png"
  },
  {
    id: 3,
   nameAr: "ليننج أب",
   nameEn: "Leaning Up",
   descAr: "الوظيفة: عمل محاذاة للأسياخ على سرير التبريد قبل النقل.",
   descEn: "Function: Aligns bars on the cooling bed.",
   image: "/image/3.jpeg"
  },
  {
    id: 4,
   nameAr: "ستيب باي ستيب",
   nameEn: "Step by Step",
   descAr: "الوظيفة: نقل الأسياخ على دفعات منتظمة بدون تداخل.",
   descEn: "Function: Transfers bars in controlled batches without overlapping.",
  image: "/image/4.jpeg"
  },
  {
    id: 5,
   nameAr: "استركشن تروللي",
   nameEn: "Extraction Trolley",
   descAr: "الوظيفة: نقل الأسياخ من على سرير التبريد استعدادًا لعملية القطع.",
   descEn: "Function: Transfers bars from the cooling bed in preparation for cutting.",
  image: "/image/5.jpeg"
  },
  {
    id: 6,
   nameAr: "إكزت رول تيبل",
   nameEn: "Exit Roller Table",
   descAr: "الوظيفة: نقل الأسياخ على الرولات بعد الاستخراج أو القطع.",
   descEn: "Function: Moves bars on roller tables after extraction or cutting.",
  image: "/image/6.jpeg"
  },
  {
    id: 7,
   nameAr: "ماجنتك كونفير",
   nameEn: "Magnetic Conveyor",
   descAr: "الوظيفة: نقل الأسياخ باستخدام نظام مغناطيسي.",
   descEn: "Function: Transfers bars using magnetic force.",
  image: "/image/7.jpeg"
  },
  {
    id: 8,
   nameAr: "باي-باص ماجنتك",
   nameEn: "Magnetic Bypass",
   descAr: "الوظيفة: نقل الأسياخ باستخدام رولات ممغنطة بدل البلاطات.",
   descEn: "Function: Transfers bars using magnetic rollers instead of magnetic plates.",
  image: "/image/77.jpeg"
  },
  {
    id: 9,
    nameAr: "ماجيرنج رول",
    nameEn: "Measuring Roll",
    descAr: "قياس أطوال الأسياخ قبل القص لضبط الطول المطلوب.",
    descEn: "Measures bar length before cutting to ensure required length.",
  image: "/image/8.jpeg"
  },
  {
    id: 10,
    nameAr: "انتري فلاب",
    nameEn: "Entry Flap",
    descAr: "توجيه الأسياخ إلى المسار أو المعدّة التالية.",
    descEn: "Guides bars to the correct path or machine.",
  image: "/image/9.jpeg"
  },
  {
    id: 11,
    nameAr: "باندليم شير",
    nameEn: "Pendulum Shear",
    descAr: "قص الأسياخ على الأطوال التجارية المطلوبة.",
    descEn: "Cuts rebars to commercial lengths using pendulum motion.",
  image: "/image/11.jpeg"
  },
  {
    id: 12,
    nameAr: "استركشن كفر",
    nameEn: "Extraction Cover",
    descAr: "نقل الأسياخ إلى منطقة الفحص وتجهيزها للتجميع.",
    descEn: "Transfers bars to inspection area and prepares them for bundling.",
  image: "/image/12.jpeg"
  },
  {
    id: 13,
    nameAr: "دابل ليننج",
    nameEn: "Double Leaning",
    descAr: "محاذاة مزدوجة للأسياخ قبل تكوين الباندل.",
    descEn: "Performs double alignment before bundling.",
  image: "/image/13.png"
  },
  {
    id: 14,
    nameAr: "اسبيكشن",
    nameEn: "Inspection",
    descAr: "فحص الأسياخ بصريًا والتأكد من الجودة.",
    descEn: "Visual inspection and quality checking of bars.",
  image: "/image/14.jpeg"
  },
  {
    id: 15,
    nameAr: "بار كونتر",
    nameEn: "Bar Counter",
    descAr: "عدّ عدد الأسياخ داخل كل باندل.",
    descEn: "Counts the number of bars per bundle.",
  image: "/image/15.jpeg"
  },
  {
    id: 16,
    nameAr: "فرتكيل بوكت",
    nameEn: "Vertical Bucket",
    descAr: "رفع وتجميع الأسياخ رأسيًا قبل الربط.",
    descEn: "Lifts and stacks bars vertically before tying.",
  image: "/image/16.jpeg"
  },
  {
    id: 17,
    nameAr: "كومبكت",
    nameEn: "Compact",
    descAr: "ضغط وتجميع الأسياخ لإحكام عملية الربط.",
    descEn: "Compacts bars to ensure tight and stable bundling.",
  image: "/image/17.jpeg"
  },
  {
    id: 18,
    nameAr: "تاينج",
    nameEn: "Tying Machines (4 Stations)",
    descAr: "ربط الباندلات أوتوماتيك باستخدام سلك معدني.",
    descEn: "Automatically ties bundles using steel wire.",
  image: "/image/18.jpeg"
  },
  {
    id: 19,
    nameAr: "ستوبر",
    nameEn: "Stopper",
    descAr: "إيقاف الباندلات عند نقطة محددة للتحكم في النقل.",
    descEn: "Stops bundles at a specific position for controlled transfer.",
  image: "/image/19.jpeg"
  },
  {
    id: 20,
    nameAr: "باندل ويتنج",
    nameEn: "Bundle Weight",
    descAr: "وزن الباندل للتأكد من الوزن المطلوب داخله.",
    descEn: "Weighs the bundle to verify the required bundle weight.",
  image: "/image/20.jpeg"
  },
  {
    id: 21,
    nameAr: "ليفتابل",
    nameEn: "Lift Table",
    descAr: "رفع الباندل لتسهيل التجميع أو النقل.",
    descEn: "Lifts bundles to facilitate stacking or transfer.",
  image: "/image/21.jpeg"
  },
  {
    id: 22,
    nameAr: "كولكتنج",
    nameEn: "Collecting Area",
    descAr: "تجميع الباندلات النهائية للشحن أو التخزين.",
    descEn: "Collects finished bundles for storage or dispatch.",
  image: "/image/22.jpeg"
  }
  
];
