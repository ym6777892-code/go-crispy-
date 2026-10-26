/* ============================================================
   Go Crispy | جو كريسبي — بيانات المنيو (عدّل الأسعار والأصناف من هنا فقط)
   كل صنف: [اسم عربي, اسم إنجليزي, السعر, وصف عربي, وصف إنجليزي]
   Edit prices/items here only. Item: [ar, en, price, descAr, descEn]
   ============================================================ */

const SOCIALS = [
  // أضف الروابط الحقيقية هنا لاحقًا، مثال:
  // { name: "Facebook", url: "https://facebook.com/yourpage" },
  // { name: "Instagram", url: "https://instagram.com/yourpage" },
];

const UI = {
  ar: {
    title: "جو كريسبي | منيو المطعم",
    tagline: "دجاج مقرمش، تندر، ساندوتشات ووجبات عائلية",
    browse: "تصفح المنيو",
    vat: "الأسعار غير شاملة ضريبة القيمة المضافة",
    vatSub: "Prices do not include VAT",
    cur: "ج.م",
    combo: "كومبو",
    family: "عائلي",
    lang: "English",
    nav: "أقسام المنيو",
    rights: "جميع الحقوق محفوظة",
    follow: "تابعنا",
  },
  en: {
    title: "Go Crispy | Menu",
    tagline: "Crispy chicken, tenders, sandwiches and family meals",
    browse: "Browse the menu",
    vat: "Prices do not include VAT",
    vatSub: "الأسعار غير شاملة ضريبة القيمة المضافة",
    cur: "EGP",
    combo: "Combo",
    family: "Family",
    lang: "العربية",
    nav: "Menu sections",
    rights: "All rights reserved",
    follow: "Follow us",
  },
};

// أوصاف مكررة [عربي, إنجليزي]
const D = {
  two: ["قطعتان من الدجاج", "2 pieces of chicken"],
  three: ["3 قطع دجاج، كول سلو، وخبز", "3 pieces of chicken, coleslaw and bread"],
  four: ["4 قطع دجاج، كول سلو، وخبز", "4 pieces of chicken, coleslaw and bread"],
  twoC: ["قطعتان من الدجاج + بطاطس + ماكس كولا", "2 pieces of chicken + fries + Max Cola"],
  threeC: ["3 قطع دجاج، كول سلو، وخبز + بطاطس + ماكس كولا", "3 pieces of chicken, coleslaw and bread + fries + Max Cola"],
  fourC: ["4 قطع دجاج، كول سلو، وخبز + بطاطس + ماكس كولا", "4 pieces of chicken, coleslaw and bread + fries + Max Cola"],
  t3: ["3 قطع تندر دجاج مقرمشة، وخبز، وكول سلو", "3 pieces of crispy chicken tenders, bread and coleslaw"],
  t5: ["5 قطع تندر دجاج مقرمشة، وخبز، وكول سلو", "5 pieces of crispy chicken tenders, bread and coleslaw"],
  t10: ["10 قطع تندر دجاج مقرمشة، وخبز، وكول سلو", "10 pieces of crispy chicken tenders, bread and coleslaw"],
  t3C: ["3 قطع تندر دجاج مقرمشة، كول سلو، خبز، بطاطس، وماكس كولا", "3 pieces of crispy chicken tenders, coleslaw, bread, fries and Max Cola"],
  t5C: ["5 قطع تندر دجاج مقرمشة، كول سلو، خبز، بطاطس، وماكس كولا", "5 pieces of crispy chicken tenders, coleslaw, bread, fries and Max Cola"],
  t10C: ["10 قطع تندر دجاج مقرمشة، كول سلو، خبز، بطاطس، وماكس كولا", "10 pieces of crispy chicken tenders, coleslaw, bread, fries and Max Cola"],
  classic: ["دجاج زنجر، مايونيز، وخس", "Zinger chicken, mayonnaise and lettuce"],
  wrap: ["خبز تورتيلا، مايونيز، خس، وصوص جبنة", "Tortilla bread, mayonnaise, lettuce and cheese sauce"],
  deep: ["دجاج زنجر، خبز، مايونيز، صوص تكساس، وصوص جبنة، وخس", "Zinger chicken, bread, mayonnaise, Texas sauce, cheese sauce and lettuce"],
  deepC: ["دجاج زنجر، خبز، مايونيز، صوص تكساس، وخس", "Zinger chicken, bread, mayonnaise, Texas sauce and lettuce"],
  special: ["دجاج زنجر، مايونيز، خس، صوص رانش، جبنة، وبيف بيكون", "Zinger chicken, mayonnaise, lettuce, ranch sauce, cheese and beef bacon"],
  king: ["دجاج زنجر، تركي، جبنة، هوت دوج، مايونيز، وخس", "Zinger chicken, turkey, cheese, hot dog, mayonnaise and lettuce"],
  texas: ["دجاج زنجر، سلامي، سموك بيف، صوص جبنة، صوص تكساس، وخس", "Zinger chicken, salami, smoked beef, cheese sauce, Texas sauce and lettuce"],
  tasty: ["دجاج زنجر، صوص رانش، بيف بيكون، خس، ومايونيز", "Zinger chicken, ranch sauce, beef bacon, lettuce and mayonnaise"],
  glory: ["دجاج زنجر، جبنة، أصابع موزاريلا، مايونيز، خس، وصوص سيزر", "Zinger chicken, cheese, mozzarella sticks, mayonnaise, lettuce and Caesar sauce"],
};

const MENU = [
  { id: "chicken", ar: "وجبات الدجاج", en: "Chicken Meals", items: [
    ["وجبة دجاج 2 قطعة", "2-Piece Chicken Meal", 160, ...D.two],
    ["وجبة دجاج 3 قطع", "3-Piece Chicken Meal", 230, ...D.three],
    ["وجبة دجاج 4 قطع", "4-Piece Chicken Meal", 280, ...D.four],
  ]},
  { id: "chicken-combo", kind: "combo", ar: "وجبات الدجاج كومبو", en: "Chicken Meals Combo", items: [
    ["وجبة دجاج 2 قطعة كومبو", "2-Piece Chicken Meal Combo", 210, ...D.twoC],
    ["وجبة دجاج 3 قطع كومبو", "3-Piece Chicken Meal Combo", 280, ...D.threeC],
    ["وجبة دجاج 4 قطع كومبو", "4-Piece Chicken Meal Combo", 330, ...D.fourC],
  ]},
  { id: "family", kind: "family", ar: "الوجبات العائلية", en: "Family Meals", items: [
    ["وجبة دجاج عائلية 9 قطع", "9-Piece Family Meal", 630, "9 قطع دجاج، 3 كول سلو، بطاطس عائلية، و3 قطع خبز", "9 pieces of chicken, 3 coleslaw, family fries and 3 pieces of bread"],
    ["وجبة دجاج عائلية 12 قطعة", "12-Piece Family Meal", 840, "12 قطعة دجاج، 4 كول سلو، 4 قطع خبز، بطاطس عائلية، وبيبسي 1 لتر", "12 pieces of chicken, 4 coleslaw, 4 pieces of bread, family fries and 1 L Pepsi"],
    ["وجبة دجاج عائلية 15 قطعة", "15-Piece Family Meal", 1050, "15 قطعة دجاج، 4 كول سلو، بطاطس عائلية، وبيبسي 1 لتر", "15 pieces of chicken, 4 coleslaw, family fries and 1 L Pepsi"],
    ["وجبة دجاج عائلية 18 قطعة", "18-Piece Family Meal", 1200, "18 قطعة دجاج، 5 كول سلو، بطاطس عائلية، وبيبسي 1 لتر", "18 pieces of chicken, 5 coleslaw, family fries and 1 L Pepsi"],
  ]},
  { id: "tender", ar: "وجبات التندر", en: "Tender Meals", items: [
    ["تندر 3 قطع", "3-Piece Tender Meal", 170, ...D.t3],
    ["تندر 5 قطع", "5-Piece Tender Meal", 275, ...D.t5],
    ["تندر 10 قطع", "10-Piece Tender Meal", 550, ...D.t10],
  ]},
  { id: "tender-combo", kind: "combo", ar: "وجبات التندر كومبو", en: "Tender Meals Combo", items: [
    ["تندر 3 قطع كومبو", "3-Piece Tender Combo", 220, ...D.t3C],
    ["تندر 5 قطع كومبو", "5-Piece Tender Combo", 325, ...D.t5C],
    ["تندر 10 قطع كومبو", "10-Piece Tender Combo", 600, ...D.t10C],
  ]},
  { id: "sandwiches", ar: "ساندوتشات الدجاج", en: "Chicken Sandwiches", items: [
    ["كلاسيك", "Classic", 190, ...D.classic],
    ["أرابيان راب", "Arabian Wrap", 170, ...D.wrap],
    ["ديپ تيست", "Deep Taste", 205, ...D.deep],
    ["سبيشيال", "Special", 220, ...D.special],
    ["فاير كينج", "Fire King", 340, ...D.king],
    ["فاير تكساس", "Fire Texas", 345, ...D.texas],
    ["فاير تيستي", "Fire Tasty", 355, ...D.tasty],
    ["فاير جلوري", "Fire Glory", 355, ...D.glory],
  ]},
  { id: "sandwiches-combo", kind: "combo", ar: "ساندوتشات الدجاج كومبو", en: "Chicken Sandwiches Combo", items: [
    ["كلاسيك كومبو", "Classic Combo", 240, ...D.classic],
    ["أرابيان راب كومبو", "Arabian Wrap Combo", 220, ...D.wrap],
    ["ديپ تيست كومبو", "Deep Taste Combo", 255, ...D.deepC],
    ["سبيشيال كومبو", "Special Combo", 270, ...D.special],
    ["فاير كينج كومبو", "Fire King Combo", 390, ...D.king],
    ["فاير تكساس كومبو", "Fire Texas Combo", 395, ...D.texas],
    ["فاير تيستي كومبو", "Fire Tasty Combo", 405, ...D.tasty],
    ["فاير جلوري كومبو", "Fire Glory Combo", 405, ...D.glory],
  ]},
  { id: "drinks", ar: "المشروبات", en: "Drinks", items: [
    ["بيبسي", "Pepsi", 30],
    ["مياه", "Water", 20],
  ]},
  { id: "sides", ar: "الأصناف الجانبية", en: "Sides", items: [
    ["بطاطس مقلية", "French Fries", 45],
    ["بطاطس عائلية", "Family Fries", 120],
    ["حلقات بصل - 4 قطع", "Onion Rings - 4 pcs", 75],
    ["أصابع موزاريلا - 3 قطع", "Mozzarella Sticks - 3 pcs", 75],
    ["عيش - قطعة", "Bread - 1 piece", 15],
    ["كول سلو صغير", "Small Coleslaw", 50],
    ["كول سلو عائلي", "Family Coleslaw", 110],
    ["طبق ريزو", "Rizo Plate", 160],
    ["قطعة دجاج مختارة", "Choice Chicken Piece", 100],
    ["صوصات", "Sauces", 40],
    ["هالابينو", "Jalapeño", 40],
    ["خيار مخلل", "Pickles", 40],
    ["هوت دوج", "Hot Dog", 60],
    ["بيف بيكون", "Beef Bacon", 60],
    ["سموك بيف", "Smoked Beef", 60],
    ["بيبروني", "Pepperoni", 60],
    ["سلامي", "Salami", 60],
    ["تركي", "Turkey", 60],
  ]},
];
