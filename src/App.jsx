import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, BarChart3, Globe, ShieldCheck, FileCheck, Hotel, Building2, Plane, Map, Mail, Phone, Briefcase, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp, Moon, Sun, Languages, Check, MessageCircle, CloudSun, Search, CheckCircle, Play, ChevronLeft, ChevronRight, Download, Share2, Quote, ArrowRightLeft, Coins, MessageSquare, Send, Cookie, Megaphone, Calendar, Users, MapPin, Headphones, Clock, Award, Wallet, CheckSquare, Thermometer, Bus, CreditCard, PlaneTakeoff, PlaneLanding, Plus, AlertTriangle, Printer, ShoppingBag, Tag, Star, ShoppingCart, Trash2, Minus, Palette, QrCode, Smartphone, Banknote } from 'lucide-react';
import logo from './assets/Logo2.png';

const serviceTypes = {
  en: [
    "UAE Visit Visa",
    "Hotel Booking",
    "Real Estate",
    "Guided Tours",
    "Holiday Packages",
    "Other"
  ],
  ar: [
    "تأشيرة زيارة الإمارات",
    "حجز فنادق",
    "عقارات",
    "جولات سياحية",
    "باقات عطلات",
    "أخرى"
  ]
};

const shopCategories = {
  en: [
    { name: "Merchandise", isNew: false },
    { name: "Travel Essentials", isNew: true },
    { name: "Books", isNew: false },
    { name: "Accessories", isNew: true },
    { name: "Home Appliances", isNew: false },
    { name: "Mens Fashion", isNew: true },
    { name: "Womens Fashion", isNew: true },
    { name: "Electricals", isNew: false },
    { name: "Laptops & Computers", isNew: true },
    { name: "FootWears", isNew: true }
  ],
  ar: [
    { name: "بضائع", isNew: false },
    { name: "أساسيات السفر", isNew: true },
    { name: "كتب", isNew: false },
    { name: "إكسسوارات", isNew: true },
    { name: "أجهزة منزلية", isNew: false },
    { name: "أزياء رجالية", isNew: true },
    { name: "أزياء نسائية", isNew: true },
    { name: "أدوات كهربائية", isNew: false },
    { name: "لابتوب وكمبيوتر", isNew: true },
    { name: "أحذية", isNew: true }
  ]
};

const defaultColors = [
  { name: { en: "Black", ar: "أسود" }, value: "#000000" },
  { name: { en: "White", ar: "أبيض" }, value: "#FFFFFF" },
  { name: { en: "Grey", ar: "رمادي" }, value: "#808080" },
  { name: { en: "Navy", ar: "كحلي" }, value: "#000080" }
];

const navDropdowns = {
  home: {
    en: ["Highlights", "Latest News", "Testimonials"],
    ar: ["أبرز المعالم", "أحدث الأخبار", "آراء العملاء"]
  },
  plan: {
    en: ["Flight Search", "Trip Builder", "Travel Info"],
    ar: ["بحث الرحلات", "مخطط الرحلة", "معلومات السفر"]
  },
  gallery: {
    en: ["All Photos", "Videos", "Destinations"],
    ar: ["كل الصور", "فيديو", "الوجهات"]
  },
  about: {
    en: ["Our Story", "Leadership", "Vision"],
    ar: ["قصتنا", "القيادة", "الرؤية"]
  },
  careers: {
    en: ["Open Positions", "Internships", "Life at Ujem"],
    ar: ["الوظائف المتاحة", "التدريب", "الحياة في عجم"]
  },
  contact: {
    en: ["General Inquiry", "Support", "Locations"],
    ar: ["استفسار عام", "الدعم", "المواقع"]
  }
};

const heroSlides = [
  {
    image: logo,
    video: "https://cdn.pixabay.com/v/img/videos/PexelsVideos2719.mp4",
    title: { en: "Discover Dubai's Wonders", ar: "اكتشف عجائب دبي" },
    subtitle: { en: "Experience world-class tourism in the heart of the UAE with Ujem Group", ar: "استمتع بسياحة عالمية المستوى في قلب الإمارات مع مجموعة عجم" }
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074",
    title: { en: "Seamless Travel Solutions", ar: "حلول سفر سلسة" },
    subtitle: { en: "Expert assistance with Visas, Air Tickets, and more", ar: "مساعدة الخبراء في التأشيرات وتذاكر الطيران والمزيد" }
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    title: { en: "Ujem Group Real Estate", ar: "مجموعة عجم للعقارات" },
    subtitle: { en: "Find your perfect property with our expert guidance", ar: "اعثر على عقارك المثالي بتوجيه من خبرائنا" }
  }
];

const jobListings = [
  {
    title: { en: "Real Estate Consultant", ar: "مستشار عقاري" },
    type: { en: "Full-time", ar: "دوام كامل" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    description: { en: "We are looking for experienced real estate consultants with a strong network in Dubai to join our growing team.", ar: "نحن نبحث عن مستشارين عقاريين ذوي خبرة وشبكة علاقات قوية في دبي للانضمام إلى فريقنا المتنامي." }
  },
  {
    title: { en: "Travel Operations Executive", ar: "مسؤول عمليات السفر" },
    type: { en: "Full-time", ar: "دوام كامل" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    description: { en: "Manage flight bookings, visa processing, and holiday packages for our diverse clientele.", ar: "إدارة حجوزات الطيران ومعالجة التأشيرات وباقات العطلات لعملائنا المتنوعين." }
  }
];

const teamMembers = [
  {
    name: { en: "Mr Benjamin", ar: "أحمد الفارسي" },
    role: { en: "CEO & Founder", ar: "المؤسس والرئيس التنفيذي" },
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: { en: "Sarah Johnson", ar: "سارة جونسون" },
    role: { en: "Head of Real Estate", ar: "رئيس قسم العقارات" },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: { en: "Mohammed Zaid", ar: "محمد زيد" },
    role: { en: "Tourism Director", ar: "مدير السياحة" },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: { en: "Layla Mahmoud", ar: "ليلى محمود" },
    role: { en: "Marketing Head", ar: "رئيس التسويق" },
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: { en: "David Scott", ar: "ديفيد سكوت" },
    role: { en: "Legal Advisor", ar: "مستشار قانوني" },
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  }
];

const faqs = [
  {
    question: { en: "How long does the UAE Visit Visa process take?", ar: "كم يستغرق استخراج تأشيرة زيارة الإمارات؟" },
    answer: { en: "Typically, the processing time for a UAE Visit Visa is 24 to 48 hours, depending on the type of visa and nationality.", ar: "عادة ما يستغرق الأمر من 24 إلى 48 ساعة، اعتماداً على نوع التأشيرة والجنسية." }
  },
  {
    question: { en: "Can you help with property investment in Dubai?", ar: "هل يمكنكم المساعدة في الاستثمار العقاري في دبي؟" },
    answer: { en: "Yes, our Real Estate division specializes in helping international investors find prime properties in Dubai with high ROI potential.", ar: "نعم، يتخصص قسم العقارات لدينا في مساعدة المستثمرين الدوليين في العثور على عقارات مميزة في دبي ذات عائد استثماري مرتفع." }
  },
  {
    question: { en: "Do you offer customized holiday packages?", ar: "هل تقدمون باقات عطلات مخصصة؟" },
    answer: { en: "Absolutely! We tailor holiday packages to suit your preferences, budget, and travel dates.", ar: "بالتأكيد! نقوم بتصميم باقات العطلات لتناسب تفضيلاتك وميزانيتك وتواريخ سفرك." }
  },
  {
    question: { en: "What documents are required for a tourist visa?", ar: "ما هي المستندات المطلوبة لتأشيرة السياحة؟" },
    answer: { en: "Generally, you need a clear passport copy (valid for at least 6 months) and a passport-sized photograph. Additional documents may be required based on nationality.", ar: "بشكل عام، تحتاج إلى نسخة واضحة من جواز السفر (ساري المفعول لمدة 6 أشهر على الأقل) وصورة شخصية. قد تكون هناك حاجة لمستندات إضافية حسب الجنسية." }
  }
];

const highlightImages = [
  {
    title: { en: "Safari Packages", ar: "باقات السفاري" },
    image: "https://tse2.mm.bing.net/th/id/OIP.FLstR3XpEJpEo9B3_bn-MQHaLS?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=203&h=309&c=7&o=7&rm=3",
    desc: { en: "Unforgettable desert safaris and adventures.", ar: "رحلات سفاري ومغامرات صحراوية لا تُنسى." }
  },
  {
    title: { en: "Visa Processing", ar: "معالجة التأشيرات" },
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    desc: { en: "Fast and reliable visa application services.", ar: "خدمات تقديم تأشيرات سريعة وموثوقة." }
  },
  {
    title: { en: "Luxury Real Estate", ar: "عقارات فاخرة" },
    image: "https://media.licdn.com/dms/image/D4E22AQERtuQpKZHGCA/feedshare-shrink_2048_1536/0/1704213817129?e=2147483647&v=beta&t=rSz4rSEBExL1OHtwb4mT04FJkOl5tKEsno0F0dR9Qqw",
    desc: { en: "Prime properties in Dubai's most sought-after locations.", ar: "عقارات مميزة في أكثر المواقع طلباً في دبي." }
  }
];

const safariPackages = [
  {
    id: 'morning-safari',
    title: { en: "Morning Desert Safari", ar: "سفاري صحراوي صباحي" },
    price: { en: "AED 150", ar: "150 درهم" },
    duration: { en: "4 Hours", ar: "4 ساعات" },
    image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/5d8359ca70fb9.jpeg",
    gallery: [
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=1920,dpr=1/tour_img/5d8359dfee840.jpeg", type: 'image', title: { en: "Morning Dunes", ar: "كثبان صباحية" } },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Sandboarding", ar: "تزلج على الرمال" } },
      { src: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Camel Trek", ar: "رحلة الجمال" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },  // Example Dubai coordinates
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 }, // Example desert coordinates
    includes: {
      en: ["Dune Bashing", "Camel Ride", "Sandboarding", "Water & Soft Drinks"],
      ar: ["تقريع الكثبان الرملية", "ركوب الجمال", "التزلج على الرمال", "مياه ومشروبات غازية"]
    },
    description: {
      en: "Experience the golden dunes in the early morning sun. Perfect for those who want a quick adrenaline rush.",
      ar: "استمتع بالكثبان الذهبية في شمس الصباح الباكر. مثالي لأولئك الذين يريدون اندفاع الأدرينالين السريع."
    },
    longDescription: {
      en: "Start your day with an adrenaline-pumping adventure in the Dubai desert. Our Morning Safari is designed for those who want to experience the thrill of dune bashing and the beauty of the desert sunrise without committing to a full evening tour. You'll be picked up in a 4x4 Land Cruiser and whisked away to the red dunes of Lahbab. After a safety briefing, enjoy 45 minutes of intense dune bashing. Stop for photos in the middle of the desert, try your hand at sandboarding down the steep slopes, and enjoy a short camel ride before heading back to the city.",
      ar: "ابدأ يومك بمغامرة تضخ الأدرينالين في صحراء دبي. تم تصميم السفاري الصباحي لأولئك الذين يرغبون في تجربة إثارة تقريع الكثبان الرملية وجمال شروق الشمس في الصحراء دون الالتزام بجولة مسائية كاملة. سيتم نقلك في سيارة لاند كروزر 4x4 ونقلك إلى الكثبان الحمراء في لهباب. بعد إحاطة السلامة، استمتع بـ 45 دقيقة من تقريع الكثبان الرملية المكثف. توقف لالتقاط الصور في وسط الصحراء، وجرب التزلج على الرمال أسفل المنحدرات الشديدة، واستمتع بركوب الجمال القصير قبل العودة إلى المدينة."
    },
    itinerary: [
      { time: "08:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup from your hotel in 4x4 Land Cruiser.", ar: "الاستقبال من فندقك في سيارة لاند كروزر 4x4." } },
      { time: "09:00 AM", title: { en: "Dune Bashing", ar: "تقريع الكثبان" }, desc: { en: "45 minutes of thrilling dune bashing.", ar: "45 دقيقة من تقريع الكثبان الرملية المثير." } },
      { time: "10:00 AM", title: { en: "Activities", ar: "الأنشطة" }, desc: { en: "Sandboarding and Camel Ride photo stop.", ar: "التزلج على الرمال ووقفة تصوير ركوب الجمال." } },
      { time: "11:00 AM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to your hotel.", ar: "العودة إلى فندقك." } }
    ]
  },
  {
    id: 'evening-safari',
    title: { en: "Evening Desert Safari + BBQ", ar: "سفاري صحراوي مسائي + شواء" },
    price: { en: "AED 250", ar: "250 درهم" },
    duration: { en: "6 Hours", ar: "6 ساعات" },
    image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/e72c3b67bc0e05aef4400ec52459360b37815118c8b3f23a096d79a1cd2867d6.png",
    gallery: [
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=1920,dpr=1/tour_img/78e31f703c288a173bc6ea1c494b3c24091ead6d7e72545dcc615c75e60b7b8f.jpeg", type: 'image', title: { en: "Sunset Views", ar: "مناظر الغروب" } },
      { src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "BBQ Dinner", ar: "عشاء مشاوي" } },
      { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Camp Vibes", ar: "أجواء المخيم" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },  // Example Dubai coordinates
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 }, // Example desert coordinates
    includes: {
      en: ["Dune Bashing", "BBQ Dinner", "Belly Dance", "Henna Painting", "Camel Ride"],
      ar: ["تقريع الكثبان الرملية", "عشاء مشاوي", "رقص شرقي", "رسم الحناء", "ركوب الجمال"]
    },
    description: {
      en: "The classic Dubai experience. Watch the sunset over the dunes followed by a traditional Arabian night.",
      ar: "تجربة دبي الكلاسيكية. شاهد غروب الشمس فوق الكثبان الرملية تليها ليلة عربية تقليدية."
    },
    popular: true,
    longDescription: {
      en: "Immerse yourself in the magic of the Arabian desert with our Evening Desert Safari. This 6-hour tour offers the perfect blend of adventure and culture. Feel the rush of dune bashing in a 4x4, capture the breathtaking sunset over the dunes, and ride a camel at our traditional Bedouin camp. As night falls, enjoy a delicious BBQ dinner buffet with live entertainment including belly dancing, Tanoura show, and fire performance. Henna painting and shisha are also available to complete your authentic experience.",
      ar: "انغمس في سحر الصحراء العربية مع سفاري الصحراء المسائي. تقدم هذه الجولة التي تستغرق 6 ساعات مزيجاً مثالياً من المغامرة والثقافة. اشعر باندفاع تقريع الكثبان الرملية في سيارة دفع رباعي، والتقط غروب الشمس الخلاب فوق الكثبان الرملية، واركب جملاً في مخيمنا البدوي التقليدي. مع حلول الليل، استمتع بوفيه عشاء مشاوي لذيذ مع ترفيه حي يشمل الرقص الشرقي، وعرض التنورة، وعرض النار. يتوفر أيضاً رسم الحناء والشيشة لإكمال تجربتك الأصيلة."
    },
    itinerary: [
      { time: "03:00 PM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup from your location.", ar: "الاستقبال من موقعك." } },
      { time: "04:30 PM", title: { en: "Desert Adventure", ar: "مغامرة الصحراء" }, desc: { en: "Dune bashing and sunset photography.", ar: "تقريع الكثبان وتصوير الغروب." } },
      { time: "06:00 PM", title: { en: "Camp Arrival", ar: "الوصول للمخيم" }, desc: { en: "Camel riding and welcome drinks.", ar: "ركوب الجمال ومشروبات ترحيبية." } },
      { time: "07:00 PM", title: { en: "Dinner & Show", ar: "العشاء والعرض" }, desc: { en: "BBQ Dinner with live entertainment.", ar: "عشاء مشاوي مع ترفيه حي." } },
      { time: "09:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to your location.", ar: "العودة إلى موقعك." } }
    ]
  },
  {
    id: 'overnight-safari',
    title: { en: "Overnight Desert Safari", ar: "سفاري صحراوي ليلي" },
    price: { en: "AED 450", ar: "450 درهم" },
    duration: { en: "18 Hours", ar: "18 ساعة" },
    image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/7b473b3218e0b991.jpeg",
    gallery: [
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/3a4dd222f366cde3444619eb33ae00cd908cf093f12491a5c2771d160a53c423.jpg", type: 'image', title: { en: "Starry Night", ar: "ليلة مرصعة بالنجوم" } },
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=265,height=195,dpr=2/tour_img/15df5dc7304acb6079974dbfe57c914b07a6cae17bd7025e6316103e620035d3.jpg", type: 'image', title: { en: "Morning Coffee", ar: "قهوة الصباح" } },
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=265,height=195,dpr=2/tour_img/f6501edf2cd7a5c8a376d07d56997829038f2346a9a875ea13855a1d0b48c863.jpg", type: 'image', title: { en: "Desert Sunrise", ar: "شروق الصحراء" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },  // Example Dubai coordinates
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 }, // Example desert coordinates
    includes: {
      en: ["Everything in Evening Safari", "Overnight Tent Stay", "Breakfast", "Sunrise View"],
      ar: ["كل شيء في السفاري المسائي", "مبيت في الخيمة", "إفطار", "مشهد شروق الشمس"]
    },
    description: {
      en: "Sleep under the stars in the middle of the desert. A truly magical experience away from the city lights.",
      ar: "نم تحت النجوم في وسط الصحراء. تجربة سحرية حقاً بعيداً عن أضواء المدينة."
    },
    longDescription: {
      en: "Extend your desert adventure with an unforgettable overnight stay. After the evening safari activities and dinner, settle into your comfortable tent or sleep under the open sky. Experience the silence of the desert at night and wake up to a spectacular sunrise. A freshly prepared breakfast is served before we drive you back to the city. This is the ultimate way to connect with nature and experience the desert lifestyle.",
      ar: "مدد مغامرتك الصحراوية مع إقامة ليلية لا تُنسى. بعد أنشطة السفاري المسائية والعشاء، استقر في خيمتك المريحة أو نم تحت السماء المفتوحة. جرب صمت الصحراء في الليل واستيقظ على شروق شمس مذهل. يتم تقديم وجبة إفطار طازجة قبل أن نعيدك إلى المدينة. هذه هي الطريقة المثلى للتواصل مع الطبيعة وتجربة نمط الحياة الصحراوي."
    },
    itinerary: [
      { time: "03:00 PM", title: { en: "Start", ar: "البداية" }, desc: { en: "Same itinerary as Evening Safari.", ar: "نفس برنامج السفاري المسائي." } },
      { time: "10:00 PM", title: { en: "Bonfire", ar: "نار المخيم" }, desc: { en: "Relax by the bonfire under the stars.", ar: "الاسترخاء بجانب النار تحت النجوم." } },
      { time: "06:00 AM", title: { en: "Sunrise", ar: "شروق الشمس" }, desc: { en: "Wake up for sunrise views.", ar: "الاستيقاظ لمشاهدة الشروق." } },
      { time: "07:00 AM", title: { en: "Breakfast", ar: "الإفطار" }, desc: { en: "Traditional breakfast served.", ar: "تقديم إفطار تقليدي." } },
      { time: "08:30 AM", title: { en: "Departure", ar: "المغادرة" }, desc: { en: "Drive back to the city.", ar: "العودة إلى المدينة." } }
    ]
  },
  {
    id: 'vip-safari',
    title: { en: "VIP Private Safari", ar: "سفاري خاص VIP" },
    price: { en: "AED 1200", ar: "1200 درهم" },
    duration: { en: "6 Hours", ar: "6 ساعات" },
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/98/c2/b9/caption.jpg?w=600&h=600&s=1",
    gallery: [
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/a6/bb/c7/caption.jpg?w=800&h=600&s=1", type: 'image', title: { en: "Private Cruiser", ar: "كروزر خاص" } },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/4c/88/99/caption.jpg?w=800&h=600&s=1", type: 'image', title: { en: "VIP Setup", ar: "تجهيزات VIP" } },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/61/7f/c8/caption.jpg?w=800&h=600&s=1", type: 'image', title: { en: "Luxury Dining", ar: "عشاء فاخر" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },  // Example Dubai coordinates
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 }, // Example desert coordinates
    includes: {
      en: ["Private 4x4 Land Cruiser", "Table Service", "Premium BBQ", "Private Seating"],
      ar: ["لاند كروزر 4x4 خاص", "خدمة الطاولة", "مشاوي فاخرة", "جلسة خاصة"]
    },
    description: {
      en: "Luxury desert experience with a private vehicle and dedicated service.",
      ar: "تجربة صحراوية فاخرة مع سيارة خاصة وخدمة مخصصة."
    },
    longDescription: {
      en: "Indulge in the ultimate luxury with our VIP Private Safari. You will have a dedicated 4x4 Land Cruiser exclusively for your group. Enjoy a personalized dune bashing session at your own pace. At the camp, you'll have a reserved VIP seating area with table service, so you don't have to wait in queues for food or drinks. A premium BBQ dinner is served directly to your table. Perfect for couples, families, or anyone seeking privacy and comfort.",
      ar: "انغمس في الرفاهية المطلقة مع سفاري VIP الخاص بنا. سيكون لديك سيارة لاند كروزر 4x4 مخصصة حصرياً لمجموعتك. استمتع بجلسة تقريع كثبان رملية مخصصة حسب رغبتك. في المخيم، سيكون لديك منطقة جلوس VIP محجوزة مع خدمة الطاولة، لذلك لن تضطر للانتظار في طوابير للطعام أو الشراب. يتم تقديم عشاء مشاوي فاخر مباشرة إلى طاولتك. مثالي للأزواج والعائلات أو أي شخص يبحث عن الخصوصية والراحة."
    },
    itinerary: [
      { time: "Flexible", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Private pickup at your preferred time.", ar: "استقبال خاص في الوقت المفضل لديك." } },
      { time: "Adventure", title: { en: "Private Dune Bashing", ar: "تقريع خاص" }, desc: { en: "Customized dune drive experience.", ar: "تجربة قيادة كثبان مخصصة." } },
      { time: "Dining", title: { en: "VIP Service", ar: "خدمة VIP" }, desc: { en: "Table service dinner in private area.", ar: "عشاء بخدمة الطاولة في منطقة خاصة." } },
      { time: "Return", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Private drop-off at your location.", ar: "توصيل خاص إلى موقعك." } }
    ]
  },
  {
    id: 'quad-bike-safari',
    title: { en: "Quad Bike Safari", ar: "سفاري الدراجات الرباعية" },
    price: { en: "AED 350", ar: "350 درهم" },
    duration: { en: "4 Hours", ar: "4 ساعات" },
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c3/11/cd/caption.jpg?w=800&h=600&s=1",
    gallery: [
      { src: "https://www.tripadvisor.com/AttractionProductReview-g295424-d15302065-Dubai_Half_Day_Desert_Safari_Camels_Quad_Bike_Refreshments-Dubai_Emirate_of_Dubai.html", type: 'image', title: { en: "Quad Biking", ar: "ركوب الدراجات الرباعية" } },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/72/87/e8/caption.jpg?w=800&h=600&s=1", type: 'image', title: { en: "Desert Action", ar: "أكشن الصحراء" } },
      { src: "https://www.tripadvisor.com/AttractionProductReview-g295424-d19496422-Dubai_Morning_Desert_Safari_with_Quad_Biking_More_Activities-Dubai_Emirate_of_Duba.html", type: 'image', title: { en: "Sand Dunes", ar: "كثبان رملية" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Quad Bike Rental", "Safety Gear", "Guide"], ar: ["تأجير دراجة رباعية", "معدات السلامة", "مرشد"] },
    description: { en: "Thrilling self-drive quad bike experience in the open desert.", ar: "تجربة قيادة دراجة رباعية مثيرة في الصحراء المفتوحة." },
    longDescription: { en: "Take control of your own 4-wheeled machine and conquer the desert dunes. Our Quad Bike Safari gives you the freedom to explore the open desert at your own pace. After a safety briefing and instructions, you'll follow our guide through a thrilling track of dunes. Perfect for thrill-seekers.", ar: "تحكم في آلتك ذات الأربع عجلات واغزو كثبان الصحراء. يمنحك سفاري الدراجات الرباعية الحرية لاستكشاف الصحراء المفتوحة بالسرعة التي تناسبك. بعد إحاطة السلامة والتعليمات، ستتبع مرشدنا عبر مسار مثير من الكثبان الرملية. مثالي للباحثين عن الإثارة." },
    itinerary: [
      { time: "08:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup from your location.", ar: "الاستقبال من موقعك." } },
      { time: "09:30 AM", title: { en: "Quad Biking", ar: "ركوب الدراجات" }, desc: { en: "1 hour of intense quad biking.", ar: "ساعة من ركوب الدراجات الرباعية المكثف." } },
      { time: "11:00 AM", title: { en: "Refreshments", ar: "مرطبات" }, desc: { en: "Water and soft drinks break.", ar: "مياه ومشروبات غازية." } },
      { time: "12:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to your location.", ar: "العودة إلى موقعك." } }
    ]
  },
  {
    id: 'dune-buggy',
    title: { en: "Dune Buggy Adventure", ar: "مغامرة عربات الكثبان" },
    price: { en: "AED 600", ar: "600 درهم" },
    duration: { en: "4 Hours", ar: "4 ساعات" },
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Buggy Jump", ar: "قفزة العربة" } },
      { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Desert Track", ar: "مسار صحراوي" } },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/aa/40/dd/caption.jpg?w=600&h=600&s=1", type: 'image', title: { en: "Adventure", ar: "مغامرة" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Buggy Rental", "Safety Gear", "Refreshments"], ar: ["تأجير عربة", "معدات السلامة", "مرطبات"] },
    description: { en: "High-power dune buggy ride for adrenaline seekers.", ar: "رحلة عربة كثبان عالية القوة للباحثين عن الأدرينالين." },
    longDescription: { en: "Experience the raw power of a dune buggy as you navigate the challenging terrain of the Dubai desert. These safety-equipped buggies allow you to tackle steeper dunes and faster speeds than standard quad bikes. A guided tour ensures you see the best spots while staying safe.", ar: "جرب القوة الخام لعربة الكثبان الرملية وأنت تتنقل في التضاريس الصعبة لصحراء دبي. تسمح لك هذه العربات المجهزة بمعدات السلامة بالتعامل مع الكثبان الرملية الأكثر انحدارًا والسرعات الأسرع من الدراجات الرباعية القياسية. تضمن الجولة المصحوبة بمرشدين رؤية أفضل المواقع مع الحفاظ على السلامة." },
    itinerary: [
      { time: "08:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup from your location.", ar: "الاستقبال من موقعك." } },
      { time: "09:30 AM", title: { en: "Buggy Adventure", ar: "مغامرة العربة" }, desc: { en: "1 hour dune buggy drive.", ar: "ساعة قيادة عربة الكثبان." } },
      { time: "11:00 AM", title: { en: "Photo Stop", ar: "وقفة تصوير" }, desc: { en: "Stop at high dunes for photos.", ar: "توقف عند الكثبان العالية للصور." } },
      { time: "12:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to your location.", ar: "العودة إلى موقعك." } }
    ]
  },
  {
    id: 'hatta-safari',
    title: { en: "Hatta Mountain Safari", ar: "سفاري جبال حتا" },
    price: { en: "AED 200", ar: "200 درهم" },
    duration: { en: "6 Hours", ar: "6 ساعات" },
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/9d/1f/4b.jpg",
    gallery: [
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/0e154ea66eaf0cb823e17918de4506190b5628b6422433fca68dc3d50031cfc9.jpg", type: 'image', title: { en: "Hatta Dam", ar: "سد حتا" } },
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=390,height=260,dpr=2/tour_img/fa9270c19e9b7b538dfb378bc7c9a89c3c373857467bf30f4d871cfe8affd435.jpeg", type: 'image', title: { en: "Hatta Mountains", ar: "جبال حتا" } },
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=265,height=195,dpr=2/tour_img/852c01b49dd0a1a154f2e0b06c6125e0dee582bd663b700dc4aee427438fdda9.jpeg", type: 'image', title: { en: "Heritage Village", ar: "القرية التراثية" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8186, longitude: 56.1235 },
    includes: { en: ["Mountain Drive", "Hatta Dam Visit", "Heritage Village"], ar: ["قيادة جبلية", "زيارة سد حتا", "القرية التراثية"] },
    description: { en: "Explore the rugged mountains and scenic dams of Hatta.", ar: "استكشف الجبال الوعرة والسدود الخلابة في حتا." },
    longDescription: { en: "Escape the city and head to the Hatta Mountains. This safari combines off-road driving through wadis (dry riverbeds) with visits to the historic Hatta Heritage Village and the stunning Hatta Dam. Enjoy the cooler mountain air and breathtaking rocky landscapes.", ar: "اهرب من المدينة وتوجه إلى جبال حتا. يجمع هذا السفاري بين القيادة على الطرق الوعرة عبر الوديان وزيارات لقرية حتا التراثية التاريخية وسد حتا المذهل. استمتع بهواء الجبل البارد والمناظر الطبيعية الصخرية الخلابة." },
    itinerary: [
      { time: "07:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup from Dubai.", ar: "الاستقبال من دبي." } },
      { time: "09:00 AM", title: { en: "Hatta Dam", ar: "سد حتا" }, desc: { en: "Kayaking and photo stop.", ar: "تجديف ووقفة تصوير." } },
      { time: "11:00 AM", title: { en: "Heritage Village", ar: "القرية التراثية" }, desc: { en: "Explore ancient fort and houses.", ar: "استكشاف الحصن والمنازل القديمة." } },
      { time: "01:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to Dubai.", ar: "العودة إلى دبي." } }
    ]
  },
  {
    id: 'falconry-safari',
    title: { en: "Falconry Safari", ar: "سفاري الصقور" },
    price: { en: "AED 400", ar: "400 درهم" },
    duration: { en: "5 Hours", ar: "5 ساعات" },
    image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=270,height=180,dpr=2/tour_img/83a4588b770e577e94c305c17705109925f3d2167486a2e4b0eafb6c9e881005.jpeg",
    gallery: [
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=270,height=180,dpr=2/tour_img/10e532ab364025be.jpeg", type: 'image', title: { en: "Falcon", ar: "صقر" } },
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=270,height=180,dpr=2/tour_img/588ec5ed840b43ca0080bd1795c61c5680d51220b9ec6eb6cab6dc7a4b4801e7.jpg", type: 'image', title: { en: "Falconry Show", ar: "عرض الصقور" } },
      { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=270,height=180,dpr=2/tour_img/76247e2276dde4629e6389dc84124a0d23f5221bd6a3bac7c3f16c14f09b972d.jpg", type: 'image', title: { en: "Desert Tradition", ar: "تقليد صحراوي" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Falcon Show", "Photo Opportunity", "Breakfast"], ar: ["عرض الصقور", "فرصة تصوير", "إفطار"] },
    description: { en: "Witness the traditional art of falconry in the desert.", ar: "شاهد الفن التقليدي للصقارة في الصحراء." },
    longDescription: { en: "Experience the ancient Bedouin tradition of falconry. Watch these majestic birds of prey in action as they swoop and dive to catch lures. You'll have the opportunity to hold a falcon and take photos. A traditional Emirati breakfast is included in this cultural experience.", ar: "جرب التقليد البدوي القديم للصقارة. شاهد هذه الطيور الجارحة المهيبة وهي تنقض وتغوص للقبض على الطعوم. ستتاح لك الفرصة لحمل صقر والتقاط الصور. يتم تضمين إفطار إماراتي تقليدي في هذه التجربة الثقافية." },
    itinerary: [
      { time: "06:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Early morning pickup.", ar: "استقبال في الصباح الباكر." } },
      { time: "07:30 AM", title: { en: "Falcon Show", ar: "عرض الصقور" }, desc: { en: "Interactive falconry display.", ar: "عرض صقارة تفاعلي." } },
      { time: "09:00 AM", title: { en: "Breakfast", ar: "الإفطار" }, desc: { en: "Traditional breakfast at camp.", ar: "إفطار تقليدي في المخيم." } },
      { time: "11:00 AM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to hotel.", ar: "العودة إلى الفندق." } }
    ]
  },
  {
    id: 'hot-air-balloon',
    title: { en: "Hot Air Balloon", ar: "منطاد الهواء الساخن" },
    price: { en: "AED 1100", ar: "1100 درهم" },
    duration: { en: "4 Hours", ar: "4 ساعات" },
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Balloon Flight", ar: "رحلة المنطاد" } },
      { src: "https://images.unsplash.com/photo-1545167622-3a6ac15670b3?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Sunrise View", ar: "منظر الشروق" } },
      { src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Desert from Above", ar: "الصحراء من الأعلى" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["1 Hour Flight", "Flight Certificate", "Breakfast"], ar: ["رحلة لمدة ساعة", "شهادة طيران", "إفطار"] },
    description: { en: "Float over the desert at sunrise for breathtaking views.", ar: "حلق فوق الصحراء عند شروق الشمس لمناظر خلابة." },
    longDescription: { en: "See the desert from a new perspective. Drift peacefully over the endless dunes at 4,000 feet as the sun rises over the Hajar Mountains. Spot wandering camels and gazelles from above. After landing, enjoy a gourmet breakfast in a traditional Bedouin camp.", ar: "شاهد الصحراء من منظور جديد. انجرف بسلام فوق الكثبان الرملية التي لا نهاية لها على ارتفاع 4000 قدم بينما تشرق الشمس فوق جبال الحجر. رصد الجمال والغزلان المتجولة من الأعلى. بعد الهبوط، استمتع بوجبة إفطار فاخرة في مخيم بدوي تقليدي." },
    itinerary: [
      { time: "04:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pre-dawn pickup.", ar: "استقبال قبل الفجر." } },
      { time: "06:00 AM", title: { en: "Takeoff", ar: "الإقلاع" }, desc: { en: "Sunrise balloon flight.", ar: "رحلة المنطاد عند الشروق." } },
      { time: "08:00 AM", title: { en: "Breakfast", ar: "الإفطار" }, desc: { en: "Gourmet breakfast.", ar: "إفطار فاخر." } },
      { time: "10:00 AM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to city.", ar: "العودة إلى المدينة." } }
    ]
  },
  {
    id: 'camel-trekking',
    title: { en: "Camel Trekking", ar: "رحلة الجمال" },
    price: { en: "AED 180", ar: "180 درهم" },
    duration: { en: "3 Hours", ar: "3 ساعات" },
    image: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Camel Ride", ar: "ركوب الجمال" } },
      { src: "https://images.unsplash.com/photo-1518182170546-0766aa6f18f6?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Camel Caravan", ar: "قافلة الجمال" } },
      { src: "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Desert Sunset", ar: "غروب الصحراء" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["45 Min Camel Ride", "Refreshments", "Transfers"], ar: ["ركوب جمال 45 دقيقة", "مرطبات", "نقل"] },
    description: { en: "Traditional camel caravan experience through the dunes.", ar: "تجربة قافلة الجمال التقليدية عبر الكثبان الرملية." },
    longDescription: { en: "Travel like the Bedouins of old on a camel caravan. This peaceful trek takes you through the quiet dunes, allowing you to appreciate the silence and beauty of the desert. It's a great way to slow down and connect with nature.", ar: "سافر مثل البدو القدامى في قافلة جمال. تأخذك هذه الرحلة الهادئة عبر الكثبان الرملية الهادئة، مما يسمح لك بتقدير صمت وجمال الصحراء. إنها طريقة رائعة للتباطؤ والتواصل مع الطبيعة." },
    itinerary: [
      { time: "08:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup from hotel.", ar: "الاستقبال من الفندق." } },
      { time: "09:00 AM", title: { en: "Camel Trek", ar: "رحلة الجمال" }, desc: { en: "45-minute guided camel ride.", ar: "رحلة جمال موجهة لمدة 45 دقيقة." } },
      { time: "10:00 AM", title: { en: "Refreshments", ar: "مرطبات" }, desc: { en: "Arabic coffee and dates.", ar: "قهوة عربية وتمور." } },
      { time: "11:00 AM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to hotel.", ar: "العودة إلى الفندق." } }
    ]
  },
  {
    id: 'private-dinner',
    title: { en: "Private Desert Dinner", ar: "عشاء صحراوي خاص" },
    price: { en: "AED 800", ar: "800 درهم" },
    duration: { en: "4 Hours", ar: "4 ساعات" },
    image: "https://images.unsplash.com/photo-1512453979798-5ea904ac66de?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1512453979798-5ea904ac66de?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Private Setup", ar: "تجهيز خاص" } },
      { src: "https://images.unsplash.com/photo-1552560229-edf081349691?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Romantic Dinner", ar: "عشاء رومانسي" } },
      { src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Desert Night", ar: "ليل الصحراء" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Private Setup", "Gourmet Dinner", "Butler Service"], ar: ["تجهيز خاص", "عشاء فاخر", "خدمة نادل"] },
    description: { en: "Romantic private dinner setup under the stars.", ar: "عشاء رومانسي خاص تحت النجوم." },
    longDescription: { en: "Surprise your loved one with a private dinner in the middle of the desert. We set up a secluded area with carpets, cushions, and low tables, illuminated by torches and the starry sky. A private butler will serve a multi-course gourmet dinner while you enjoy the tranquility.", ar: "فاجئ من تحب بعشاء خاص في وسط الصحراء. نقوم بإعداد منطقة منعزلة بالسجاد والوسائد والطاولات المنخفضة، مضاءة بالمشاعل والسماء المرصعة بالنجوم. سيقدم خادم خاص عشاءً فاخراً متعدد الأطباق بينما تستمتع بالهدوء." },
    itinerary: [
      { time: "05:00 PM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Private luxury pickup.", ar: "استقبال فاخر خاص." } },
      { time: "06:00 PM", title: { en: "Sunset", ar: "الغروب" }, desc: { en: "Arrive at private setup.", ar: "الوصول إلى التجهيز الخاص." } },
      { time: "07:00 PM", title: { en: "Dinner", ar: "العشاء" }, desc: { en: "Gourmet dinner served.", ar: "تقديم العشاء الفاخر." } },
      { time: "09:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to hotel.", ar: "العودة إلى الفندق." } }
    ]
  },
  {
    id: 'sunrise-safari',
    title: { en: "Sunrise Desert Safari", ar: "سفاري شروق الشمس" },
    price: { en: "AED 220", ar: "220 درهم" },
    duration: { en: "4 Hours", ar: "4 ساعات" },
    image: "https://images.unsplash.com/photo-1545167622-3a6ac15670b3?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1545167622-3a6ac15670b3?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Sunrise", ar: "شروق الشمس" } },
      { src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Morning Light", ar: "ضوء الصباح" } },
      { src: "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Golden Dunes", ar: "كثبان ذهبية" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Dune Bashing", "Sunrise View", "Breakfast Box"], ar: ["تقريع الكثبان", "مشهد الشروق", "صندوق إفطار"] },
    description: { en: "Watch the desert come alive with the first light of day.", ar: "شاهد الصحراء تنبض بالحياة مع أول ضوء للنهار." },
    longDescription: { en: "Beat the heat and the crowds with a sunrise safari. Witness the spectacular colors of the desert as the sun peeks over the horizon. Enjoy a thrilling dune bashing session in the cool morning air followed by a light breakfast picnic.", ar: "تغلب على الحرارة والزحام مع سفاري شروق الشمس. شاهد الألوان المذهلة للصحراء بينما تطل الشمس فوق الأفق. استمتع بجلسة تقريع كثبان مثيرة في هواء الصباح البارد تليها نزهة إفطار خفيفة." },
    itinerary: [
      { time: "04:30 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Early morning pickup.", ar: "استقبال في الصباح الباكر." } },
      { time: "06:00 AM", title: { en: "Sunrise", ar: "الشروق" }, desc: { en: "Watch sunrise on dunes.", ar: "مشاهدة الشروق على الكثبان." } },
      { time: "07:00 AM", title: { en: "Dune Drive", ar: "قيادة الكثبان" }, desc: { en: "Morning dune bashing.", ar: "تقريع الكثبان الصباحي." } },
      { time: "08:30 AM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to hotel.", ar: "العودة إلى الفندق." } }
    ]
  },
  {
    id: 'liwa-safari',
    title: { en: "Liwa Desert Safari", ar: "سفاري صحراء ليوا" },
    price: { en: "AED 900", ar: "900 درهم" },
    duration: { en: "12 Hours", ar: "12 ساعة" },
    image: "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Liwa Dunes", ar: "كثبان ليوا" } },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Moreeb Dune", ar: "تل مرعب" } },
      { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Empty Quarter", ar: "الربع الخالي" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 23.1308, longitude: 53.7585 },
    includes: { en: ["Moreeb Dune Visit", "Lunch", "Fort Visit"], ar: ["زيارة تل مرعب", "غداء", "زيارة الحصن"] },
    description: { en: "Expedition to the Empty Quarter and the massive Moreeb Dune.", ar: "رحلة استكشافية إلى الربع الخالي وتل مرعب الضخم." },
    longDescription: { en: "Venture deep into the Empty Quarter (Rub' al Khali) to see the legendary Liwa Oasis. Visit the massive Moreeb Dune, one of the highest sand dunes in the world. This full-day expedition includes lunch and visits to camel farms and ancient forts.", ar: "غامر في عمق الربع الخالي لرؤية واحة ليوا الأسطورية. قم بزيارة تل مرعب الضخم، أحد أعلى الكثبان الرملية في العالم. تشمل هذه الرحلة الاستكشافية ليوم كامل الغداء وزيارات لمزارع الجمال والحصون القديمة." },
    itinerary: [
      { time: "08:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup and drive to Liwa.", ar: "الاستقبال والقيادة إلى ليوا." } },
      { time: "11:00 AM", title: { en: "Liwa Oasis", ar: "واحة ليوا" }, desc: { en: "Explore oasis and forts.", ar: "استكشاف الواحة والحصون." } },
      { time: "01:00 PM", title: { en: "Moreeb Dune", ar: "تل مرعب" }, desc: { en: "Visit the massive dune.", ar: "زيارة التل الضخم." } },
      { time: "06:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to Dubai.", ar: "العودة إلى دبي." } }
    ]
  },
  {
    id: 'red-dune-bashing',
    title: { en: "Red Dune Bashing", ar: "تقريع الكثبان الحمراء" },
    price: { en: "AED 200", ar: "200 درهم" },
    duration: { en: "5 Hours", ar: "5 ساعات" },
    image: "https://images.unsplash.com/photo-1518182170546-0766aa6f18f6?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1518182170546-0766aa6f18f6?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Red Dunes", ar: "كثبان حمراء" } },
      { src: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Dune Bashing", ar: "تقريع الكثبان" } },
      { src: "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Sandboarding", ar: "تزلج على الرمال" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["30 Min Dune Bashing", "Sandboarding", "Water"], ar: ["30 دقيقة تقريع كثبان", "تزلج على الرمال", "مياه"] },
    description: { en: "Intense dune bashing experience on the high red dunes.", ar: "تجربة تقريع كثبان مكثفة على الكثبان الحمراء العالية." },
    longDescription: { en: "For those who just want the action. Head straight to the high red dunes of Lahbab for an intense 30-45 minute dune bashing session. Our expert drivers will take you on a rollercoaster ride across the sand. Includes a stop for sandboarding.", ar: "لأولئك الذين يريدون الأكشن فقط. توجه مباشرة إلى الكثبان الحمراء العالية في لهباب لجلسة تقريع كثبان مكثفة لمدة 30-45 دقيقة. سيأخذك سائقونا الخبراء في رحلة أفعوانية عبر الرمال. يشمل وقفة للتزلج على الرمال." },
    itinerary: [
      { time: "03:00 PM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup in 4x4.", ar: "استقبال في 4x4." } },
      { time: "04:00 PM", title: { en: "Dune Bashing", ar: "تقريع الكثبان" }, desc: { en: "High intensity dune drive.", ar: "قيادة كثبان عالية الكثافة." } },
      { time: "04:45 PM", title: { en: "Sandboarding", ar: "تزلج على الرمال" }, desc: { en: "Slide down the dunes.", ar: "تزحلق أسفل الكثبان." } },
      { time: "06:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to location.", ar: "العودة إلى الموقع." } }
    ]
  },
  {
    id: 'starlight-safari',
    title: { en: "Starlight Safari", ar: "سفاري ضوء النجوم" },
    price: { en: "AED 350", ar: "350 درهم" },
    duration: { en: "6 Hours", ar: "6 ساعات" },
    image: "https://images.unsplash.com/photo-1501232060322-aa87215ab531?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1501232060322-aa87215ab531?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Starry Night", ar: "ليلة مرصعة بالنجوم" } },
      { src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Campfire", ar: "نار المخيم" } },
      { src: "https://images.unsplash.com/photo-1489516408517-6c0a1387c6ce?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Night Sky", ar: "سماء الليل" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Night Drive", "Telescope Stargazing", "Dinner"], ar: ["قيادة ليلية", "رصد النجوم بالتلسكوب", "عشاء"] },
    description: { en: "Discover the desert night sky away from city pollution.", ar: "اكتشف سماء الصحراء الليلية بعيداً عن تلوث المدينة." },
    longDescription: { en: "Escape the light pollution of the city and gaze at the wonders of the universe. This safari takes you to a remote desert location where an astronomer will guide you through the constellations using a telescope. Enjoy a quiet dinner under the stars.", ar: "اهرب من التلوث الضوئي للمدينة وتأمل عجائب الكون. يأخذك هذا السفاري إلى موقع صحراوي نائي حيث سيرشدك عالم فلك عبر الأبراج باستخدام التلسكوب. استمتع بعشاء هادئ تحت النجوم." },
    itinerary: [
      { time: "06:00 PM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Evening pickup.", ar: "استقبال مسائي." } },
      { time: "07:30 PM", title: { en: "Night Drive", ar: "قيادة ليلية" }, desc: { en: "Drive to remote spot.", ar: "القيادة إلى موقع نائي." } },
      { time: "08:30 PM", title: { en: "Stargazing", ar: "رصد النجوم" }, desc: { en: "Telescope session & dinner.", ar: "جلسة تلسكوب وعشاء." } },
      { time: "10:30 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to city.", ar: "العودة إلى المدينة." } }
    ]
  },
  {
    id: 'bedouin-culture',
    title: { en: "Bedouin Culture Safari", ar: "سفاري الثقافة البدوية" },
    price: { en: "AED 280", ar: "280 درهم" },
    duration: { en: "5 Hours", ar: "5 ساعات" },
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Bedouin Camp", ar: "مخيم بدوي" } },
      { src: "https://images.unsplash.com/photo-1552560229-edf081349691?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Arabic Coffee", ar: "قهوة عربية" } },
      { src: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Traditional Dress", ar: "زي تقليدي" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Heritage Camp", "Traditional Food", "Costumes"], ar: ["مخيم تراثي", "طعام تقليدي", "أزياء"] },
    description: { en: "Immerse yourself in the authentic Bedouin lifestyle.", ar: "انغمس في نمط الحياة البدوي الأصيل." },
    longDescription: { en: "Step back in time and experience life as a Bedouin. Visit a traditional camp built from natural materials. Learn about their customs, try on traditional costumes, watch cooking demonstrations, and enjoy authentic Emirati cuisine. No dune bashing, just pure culture.", ar: "عد بالزمن إلى الوراء وجرب الحياة كبدوي. قم بزيارة مخيم تقليدي مبني من مواد طبيعية. تعرف على عاداتهم، وجرب الأزياء التقليدية، وشاهد عروض الطهي، واستمتع بالمأكولات الإماراتية الأصيلة. لا يوجد تقريع للكثبان الرملية، مجرد ثقافة خالصة." },
    itinerary: [
      { time: "03:30 PM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup from hotel.", ar: "الاستقبال من الفندق." } },
      { time: "05:00 PM", title: { en: "Camp Arrival", ar: "الوصول للمخيم" }, desc: { en: "Welcome with Arabic coffee.", ar: "ترحيب بالقهوة العربية." } },
      { time: "06:00 PM", title: { en: "Activities", ar: "الأنشطة" }, desc: { en: "Costumes, cooking, henna.", ar: "أزياء، طهي، حناء." } },
      { time: "08:30 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to hotel.", ar: "العودة إلى الفندق." } }
    ]
  },
  {
    id: 'luxury-hummer',
    title: { en: "Luxury Hummer Safari", ar: "سفاري همر فاخر" },
    price: { en: "AED 500", ar: "500 درهم" },
    duration: { en: "6 Hours", ar: "6 ساعات" },
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Hummer H2", ar: "همر H2" } },
      { src: "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Luxury Ride", ar: "رحلة فاخرة" } },
      { src: "https://images.unsplash.com/photo-1518182170546-0766aa6f18f6?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Desert Drive", ar: "قيادة صحراوية" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Hummer H2 Ride", "VIP Camp Access", "BBQ"], ar: ["ركوب همر H2", "دخول مخيم VIP", "مشاوي"] },
    description: { en: "Ride the dunes in style with a luxury Hummer H2.", ar: "اركب الكثبان الرملية بأناقة مع همر H2 فاخرة." },
    longDescription: { en: "Upgrade your safari experience with a ride in a Hummer H2. This spacious and powerful vehicle offers a smoother ride over the dunes. Enjoy VIP treatment at the camp with reserved seating and table service for dinner.", ar: "قم بترقية تجربة السفاري الخاصة بك برحلة في همر H2. توفر هذه السيارة الفسيحة والقوية رحلة أكثر سلاسة فوق الكثبان الرملية. استمتع بمعاملة VIP في المخيم مع مقاعد محجوزة وخدمة الطاولة للعشاء." },
    itinerary: [
      { time: "03:00 PM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup in Hummer H2.", ar: "استقبال في همر H2." } },
      { time: "04:30 PM", title: { en: "Dune Drive", ar: "قيادة الكثبان" }, desc: { en: "Luxury dune bashing.", ar: "تقريع كثبان فاخر." } },
      { time: "07:00 PM", title: { en: "VIP Dinner", ar: "عشاء VIP" }, desc: { en: "Dinner in VIP area.", ar: "عشاء في منطقة VIP." } },
      { time: "09:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return in Hummer.", ar: "العودة في الهمر." } }
    ]
  },
  {
    id: 'horse-riding',
    title: { en: "Desert Horse Riding", ar: "ركوب الخيل في الصحراء" },
    price: { en: "AED 250", ar: "250 درهم" },
    duration: { en: "2 Hours", ar: "ساعتان" },
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Horse Riding", ar: "ركوب الخيل" } },
      { src: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Desert Horse", ar: "حصان الصحراء" } },
      { src: "https://images.unsplash.com/photo-1545167622-3a6ac15670b3?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Sunset Ride", ar: "رحلة الغروب" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["1 Hour Horse Ride", "Instructor", "Water"], ar: ["ساعة ركوب خيل", "مدرب", "مياه"] },
    description: { en: "Enjoy a peaceful horse ride across the desert sands.", ar: "استمتع بركوب خيل هادئ عبر رمال الصحراء." },
    longDescription: { en: "Explore the desert on horseback. Suitable for beginners and experienced riders alike, this tour takes you through the scenic desert landscape. Connect with these magnificent animals and enjoy the tranquility of nature.", ar: "استكشف الصحراء على ظهر الخيل. مناسبة للمبتدئين والفرسان ذوي الخبرة على حد سواء، تأخذك هذه الجولة عبر المناظر الطبيعية الصحراوية الخلابة. تواصل مع هذه الحيوانات الرائعة واستمتع بهدوء الطبيعة." },
    itinerary: [
      { time: "04:00 PM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup from hotel.", ar: "الاستقبال من الفندق." } },
      { time: "05:00 PM", title: { en: "Horse Ride", ar: "ركوب الخيل" }, desc: { en: "1 hour guided ride.", ar: "ساعة ركوب موجهة." } },
      { time: "06:00 PM", title: { en: "Sunset", ar: "الغروب" }, desc: { en: "Photos with horses.", ar: "صور مع الخيول." } },
      { time: "07:00 PM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to hotel.", ar: "العودة إلى الفندق." } }
    ]
  },
  {
    id: 'nature-reserve',
    title: { en: "Nature Reserve Safari", ar: "سفاري المحمية الطبيعية" },
    price: { en: "AED 350", ar: "350 درهم" },
    duration: { en: "5 Hours", ar: "5 ساعات" },
    image: "https://images.unsplash.com/photo-1489516408517-6c0a1387c6ce?auto=format&fit=crop&q=80&w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1489516408517-6c0a1387c6ce?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Oryx", ar: "المها" } },
      { src: "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Gazelle", ar: "غزال" } },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", type: 'image', title: { en: "Vintage Rover", ar: "روفر كلاسيكي" } }
    ],
    pickupCoordinates: { latitude: 25.2048, longitude: 55.2708 },
    locationCoordinates: { latitude: 24.8607, longitude: 55.1310 },
    includes: { en: ["Wildlife Spotting", "Vintage Land Rover", "Breakfast"], ar: ["مشاهدة الحياة البرية", "لاند روفر كلاسيكي", "إفطار"] },
    description: { en: "Spot oryx and gazelles in the Dubai Desert Conservation Reserve.", ar: "شاهد المها والغزلان في محمية دبي الصحراوية." },
    longDescription: { en: "Visit the Dubai Desert Conservation Reserve in a vintage 1950s Land Rover. This protected area is home to Arabian Oryx, gazelles, and other native wildlife. Learn about the desert ecosystem from a conservation guide and enjoy a premium breakfast.", ar: "قم بزيارة محمية دبي الصحراوية في سيارة لاند روفر كلاسيكية من الخمسينيات. هذه المنطقة المحمية هي موطن للمها العربي والغزلان وغيرها من الحيوانات البرية المحلية. تعرف على النظام البيئي الصحراوي من مرشد الحفاظ على البيئة واستمتع بوجبة إفطار متميزة." },
    itinerary: [
      { time: "07:00 AM", title: { en: "Pickup", ar: "الاستقبال" }, desc: { en: "Pickup in Range Rover.", ar: "استقبال في رينج روفر." } },
      { time: "08:30 AM", title: { en: "Wildlife Drive", ar: "جولة الحياة البرية" }, desc: { en: "Spot Oryx & Gazelles.", ar: "رصد المها والغزلان." } },
      { time: "10:00 AM", title: { en: "Breakfast", ar: "الإفطار" }, desc: { en: "Luxury desert breakfast.", ar: "إفطار صحراوي فاخر." } },
      { time: "11:30 AM", title: { en: "Drop-off", ar: "التوصيل" }, desc: { en: "Return to hotel.", ar: "العودة إلى الفندق." } }
    ]
  }
];

const shopProducts = [
  {
    id: 1,
    name: { en: "Ujem Signature Cap", ar: "قبعة عجم المميزة" },
    price: { en: "AED 45", ar: "45 درهم" },
    image: logo, // Using your asset
    category: { en: "Merchandise", ar: "بضائع" },
    rating: 4.5,
    description: { en: "High-quality cotton cap with embroidered Ujem logo.", ar: "قبعة قطنية عالية الجودة مع شعار عجم المطرز." },
    style: "classic",
    onSale: true
  },
  {
    id: 2,
    name: { en: "Premium Travel Kit", ar: "مجموعة السفر المميزة" },
    price: { en: "AED 150", ar: "150 درهم" },
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    category: { en: "Travel Essentials", ar: "أساسيات السفر" },
    rating: 4.8,
    description: { en: "Everything you need for a comfortable journey in one pack.", ar: "كل ما تحتاجه لرحلة مريحة في حزمة واحدة." },
    style: "overlay",
    onSale: false
  },
  {
    id: 3,
    name: { en: "Multi-Purpose Laptop Bag", ar: "حقيبة لابتوب متعددة الاستخدامات" },
    price: { en: "AED 80", ar: "80 درهم" },
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    category: { en: "Laptops & Computers", ar: "لابتوب وكمبيوتر" },
    rating: 4.2,
    description: { en: "Vertical laptop bag, tablet bag, laptop inner bag, shoulder bag-33.78cm.", ar: "حقيبة لابتوب عمودية، حقيبة تابلت، حقيبة داخلية للابتوب، حقيبة كتف - 33.78 سم." },
    style: "minimal",
    onSale: true
  },
  {
    id: 4,
    name: { en: "Luxury Passport Holder", ar: "حافظة جواز سفر فاخرة" },
    price: { en: "AED 120", ar: "120 درهم" },
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    category: { en: "Accessories", ar: "إكسسوارات" },
    rating: 4.9,
    description: { en: "Genuine leather passport holder for the stylish traveler.", ar: "حافظة جواز سفر من الجلد الطبيعي للمسافر الأنيق." },
    style: "classic",
    onSale: false
  },
  {
    id: 5,
    name: { en: "Smart Coffee Maker", ar: "ماكينة قهوة ذكية" },
    price: { en: "AED 450", ar: "450 درهم" },
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=800", // Replace with: import img from './assets/coffee.png'
    category: { en: "Home Appliances", ar: "أجهزة منزلية" },
    rating: 4.7,
    description: { en: "Programmable coffee maker for the perfect brew every morning.", ar: "ماكينة قهوة قابلة للبرمجة لتحضير القهوة المثالية كل صباح." },
    style: "classic",
    onSale: false
  },
  {
    id: 6,
    name: { en: "Designer Men's Suit", ar: "بدلة رجالية مصممة" },
    price: { en: "AED 1200", ar: "1200 درهم" },
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    category: { en: "Mens Fashion", ar: "أزياء رجالية" },
    rating: 4.9,
    description: { en: "Premium tailored suit for business and formal events.", ar: "بدلة مصممة خصيصاً للأعمال والمناسبات الرسمية." },
    style: "overlay",
    onSale: true
  },
  {
    id: 7,
    name: { en: "Summer Floral Dress", ar: "فستان صيفي مزهر" },
    price: { en: "AED 250", ar: "250 درهم" },
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800",
    category: { en: "Womens Fashion", ar: "أزياء نسائية" },
    rating: 4.6,
    description: { en: "Lightweight and stylish dress perfect for Dubai weather.", ar: "فستان خفيف وأنيق مثالي لطقس دبي." },
    style: "minimal",
    onSale: false
  },
  {
    id: 8,
    name: { en: "Ultra HD Smart TV", ar: "تلفزيون ذكي فائق الدقة" },
    price: { en: "AED 2500", ar: "2500 درهم" },
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800",
    category: { en: "Electricals", ar: "أدوات كهربائية" },
    rating: 4.8,
    description: { en: "Cinematic experience with 4K resolution and smart features.", ar: "تجربة سينمائية بدقة 4K وميزات ذكية." },
    style: "classic",
    onSale: true
  },
  {
    id: 9,
    name: { en: "Pro Gaming Laptop", ar: "لابتوب ألعاب احترافي" },
    price: { en: "AED 5500", ar: "5500 درهم" },
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
    category: { en: "Laptops & Computers", ar: "لابتوب وكمبيوتر" },
    rating: 5.0,
    description: { en: "High-performance laptop for gaming and creative work.", ar: "لابتوب عالي الأداء للألعاب والعمل الإبداعي." },
    style: "overlay",
    onSale: false
  },
{
   id: 11,
    name: { en: "Multi-Function USB Hub", ar: "موزع USB متعدد الوظائف" },
    price: { en: "AED 50", ar: "50 درهم" },
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=800",
    category: { en: "Electricals", ar: "أدوات كهربائية" },
    rating: 4.8,
    description: { en: "8-in-2 Multi-Function Hub | USB 3.0 + USB-C + SD/TF + 3.5mm Audio Ports for computers.", ar: "تجربة سينمائية بدقة 4K وميزات ذكية." },
    style: "classic",
    onSale: true
  },
  {
    id: 10,
    name: { en: "Men's Sports Casual Shoes", ar: "حذاء رياضي كاجوال للرجال" },
    price: { en: "AED 250", ar: "250 درهم" },
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    category: { en: "FootWears", ar: "أحذية" },
    rating: 5.0,
    description: { en: "  Men's Sports Casual Shoes, Suitable for Gym Workouts And Night Runs.", ar: "حذاء رياضي عصري للرجال، متعدد الاستخدامات، مناسب لتمارين الجيم والجري الليلي." },
    style: "overlay",
    onSale: false,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: { en: "Black", ar: "أسود" }, value: "#000000" },
      { name: { en: "White", ar: "أبيض" }, value: "#FFFFFF" },
      { name: { en: "Grey", ar: "رمادي" }, value: "#808080" }
    ]
  }

];

const stats = [
  { value: "10+", label: { en: "Years Experience", ar: "سنوات خبرة" }, icon: Calendar },
  { value: "5k+", label: { en: "Happy Clients", ar: "عميل سعيد" }, icon: Users },
  { value: "150+", label: { en: "Destinations", ar: "وجهة سياحية" }, icon: MapPin },
  { value: "20+", label: { en: "Awards Won", ar: "جائزة" }, icon: Award }
];

const partners = [
  { name: "Global Travel", icon: Globe },
  { name: "Safe Stay", icon: ShieldCheck },
  { name: "Sky High", icon: Plane },
  { name: "City Build", icon: Building2 },
  { name: "Eco Tours", icon: Map }
];

const latestNews = [
  {
    title: { en: "Dubai Tourism Hits Record Numbers", ar: "السياحة في دبي تحقق أرقاماً قياسية" },
    date: { en: "March 15, 2025", ar: "15 مارس 2025" },
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
    excerpt: { en: "The tourism sector in Dubai has seen unprecedented growth this quarter with new attractions opening.", ar: "شهد قطاع السياحة في دبي نمواً غير مسبوق هذا الربع مع افتتاح مناطق جذب جديدة." }
  },
  {
    title: { en: "New Visa Regulations Announced", ar: "الإعلان عن لوائح تأشيرات جديدة" },
    date: { en: "March 10, 2025", ar: "10 مارس 2025" },
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    excerpt: { en: "The UAE government has introduced new long-term visa options for investors and skilled professionals.", ar: "قدمت حكومة الإمارات خيارات تأشيرات طويلة الأمد جديدة للمستثمرين والمهنيين المهرة." }
  },
  {
    title: { en: "Top 5 Real Estate Investment Spots", ar: "أفضل 5 مناطق للاستثمار العقاري" },
    date: { en: "March 5, 2025", ar: "5 مارس 2025" },
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    excerpt: { en: "Discover the most lucrative areas for property investment in Dubai right now for high ROI.", ar: "اكتشف المناطق الأكثر ربحية للاستثمار العقاري في دبي الآن لتحقيق عائد استثماري مرتفع." }
  }
];

const homeGalleryImages = [
  {
    src: "https://th.bing.com/th/id/OIP.V-J6H79fLxDV9231HBcY0AHaDx?w=324&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
    alt: { en: "Dubai Marina", ar: "دبي مارينا" }
  },
  {
    src: "https://tse3.mm.bing.net/th/id/OIP.bmLPaZWvOMj9WU7KuG-ihQHaFj?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=474&h=355&rs=1&o=7&rm=3",
    alt: { en: "Burj Khalifa", ar: "برج خليفة" }
  },
  {
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
    alt: { en: "Museum of the Future", ar: "متحف المستقبل" }
  }
];

const testimonials = [
  {
    name: { en: "James Wilson", ar: "جيمس ويلسون" },
    role: { en: "International Investor", ar: "مستثمر دولي" },
    quote: { en: "Ujem Group provided exceptional guidance for my real estate investment in Dubai. Their market knowledge is unmatched.", ar: "قدمت مجموعة عجم توجيهات استثنائية لاستثماري العقاري في دبي. معرفتهم بالسوق لا تضاهى." },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: { en: "Fatima Al-Sayed", ar: "فاطمة السيد" },
    role: { en: "Family Traveler", ar: "مسافرة مع العائلة" },
    quote: { en: "Our family holiday was unforgettable thanks to the perfectly planned itinerary. Every detail was taken care of.", ar: "كانت عطلتنا العائلية لا تُنسى بفضل خطة الرحلة المخطط لها بشكل مثالي. تم الاهتمام بكل التفاصيل." },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: { en: "Robert Chen", ar: "روبرت تشن" },
    role: { en: "Business Executive", ar: "مدير تنفيذي" },
    quote: { en: "Fast, efficient, and professional visa services. They saved me so much time and hassle.", ar: "خدمات تأشيرة سريعة وفعالة ومهنية. لقد وفروا علي الكثير من الوقت والمتاعب." },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

const pricingPlans = [
  {
    name: { en: "Starter", ar: "بداية" },
    price: { en: "AED 999", ar: "999 درهم" },
    features: {
      en: ["Standard Visa Processing", "Hotel Recommendations", "Email Support"],
      ar: ["معالجة تأشيرة قياسية", "توصيات فنادق", "دعم عبر البريد الإلكتروني"]
    },
    highlight: false
  },
  {
    name: { en: "Premium", ar: "متميز" },
    price: { en: "AED 2,499", ar: "2,499 درهم" },
    features: {
      en: ["Express Visa Processing", "Premium Hotel Booking", "24/7 Phone Support", "Airport Pickup"],
      ar: ["معالجة تأشيرة سريعة", "حجز فنادق متميزة", "دعم هاتفي 24/7", "استقبال في المطار"]
    },
    highlight: true
  },
  {
    name: { en: "Business", ar: "أعمال" },
    price: { en: "Custom", ar: "مخصص" },
    features: {
      en: ["Corporate Solutions", "Dedicated Account Manager", "Full Itinerary Planning", "Real Estate Consultation"],
      ar: ["حلول الشركات", "مدير حساب مخصص", "تخطيط كامل للرحلة", "استشارة عقارية"]
    },
    highlight: false
  }
];

const galleryItems = [
  {
    type: 'image',
    src: "https://theuaepress.com/wp-content/uploads/2023/11/xrwew-large.jpg",
    title: { en: "Dubai Skyline", ar: "أفق دبي" },
    style: "zoom"
  },
  {
    type: 'image',
    src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    title: { en: "Palm Jumeirah", ar: "نخلة جميرا" },
    style: "grayscale"
  },
  {
    type: 'video',
    src: "https://cdn.pixabay.com/v/img/videos/PexelsVideos2603.mp4",
    poster: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
    title: { en: "City Lights", ar: "أضواء المدينة" }
  },
  {
    type: 'image',
    src: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800",
    title: { en: "Desert Safari", ar: "سفاري الصحراء" },
    style: "rotate"
  },
  {
    type: 'image',
    src: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&q=80&w=800",
    title: { en: "Luxury Living", ar: "حياة الرفاهية" },
    style: "overlay"
  },
  {
    type: 'image',
    src: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&q=80&w=800",
    title: { en: "Modern Architecture", ar: "العمارة الحديثة" },
    style: "zoom"
  }
];

const offers = [
  { en: "🔥 Special Offer: 20% off Desert Safari!", ar: "🔥 عرض خاص: خصم 20٪ على سفاري الصحراء!" },
  { en: "✨ New: Luxury Yachts available for rent.", ar: "✨ جديد: يخوت فاخرة متاحة للإيجار." },
  { en: "📅 Event: Dubai Shopping Festival starts soon.", ar: "📅 حدث: مهرجان دبي للتسوق يبدأ قريباً." }
];

const travelInfo = [
  {
    title: { en: "Visa Requirements", ar: "متطلبات التأشيرة" },
    icon: FileCheck,
    content: { en: "Most tourists require a visa to enter the UAE. Citizens of GCC countries and certain other nations may get a visa on arrival. Check your eligibility before booking.", ar: "يحتاج معظم السياح إلى تأشيرة لدخول الإمارات. قد يحصل مواطنو دول مجلس التعاون الخليجي وبعض الدول الأخرى على تأشيرة عند الوصول. تحقق من أهليتك قبل الحجز." }
  },
  {
    title: { en: "Best Time to Visit", ar: "أفضل وقت للزيارة" },
    icon: Thermometer,
    content: { en: "The best time to visit Dubai is from November to March when the weather is pleasant (20°C - 30°C), perfect for outdoor activities and desert safaris.", ar: "أفضل وقت لزيارة دبي هو من نوفمبر إلى مارس حيث يكون الطقس لطيفاً (20 - 30 درجة مئوية)، وهو مثالي للأنشطة الخارجية ورحلات السفاري الصحراوية." }
  },
  {
    title: { en: "Currency & Payments", ar: "العملة والدفع" },
    icon: CreditCard,
    content: { en: "The currency is UAE Dirham (AED). Credit cards are widely accepted in hotels, malls, and restaurants. It's advisable to carry some cash for small souks.", ar: "العملة هي الدرهم الإماراتي (AED). تُقبل بطاقات الائتمان على نطاق واسع في الفنادق والمولات والمطاعم. يُنصح بحمل بعض النقود للأسواق الصغيرة." }
  },
  {
    title: { en: "Transport", ar: "المواصلات" },
    icon: Bus,
    content: { en: "Dubai boasts a world-class Metro system, extensive bus network, and reliable taxis. Ride-hailing apps like Uber and Careem are also readily available.", ar: "تفتخر دبي بنظام مترو عالمي المستوى، وشبكة حافلات واسعة، وسيارات أجرة موثوقة. تتوفر أيضاً تطبيقات النقل مثل أوبر وكريم بسهولة." }
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Youtube, href: "https://youtube.com" }
];

const translations = {
  en: {
    home: "Home",
    services: "Services",
    planTrip: "Plan Your Trip",
    shop: "Shop",
    about: "About",
    careers: "Careers",
    contact: "Contact Us",
    bookNow: "Book Now",
    explore: "Explore Services",
    footerText: "Building the future of digital business with professional standards and modern technology.",
    company: "Company",
    legal: "Legal",
    newsletter: "Newsletter",
    subscribe: "Subscribe",
    rights: "All rights reserved.",
    ourExpertise: "Our Expertise",
    whyChoose: "Why Choose Ujem Group?",
    needHelp: "Need Custom Help?",
    contactSupport: "Contact Support",
    latestNews: "Latest News & Insights",
    stayUpdated: "Stay updated with the latest trends in tourism and real estate.",
    readMore: "Read More",
    pricing: "Pricing Plans",
    pricingSubtitle: "Choose the perfect plan for your journey.",
    getStarted: "Get Started",
    mostPopular: "Most Popular",
    gallery: "Gallery",
    gallerySubtitle: "Explore the beauty of our destinations and properties.",
    testimonials: "Client Testimonials",
    testimonialsSubtitle: "Trusted by thousands of happy clients worldwide.",
    planTitle: "Plan Your Dream Trip",
    planSubtitle: "Design your perfect itinerary with our easy planning tool.",
    tripDetails: "Trip Details",
    personalize: "Personalize Your Experience",
    submitPlan: "Submit Plan",
    essentialInfo: "Essential Travel Info",
    packingList: "Packing Checklist",
    packingSubtitle: "Don't forget these essentials!",
    travelGuide: "Travel Guide",
    ourShop: "Our Shop",
    shopSubtitle: "Exclusive merchandise and travel essentials.",
    addToCart: "Add to Cart",
    yourCart: "Your Cart",
    checkout: "Checkout",
    emptyCart: "Your cart is empty"
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    planTrip: "خطط لرحلتك",
    about: "من نحن",
    careers: "الوظائف",
    shop: "المتجر",
    contact: "تواصل معنا",
    bookNow: "احجز الآن",
    explore: "استكشف الخدمات",
    footerText: "نبني مستقبل الأعمال الرقمية بمعايير مهنية وتقنيات حديثة.",
    company: "الشركة",
    legal: "قانوني",
    newsletter: "النشرة البريدية",
    subscribe: "اشترك",
    rights: "جميع الحقوق محفوظة.",
    ourExpertise: "خبرتنا",
    whyChoose: "لماذا تختار مجموعة عجم؟",
    needHelp: "هل تحتاج مساعدة خاصة؟",
    contactSupport: "تواصل مع الدعم",
    latestNews: "أحدث الأخبار والرؤى",
    stayUpdated: "ابق على اطلاع بأحدث الاتجاهات في السياحة والعقارات.",
    readMore: "اقرأ المزيد",
    pricing: "خطط الأسعار",
    pricingSubtitle: "اختر الخطة المثالية لرحلتك.",
    getStarted: "ابدأ الآن",
    mostPopular: "الأكثر شيوعاً",
    gallery: "المعرض",
    gallerySubtitle: "استكشف جمال وجهاتنا وعقاراتنا.",
    testimonials: "آراء العملاء",
    testimonialsSubtitle: "موثوق بنا من قبل آلاف العملاء السعداء حول العالم.",
    planTitle: "خطط لرحلة أحلامك",
    planSubtitle: "صمم خط سير رحلتك المثالي باستخدام أداة التخطيط السهلة لدينا.",
    tripDetails: "تفاصيل الرحلة",
    personalize: "خصص تجربتك",
    submitPlan: "إرسال الخطة",
    essentialInfo: "معلومات سفر أساسية",
    packingList: "قائمة التحقق للأمتعة",
    packingSubtitle: "لا تنس هذه الأساسيات!",
    travelGuide: "دليل السفر",
    ourShop: "متجرنا",
    shopSubtitle: "بضائع حصرية وأساسيات السفر.",
    addToCart: "أضف إلى السلة",
    yourCart: "عربة التسوق",
    checkout: "الدفع",
    emptyCart: "عربة التسوق فارغة"
  }
};

const DraggableCard = ({ children, className, onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    hasMoved.current = false;
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = e.clientX - dragStart.current.x;
      const newY = e.clientY - dragStart.current.y;
      if (Math.abs(newX - position.x) > 2 || Math.abs(newY - position.y) > 2) {
        hasMoved.current = true;
      }
      setPosition({ x: newX, y: newY });
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, position]);

  return (
    <div 
      className={`${className} cursor-grab active:cursor-grabbing touch-none`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseDown={handleMouseDown}
      onClick={(e) => {
        if (hasMoved.current) {
          e.stopPropagation();
          return;
        }
        if (onClick) onClick();
      }}
    >
      {children}
    </div>
  );
};

const SafariWeatherWidget = ({ latitude, longitude, lang }) => {
  const [weather, setWeather] = useState(null);
  const [currency, setCurrency] = useState('AED');
  
  const rates = {
    AED: 1,
    USD: 0.27,
    EUR: 0.25,
    GBP: 0.21
  };

  useEffect(() => {
    if (latitude && longitude) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        .then(res => res.json())
        .then(data => setWeather(data.current_weather))
        .catch(err => console.error(err));
    }
  }, [latitude, longitude]);

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'ar-AE', dateOptions);

  return (
    <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-brand-100 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
              <MapPin size={12} /> {lang === 'en' ? 'Location Weather' : 'طقس الموقع'}
            </p>
            <div className="flex items-center gap-3">
              <CloudSun className="text-yellow-300" size={32} />
              <div>
                <span className="text-3xl font-bold">{weather ? `${Math.round(weather.temperature)}°` : '--'}</span>
                <span className="text-lg opacity-80">C</span>
              </div>
            </div>
            {weather && (
              <p className="text-xs text-brand-100 mt-1">
                {lang === 'en' ? `Wind: ${weather.windspeed} km/h` : `الرياح: ${weather.windspeed} كم/س`}
              </p>
            )}
          </div>
          <div className="text-right">
             <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg inline-block">
               <p className="text-xs font-bold">{today}</p>
             </div>
          </div>
        </div>
        
        <div className="bg-black/20 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-2">
             <span className="text-xs font-bold uppercase tracking-wider opacity-80">{lang === 'en' ? 'Currency' : 'العملة'}</span>
             <select 
               value={currency} 
               onChange={(e) => setCurrency(e.target.value)}
               className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 cursor-pointer text-white text-right"
             >
               <option value="AED" className="text-slate-900">AED (Dirham)</option>
               <option value="USD" className="text-slate-900">USD (Dollar)</option>
               <option value="EUR" className="text-slate-900">EUR (Euro)</option>
               <option value="GBP" className="text-slate-900">GBP (Pound)</option>
             </select>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-xs opacity-70">1 AED ≈</span>
            <span className="text-xl font-bold">{rates[currency]} {currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePage, setActivePage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState('en');
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [manualMailto, setManualMailto] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentLightboxItems, setCurrentLightboxItems] = useState(galleryItems);
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [selectedSafari, setSelectedSafari] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currencyAmount, setCurrencyAmount] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('AED');
  const [currencyResult, setCurrencyResult] = useState(3.67);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: { en: "Hello! How can I help you today?", ar: "مرحباً! كيف يمكنني مساعدتك اليوم؟" } }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const lastMessageCount = useRef(1);
  const [chatFlow, setChatFlow] = useState('initial');
  const chatEndRef = useRef(null);
  const [chatInput, setChatInput] = useState("");
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const teamScrollRef = useRef(null);
  const servicesScrollRef = useRef(null);
  const [planData, setPlanData] = useState({
    destination: 'Dubai',
    date: '',
    duration: '7',
    travelers: '2',
    budget: 'Medium',
  });
  const [flightSearch, setFlightSearch] = useState({
    from: '',
    to: '',
    depart: '',
    return: '',
    passengers: '1',
    class: 'Economy'
  });
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [offerEndTime] = useState(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)); // 3 days from now
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [bookingStep, setBookingStep] = useState('selection');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [customColor, setCustomColor] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('ujem_cart');
    const items = saved ? JSON.parse(saved) : [];
    // Ensure all items have a cartId for variant handling
    return items.map(item => ({ ...item, cartId: item.cartId || Math.random().toString(36).substr(2, 9) }));
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [shopFilter, setShopFilter] = useState('All');
  const [contactStatus, setContactStatus] = useState('idle');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [bookingFormData, setBookingFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dateFrom: '',
    dateTo: '',
    travelers: '1',
    serviceClass: 'Standard',
    message: ''
  });
  
  // Testimonial Feature State
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [isTestimonialFormOpen, setIsTestimonialFormOpen] = useState(false);
  const [testimonialForm, setTestimonialForm] = useState({ name: '', role: '', quote: '' });
  const [moderationError, setModerationError] = useState('');

  const openModal = (service) => {
    if (service === "UAE Visit Visa" || service === "تأشيرة زيارة الإمارات" || service === "Visa Processing" || service === "معالجة التأشيرات") {
      window.location.href = "https://visa.ujem.com/";
      return;
    }
    setSelectedService(service);
    setActivePage('book');
    setBookingStep('selection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCompare = (pkg) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === pkg.id);
      if (exists) {
        return prev.filter(p => p.id !== pkg.id);
      }
      if (prev.length >= 2) {
        alert(lang === 'en' ? "You can only compare 2 packages at a time." : "يمكنك مقارنة باقتين فقط في كل مرة.");
        return prev;
      }
      return [...prev, pkg];
    });
  };

const MapComponent = ({ latitude, longitude }) => {
  if (!latitude || !longitude) return null;

  // Calculate bounding box for the map view (approx 0.02 degrees padding)
  const bbox = `${longitude - 0.02}%2C${latitude - 0.02}%2C${longitude + 0.02}%2C${latitude + 0.02}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude}%2C${longitude}`;

    return (
    <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 mt-3 shadow-sm group/map">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={src}
        title="Location Map"
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      ></iframe>
      <div className="absolute bottom-2 right-2 bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded text-[10px] shadow-sm z-10 opacity-0 group-hover/map:opacity-100 transition-opacity">
        <a 
          href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=14/${latitude}/${longitude}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-600 hover:underline font-bold flex items-center gap-1"
        >
          <MapPin size={10} /> View Larger Map
        </a>
      </div>
        </div>
    );
};

  useEffect(() => {
    setShopFilter('All');
  }, [lang]);

  useEffect(() => {
    setContactStatus('idle');
  }, [activePage, selectedSafari]);

  useEffect(() => {
    localStorage.setItem('ujem_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const finalColor = selectedColor?.value === 'custom'
      ? { name: { en: customColor || 'Custom', ar: customColor || 'مخصص' }, value: 'custom' }
      : selectedColor;

    setCartItems(prev => {
      // Check for existing item with same ID and variants
      const existingItem = prev.find(item => 
        item.id === product.id && 
        item.selectedSize === selectedSize && 
        ((!item.selectedColor && !finalColor) || (item.selectedColor && finalColor && item.selectedColor.value === finalColor.value && (finalColor.value !== 'custom' || item.selectedColor.name.en === finalColor.name.en)))
      );

      if (existingItem) {
        return prev.map(item => item.cartId === existingItem.cartId ? { ...item, quantity: item.quantity + 1 } : item);
      }

      return [...prev, { 
        ...product, 
        selectedSize, 
        selectedColor: finalColor, 
        quantity: 1,
        cartId: Math.random().toString(36).substr(2, 9)
      }];
    });
    setIsCartOpen(true);
    setSelectedProduct(null);
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.en.replace(/[^0-9.]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const closeModal = () => {
    setActivePage('home');
    setSelectedService(null);
    setIsSuccess(false);
    setIsError(false);
    setBookingFormData({
      fullName: '',
      phone: '',
      email: '',
      dateFrom: '',
      dateTo: '',
      travelers: '1',
      serviceClass: 'Standard',
      message: ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    setBookingFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate Date Range
    if (bookingFormData.dateFrom && bookingFormData.dateTo && new Date(bookingFormData.dateTo) < new Date(bookingFormData.dateFrom)) {
      setErrorMessage(lang === 'en' ? "Return date cannot be before departure date." : "تاريخ العودة لا يمكن أن يكون قبل تاريخ المغادرة.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.target);
    const fullName = formData.get('fullName');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');
    const travelers = formData.get('travelers');
    const serviceClass = formData.get('serviceClass');
    const message = formData.get('message');
    
    let transactionId = 'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    let paymentDetails = '';

    if (paymentMethod === 'Credit Card') {
      paymentDetails = `Cardholder: ${formData.get('cardholderName')}\nBilling Address: ${formData.get('billingAddress')}`;
    } else if (paymentMethod === 'Bank Transfer') {
      paymentDetails = `Transfer Date: ${formData.get('transferDate')}`;
    } else if (paymentMethod === 'PayPal') {
      paymentDetails = `PayPal Email: ${formData.get('paypalEmail')}`;
    } else if (paymentMethod === 'Cryptocurrency') {
      const txHash = formData.get('cryptoTxHash');
      paymentDetails = `Network: USDT (TRC-20)\nTxHash: ${txHash}`;
      if (txHash) transactionId = txHash;
    } else if (paymentMethod === 'Cash on Delivery') {
      paymentDetails = 'Payment to be collected upon delivery/service.';
    }

    const serviceName = selectedService || formData.get('serviceType');
    
    const subject = serviceName && serviceName.startsWith('Job Application') 
      ? `Job Application: ${serviceName.replace('Job Application: ', '')}`
      : `Booking Request: ${serviceName}`;
      
    // Process File Attachments
    const attachments = [];
    const fileInputs = e.target.querySelectorAll('input[type="file"]');
    
    for (const input of fileInputs) {
      if (input.files) {
        for (const file of input.files) {
          const fileData = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ filename: file.name, content: reader.result.split(',')[1], encoding: 'base64' });
            reader.readAsDataURL(file);
          });
          attachments.push(fileData);
        }
      }
    }

    try {
      // Determine API URL based on environment
      let apiBase;
      const hostname = window.location.hostname;

      // Check if running locally (localhost or local IP like 192.168.x.x)
      if (hostname === 'localhost' || hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.startsWith('172.')) {
        apiBase = `http://${hostname}:5000`;
      } else {
        // Production URL (Render) - REPLACE THIS with your actual Render URL after deployment
        apiBase = 'https://ujem.onrender.com'; 
      }

      const response = await fetch(`${apiBase}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          serviceName,
          date: dateTo ? `${dateFrom} to ${dateTo}` : dateFrom,
          message,
          subject,
          attachments,
          paymentMethod,
          transactionId,
          paymentDetails
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server error');
      }
    } catch (error) {
      console.warn('Backend error:', error);
      
      // Generate mailto link for manual fallback
      const body = `Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nService: ${serviceName}\nDates: ${dateFrom} ${dateTo ? 'to ' + dateTo : ''}\nTravelers: ${travelers}\nClass: ${serviceClass}\nPayment Method: ${paymentMethod}\nTransaction ID: ${transactionId}\nDetails: ${paymentDetails}\n${message ? `Message: ${message}\n` : ''}\nNote: Please attach any required documents manually to this email.`;
      const mailtoLink = `mailto:konnehmohamed354@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setManualMailto(mailtoLink);
      setErrorMessage(error.message || "Connection failed");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus('submitting');
    
    const formData = new FormData(e.target);
    const fullName = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subjectSelection = formData.get('subject');
    const message = formData.get('message');
    
    const subject = `Contact Inquiry: ${subjectSelection}`;
    
    try {
      let apiBase;
      const hostname = window.location.hostname;
      if (hostname === 'localhost' || hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.startsWith('172.')) {
        apiBase = `http://${hostname}:5000`;
      } else {
        apiBase = 'https://ujem.onrender.com'; 
      }

      const response = await fetch(`${apiBase}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          serviceName: 'General Contact',
          message,
          subject
        }),
      });

      if (response.ok) {
        setContactStatus('success');
        e.target.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.warn('Contact form error:', error);
      // Fallback to mailto
      const body = `Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subjectSelection}\nMessage: ${message}`;
      window.location.href = `mailto:konnehmohamed354@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setContactStatus('success');
    }
  };

  const handleFlightSearch = (e) => {
    e.preventDefault();
    openModal(`Flight Search: ${flightSearch.from} to ${flightSearch.to}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const seen = sessionStorage.getItem('newsletter_seen');
      if (!seen) {
        setShowNewsletterPopup(true);
        sessionStorage.setItem('newsletter_seen', 'true');
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const scrollTeam = (direction) => {
    if (teamScrollRef.current) {
      const { current } = teamScrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollServices = (direction) => {
    if (servicesScrollRef.current) {
      const { current } = servicesScrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isChatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isChatOpen, isTyping]);

  useEffect(() => {
    // Play sound when a new bot message arrives
    if (chatMessages.length > lastMessageCount.current) {
      const lastMsg = chatMessages[chatMessages.length - 1];
      if (lastMsg.sender === 'bot') {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        audio.volume = 0.5;
        audio.play().catch(err => console.error("Audio play failed", err));
        
        if (!isChatOpen) {
          setHasUnreadMessages(true);
        }
      }
      lastMessageCount.current = chatMessages.length;
    }
  }, [chatMessages, isChatOpen]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const userText = chatInput.trim();
    const userMsg = { sender: 'user', text: userText };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput("");
    setIsTyping(true);

    if (chatFlow === 'specifying_other') {
       const availableServices = serviceTypes[lang].filter(s => s !== (lang === 'en' ? 'Other' : 'أخرى'));
       const matchedService = availableServices.find(s => s.toLowerCase().includes(userText.toLowerCase()) || userText.toLowerCase().includes(s.toLowerCase()));

       setTimeout(() => {
         setIsTyping(false);
         if (matchedService) {
            setChatMessages(prev => [...prev, { 
              sender: 'bot', 
              text: { en: `We have that! Opening booking for ${matchedService}...`, ar: `لدينا ذلك! جاري فتح الحجز لـ ${matchedService}...` } 
            }]);
            openModal(matchedService);
            setChatFlow('initial');
         } else {
            setChatMessages(prev => [...prev, { 
              sender: 'bot', 
              text: { en: "Service not available. Please select from available services below or contact customer care on +971 556554093.", ar: "الخدمة غير متوفرة. يرجى الاختيار من الخدمات المتاحة أدناه أو الاتصال بخدمة العملاء على +971 556554093." },
              options: serviceTypes[lang]
            }]);
            setChatFlow('selecting_service');
         }
       }, 1000);
    } else {
       setTimeout(() => {
        setIsTyping(false);
        setChatMessages(prev => [...prev, { 
          sender: 'bot', 
          text: { en: "Value client, thanks for your message. Please choose from the options to proceed:", ar: "عميلنا العزيز، شكراً لرسالتك. يرجى الاختيار من الخيارات للمتابعة:" },
          options: serviceTypes[lang]
        }]);
        setChatFlow('selecting_service');
      }, 1000);
    }
  };

  const handleChatOptionClick = (option) => {
    const userMsg = { sender: 'user', text: option };
    setChatMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const otherText = lang === 'en' ? 'Other' : 'أخرى';

    if (option === otherText) {
      setTimeout(() => {
        setIsTyping(false);
        setChatMessages(prev => [...prev, { 
          sender: 'bot', 
          text: { en: "Please specify the service you are looking for:", ar: "يرجى تحديد الخدمة التي تبحث عنها:" } 
        }]);
        setChatFlow('specifying_other');
      }, 500);
    } else {
      setTimeout(() => {
        setIsTyping(false);
        setChatMessages(prev => [...prev, { 
          sender: 'bot', 
          text: { en: "Great choice! Opening the booking form now...", ar: "اختيار رائع! جاري فتح نموذج الحجز الآن..." } 
        }]);
        openModal(option);
        setChatFlow('initial');
      }, 500);
    }
  };

  const handleWhatsAppClick = () => {
    const text = chatInput.trim() 
      ? chatInput 
      : (lang === 'en' ? "Hello, I have an inquiry." : "مرحباً، لدي استفسار.");
    const url = `https://wa.me/971556554093?text=${encodeURIComponent(text)}`;
    window.open(url, 'whatsapp-chat', 'width=800,height=600,left=100,top=100');
  };

  const handleClearChat = () => {
    setChatMessages([
      { sender: 'bot', text: { en: "Hello! How can I help you today?", ar: "مرحباً! كيف يمكنني مساعدتك اليوم؟" } }
    ]);
    setChatFlow('initial');
    lastMessageCount.current = 1;
  };

  const handleWinterOfferClick = (e) => {
    e.stopPropagation();
    setShowConfetti(true);
    
    // Play confetti sound
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73467.mp3');
    audio.volume = 0.5;
    audio.play().catch(err => console.error("Audio play failed", err));

    setTimeout(() => setShowConfetti(false), 4000);
    openModal('Winter Offer');
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Content Moderation (Basic Bad Word Filter)
    const badWords = ['abuse', 'hate', 'violence', 'stupid', 'idiot', 'scam', 'fake', 'ugly']; 
    const contentToCheck = `${testimonialForm.name} ${testimonialForm.role} ${testimonialForm.quote}`.toLowerCase();
    const isFlagged = badWords.some(word => contentToCheck.includes(word));

    if (isFlagged) {
      setModerationError(lang === 'en' ? "Your comment contains inappropriate language and cannot be posted." : "يحتوي تعليقك على لغة غير لائقة ولا يمكن نشره.");
      return;
    }

    // 2. Create New Testimonial Object
    const newEntry = {
      name: { en: testimonialForm.name, ar: testimonialForm.name },
      role: { en: testimonialForm.role, ar: testimonialForm.role },
      quote: { en: testimonialForm.quote, ar: testimonialForm.quote },
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200" // Placeholder avatar
    };

    // 3. Update Local State
    setTestimonialsList(prev => [...prev, newEntry]);
    
    // 4. Firebase Storage Logic (Uncomment and configure to use)
    /*
    try {
      // Ensure you have initialized Firebase in your project
      // import { getFirestore, collection, addDoc } from "firebase/firestore"; 
      // const db = getFirestore();
      // await addDoc(collection(db, "testimonials"), newEntry);
      // console.log("Document written to Firebase");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    */

    // 5. Reset and Close
    setTestimonialForm({ name: '', role: '', quote: '' });
    setModerationError('');
    setIsTestimonialFormOpen(false);
    setCurrentTestimonial(testimonialsList.length); // Show the new testimonial
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = offerEndTime - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [offerEndTime]);

  useEffect(() => {
    if (activePage !== 'home' || isServicesHovered) return;

    const interval = setInterval(() => {
      if (servicesScrollRef.current) {
        const { current } = servicesScrollRef;
        if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const firstChild = current.firstElementChild;
          const scrollAmount = firstChild ? firstChild.clientWidth + 24 : 300; // 24px is gap-6
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activePage, isServicesHovered]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Fetch weather for Dubai (Lat: 25.2048, Long: 55.2708)
    const fetchWeather = () => {
      fetch('https://api.open-meteo.com/v1/forecast?latitude=25.2048&longitude=55.2708&current_weather=true')
        .then(res => res.json())
        .then(data => setWeather(data.current_weather))
        .catch(err => console.error("Weather error:", err));
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const rates = {
      USD: { AED: 3.67, EUR: 0.92, GBP: 0.79, USD: 1 },
      AED: { USD: 0.27, EUR: 0.25, GBP: 0.21, AED: 1 },
      EUR: { USD: 1.09, AED: 4.01, GBP: 0.85, EUR: 1 },
      GBP: { USD: 1.27, AED: 4.68, EUR: 1.17, GBP: 1 }
    };
    if (rates[currencyFrom] && rates[currencyFrom][currencyTo]) {
      setCurrencyResult((currencyAmount * rates[currencyFrom][currencyTo]).toFixed(2));
    }
  }, [currencyAmount, currencyFrom, currencyTo]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight) setScrollProgress(totalScroll / windowHeight);
    }
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      
      {/* --- SCROLL PROGRESS BAR --- */}
      <div className="fixed top-0 left-0 h-1 bg-brand-600 z-[110] transition-all duration-150 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-start px-4 pt-6 pointer-events-none">
        
        {/* Left Side: Expanding Pill Menu */}
        <div className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-full p-2 flex items-center gap-2 transition-all duration-500 hover:bg-slate-900/95 hover:pr-6 group/pill max-w-fit">
            {/* Logo (Always Visible) */}
            <div className="flex-shrink-0 flex items-center px-2">
              <button onClick={() => navigateTo('home')} className="hover:scale-105 transition-transform duration-300 block">
                <span className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 drop-shadow-sm">
                  UJEM
                </span>
              </button>
            </div>

            {/* Expanding Menu Items (Hidden by default, reveal on hover) */}
            <div className="max-w-0 overflow-hidden group-hover/pill:max-w-screen-xl group-hover/pill:overflow-visible opacity-0 group-hover/pill:opacity-100 hidden md:flex items-center gap-4 transition-all duration-500 ease-in-out">
              <div className="flex items-center gap-4 pl-2 border-l border-white/10">
              
              {/* Home */}
              <div className="relative group/item">
                <button onClick={() => navigateTo('home')} className={`flex items-center text-slate-300 hover:text-brand-400 transition-colors font-medium text-sm whitespace-nowrap ${activePage === 'home' ? 'text-brand-400' : ''}`}>
                  {t.home} <ChevronDown size={16} className="mx-1 group-hover/item:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute start-0 top-full pt-4 w-48 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                    {navDropdowns.home[lang].map((item) => (
                      <button key={item} onClick={() => navigateTo('home')} className="block w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Services */}
              <div className="relative group/item">
                <button onClick={() => navigateTo('services')} className={`flex items-center text-slate-300 hover:text-brand-400 transition-colors font-medium text-sm whitespace-nowrap ${activePage === 'services' ? 'text-brand-400' : ''}`}>
                  {t.services} <ChevronDown size={16} className="mx-1 group-hover/item:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute start-0 top-full pt-4 w-64 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                    {serviceTypes[lang].map((service) => (
                      <button key={service} onClick={() => openModal(service)} className="block w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Plan */}
              <div className="relative group/item">
                <button onClick={() => navigateTo('plan')} className={`flex items-center text-slate-300 hover:text-brand-400 transition-colors font-medium text-sm whitespace-nowrap ${activePage === 'plan' ? 'text-brand-400' : ''}`}>
                  {t.planTrip} <ChevronDown size={16} className="mx-1 group-hover/item:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute start-0 top-full pt-4 w-48 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                    {navDropdowns.plan[lang].map((item) => (
                      <button key={item} onClick={() => navigateTo('plan')} className="block w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shop */}
              <div className="relative group/item">
                <button onClick={() => navigateTo('shop')} className={`flex items-center text-slate-300 hover:text-brand-400 transition-colors font-medium text-sm whitespace-nowrap ${activePage === 'shop' ? 'text-brand-400' : ''}`}>
                  {t.shop} <ChevronDown size={16} className="mx-1 group-hover/item:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute start-0 top-full pt-4 w-56 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                    {shopCategories[lang].map((item) => (
                      <button key={item.name} onClick={() => { navigateTo('shop'); setShopFilter(item.name); }} className="w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors flex justify-between items-center">
                        <span>{item.name}</span>
                        {item.isNew && (
                          <span className="bg-brand-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-pulse">{lang === 'en' ? 'NEW' : 'جديد'}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div className="relative group/item">
                <button onClick={() => navigateTo('gallery')} className={`flex items-center text-slate-300 hover:text-brand-400 transition-colors font-medium text-sm whitespace-nowrap ${activePage === 'gallery' ? 'text-brand-400' : ''}`}>
                  {t.gallery} <ChevronDown size={16} className="mx-1 group-hover/item:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute start-0 top-full pt-4 w-48 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                    {navDropdowns.gallery[lang].map((item) => (
                      <button key={item} onClick={() => navigateTo('gallery')} className="block w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="relative group/item">
                <button onClick={() => navigateTo('about')} className={`flex items-center text-slate-300 hover:text-brand-400 transition-colors font-medium text-sm whitespace-nowrap ${activePage === 'about' ? 'text-brand-400' : ''}`}>
                  {t.about} <ChevronDown size={16} className="mx-1 group-hover/item:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute start-0 top-full pt-4 w-48 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                    {navDropdowns.about[lang].map((item) => (
                      <button key={item} onClick={() => navigateTo('about')} className="block w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Careers */}
              <div className="relative group/item">
                <button onClick={() => navigateTo('careers')} className={`flex items-center text-slate-300 hover:text-brand-400 transition-colors font-medium text-sm whitespace-nowrap ${activePage === 'careers' ? 'text-brand-400' : ''}`}>
                  {t.careers} <ChevronDown size={16} className="mx-1 group-hover/item:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute start-0 top-full pt-4 w-48 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                    {navDropdowns.careers[lang].map((item) => (
                      <button key={item} onClick={() => navigateTo('careers')} className="block w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="relative group/item">
                <button onClick={() => navigateTo('contact')} className={`flex items-center text-slate-300 hover:text-brand-400 transition-colors font-medium text-sm whitespace-nowrap ${activePage === 'contact' ? 'text-brand-400' : ''}`}>
                  {t.contact} <ChevronDown size={16} className="mx-1 group-hover/item:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute start-0 top-full pt-4 w-48 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                    {navDropdowns.contact[lang].map((item) => (
                      <button key={item} onClick={() => navigateTo('contact')} className="block w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Always Visible Buttons (Explore & Book Now) */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
               {/* Explore Services */}
               <div className="relative group/item hidden md:block">
                  <button onClick={() => navigateTo('services')} className="flex items-center bg-white/5 hover:bg-brand-600 text-white px-4 py-2 rounded-full transition-all font-medium text-sm border border-white/10 whitespace-nowrap">
                    {t.explore} <ChevronDown size={14} className="ml-1 rtl:mr-1 group-hover/item:rotate-180 transition-transform duration-200" />
                  </button>
                   <div className="absolute start-0 top-full pt-4 w-64 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2">
                          {serviceTypes[lang].map((service) => (
                            <button key={service} onClick={() => openModal(service)} className="block w-full text-start px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
                              {service}
                            </button>
                          ))}
                        </div>
                  </div>
               </div>
               <button onClick={() => openModal(null)} className="flex items-center bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-full transition-all font-medium text-sm shadow-lg shadow-brand-900/20 whitespace-nowrap">
                  <Calendar size={14} className="mr-2 rtl:ml-2" /> {t.bookNow}
               </button>
            </div>
        </div>

        {/* Right Side: Menu Toggle & Utilities */}
        <div className="pointer-events-auto flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-full p-2">
             {/* Search */}
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-300">
                <Search size={20} />
              </button>
              {/* Lang */}
              <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-300 font-bold text-xs">
                {lang.toUpperCase()}
              </button>
              {/* Menu Toggle */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
        </div>

        {/* Search Bar Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 shadow-lg animate-in slide-in-from-top-2 pointer-events-auto">
            <div className="max-w-3xl mx-auto relative">
              <input 
                type="text" 
                placeholder={lang === 'en' ? "Search services, news..." : "بحث في الخدمات والأخبار..."} 
                className="w-full px-4 py-3 ps-12 pe-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all dark:text-white"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="absolute end-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <X size={20} />
              </button>
            </div>

            {searchQuery && (
              <div className="max-w-3xl mx-auto mt-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl max-h-96 overflow-y-auto p-2">
                {/* Services Results */}
                {serviceTypes[lang].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).map((service, idx) => (
                  <button key={`s-${idx}`} onClick={() => { openModal(service); setIsSearchOpen(false); setSearchQuery(''); }} className="w-full text-start p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg flex items-center gap-3 transition-colors">
                    <div className="bg-brand-100 dark:bg-brand-900/30 p-2 rounded-lg text-brand-600 dark:text-brand-400">
                      <FileCheck size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{service}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{t.services}</p>
                    </div>
                  </button>
                ))}

                {/* Job Results */}
                {jobListings.filter(j => j.title[lang].toLowerCase().includes(searchQuery.toLowerCase())).map((job, idx) => (
                  <button key={`j-${idx}`} onClick={() => { openModal(`Job Application: ${job.title[lang]}`); setIsSearchOpen(false); setSearchQuery(''); }} className="w-full text-start p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg flex items-center gap-3 transition-colors">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{job.title[lang]}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{t.careers}</p>
                    </div>
                  </button>
                ))}

                {/* News Results */}
                {latestNews.filter(n => n.title[lang].toLowerCase().includes(searchQuery.toLowerCase())).map((news, idx) => (
                  <button key={`n-${idx}`} onClick={() => { navigateTo('home'); setIsSearchOpen(false); setSearchQuery(''); }} className="w-full text-start p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg flex items-center gap-3 transition-colors">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg text-orange-600 dark:text-orange-400">
                      <Globe size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{news.title[lang]}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{t.latestNews}</p>
                    </div>
                  </button>
                ))}

                {/* No Results State */}
                {serviceTypes[lang].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 &&
                 jobListings.filter(j => j.title[lang].toLowerCase().includes(searchQuery.toLowerCase())).length === 0 &&
                 latestNews.filter(n => n.title[lang].toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                  <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                    <p>{lang === 'en' ? 'No results found.' : 'لا توجد نتائج.'}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-24 left-0 w-full md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl pointer-events-auto animate-in slide-in-from-top-2 z-40">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => navigateTo('home')} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{t.home}</button>
              <button onClick={() => window.location.href = "https://visa.ujem.com/"} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{lang === 'en' ? "UAE Visit Visa" : "تأشيرة زيارة الإمارات"}</button>
           
              <button onClick={() => navigateTo('services')} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{t.services}</button>
              <button onClick={() => navigateTo('plan')} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{t.planTrip}</button>
              <button onClick={() => navigateTo('shop')} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{t.shop}</button>
              <button onClick={() => navigateTo('gallery')} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{t.gallery}</button>
              <button onClick={() => navigateTo('about')} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{t.about}</button>
              <button onClick={() => navigateTo('careers')} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{t.careers}</button>
              <button onClick={() => navigateTo('contact')} className="block w-full text-start px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">{t.contact}</button>
            </div>
          </div>
        )}
      </nav>

      {/* --- SOCIAL SIDEBAR (Home Only) --- */}
      {activePage === 'home' && (
        <div className="flex fixed start-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-6 p-3 md:p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-y border-e border-slate-200 dark:border-slate-800 rounded-e-2xl shadow-xl transition-all animate-in slide-in-from-start-full duration-700 scale-75 md:scale-100 origin-left">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-600 hover:scale-110 transition-all duration-300">
              <social.icon size={24} />
            </a>
          ))}
        </div>
      )}

      {/* --- HERO SECTION --- */}
      {activePage === 'home' && (
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden animate-in fade-in duration-500">

        {/* Background Slideshow */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-transform ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Enhanced Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent z-10" />
            
            {slide.video ? (
              <video
                src={slide.video}
                poster={slide.image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transform scale-105"
              />
            ) : (
              <img
                src={slide.image}
                alt={slide.title[lang]}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center items-center text-center pt-20 pb-20 md:pb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg mb-4 md:mb-6 animate-in slide-in-from-bottom duration-1000">
            {heroSlides[currentSlide].title[lang]}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-1000 delay-200 px-4">
            {heroSlides[currentSlide].subtitle[lang]}
          </p>
        </div>

        {/* Slider Indicators (Bottom Center) */}
        <div className="absolute bottom-8 md:bottom-60 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-brand-500 w-12' : 'bg-white/30 w-6 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 right-8 z-30 hidden items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowUp size={16} className="rotate-180" />
        </div>

        {/* Desktop Bottom Highlights Cards (Inside Hero) */}
        <div className="absolute bottom-6 left-0 w-full z-40 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-4">
              {highlightImages.map((item, index) => (
                <div key={index} onClick={() => {
                  if (item.title.en === "Safari Packages") {
                    setActivePage('safari');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    openModal(item.title[lang]);
                  }
                }} className="group relative h-48 rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-white/30 hover:-translate-y-2 transition-all duration-300 bg-white/10 backdrop-blur-md hover:bg-white/20">
                  {index === 0 && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-75"></span>
                      <span className="relative bg-brand-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                        <Star size={8} className="fill-white" />
                        {lang === 'en' ? 'FEATURED' : 'متميز'}
                      </span>
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.title[lang]} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent">
                    <div className="absolute bottom-0 start-0 p-4 w-full">
                      <h3 className="text-lg font-bold text-white mb-1 truncate">{item.title[lang]}</h3>
                      <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc[lang]}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* See All Card */}
              <div onClick={() => navigateTo('services')} className="group relative h-48 rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-white/30 hover:-translate-y-2 transition-all duration-300 bg-white/10 backdrop-blur-md hover:bg-white/20 flex flex-col items-center justify-center">
                <div className="bg-brand-600 p-3 rounded-full mb-2 shadow-lg shadow-brand-600/30 group-hover:scale-110 transition-transform">
                  <ArrowRight size={24} className="text-white rtl:rotate-180" />
                </div>
                <h3 className="text-lg font-bold text-white">{t.explore}</h3>
                <p className="text-slate-400 text-xs">{lang === 'en' ? "View all services" : "عرض جميع الخدمات"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* --- SHOP PREVIEW SECTION --- */}
      {activePage === 'home' && (
        <section className="py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.ourShop}</h2>
              <p className="text-slate-500 mt-4">{t.shopSubtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {shopProducts.slice(0, 4).map((product) => (
                <div key={product.id} onClick={() => {
                  setSelectedProduct(product);
                  const isFootwear = product.category.en === 'FootWears';
                  const sizes = isFootwear ? (product.sizes || ["40", "41", "42", "43", "44", "45"]) : ["XL", "XXL", "Medium", "Small"];
                  setSelectedSize(sizes[0]);
                  const colors = product.colors || defaultColors;
                  setSelectedColor(colors[0]);
                  setCustomColor('');
                }} className="cursor-pointer group">
                  {/* Using Classic Card Style for Preview */}
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 h-full flex flex-col">
                    <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-700">
                      <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-white dark:bg-slate-900 p-2 rounded-full shadow-md text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ShoppingBag size={18} />
                      </div>
                      {product.onSale && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md z-10">{lang === 'en' ? 'SALE' : 'خصم'}</div>
                      )}
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{product.category[lang]}</div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">{product.name[lang]}</h3>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-base sm:text-lg font-bold text-brand-600">{product.price[lang]}</span>
                        <div className="flex items-center gap-1 text-amber-400 text-xs sm:text-sm font-bold"><Star size={14} fill="currentColor" /> {product.rating}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => navigateTo('shop')} 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-500/30"
              >
                <span className="relative z-10">{lang === 'en' ? "View All Products" : "عرض كل المنتجات"}</span>
                <ArrowRight size={20} className="relative z-10 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* --- HIGHLIGHTS SECTION (Moved Up) --- */}
      {activePage === 'home' && (
        <section className="py-12 md:hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.ourExpertise}</h2>
              <p className="text-slate-500 mt-4">{t.whyChoose}</p>
            </div>

            <div className="relative px-4 md:px-12">
              <button 
                onClick={() => scrollServices('left')} 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all md:hidden"
              >
                <ChevronLeft size={24} />
              </button>

              <div 
                ref={servicesScrollRef} 
                className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-8 md:pb-0 px-2"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
                onTouchStart={() => setIsServicesHovered(true)}
                onTouchEnd={() => setIsServicesHovered(false)}
              >
                {highlightImages.map((item, index) => (
                  <div key={index} onClick={() => {
                    if (item.title.en === "Safari Packages") {
                      setActivePage('safari');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      openModal(item.title[lang]);
                    }
                  }} className="min-w-[85vw] md:min-w-0 snap-center group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0">
                    {index === 0 && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-75"></span>
                        <span className="relative bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                          <Star size={10} className="fill-white" />
                          {lang === 'en' ? 'FEATURED' : 'متميز'}
                        </span>
                      </div>
                    )}
                    <img 
                      src={item.image} 
                      alt={item.title[lang]} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300">
                      <div className="absolute bottom-0 start-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title[lang]}</h3>
                        <p className="text-slate-200 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">{item.desc[lang]}</p>
                        <div className="mt-4 flex items-center gap-2 text-brand-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                          <span>{t.readMore}</span> <ArrowRight size={16} className="rtl:rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* See All Card */}
                <div onClick={() => navigateTo('services')} className="min-w-[85vw] md:min-w-0 snap-center group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0 bg-slate-900 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
                    {/* Default View */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                        <div className="bg-brand-600 p-4 rounded-full mb-4 shadow-lg shadow-brand-600/30">
                          <ArrowRight size={32} className="text-white rtl:rotate-180" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.explore}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{lang === 'en' ? "View all services" : "عرض جميع الخدمات"}</p>
                    </div>

                    {/* Hover View (Preview) */}
                    <div className="absolute inset-0 bg-brand-600 p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110 group-hover:scale-100">
                        <h3 className="text-white font-bold text-xl mb-4 border-b-2 border-white/20 pb-2">{t.services}</h3>
                        <ul className="space-y-3 text-center w-full">
                            {serviceTypes[lang].slice(0, 4).map((service, i) => (
                                <li key={i} className="text-white/90 text-sm font-medium truncate w-full">{service}</li>
                            ))}
                            <li className="text-white/60 text-xs italic pt-1">{lang === 'en' ? '+ More' : '+ المزيد'}</li>
                        </ul>
                    </div>
                </div>
              </div>

              <button 
                onClick={() => scrollServices('right')} 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all md:hidden"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* --- STATISTICS SECTION --- */}
      {activePage === 'home' && (
        <section className="py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-brand-50 dark:bg-brand-900/30 p-4 rounded-full mb-4 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                    <stat.icon size={32} />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{stat.value}</span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- WINTER OFFER SECTION --- */}
      {activePage === 'home' && (
        <section className="py-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => openModal('Winter Offer')}>
              <img 
                src="https://scontent.fkwi5-2.fna.fbcdn.net/v/t51.71878-10/600286534_627548567069735_685495847000856654_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=c44d43&_nc_ohc=tMmYvMEzqAQQ7kNvwHxm-bE&_nc_oc=AdlIt6mPy5h3gDnCaYraajug-7727H35iSONVcC4BieyrxuMhgmloewzKm3sWgaRHLwuSGOZaZqqzAXYHZ5oW5kQ&_nc_zt=23&_nc_ht=scontent.fkwi5-2.fna&_nc_gid=I2onMPb4XEsRr3CfciVfZg&oh=00_AfpoRAfJ1KwkkXT496oJ2Nn7aNX3ZYPr5sPGl8K-lA6hgg&oe=695F5C68" 
                alt="Winter Offer" 
                className="w-full h-64 md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 md:p-12">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                   <div>
                     <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">Winter Offer</h2>
                     <p className="text-white/90 text-lg mb-6 max-w-2xl">Don't miss out on our exclusive winter deals. Limited time only!</p>
                     <button 
                       onClick={handleWinterOfferClick}
                       className="bg-brand-600 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-700 transition-colors shadow-lg"
                     >
                       {t.bookNow}
                     </button>
                   </div>
                   <div className="flex gap-2 md:gap-4">
                     {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                       <div key={unit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[80px] text-center">
                         <div className="text-xl md:text-3xl font-bold text-white">{timeLeft[unit]}</div>
                         <div className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider">{lang === 'ar' ? (unit === 'days' ? 'أيام' : unit === 'hours' ? 'ساعات' : unit === 'minutes' ? 'دقيقة' : 'ثانية') : unit}</div>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- HOME PARALLAX SECTION --- */}
      {activePage === 'home' && (
        <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[60vh] min-h-[500px] rounded-3xl overflow-hidden group perspective-1000 shadow-2xl border border-slate-200 dark:border-slate-700">
              {/* Parallax Background */}
              <video 
                src="https://cdn.pixabay.com/v/img/videos/PexelsVideos1849323_1.mp4"
                autoPlay 
                muted 
                loop 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-8 items-center">
                    <div className="text-white space-y-6 animate-in slide-in-from-left duration-700 z-10">
                      <span className="bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                        {lang === 'en' ? 'Exclusive Experiences' : 'تجارب حصرية'}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
                        {lang === 'en' ? 'Discover the' : 'اكتشف'} <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">
                          {lang === 'en' ? 'Unseen World' : 'العالم غير المرئي'}
                        </span>
                      </h2>
                      <p className="text-lg md:text-xl text-slate-100 max-w-md drop-shadow-md font-medium">
                        {lang === 'en' ? 'Unlock access to hidden gems and VIP services reserved for the few.' : 'احصل على إمكانية الوصول إلى الجواهر الخفية وخدمات كبار الشخصيات المحجوزة للقلة.'}
                      </p>
                      <button onClick={() => openModal('VIP Experience')} className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-brand-50 transition-all shadow-xl hover:scale-105 flex items-center gap-2 group/btn">
                          {lang === 'en' ? 'Plan Your Trip' : 'خطط لرحلتك'} <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform rtl:rotate-180" />
                      </button>
                    </div>
                    
                    {/* Floating Draggable Cards */}
                    <div className="relative block h-80 mt-8 md:mt-0">
                      <DraggableCard className="absolute top-0 right-4 md:right-0 z-10 hover:z-20" onClick={() => openModal('Private Jet')}>
                        <div className="w-64 md:w-72 h-72 md:h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform rotate-6 hover:rotate-0 transition-all duration-500 shadow-2xl hover:scale-105 cursor-grab active:cursor-grabbing">
                          <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800" className="w-full h-40 md:h-48 object-cover rounded-xl mb-4 shadow-inner" alt="Jet" />
                          <h4 className="text-white font-bold text-lg md:text-xl">{lang === 'en' ? 'Private Jet Charter' : 'تأجير طائرات خاصة'}</h4>
                          <p className="text-white/80 text-sm mt-1">{lang === 'en' ? 'Fly on your own schedule.' : 'سافر وفق جدولك الخاص.'}</p>
                          <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-brand-300">{lang === 'en' ? 'Inquire' : 'استفسر'}</span> 
                            <div className="bg-white/20 p-1.5 rounded-full"><ArrowRight size={16} className="text-white rtl:rotate-180" /></div>
                          </div>
                        </div>
                      </DraggableCard>
                      <DraggableCard className="absolute top-12 right-12 md:right-48 z-0 hover:z-20" onClick={() => openModal('Luxury Villa')}>
                        <div className="w-56 md:w-64 h-64 md:h-72 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-all duration-500 shadow-2xl hover:scale-105 cursor-grab active:cursor-grabbing">
                          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800" className="w-full h-40 object-cover rounded-xl mb-4 shadow-inner" alt="Villa" />
                          <h4 className="text-white font-bold text-lg">{lang === 'en' ? 'Luxury Villas' : 'فلل فاخرة'}</h4>
                          <p className="text-white/80 text-sm mt-1">{lang === 'en' ? 'Exclusive stays worldwide.' : 'إقامات حصرية حول العالم.'}</p>
                          <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-brand-300">{lang === 'en' ? 'View' : 'عرض'}</span> 
                            <div className="bg-white/20 p-1.5 rounded-full"><ArrowRight size={16} className="text-white rtl:rotate-180" /></div>
                          </div>
                        </div>
                      </DraggableCard>
                    </div>
                </div>
              </div>
            </div>

            {/* Related Products from Shop */}
            <div className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-12">
              <div className="flex justify-between items-end mb-8">
                 <div>
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{lang === 'en' ? 'Gear Up for Adventure' : 'تجهّز للمغامرة'}</h3>
                   <p className="text-slate-500 dark:text-slate-400 mt-2">{lang === 'en' ? 'Essential items from our shop for your safari.' : 'عناصر أساسية من متجرنا لرحلة السفاري الخاصة بك.'}</p>
                 </div>
                 <button onClick={() => navigateTo('shop')} className="text-brand-600 font-bold hover:underline text-sm hidden md:block">
                   {lang === 'en' ? 'View All Products' : 'عرض كل المنتجات'}
                 </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {shopProducts
                  .filter(p => ['Travel Essentials', 'Accessories', 'FootWears', 'Merchandise'].includes(p.category.en))
                  .slice(0, 4)
                  .map((product) => (
                  <div 
                    key={product.id} 
                    onClick={() => {
                      setSelectedProduct(product);
                      const isFootwear = product.category.en === 'FootWears';
                      const sizes = isFootwear ? (product.sizes || ["40", "41", "42", "43", "44", "45"]) : ["XL", "XXL", "Medium", "Small"];
                      setSelectedSize(sizes[0]);
                      const colors = product.colors || defaultColors;
                      setSelectedColor(colors[0]);
                      setCustomColor('');
                    }} 
                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-slate-100 dark:border-slate-700"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
                      <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {product.onSale && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">{lang === 'en' ? 'SALE' : 'خصم'}</div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{product.category[lang]}</div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 line-clamp-1 group-hover:text-brand-600 transition-colors">{product.name[lang]}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-brand-600 font-bold">{product.price[lang]}</span>
                        <div className="bg-slate-100 dark:bg-slate-700 p-1.5 rounded-full text-slate-600 dark:text-slate-300 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          <ShoppingBag size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center md:hidden">
                 <button onClick={() => navigateTo('shop')} className="text-brand-600 font-bold hover:underline text-sm">
                   {lang === 'en' ? 'View All Products' : 'عرض كل المنتجات'}
                 </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- TESTIMONIALS SECTION --- */}
      {activePage === 'home' && (
        <section className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden relative">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-200 dark:bg-brand-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.testimonials}</h2>
              <div className="w-24 h-1 bg-brand-600 mx-auto rounded-full"></div>
              <p className="text-slate-500 mt-6 text-lg max-w-2xl mx-auto">{t.testimonialsSubtitle}</p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Navigation Buttons */}
              <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-all hidden md:block">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonialsList.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-all hidden md:block">
                <ChevronRight size={24} />
              </button>

              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 dark:border-slate-700 relative overflow-visible">
                <div className="absolute -top-6 left-8 bg-brand-600 text-white p-4 rounded-2xl shadow-lg rotate-3 z-20">
                  <Quote size={32} fill="currentColor" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="relative shrink-0">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-brand-400 to-blue-600 shadow-xl">
                      <img 
                        src={testimonialsList[currentTestimonial].image} 
                        alt={testimonialsList[currentTestimonial].name[lang]} 
                        className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800"
                      />
                    </div>
                  </div>

                  <div className="text-center md:text-start flex-1">
                    <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
                      "{testimonialsList[currentTestimonial].quote[lang]}"
                    </p>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-2xl mb-1">{testimonialsList[currentTestimonial].name[lang]}</h4>
                      <p className="text-brand-600 dark:text-brand-400 font-medium uppercase tracking-wide text-sm">{testimonialsList[currentTestimonial].role[lang]}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-10">
                {testimonialsList.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-brand-600 w-8' : 'bg-slate-300 dark:bg-slate-600 w-2 hover:bg-brand-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <button onClick={() => setIsTestimonialFormOpen(true)} className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-slate-700 px-6 py-3 rounded-full font-bold hover:bg-brand-50 dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md">
                  <Plus size={20} /> {lang === 'en' ? "Share Your Experience" : "شارك تجربتك"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- LATEST NEWS SECTION --- */}
      {activePage === 'home' && (
        <section className="py-12 md:py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.latestNews}</h2>
              <p className="text-slate-500 mt-4">{t.stayUpdated}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestNews.map((news, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img src={news.image} alt={news.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-bold text-brand-600 uppercase tracking-wider">{news.date[lang]}</p>
                      <div className="flex items-center gap-1 text-xs text-slate-400"><Clock size={12} /> 5 min read</div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors">{news.title[lang]}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{news.excerpt[lang]}</p>
                    <button className="text-brand-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t.readMore} <ArrowRight size={16} className="rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- PROMOTIONAL SHOWCASE SECTION --- */}
      {activePage === 'home' && (
        <section className="py-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Promo Image 1 */}
              <div 
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => openModal(lang === 'en' ? "Luxury Marina Cruises" : "رحلات مارينا الفاخرة")}
              >
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" 
                  alt="Luxury Marina" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{lang === 'en' ? "Luxury Marina Cruises" : "رحلات مارينا الفاخرة"}</h3>
                </div>
              </div>

              {/* Promo Image 2 */}
              <div 
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => openModal(lang === 'en' ? "Exclusive Desert Camps" : "مخيمات صحراوية حصرية")}
              >
                <img 
                  src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=800" 
                  alt="Desert Safari" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{lang === 'en' ? "Exclusive Desert Camps" : "مخيمات صحراوية حصرية"}</h3>
                </div>
              </div>

              {/* Tour Video Card */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg cursor-default">
                <video
                  poster="https://placehold.co/800x450?text=Tour+Preview"
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover"
                >
                  <source src="https://cdn.pixabay.com/v/img/videos/PexelsVideos2650751_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 pointer-events-none">
                   <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">
                     {lang === 'en' ? "Live Tour" : "جولة حية"}
                   </span>
                   <h3 className="text-white text-xl font-bold">{lang === 'en' ? "City Walk Experience" : "تجربة سيتي ووك"}</h3>
                </div>
              </div>
            </div>

            {/* Related Products from Shop */}
            <div className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-12">
              <div className="flex justify-between items-end mb-8">
                 <div>
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{lang === 'en' ? 'Gear Up for Adventure' : 'تجهّز للمغامرة'}</h3>
                   <p className="text-slate-500 dark:text-slate-400 mt-2">{lang === 'en' ? 'Essential items from our shop for your safari.' : 'عناصر أساسية من متجرنا لرحلة السفاري الخاصة بك.'}</p>
                 </div>
                 <button onClick={() => navigateTo('shop')} className="text-brand-600 font-bold hover:underline text-sm hidden md:block">
                   {lang === 'en' ? 'View All Products' : 'عرض كل المنتجات'}
                 </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {shopProducts
                  .filter(p => ['Travel Essentials', 'Accessories', 'FootWears', 'Merchandise'].includes(p.category.en))
                  .slice(0, 4)
                  .map((product) => (
                  <div 
                    key={product.id} 
                    onClick={() => {
                      setSelectedProduct(product);
                      const isFootwear = product.category.en === 'FootWears';
                      const sizes = isFootwear ? (product.sizes || ["40", "41", "42", "43", "44", "45"]) : ["XL", "XXL", "Medium", "Small"];
                      setSelectedSize(sizes[0]);
                      const colors = product.colors || defaultColors;
                      setSelectedColor(colors[0]);
                      setCustomColor('');
                    }} 
                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-slate-100 dark:border-slate-700"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
                      <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {product.onSale && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">{lang === 'en' ? 'SALE' : 'خصم'}</div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{product.category[lang]}</div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 line-clamp-1 group-hover:text-brand-600 transition-colors">{product.name[lang]}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-brand-600 font-bold">{product.price[lang]}</span>
                        <div className="bg-slate-100 dark:bg-slate-700 p-1.5 rounded-full text-slate-600 dark:text-slate-300 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          <ShoppingBag size={14} />
                        </div>
                      </div>
                    </div>3
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center md:hidden">
                 <button onClick={() => navigateTo('shop')} className="text-brand-600 font-bold hover:underline text-sm">
                   {lang === 'en' ? 'View All Products' : 'عرض كل المنتجات'}
                 </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- HOME GALLERY PREVIEW --- */}
      {activePage === 'home' && (
        <section className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.gallery}</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">{t.gallerySubtitle}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16 perspective-1000">
              {homeGalleryImages.map((img, index) => {
                // Center Image (Index 1)
                if (index === 1) {
                  return (
                    <div key={index} className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer z-10" onClick={() => navigateTo('gallery')}>
                      {/* Rotating Rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-400 animate-[spin_20s_linear_infinite]"></div>
                      <div className="absolute inset-2 rounded-full border-2 border-dashed border-blue-400 animate-[spin_15s_linear_infinite_reverse]"></div>

                      {/* Main Image Container */}
                      <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl animate-[spin_30s_linear_infinite]">
                         <img src={img.src} alt={img.alt[lang]} className="w-full h-full object-cover" />
                      </div>

                      {/* Center Label */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none">
                        <span className="font-bold text-brand-600">{img.alt[lang]}</span>
                      </div>
                    </div>
                  );
                }
                // Side Images
                return (
                  <div key={index} className={`relative w-64 h-80 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl group cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${index === 0 ? 'md:-rotate-6' : 'md:rotate-6'}`} onClick={() => navigateTo('gallery')}>
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <img src={img.src} alt={img.alt[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt[lang]}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={() => navigateTo('gallery')} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-500/30">
              <span className="relative z-10">{lang === 'en' ? "View Full Gallery" : "عرض المعرض الكامل"}</span>
              <ArrowRight size={20} className="relative z-10 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </section>
      )}

      {/* --- SERVICES SECTION --- */}
      {(activePage === 'home' || activePage === 'services') && (
      <section id="services" className={`py-12 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-300 ${activePage === 'services' ? 'pt-32 min-h-screen' : ''} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">{t.ourExpertise}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.whyChoose}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 sticky top-24">
                <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-lg border-b border-slate-100 dark:border-slate-800 pb-4">{t.services}</h3>
                <ul className="space-y-3">
                  {serviceTypes[lang].map(service => (
                    <li key={service}>
                      <button 
                        onClick={() => openModal(service)} 
                        className="w-full flex items-center justify-between p-3 rounded-xl text-start text-slate-600 dark:text-slate-300 hover:bg-brand-600 hover:text-white transition-all group shadow-sm hover:shadow-md border border-slate-50 dark:border-slate-800"
                      >
                        <span className="font-medium">{service}</span>
                        <ArrowRight size={16} className="opacity-0 -translate-x-2 rtl:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all rtl:rotate-180" />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-brand-50 dark:bg-slate-800 border border-brand-100 dark:border-slate-700 rounded-xl">
                  <p className="text-sm text-brand-800 font-medium mb-2">{t.needHelp}</p>
                  <button onClick={() => openModal('Custom Inquiry')} className="text-xs bg-brand-600 text-white px-4 py-2 rounded-lg w-full hover:bg-brand-700 transition-colors">
                    {t.contactSupport}
                  </button>
                </div>
                <button className="w-full mt-4 flex items-center justify-center gap-2 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-3 rounded-xl font-bold hover:border-brand-600 hover:text-brand-600 dark:hover:border-brand-400 dark:hover:text-brand-400 transition-all group">
                  <Download size={18} className="group-hover:animate-bounce" />
                  <span>{lang === 'en' ? 'Download Brochure' : 'تحميل الكتيب'}</span>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {/* Card 1 */}
                <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Globe className="text-brand-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Global Reach</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We connect your business to international markets with our extensive network of partners and digital infrastructure.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="text-brand-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data Analytics</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Make informed decisions with our cutting-edge analytics tools that provide real-time insights into your performance.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <ShieldCheck className="text-brand-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Secure Systems</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Security is our priority. We implement enterprise-grade encryption and security protocols for all our clients.
                  </p>
                </div>
              </div>

              {/* Pricing Section */}
              {activePage === 'services' && (
                <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{t.pricing}</h3>
                    <p className="text-slate-500 mt-4">{t.pricingSubtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                      <div key={index} className={`relative p-8 rounded-2xl border ${plan.highlight ? 'border-brand-600 shadow-xl scale-105 z-10 bg-white dark:bg-slate-900' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50'} transition-all duration-300`}>
                        {plan.highlight && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
                            {t.mostPopular}
                          </div>
                        )}
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name[lang]}</h4>
                        <p className="text-3xl font-extrabold text-brand-600 mb-6">{plan.price[lang]}</p>
                        <ul className="space-y-4 mb-8">
                          {plan.features[lang].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                              <Check size={18} className="text-brand-600 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button onClick={() => openModal(`Plan: ${plan.name[lang]}`)} className={`w-full py-3 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-brand-600 dark:hover:border-brand-600'}`}>
                          {t.getStarted}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {activePage === 'services' && (
                <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{t.explore} FAQ</h3>
                    <p className="text-slate-500 mt-4">Common questions about our services and processes.</p>
                  </div>
                  <div className="grid gap-6 max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-brand-200 transition-colors">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">{faq.question[lang]}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{faq.answer[lang]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    </section>
    )}

      {/* --- GALLERY SECTION --- */}
      {activePage === 'gallery' && (
      <section id="gallery" className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">{t.gallery}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.gallerySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                onClick={() => {
                  if (item.type === 'image') {
                    setCurrentLightboxItems(galleryItems);
                    setLightboxIndex(index);
                  }
                }}
                className={`relative group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 h-64 border border-slate-100 dark:border-slate-700 ${item.type === 'image' ? 'cursor-pointer' : ''}`}
              >
                {item.type === 'video' ? (
                  <div className="w-full h-full relative">
                    <video 
                      src={item.src} 
                      poster={item.poster}
                      className="w-full h-full object-cover"
                      controls
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 pointer-events-none shadow-md">
                      <Play size={12} fill="currentColor" /> Video
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      src={item.src} 
                      alt={item.title[lang]} 
                      className={`w-full h-full object-cover transition-all duration-700 
                        ${item.style === 'zoom' ? 'group-hover:scale-110' : ''}
                        ${item.style === 'grayscale' ? 'grayscale group-hover:grayscale-0' : ''}
                        ${item.style === 'rotate' ? 'group-hover:rotate-3 group-hover:scale-110' : ''}
                        ${item.style === 'overlay' ? 'group-hover:scale-105' : ''}
                      `}
                    />
                    {/* Overlay Content */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 flex flex-col justify-end p-6
                      ${item.style === 'overlay' ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}
                    `}>
                      <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title[lang]}</h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* --- PLAN YOUR TRIP SECTION --- */}
      {activePage === 'plan' && (
      <section id="plan" className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">{t.planTrip}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.planTitle}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              {t.planSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Trip Builder Form */}
            <div className="lg:col-span-2">
              {/* Flight Search Widget */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden mb-8">
                <div className="bg-brand-600 p-6">
                  <h3 className="text-white font-bold text-xl flex items-center gap-2">
                    <Plane className="text-white" /> {lang === 'en' ? 'Flight Search' : 'بحث الرحلات'}
                  </h3>
                </div>
                <form onSubmit={handleFlightSearch} className="p-5 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'From' : 'من'}</label>
                      <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 bg-slate-50 dark:bg-slate-900">
                         <PlaneTakeoff size={18} className="text-slate-400 mr-2 rtl:ml-2" />
                         <input type="text" placeholder={lang === 'en' ? "Origin City" : "مدينة المغادرة"} className="w-full bg-transparent outline-none dark:text-white" value={flightSearch.from} onChange={e => setFlightSearch({...flightSearch, from: e.target.value})} required />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'To' : 'إلى'}</label>
                      <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 bg-slate-50 dark:bg-slate-900">
                         <PlaneLanding size={18} className="text-slate-400 mr-2 rtl:ml-2" />
                         <input type="text" placeholder={lang === 'en' ? "Destination City" : "مدينة الوصول"} className="w-full bg-transparent outline-none dark:text-white" value={flightSearch.to} onChange={e => setFlightSearch({...flightSearch, to: e.target.value})} required />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div>
                       <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Departure' : 'المغادرة'}</label>
                       <input type="date" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none dark:text-white text-slate-600" value={flightSearch.depart} onChange={e => setFlightSearch({...flightSearch, depart: e.target.value})} required />
                     </div>
                     <div>
                       <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Return' : 'العودة'}</label>
                       <input type="date" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none dark:text-white text-slate-600" value={flightSearch.return} onChange={e => setFlightSearch({...flightSearch, return: e.target.value})} />
                     </div>
                     <div>
                       <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Passengers' : 'المسافرون'}</label>
                       <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none dark:text-white" value={flightSearch.passengers} onChange={e => setFlightSearch({...flightSearch, passengers: e.target.value})}>
                         {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {lang === 'en' ? 'Passenger(s)' : 'مسافر'}</option>)}
                       </select>
                     </div>
                  </div>
                  <button type="submit" className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20">
                    {lang === 'en' ? 'Search Flights' : 'بحث الرحلات'}
                  </button>
                </form>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="bg-brand-600 p-6">
                  <h3 className="text-white font-bold text-xl flex items-center gap-2">
                    <MapPin className="text-white" /> {t.tripDetails}
                  </h3>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); openModal('Custom Trip Plan'); }} className="p-5 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Destination' : 'الوجهة'}</label>
                      <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-600 outline-none dark:text-white">
                        <option>Dubai</option>
                        <option>Abu Dhabi</option>
                        <option>Sharjah</option>
                        <option>Ras Al Khaimah</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Travel Date' : 'تاريخ السفر'}</label>
                      <input type="date" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-600 outline-none dark:text-white text-slate-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Duration (Days)' : 'المدة (أيام)'}</label>
                      <input type="number" min="1" defaultValue="7" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-600 outline-none dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Travelers' : 'المسافرون'}</label>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3">
                        <Users size={18} className="text-slate-400" />
                        <input type="number" min="1" defaultValue="2" className="w-full bg-transparent outline-none dark:text-white" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">{lang === 'en' ? 'Budget Preference' : 'تفضيلات الميزانية'}</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['Economy', 'Standard', 'Luxury'].map((b) => (
                        <label key={b} className="cursor-pointer">
                          <input type="radio" name="budget" value={b} className="peer sr-only" defaultChecked={b === 'Standard'} />
                          <div className="text-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 peer-checked:bg-brand-50 dark:peer-checked:bg-brand-900/20 peer-checked:border-brand-600 peer-checked:text-brand-600 dark:peer-checked:text-brand-400 transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
                            <span className="font-medium text-sm">{lang === 'ar' && b === 'Economy' ? 'اقتصادي' : lang === 'ar' && b === 'Standard' ? 'قياسي' : lang === 'ar' && b === 'Luxury' ? 'فاخر' : b}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Interests & Notes' : 'اهتمامات وملاحظات'}</label>
                    <textarea className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-600 outline-none dark:text-white h-32 resize-none" placeholder={lang === 'en' ? "E.g., Desert Safari, Shopping, Museums..." : "مثال: سفاري صحراوي، تسوق، متاحف..."}></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20">
                    {t.submitPlan}
                  </button>
                </form>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Essential Info Cards */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckSquare className="text-brand-600" /> {t.essentialInfo}
                  </h3>
                  <button 
                    onClick={() => window.print()}
                    className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-all"
                    title={lang === 'en' ? "Print" : "طباعة"}
                  >
                    <Printer size={18} />
                  </button>
                </div>
                <div className="space-y-6">
                  {travelInfo.map((info, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{info.title[lang]}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{info.content[lang]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packing Checklist */}
              <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-bold text-lg mb-1">{t.packingList}</h3>
                <p className="text-brand-100 text-sm mb-4">{t.packingSubtitle}</p>
                <ul className="space-y-2">
                  {['Passport & Visa', 'Sunscreen & Sunglasses', 'Comfortable Shoes', 'Power Adapter (Type G)', 'Light Jacket (for AC)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm"><div className="w-4 h-4 rounded border border-brand-300 flex items-center justify-center"><Check size={10} /></div> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* --- SHOP SECTION --- */}
      {activePage === 'shop' && (
      <section id="shop" className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">{t.ourShop}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.shopSubtitle}
            </p>
          </div>

          {/* Mobile Category Filter */}
          <div className="md:hidden mb-8 sticky top-16 z-30 bg-slate-50 dark:bg-slate-900 py-2 -mx-4 px-4 shadow-sm">
            <div className="relative">
              <select 
                value={shopFilter} 
                onChange={(e) => setShopFilter(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white py-3 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-600 shadow-sm transition-colors"
              >
                <option value="All">{lang === 'en' ? 'All Categories' : 'جميع الفئات'}</option>
                {shopCategories[lang].map((cat) => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                <ChevronDown size={16} className="rtl:mr-auto rtl:ml-0" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {shopProducts.filter(p => shopFilter === 'All' || p.category[lang] === shopFilter).map((product, index) => (
              <React.Fragment key={product.id}>
              <div onClick={() => {
                setSelectedProduct(product);
                const isFootwear = product.category.en === 'FootWears';
                const sizes = isFootwear ? (product.sizes || ["40", "41", "42", "43", "44", "45"]) : ["XL", "XXL", "Medium", "Small"];
                setSelectedSize(sizes[0]);
                const colors = product.colors || defaultColors;
                setSelectedColor(colors[0]);
                setCustomColor('');
              }} className="cursor-pointer group">
                {/* Style 1: Classic Card */}
                {product.style === 'classic' && (
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-700">
                      <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-white dark:bg-slate-900 p-2 rounded-full shadow-md text-brand-600">
                        <ShoppingBag size={18} />
                      </div>
                      {product.onSale && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md z-10 animate-pulse">{lang === 'en' ? 'SALE' : 'خصم'}</div>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{product.category[lang]}</div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">{product.name[lang]}</h3>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xl font-bold text-brand-600">{product.price[lang]}</span>
                        <div className="flex items-center gap-1 text-amber-400 text-sm font-bold"><Star size={14} fill="currentColor" /> {product.rating}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Style 2: Overlay Card */}
                {product.style === 'overlay' && (
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {product.onSale && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md z-10 animate-pulse">{lang === 'en' ? 'SALE' : 'خصم'}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">{product.category[lang]}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{product.name[lang]}</h3>
                        <div className="flex items-center justify-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          <span className="text-xl font-bold text-white">{product.price[lang]}</span>
                          <button className="bg-white text-slate-900 p-2 rounded-full hover:bg-brand-400 transition-colors">
                            <ArrowRight size={20} className="rtl:rotate-180" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Style 3: Minimal Card */}
                {product.style === 'minimal' && (
                  <div className="bg-transparent h-full flex flex-col group">
                    <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4">
                      <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      {product.onSale && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md z-10 animate-pulse">{lang === 'en' ? 'SALE' : 'خصم'}</div>
                      )}
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1 group-hover:text-brand-600 transition-colors">{product.name[lang]}</h3>
                      <p className="text-slate-500 text-sm mb-2">{product.category[lang]}</p>
                      <span className="text-lg font-bold text-slate-900 dark:text-white">{product.price[lang]}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* --- PARALLAX FEATURE SECTION (After 2nd Product) --- */}
              {index === 1 && (
                <div className="col-span-full relative h-[60vh] min-h-[500px] rounded-3xl overflow-hidden my-8 group perspective-1000 shadow-2xl border border-slate-200 dark:border-slate-700">
                  {/* Parallax Background */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2021')] bg-fixed bg-cover bg-center transition-transform duration-1000 scale-110 group-hover:scale-100"></div>
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-8 items-center">
                        <div className="text-white space-y-6 animate-in slide-in-from-left duration-700 z-10">
                          <span className="bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">Featured Collection</span>
                          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">Travel in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">Ultimate Style</span></h2>
                          <p className="text-lg md:text-xl text-slate-100 max-w-md drop-shadow-md font-medium">Discover our exclusive range of premium travel accessories designed for the modern explorer.</p>
                          <button onClick={() => openModal('Featured Collection')} className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-brand-50 transition-all shadow-xl hover:scale-105 flex items-center gap-2 group/btn">
                              Explore Collection <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                        
                        {/* Floating Products */}
                        <div className="relative block h-80 mt-8 md:mt-0">
                          <DraggableCard className="absolute top-0 right-4 md:right-0 z-10 hover:z-20" onClick={() => openModal('Travel Kit')}>
                            <div className="w-64 md:w-72 h-72 md:h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform rotate-6 hover:rotate-0 transition-all duration-500 shadow-2xl hover:scale-105">
                              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800" className="w-full h-40 md:h-48 object-cover rounded-xl mb-4 shadow-inner" alt="Kit" />
                              <h4 className="text-white font-bold text-lg md:text-xl">Premium Travel Kit</h4>
                              <p className="text-white/80 text-sm mt-1">All essentials in one place.</p>
                              <div className="mt-3 flex justify-between items-center"><span className="font-bold text-brand-300">AED 150</span> <div className="bg-white/20 p-1.5 rounded-full"><ArrowRight size={16} className="text-white" /></div></div>
                            </div>
                          </DraggableCard>
                          <DraggableCard className="absolute top-12 right-12 md:right-48 z-0 hover:z-20" onClick={() => openModal('Passport Holder')}>
                            <div className="w-56 md:w-64 h-64 md:h-72 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-all duration-500 shadow-2xl hover:scale-105">
                              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" className="w-full h-40 object-cover rounded-xl mb-4 shadow-inner" alt="Wallet" />
                              <h4 className="text-white font-bold text-lg">Leather Holder</h4>
                              <p className="text-white/80 text-sm mt-1">Genuine leather finish.</p>
                              <div className="mt-3 flex justify-between items-center"><span className="font-bold text-brand-300">AED 120</span> <div className="bg-white/20 p-1.5 rounded-full"><ArrowRight size={16} className="text-white" /></div></div>
                            </div>
                          </DraggableCard>
                        </div>
                    </div>
                  </div>
                </div>
              )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="mt-16 text-center p-8 bg-brand-50 dark:bg-slate-800/50 rounded-2xl border border-brand-100 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 mb-4">{lang === 'en' ? "Looking for something specific? We can source custom items for your trip." : "تبحث عن شيء محدد؟ يمكننا توفير عناصر مخصصة لرحلتك."}</p>
            <button onClick={() => openModal('Custom Shop Request')} className="text-brand-600 font-bold hover:underline">{t.contactSupport}</button>
          </div>
        </div>
      </section>
      )}

      {/* --- SAFARI PACKAGES PAGE --- */}
      {activePage === 'safari' && (
        <section id="safari" className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Hero for Safari */}
          <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=1600" alt="Desert Safari" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{lang === 'en' ? "Desert Safari Adventures" : "مغامرات السفاري الصحراوية"}</h1>
                  <p className="text-xl max-w-2xl mx-auto drop-shadow-md">{lang === 'en' ? "Discover the magic of the Arabian Desert with our premium safari packages." : "اكتشف سحر الصحراء العربية مع باقات السفاري المتميزة لدينا."}</p>
                </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {safariPackages.map((pkg) => (
                  <div key={pkg.id} onClick={() => { setSelectedSafari(pkg); setActivePage('safari-details'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col group cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <img src={pkg.image} alt={pkg.title[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        {pkg.popular && (
                            <div className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                              <Star size={12} fill="currentColor" /> {lang === 'en' ? 'POPULAR' : 'شائع'}
                            </div>
                        )}
                        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                            <Clock size={14} /> {pkg.duration[lang]}
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleCompare(pkg); }}
                          className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors z-20 ${compareList.find(p => p.id === pkg.id) ? 'bg-brand-600 text-white' : 'bg-white/90 text-slate-400 hover:text-brand-600'}`}
                          title={lang === 'en' ? "Compare" : "مقارنة"}
                        >
                          <ArrowRightLeft size={18} />
                        </button>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.title[lang]}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{pkg.description[lang]}</p>
                        
                        <div className="mb-4">
                          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">{lang === 'en' ? 'Gallery' : 'المعرض'}</p>
                          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                            {pkg.gallery.map((img, idx) => (
                              <img 
                                key={idx} 
                                src={img.src} 
                                alt={img.title[lang]}
                                className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-slate-200 dark:border-slate-700" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentLightboxItems(pkg.gallery);
                                  setLightboxIndex(idx);
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="mb-6 space-y-2">
                            {pkg.includes[lang].map((inc, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                  <CheckCircle size={14} className="text-brand-600 shrink-0" /> {inc}
                              </div>
                            ))}
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                            <div>
                              <span className="text-xs text-slate-400 block uppercase">{lang === 'en' ? 'Per Person' : 'للشخص'}</span>
                              <span className="text-2xl font-bold text-brand-600">{pkg.price[lang]}</span>
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); openModal(pkg.title[lang]); }} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2 rounded-xl font-bold hover:bg-brand-600 dark:hover:bg-brand-400 hover:text-white transition-colors">
                              {t.bookNow}
                            </button>
                        </div>
                      </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Compare Floating Button */}
          {compareList.length > 0 && (
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in">
              <button 
                onClick={() => setIsCompareOpen(true)}
                className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform border border-slate-700"
              >
                <ArrowRightLeft size={20} />
                <span className="font-bold">{lang === 'en' ? `Compare (${compareList.length})` : `مقارنة (${compareList.length})`}</span>
                <span onClick={(e) => { e.stopPropagation(); setCompareList([]); }} className="bg-white/20 rounded-full p-1 hover:bg-white/30 ml-2 cursor-pointer">
                  <X size={14} />
                </span>
              </button>
            </div>
          )}

          {/* Compare Modal */}
          {isCompareOpen && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full p-6 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                <button 
                    onClick={() => setIsCompareOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-10"
                  >
                    <X size={24} />
                  </button>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                    {lang === 'en' ? "Package Comparison" : "مقارنة الباقات"}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {compareList.map(pkg => (
                      <div key={pkg.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 relative">
                        <button onClick={() => toggleCompare(pkg)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={20} /></button>
                        <img src={pkg.image} alt={pkg.title[lang]} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.title[lang]}</h4>
                        <p className="text-brand-600 font-bold text-2xl mb-4">{pkg.price[lang]}</p>
                        
                        <div className="space-y-4 divide-y divide-slate-200 dark:divide-slate-700">
                          <div className="pt-4 first:pt-0"><span className="text-xs font-bold text-slate-500 uppercase block mb-1">{lang === 'en' ? 'Duration' : 'المدة'}</span><p className="text-slate-700 dark:text-slate-300 font-medium">{pkg.duration[lang]}</p></div>
                          <div className="pt-4"><span className="text-xs font-bold text-slate-500 uppercase block mb-1">{lang === 'en' ? 'Includes' : 'يشمل'}</span><ul className="space-y-1">{pkg.includes[lang].map((inc, i) => (<li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0" /> {inc}</li>))}</ul></div>
                          <div className="pt-4"><span className="text-xs font-bold text-slate-500 uppercase block mb-1">{lang === 'en' ? 'Description' : 'الوصف'}</span><p className="text-sm text-slate-600 dark:text-slate-400">{pkg.description[lang]}</p></div>
                        </div>
                        <button onClick={() => { setIsCompareOpen(false); openModal(pkg.title[lang]); }} className="w-full mt-6 bg-brand-600 text-white py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">{t.bookNow}</button>
                      </div>
                    ))}
                    {compareList.length === 1 && (
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[400px]">
                          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-4">
                            <ArrowRightLeft size={32} className="text-slate-400" />
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 font-medium">
                            {lang === 'en' ? "Select another package to compare" : "اختر باقة أخرى للمقارنة"}
                          </p>
                          <button onClick={() => setIsCompareOpen(false)} className="mt-4 text-brand-600 font-bold hover:underline">
                            {lang === 'en' ? "Browse Packages" : "تصفح الباقات"}
                          </button>
                      </div>
                    )}
                  </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* --- SAFARI DETAILS PAGE --- */}
      {activePage === 'safari-details' && selectedSafari && (
        <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <button onClick={() => setActivePage('safari')} className="mb-6 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-medium">
              <ChevronLeft size={20} className="rtl:rotate-180" /> {lang === 'en' ? 'Back to Packages' : 'العودة للباقات'}
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] relative group">
                  <img src={selectedSafari.image} alt={selectedSafari.title[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedSafari.title[lang]}</h1>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="flex items-center gap-1"><Clock size={16} /> {selectedSafari.duration[lang]}</span>
                      {selectedSafari.popular && <span className="flex items-center gap-1 text-amber-400"><Star size={16} fill="currentColor" /> {lang === 'en' ? 'Popular Choice' : 'خيار شائع'}</span>}
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{lang === 'en' ? 'Overview' : 'نظرة عامة'}</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {selectedSafari.longDescription ? selectedSafari.longDescription[lang] : selectedSafari.description[lang]}
                  </p>
                </div>

                {selectedSafari.itinerary && (
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{lang === 'en' ? 'Itinerary' : 'برنامج الرحلة'}</h2>
                    <div className="space-y-8 relative before:absolute before:left-[19px] rtl:before:right-[19px] rtl:before:left-auto before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                      {selectedSafari.itinerary.map((item, index) => (
                        <div key={index} className="relative pl-12 rtl:pr-12 rtl:pl-0">
                          <div className="absolute left-0 rtl:right-0 rtl:left-auto top-1 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 border-4 border-white dark:border-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-xs z-10">
                            {index + 1}
                          </div>
                          {/* Conditionally render the map for the first two itinerary items */}
                          {index < 2 && (
                            <MapComponent 
                              latitude={index === 0 ? selectedSafari.pickupCoordinates?.latitude : selectedSafari.locationCoordinates?.latitude} 
                              longitude={index === 0 ? selectedSafari.pickupCoordinates?.longitude : selectedSafari.locationCoordinates?.longitude} 
                            />
                          )}
                          <div>
                            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1 block">{item.time}</span>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title[lang]}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc[lang]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery Preview */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
                   <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{lang === 'en' ? 'Photo Gallery' : 'معرض الصور'}</h2>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedSafari.gallery.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={img.src} 
                          alt={img.title[lang]} 
                          className="w-full h-32 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => { setCurrentLightboxItems(selectedSafari.gallery); setLightboxIndex(idx); }}
                        />
                      ))}
                   </div>
                </div>

                {/* Inquiry Form */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700" id="safari-inquiry">
                   <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{lang === 'en' ? 'Have Questions?' : 'لديك أسئلة؟'}</h2>
                   
                   {contactStatus === 'success' ? (
                      <div className="text-center py-8 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4 text-green-600">
                          <CheckCircle size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{lang === 'en' ? "Inquiry Sent!" : "تم إرسال الاستفسار!"}</h4>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">{lang === 'en' ? "We will get back to you shortly regarding this package." : "سنرد عليك قريباً بخصوص هذه الباقة."}</p>
                        <button onClick={() => setContactStatus('idle')} className="text-brand-600 font-bold hover:underline">{lang === 'en' ? "Send another inquiry" : "إرسال استفسار آخر"}</button>
                      </div>
                   ) : (
                     <form onSubmit={handleContactSubmit} className="space-y-4">
                        <input type="hidden" name="subject" value={`Safari Inquiry: ${selectedSafari.title[lang]}`} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? "Your Name" : "اسمك"}</label>
                            <input name="name" required type="text" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all" placeholder="John Doe" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? "Phone Number" : "رقم الهاتف"}</label>
                            <input name="phone" required type="tel" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all" placeholder="+971..." />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? "Email Address" : "البريد الإلكتروني"}</label>
                          <input name="email" required type="email" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? "Message" : "الرسالة"}</label>
                          <textarea name="message" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all h-32 resize-none" placeholder={lang === 'en' ? `I'm interested in ${selectedSafari.title[lang]}...` : `أنا مهتم بـ ${selectedSafari.title[lang]}...`}></textarea>
                        </div>
                        <button type="submit" disabled={contactStatus === 'submitting'} className="bg-brand-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20 disabled:opacity-70 flex items-center gap-2">
                          {contactStatus === 'submitting' ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              {lang === 'en' ? "Sending..." : "جاري الإرسال..."}
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              {lang === 'en' ? "Send Inquiry" : "إرسال الاستفسار"}
                            </>
                          )}
                        </button>
                     </form>
                   )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <SafariWeatherWidget 
                  latitude={selectedSafari.locationCoordinates?.latitude} 
                  longitude={selectedSafari.locationCoordinates?.longitude} 
                  lang={lang} 
                />
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 sticky top-24">
                  <div className="mb-6">
                    <span className="text-sm text-slate-500 dark:text-slate-400 block mb-1">{lang === 'en' ? 'Starting from' : 'يبدأ من'}</span>
                    <span className="text-4xl font-extrabold text-brand-600">{selectedSafari.price[lang]}</span>
                    <span className="text-sm text-slate-400"> / {lang === 'en' ? 'Person' : 'شخص'}</span>
                  </div>
                  
                  <button onClick={() => openModal(selectedSafari.title[lang])} className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 mb-6 flex items-center justify-center gap-2">
                    <Calendar size={20} /> {t.bookNow}
                  </button>

                  <div className="space-y-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{lang === 'en' ? 'What\'s Included' : 'ماذا يشمل'}</h4>
                    <ul className="space-y-3">
                      {selectedSafari.includes[lang].map((inc, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- ABOUT SECTION --- */}
      {activePage === 'about' && (
      <section id="about" className="pt-32 pb-24 bg-slate-900 relative overflow-hidden min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
            <div className="absolute -top-24 -start-24 w-96 h-96 rounded-full bg-brand-600 blur-3xl"></div>
            <div className="absolute bottom-0 end-0 w-96 h-96 rounded-full bg-brand-900 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900/50 border border-brand-700 text-brand-300 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2"></span>
                Established 2023
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ujem Travel & Tourism<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">Tourism</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Based in the vibrant heart of Dubai, we specialize in providing top-tier Travel, Tourism & Real Estate solutions. We turn your journeys and property dreams into reality with professional expertise.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <p className="text-2xl font-bold text-white">Dubai</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Based</p>
                </div>
                <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <p className="text-2xl font-bold text-white">Top-Tier</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Service</p>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <button onClick={() => openModal('UAE Visit Visa')} className="w-full text-start bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                  <FileCheck className="text-brand-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-semibold">UAE Visit Visa</h3>
                </button>
                <button onClick={() => openModal('Hotel Booking')} className="w-full text-start bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                  <Hotel className="text-brand-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-semibold">Hotel Booking</h3>
                </button>
                <button onClick={() => openModal('Real Estate')} className="w-full text-start bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                  <Building2 className="text-brand-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-semibold">Real Estate</h3>
                </button>
              </div>
              <div className="space-y-4">
                <button onClick={() => openModal('Guided Tours')} className="w-full text-start bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                  <Map className="text-brand-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-semibold">Guided Tours</h3>
                </button>
                <button onClick={() => openModal('Holiday Packages')} className="w-full text-start bg-brand-600 p-6 rounded-2xl shadow-lg shadow-brand-600/20 transform hover:-translate-y-1 transition-all duration-300 group">
                  <Globe className="text-white mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-semibold">Holiday Packages</h3>
                </button>
              </div>
            </div>

          </div>

          {/* Team Section */}
          <div className="mt-24 border-t border-white/10 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white">Meet Our Leadership</h3>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Driven by passion and expertise, our team is dedicated to delivering excellence in every service we provide.
              </p>
            </div>
            
            <div className="relative px-4 md:px-12">
              <button 
                onClick={() => scrollTeam('left')} 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-colors hidden md:block"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div ref={teamScrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="min-w-[85vw] md:min-w-[350px] snap-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group flex-shrink-0">
                    <div className="h-80 overflow-hidden">
                       <img src={member.image} alt={member.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 text-center">
                       <h4 className="text-xl font-bold text-white">{member.name[lang]}</h4>
                       <p className="text-brand-400 font-medium mt-1">{member.role[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollTeam('right')} 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-colors hidden md:block"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Partners Strip */}
          <div className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16">
            <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white mb-10">{lang === 'en' ? "Our Trusted Partners" : "شركاؤنا الموثوقون"}</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              {partners.map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer hover:opacity-100 transition-opacity">
                  <div className="p-5 bg-slate-100 dark:bg-slate-800 rounded-2xl group-hover:bg-brand-50 dark:group-hover:bg-brand-900/20 transition-colors">
                    <p.icon size={40} className="text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* --- CAREERS SECTION --- */}
      {activePage === 'careers' && (
      <section id="careers" className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Join Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Careers at Ujem Group
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              Build your future with a leading Travel, Tourism & Real Estate company in Dubai.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title[lang]}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Briefcase size={16} /> {job.type[lang]}</span>
                      <span className="flex items-center gap-1"><Map size={16} /> {job.location[lang]}</span>
                    </div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">{job.description[lang]}</p>
                  </div>
                  <button onClick={() => openModal(`Job Application: ${job.title[lang]}`)} className="bg-white dark:bg-slate-700 border border-brand-600 text-brand-600 dark:text-brand-400 px-6 py-2 rounded-full font-medium hover:bg-brand-50 dark:hover:bg-slate-600 transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* --- CONTACT SECTION --- */}
      {activePage === 'contact' && (
      <section id="contact" className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Get in Touch</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Contact Us
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              For company information, concerns, or general inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Company Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Map className="text-brand-600 mt-1 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Address</p>
                    <p className="text-slate-600 dark:text-slate-400">Deira Twin Tower office No.215, Behind Day to Day, Baniyas Metro Station. Dubai UAE.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-brand-600 mt-1 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">info@ujemgroup.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-brand-600 mt-1 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Phone</p>
                    <p className="text-slate-600 dark:text-slate-400">+971 556 554 093</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 h-64 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.497742467776!2d55.30747031501066!3d25.26645998386396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e511e2186401!2sDeira%20Twin%20Towers!5e0!3m2!1sen!2sae!4v1623456789012!5m2!1sen!2sae" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Map Actions */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Deira+Twin+Towers+Dubai', '_blank')}
                  className="flex-1 bg-brand-600 text-white py-3 px-4 rounded-xl font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <MapPin size={18} /> {lang === 'en' ? "Get Directions" : "احصل على الاتجاهات"}
                </button>
                <button 
                  onClick={() => {
                    const text = "Ujem Group Location:\nDeira Twin Tower office No.215, Behind Day to Day, Baniyas Metro Station, Dubai UAE.\nhttps://www.google.com/maps/search/?api=1&query=Deira+Twin+Towers+Dubai";
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Share2 size={18} /> {lang === 'en' ? "Share Location" : "مشاركة الموقع"}
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+971556554093'}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Phone size={18} /> {lang === 'en' ? "Call Now" : "اتصل الآن"}
                </button>
              </div>

              {/* QR Code */}
              <div className="mt-6 flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="bg-white p-2 rounded-lg shadow-inner shrink-0">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://ujem-travel-and-tourism.web.app")}`} 
                    alt="Website QR Code" 
                    className="w-20 h-20"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <QrCode size={16} className="text-brand-600" />
                    {lang === 'en' ? "Scan to Visit" : "امسح للزيارة"}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {lang === 'en' ? "Open our website on your mobile device instantly." : "افتح موقعنا على جهازك المحمول فوراً."}
                  </p>
                </div>
              </div>
            </div>

            {/* General Inquiry Form */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
              {contactStatus === 'success' ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4 text-green-600">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{lang === 'en' ? "Message Sent!" : "تم إرسال الرسالة!"}</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{lang === 'en' ? "Thank you for contacting us. We will get back to you shortly." : "شكراً لتواصلك معنا. سنرد عليك قريباً."}</p>
                  <button onClick={() => setContactStatus('idle')} className="text-brand-600 font-bold hover:underline">{lang === 'en' ? "Send another message" : "إرسال رسالة أخرى"}</button>
                </div>
              ) : (
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? "Your Name" : "اسمك"}</label>
                    <input name="name" required type="text" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? "Phone Number" : "رقم الهاتف"}</label>
                    <input name="phone" required type="tel" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all" placeholder="+971..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? "Email Address" : "البريد الإلكتروني"}</label>
                  <input name="email" required type="email" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.subject || "Subject"}</label>
                  <select name="subject" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Company Info</option>
                    <option>Concerns/Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.message || "Message"}</label>
                  <textarea name="message" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all h-32 resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" disabled={contactStatus === 'submitting'} className="w-full bg-brand-900 text-white font-bold py-3 rounded-lg hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {contactStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {lang === 'en' ? "Sending..." : "جاري الإرسال..."}
                    </>
                  ) : (
                    lang === 'en' ? "Send Message" : "إرسال الرسالة"
                  )}
                </button>
                <div className="mt-4 text-center border-t border-slate-100 dark:border-slate-800 pt-4">
                  <p className="text-xs text-slate-500 mb-2">{lang === 'en' ? "Need a faster reply?" : "هل تحتاج إلى رد أسرع؟"}</p>
                  <button type="button" onClick={handleWhatsAppClick} className="text-[#25D366] font-bold hover:underline flex items-center justify-center gap-1 mx-auto">
                    <MessageCircle size={16} /> {lang === 'en' ? "Chat on WhatsApp" : "دردش عبر واتساب"}
                  </button>
                </div>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* --- FOOTER --- */}
      <footer id="footer" className="bg-slate-900 text-slate-300 py-8 md:py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <img src={logo} alt="Ujem Group" className="h-16 w-auto mb-4" />
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              {t.footerText}
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-300">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.company}</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">{t.about}</button></li>
              <li><button onClick={() => navigateTo('careers')} className="hover:text-white transition-colors">{t.careers}</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">{t.contact}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.newsletter}</h4>
            <p className="text-slate-400 text-sm mb-4">{t.stayUpdated}</p>
            <form className="space-y-2" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none text-white text-sm" required />
              <button type="submit" className="w-full bg-brand-600 text-white font-bold py-2 rounded-lg hover:bg-brand-700 transition-colors text-sm">
                {t.subscribe}
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Ujem Group. {t.rights}
        </div>
      </footer>

      {/* --- BOOKING PAGE --- */}
      {activePage === 'book' && (
      <section id="book" className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-10 relative">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X size={24} />
            </button>
            
            {isSuccess ? (
              <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6 animate-in zoom-in duration-300">
                  <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {lang === 'en' ? 'Submission Successful!' : 'تم الإرسال بنجاح!'}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  {selectedService && selectedService.startsWith('Job Application') ? 
                    (lang === 'en' ? "We have received your application and will review it shortly." : "لقد استلمنا طلبك وسنراجعه قريباً.") :
                    (lang === 'en' ? "Thank you for your inquiry. Our team will contact you soon." : "شكراً لاستفسارك. سيتصل بك فريقنا قريباً.")
                  }
                </p>
                <button onClick={closeModal} className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
                  {lang === 'en' ? 'Close' : 'إغلاق'}
                </button>
              </div>
            ) : isError ? (
              <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 mb-6 animate-in zoom-in duration-300">
                  <AlertTriangle size={40} className="text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {lang === 'en' ? 'Submission Failed' : 'فشل الإرسال'}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {lang === 'en' ? "We couldn't send your request automatically. Please send it via your email app." : "لم نتمكن من إرسال طلبك تلقائيًا. يرجى إرساله عبر تطبيق البريد الإلكتروني الخاص بك."}
                  <br/>
                  <span className="text-xs text-red-500 opacity-80">Error: {errorMessage}</span>
                </p>
                <a 
                  href={manualMailto}
                  className="block w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20 text-center mb-3"
                >
                  {lang === 'en' ? 'Open Email App' : 'فتح تطبيق البريد'}
                </a>
                <button onClick={() => setIsError(false)} className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium">
                  {lang === 'en' ? 'Try Again' : 'حاول مرة أخرى'}
                </button>
              </div>
            ) : bookingStep === 'selection' ? (
              <div className="py-4 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {lang === 'en' ? 'Choose Booking Method' : 'اختر طريقة الحجز'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {lang === 'en' ? 'How would you like to proceed with your request?' : 'كيف تود المتابعة في طلبك؟'}
                  </p>
                </div>
                
                <div className="grid gap-4">
                  <button 
                    onClick={() => {
                      const text = selectedService 
                        ? (lang === 'en' ? `Hello, I would like to inquire about: ${selectedService}` : `مرحباً، أود الاستفسار عن: ${selectedService}`)
                        : (lang === 'en' ? "Hello, I have a general inquiry." : "مرحباً، لدي استفسار عام.");
                      window.open(`https://wa.me/971556554093?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="flex items-center justify-center gap-4 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#128C7E] transition-all shadow-lg hover:-translate-y-1 group"
                  >
                    <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
                    <div className="text-start">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wider">{lang === 'en' ? 'Chat via' : 'الدردشة عبر'}</div>
                      <div className="text-xl">WhatsApp</div>
                    </div>
                  </button>
                  
                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                    <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">{lang === 'en' ? 'OR' : 'أو'}</span>
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                  </div>

                  <button 
                    onClick={() => setBookingStep('form')}
                    className="flex items-center justify-center gap-4 w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg hover:-translate-y-1 group"
                  >
                    <FileCheck size={28} className="group-hover:scale-110 transition-transform" />
                    <div className="text-start">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wider">{lang === 'en' ? 'Complete' : 'إكمال'}</div>
                      <div className="text-xl">{lang === 'en' ? 'Online Form' : 'النموذج الإلكتروني'}</div>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
            <>
            <div className="flex items-center gap-2 mb-2">
              <button type="button"
                onClick={() => setBookingStep('selection')}
                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              >
                <ChevronLeft size={24} className="rtl:rotate-180" />
              </button>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedService && selectedService.startsWith('Job Application') ? 'Apply Now' : 'Book Service'}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              {selectedService ? (
                selectedService.startsWith('Job Application') ? 
                <>Applying for <span className="font-semibold text-brand-600">{selectedService.replace('Job Application: ', '')}</span></> :
                <>Inquire about <span className="font-semibold text-brand-600">{selectedService}</span></>
              ) : (
                "Select a service to start your journey"
              )}
            </p>

            <form id="bookingForm" onSubmit={handleBookSubmit} className="space-y-5">
              <div className={bookingStep === 'payment' ? 'hidden' : 'space-y-5'}>
              {!selectedService && (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Service Type</label>
                  <div className="relative">
                    <select name="serviceType" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all appearance-none" onChange={(e) => {
                      if (e.target.value === "UAE Visit Visa" || e.target.value === "تأشيرة زيارة الإمارات" || e.target.value === "Visa Processing" || e.target.value === "معالجة التأشيرات") {
                        window.location.href = "https://visa.ujem.com/";
                      } else {
                        setSelectedService(e.target.value);
                      }
                    }}>
                      <option value="">Select a Service</option>
                      {serviceTypes[lang].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <div className="absolute end-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                  <input name="fullName" value={bookingFormData.fullName} onChange={handleBookingInputChange} required type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone Number</label>
                  <input name="phone" value={bookingFormData.phone} onChange={handleBookingInputChange} required type="tel" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all" placeholder="+971 50 000 0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={selectedService && selectedService.startsWith('Job Application') ? "md:col-span-2" : ""}>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                  <input name="email" value={bookingFormData.email} onChange={handleBookingInputChange} required type="email" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
                {(!selectedService || !selectedService.startsWith('Job Application')) && (
                  <>
                    {/* Dynamic Fields based on Service Type */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{lang === 'en' ? 'Date From' : 'من تاريخ'}</label>
                        <input name="dateFrom" value={bookingFormData.dateFrom} onChange={handleBookingInputChange} type="date" min={new Date().toISOString().split('T')[0]} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all text-slate-600" />
                      </div>
                      {(selectedService === 'Hotel Booking' || selectedService === 'Holiday Packages' || selectedService === 'حجز فنادق' || selectedService === 'باقات عطلات') && (
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{lang === 'en' ? 'Date To' : 'إلى تاريخ'}</label>
                          <input 
                            name="dateTo" 
                            value={bookingFormData.dateTo} 
                            onChange={handleBookingInputChange} 
                            type="date" 
                            min={bookingFormData.dateFrom || new Date().toISOString().split('T')[0]} 
                            required 
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all text-slate-600" />
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{lang === 'en' ? 'No. of Persons' : 'عدد الأشخاص'}</label>
                        <input name="travelers" value={bookingFormData.travelers} onChange={handleBookingInputChange} type="number" min="1" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{lang === 'en' ? 'Class / Status' : 'الدرجة / الحالة'}</label>
                        <select name="serviceClass" value={bookingFormData.serviceClass} onChange={handleBookingInputChange} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all appearance-none">
                          {lang === 'en' ? (
                            <>
                              <option value="Economy">Economy / Standard</option>
                              <option value="Business">Business / Premium</option>
                              <option value="First Class">First Class / Luxury</option>
                            </>
                          ) : (
                            <>
                              <option value="Economy">اقتصادي / قياسي</option>
                              <option value="Business">أعمال / متميز</option>
                              <option value="First Class">درجة أولى / فاخر</option>
                            </>
                          )}
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {selectedService && selectedService.startsWith('Job Application') ? (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Upload Resume (PDF/DOC)</label>
                  <div className="relative group">
                    <input required type="file" accept=".pdf,.doc,.docx" className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 dark:file:bg-slate-700 file:text-brand-700 dark:file:text-brand-400 hover:file:bg-brand-100 dark:hover:file:bg-slate-600 transition-all border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800" />
                  </div>
                </div>
              ) : (
                <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileCheck size={16} className="text-brand-600"/> Required Documents
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Passport Copy / ID</label>
                      <input type="file" multiple className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-white dark:file:bg-slate-700 file:text-brand-700 dark:file:text-brand-400 hover:file:bg-brand-50 dark:hover:file:bg-slate-600 transition-all border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Passport Size Photo</label>
                      <input type="file" accept="image/*" className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-white dark:file:bg-slate-700 file:text-brand-700 dark:file:text-brand-400 hover:file:bg-brand-50 dark:hover:file:bg-slate-600 transition-all border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900" />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message (Optional)</label>
                <textarea name="message" value={bookingFormData.message} onChange={handleBookingInputChange} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all h-24 resize-none" placeholder="Tell us more about your requirements..."></textarea>
              </div>
              </div>

              {/* Payment Step UI */}
              <div className={bookingStep === 'payment' ? 'space-y-6 animate-in fade-in slide-in-from-right-4' : 'hidden'}>
                
                {/* Booking Summary */}
                <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
                    <FileCheck size={18} className="text-brand-600" />
                    {lang === 'en' ? 'Booking Summary' : 'ملخص الحجز'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase tracking-wider">{lang === 'en' ? 'Service' : 'الخدمة'}</span>
                        <span className="font-medium text-slate-900 dark:text-white">{selectedService}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase tracking-wider">{lang === 'en' ? 'Name' : 'الاسم'}</span>
                        <span className="font-medium text-slate-900 dark:text-white">{bookingFormData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase tracking-wider">{lang === 'en' ? 'Email' : 'البريد الإلكتروني'}</span>
                        <span className="font-medium text-slate-900 dark:text-white">{bookingFormData.email}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase tracking-wider">{lang === 'en' ? 'Phone' : 'رقم الهاتف'}</span>
                        <span className="font-medium text-slate-900 dark:text-white">{bookingFormData.phone}</span>
                      </div>
                      {bookingFormData.dateFrom && (
                        <div>
                          <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase tracking-wider">{lang === 'en' ? 'Date' : 'التاريخ'}</span>
                          <span className="font-medium text-slate-900 dark:text-white">{bookingFormData.dateFrom} {bookingFormData.dateTo ? ` - ${bookingFormData.dateTo}` : ''}</span>
                        </div>
                      )}
                      <div>
                          <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase tracking-wider">{lang === 'en' ? 'Details' : 'التفاصيل'}</span>
                          <span className="font-medium text-slate-900 dark:text-white">{bookingFormData.travelers} Person(s), {bookingFormData.serviceClass}</span>
                        </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{lang === 'en' ? 'Select Payment Method' : 'اختر طريقة الدفع'}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { 
                      id: 'Credit Card', 
                      label: 'Credit / Debit Card', 
                      logos: ['https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg', 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'],
                      caption: lang === 'en' ? 'Secure payment via Gateway' : 'دفع آمن عبر البوابة'
                    },
                    { 
                      id: 'PayPal', 
                      label: 'PayPal', 
                      logos: ['https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg'],
                      caption: lang === 'en' ? 'Fast & safe checkout' : 'دفع سريع وآمن'
                    },
                    { 
                      id: 'Bank Transfer', 
                      label: 'Bank Transfer', 
                      icon: Building2, 
                      caption: lang === 'en' ? 'Direct to our account' : 'مباشرة إلى حسابنا'
                    },
                    { 
                      id: 'Cryptocurrency', 
                      label: 'Cryptocurrency', 
                      icon: Coins, 
                      caption: lang === 'en' ? 'USDT (TRC-20) accepted' : 'نقبل USDT (TRC-20)'
                    },
                    { 
                      id: 'Cash on Delivery', 
                      label: 'Cash on Delivery', 
                      icon: Banknote, 
                      caption: lang === 'en' ? 'Pay when you meet us' : 'ادفع عند مقابلتنا'
                    }
                  ].map((method) => (
                    <div 
                      key={method.id} 
                      onClick={() => setPaymentMethod(method.id)}
                      className={`cursor-pointer p-4 rounded-xl border-2 flex flex-col items-start justify-center gap-2 transition-all hover:shadow-md ${paymentMethod === method.id ? 'border-brand-600 bg-brand-50 dark:bg-brand-900/20' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'}`}
                    >
                      <div className="flex items-center gap-2 h-8">
                        {method.logos ? (
                          method.logos.map((logo, i) => (
                            <img key={i} src={logo} alt="Logo" className="h-6 w-auto object-contain" />
                          ))
                        ) : (
                          <method.icon size={28} className="text-slate-600 dark:text-slate-300" />
                        )}
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">{method.label}</span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">{method.caption}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {paymentMethod === 'Credit Card' && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 animate-in fade-in">
                    <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                      {lang === 'en' ? 'You will be redirected to a secure payment gateway to complete your purchase.' : 'سيتم إعادة توجيهك إلى بوابة دفع آمنة لإكمال عملية الشراء.'}
                    </p>
                  </div>
                )}

                {paymentMethod === 'Bank Transfer' && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 animate-in fade-in">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-sm space-y-2">
                      <p><span className="font-bold text-slate-500">Bank Name:</span> Emirates NBD</p>
                      <p><span className="font-bold text-slate-500">Account Name:</span> Ujem Travel & Tourism</p>
                      <p><span className="font-bold text-slate-500">IBAN:</span> AE00 0000 0000 0000 0000 000</p>
                      <p><span className="font-bold text-slate-500">SWIFT:</span> EBBDAE</p>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{lang === 'en' ? 'Date of Transfer' : 'تاريخ التحويل'}</label>
                      <input type="date" name="transferDate" required disabled={bookingStep !== 'payment' || paymentMethod !== 'Bank Transfer'} className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-brand-600 dark:text-white text-slate-600 disabled:bg-slate-100 dark:disabled:bg-slate-800" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{lang === 'en' ? 'Upload Receipt' : 'تحميل الإيصال'}</label>
                      <input type="file" name="bankReceipt" disabled={bookingStep !== 'payment' || paymentMethod !== 'Bank Transfer'} accept="image/*,.pdf" className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-white dark:file:bg-slate-700 file:text-brand-700 dark:file:text-brand-400 hover:file:bg-brand-50 dark:hover:file:bg-slate-600 transition-all border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 disabled:opacity-50" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'PayPal' && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 animate-in fade-in">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {lang === 'en' ? 'Please enter your PayPal email address. We will send you a payment request.' : 'يرجى إدخال عنوان بريدك الإلكتروني على PayPal. سنرسل لك طلب دفع.'}
                    </p>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{lang === 'en' ? 'PayPal Email' : 'بريد PayPal'}</label>
                      <input type="email" name="paypalEmail" required disabled={bookingStep !== 'payment' || paymentMethod !== 'PayPal'} className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-brand-600 dark:text-white disabled:bg-slate-100 dark:disabled:bg-slate-800" placeholder="you@example.com" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'Cryptocurrency' && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 animate-in fade-in">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-sm space-y-2 break-all">
                      <p><span className="font-bold text-slate-500">Network:</span> USDT (TRC-20)</p>
                      <p><span className="font-bold text-slate-500">Wallet Address:</span> T9yX...ExampleWalletAddress...XyZ</p>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{lang === 'en' ? 'Transaction Hash (TxID)' : 'رقم المعاملة (TxID)'}</label>
                      <input type="text" name="cryptoTxHash" required disabled={bookingStep !== 'payment' || paymentMethod !== 'Cryptocurrency'} className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-brand-600 dark:text-white disabled:bg-slate-100 dark:disabled:bg-slate-800" placeholder="Enter transaction hash" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'Cash on Delivery' && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 animate-in fade-in">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle className="text-green-600" size={24} />
                      <p className="text-sm font-medium">
                        {lang === 'en' ? 'You can pay in cash when our representative delivers your documents or meets you.' : 'يمكنك الدفع نقداً عندما يقوم مندوبنا بتسليم مستنداتك أو مقابلتك.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-3 pt-2">
                {bookingStep === 'payment' && (
                  <button type="button" onClick={() => setBookingStep('form')} className="px-4 py-2 rounded-lg font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-xs uppercase tracking-wider">
                    {lang === 'en' ? 'Back' : 'رجوع'}
                  </button>
                )}
                {bookingStep === 'payment' ? (
                  <button type="submit" key="submit-btn" disabled={isSubmitting} className="flex-1 bg-brand-600 text-white font-bold py-2 rounded-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        {lang === 'en' ? 'Processing...' : 'جاري المعالجة...'}
                      </>
                    ) : (
                      lang === 'en' ? 'Submit & Pay' : 'إرسال ودفع'
                    )}
                  </button>
                ) : (
                  <button type="button" key="next-btn" onClick={() => { const form = document.getElementById('bookingForm'); if(form.checkValidity()) setBookingStep('payment'); else form.reportValidity(); }} className="flex-1 bg-brand-600 text-white font-bold py-2 rounded-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40 transform hover:-translate-y-0.5 text-xs uppercase tracking-wider">
                    {lang === 'en' ? 'Next' : 'التالي'}
                  </button>
                )}
              </div>
            </form>
            </>
            )}
          </div>
        </div>
      </section>
      )}

      {/* --- BACK TO TOP BUTTON --- */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-4 md:right-8 z-40 bg-brand-600 text-white p-3 rounded-full shadow-lg hover:bg-brand-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* --- LIGHTBOX --- */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[110] bg-black/90 flex flex-col items-center justify-center p-4 animate-in fade-in duration-300" onClick={() => setLightboxIndex(null)}>
          <a 
            href={currentLightboxItems[lightboxIndex].src} 
            download 
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-6 right-20 text-white hover:text-gray-300 transition-colors z-50"
          >
            <Download size={32} />
          </a>
          <button 
            onClick={async (e) => {
              e.stopPropagation();
              if (navigator.share) {
                try {
                  await navigator.share({
                    title: galleryItems[lightboxIndex].title[lang],
                    text: `Check out this image: ${currentLightboxItems[lightboxIndex].title[lang]}`,
                    url: currentLightboxItems[lightboxIndex].src,
                  });
                } catch (error) {
                  console.log('Error sharing', error);
                }
              } else {
                navigator.clipboard.writeText(currentLightboxItems[lightboxIndex].src);
                alert(lang === 'en' ? 'Link copied to clipboard!' : 'تم نسخ الرابط إلى الحافظة!');
              }
            }}
            className="absolute top-6 right-36 text-white hover:text-gray-300 transition-colors z-50"
          >
            <Share2 size={32} />
          </button>
          <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50">
            <X size={32} />
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              let prevIndex = (lightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
              while (currentLightboxItems[prevIndex].type !== 'image' && prevIndex !== lightboxIndex) {
                prevIndex = (prevIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
              }
              setLightboxIndex(prevIndex);
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 z-50 bg-black/20 hover:bg-black/40 rounded-full"
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={currentLightboxItems[lightboxIndex].src} 
            alt={currentLightboxItems[lightboxIndex].title[lang]} 
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()} 
          />

          <div className="mt-4 text-center z-50" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white text-xl font-bold tracking-wide">{currentLightboxItems[lightboxIndex].title[lang]}</h3>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              let nextIndex = (lightboxIndex + 1) % currentLightboxItems.length;
              while (currentLightboxItems[nextIndex].type !== 'image' && nextIndex !== lightboxIndex) {
                nextIndex = (nextIndex + 1) % currentLightboxItems.length;
              }
              setLightboxIndex(nextIndex);
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 z-50 bg-black/20 hover:bg-black/40 rounded-full"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      {/* --- FLOATING CART BUTTON (Shop Page Only) --- */}
      {activePage === 'shop' && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-40 right-4 md:right-8 z-50 bg-brand-600 text-white p-3 rounded-full shadow-lg hover:bg-brand-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-1"
          aria-label="View Cart"
        >
          <div className="relative">
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-600">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </div>
        </button>
      )}

      {/* --- LIVE CHAT WIDGET --- */}
      <button 
        onClick={() => {
          setIsChatOpen(!isChatOpen);
          if (!isChatOpen) setHasUnreadMessages(false);
        }}
        className="fixed bottom-24 right-4 md:right-8 z-50 bg-brand-600 text-white p-3 rounded-full shadow-lg hover:bg-brand-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-1"
        aria-label="Live Chat"
      >
        {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {hasUnreadMessages && !isChatOpen && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-36 md:bottom-40 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 flex flex-col">
          <div className="bg-brand-600 p-4 flex justify-between items-center">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
               <h3 className="text-white font-bold">{lang === 'en' ? 'Live Support' : 'الدعم المباشر'}</h3>
             </div>
             <div className="flex items-center gap-2">
               <button onClick={handleClearChat} className="text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10" title={lang === 'en' ? "Clear Chat" : "مسح المحادثة"}>
                  <Trash2 size={16} />
               </button>
               <button onClick={handleWhatsAppClick} className="text-white/90 hover:text-white transition-colors flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-lg border border-white/10">
                  <MessageCircle size={14} /> <span>WhatsApp</span>
               </button>
             </div>
          </div>
          <div className="h-60 md:h-80 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-950">
             {chatMessages.map((msg, i) => (
               <div key={i} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                 <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-brand-600 text-white rounded-br-none' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'}`}>
                   {typeof msg.text === 'object' ? msg.text[lang] : msg.text}
                 </div>
                 {msg.options && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-[90%]">
                        {msg.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleChatOptionClick(opt)}
                                className="bg-brand-100 dark:bg-slate-700 text-brand-700 dark:text-brand-300 text-xs px-3 py-2 rounded-full hover:bg-brand-200 dark:hover:bg-slate-600 transition-colors border border-brand-200 dark:border-slate-600"
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                 )}
               </div>
             ))}
             {isTyping && (
               <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-1">
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                 </div>
               </div>
             )}
             <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleChatSubmit} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex gap-2">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder={lang === 'en' ? "Type a message..." : "اكتب رسالة..."}
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-600 outline-none dark:text-white transition-all"
            />
            <button type="button" onClick={handleWhatsAppClick} className="bg-[#25D366] text-white p-2 rounded-xl hover:bg-[#128C7E] transition-colors shadow-md" title={lang === 'en' ? "Continue on WhatsApp" : "تابع عبر واتساب"}>
              <MessageCircle size={18} />
            </button>
            <button type="submit" className="bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={!chatInput.trim()}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* --- NEWSLETTER POPUP --- */}
      {showNewsletterPopup && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-1 relative overflow-hidden animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowNewsletterPopup(false)}
              className="absolute top-4 right-4 z-10 text-white bg-black/20 hover:bg-black/40 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="relative h-32 bg-brand-600 overflow-hidden rounded-t-xl">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-500 rounded-full blur-3xl opacity-50"></div>
               <div className="absolute top-10 right-10 w-20 h-20 bg-brand-400 rounded-full blur-2xl opacity-50"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <Mail size={48} className="text-white animate-bounce" />
               </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {lang === 'en' ? "Subscribe & Save!" : "اشترك ووفر!"}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                {lang === 'en' 
                  ? "Join our newsletter to get exclusive travel deals, real estate insights, and 10% off your first booking." 
                  : "انضم إلى نشرتنا الإخبارية للحصول على عروض سفر حصرية، ورؤى عقارية، وخصم 10٪ على حجزك الأول."}
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); setShowNewsletterPopup(false); alert(lang === 'en' ? 'Thanks for subscribing!' : 'شكراً لاشتراكك!'); }}>
                <input 
                  type="email" 
                  placeholder={lang === 'en' ? "Enter your email address" : "أدخل عنوان بريدك الإلكتروني"} 
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-600 outline-none dark:text-white mb-3"
                />
                <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
                  {lang === 'en' ? "Subscribe Now" : "اشترك الآن"}
                </button>
              </form>
              
              <button onClick={() => setShowNewsletterPopup(false)} className="mt-4 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline">
                {lang === 'en' ? "No thanks, I prefer paying full price" : "لا شكراً، أفضل دفع السعر الكامل"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- COOKIE CONSENT BANNER --- */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-4 z-[60] flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl animate-in slide-in-from-bottom-full duration-500">
          <div className="flex items-center gap-3 text-center md:text-start">
            <div className="bg-slate-800 p-2 rounded-full text-brand-400 hidden md:block">
              <Cookie size={24} />
            </div>
            <p className="text-sm text-slate-300 max-w-2xl">
              {lang === 'en' 
                ? <>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. <button onClick={() => setIsPrivacyOpen(true)} className="underline text-brand-400 hover:text-brand-300">Privacy Policy</button></>
                : <>نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك، وتقديم إعلانات أو محتوى مخصص، وتحليل حركة المرور لدينا. بالنقر فوق "قبول"، فإنك توافق على استخدامنا لملفات تعريف الارتباط. <button onClick={() => setIsPrivacyOpen(true)} className="underline text-brand-400 hover:text-brand-300">سياسة الخصوصية</button></>}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
             <button onClick={() => setShowCookieBanner(false)} className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
               {lang === 'en' ? "Decline" : "رفض"}
             </button>
             <button onClick={acceptCookies} className="bg-brand-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
               {lang === 'en' ? "Accept" : "قبول"}
             </button>
          </div>
        </div>
      )}

      {/* --- PRIVACY POLICY MODAL --- */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative animate-in zoom-in-95 duration-200 max-h-[80vh] overflow-y-auto">
            <button 
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {lang === 'en' ? "Privacy Policy" : "سياسة الخصوصية"}
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                {lang === 'en' 
                  ? "At Ujem Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services."
                  : "في مجموعة عجم، نحن ملتزمون بحماية خصوصيتك وضمان أمن معلوماتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية بياناتك عند زيارة موقعنا الإلكتروني أو استخدام خدماتنا."}
              </p>
              
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'en' ? "1. Information We Collect" : "1. المعلومات التي نجمعها"}
              </h4>
              <p>
                {lang === 'en'
                  ? "We may collect personal information such as your name, email address, phone number, and other details when you fill out forms on our site. We also automatically collect non-personal information like your IP address and browsing behavior through cookies."
                  : "قد نقوم بجمع معلومات شخصية مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل أخرى عند ملء النماذج على موقعنا. نقوم أيضًا بجمع معلومات غير شخصية تلقائيًا مثل عنوان IP الخاص بك وسلوك التصفح من خلال ملفات تعريف الارتباط."}
              </p>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'en' ? "2. How We Use Your Information" : "2. كيف نستخدم معلوماتك"}
              </h4>
              <p>
                {lang === 'en'
                  ? "We use the information we collect to provide and improve our services, communicate with you, process transactions, and personalize your experience. We do not sell your personal data to third parties."
                  : "نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، والتواصل معك، ومعالجة المعاملات، وتخصيص تجربتك. نحن لا نبيع بياناتك الشخصية لأطراف ثالثة."}
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <button onClick={() => setIsPrivacyOpen(false)} className="bg-brand-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
                {lang === 'en' ? "Close" : "إغلاق"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- ADD TESTIMONIAL MODAL --- */}
      {isTestimonialFormOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => { setIsTestimonialFormOpen(false); setModerationError(''); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {lang === 'en' ? "Share Your Story" : "شارك قصتك"}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
              {lang === 'en' ? "We'd love to hear about your experience with Ujem Group." : "نود أن نسمع عن تجربتك مع مجموعة عجم."}
            </p>

            {moderationError && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3 text-red-600 dark:text-red-400 text-sm">
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                <span>{moderationError}</span>
              </div>
            )}

            <form onSubmit={handleTestimonialSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{lang === 'en' ? "Your Name" : "اسمك"}</label>
                <input required type="text" value={testimonialForm.name} onChange={e => setTestimonialForm({...testimonialForm, name: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{lang === 'en' ? "Role / Title" : "الدور / المسمى الوظيفي"}</label>
                <input required type="text" value={testimonialForm.role} onChange={e => setTestimonialForm({...testimonialForm, role: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 outline-none transition-all" placeholder="e.g. Tourist, Investor" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{lang === 'en' ? "Your Testimonial" : "شهادتك"}</label>
                <textarea required value={testimonialForm.quote} onChange={e => setTestimonialForm({...testimonialForm, quote: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-600 outline-none transition-all h-32 resize-none" placeholder={lang === 'en' ? "Tell us about your experience..." : "أخبرنا عن تجربتك..."}></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
                {lang === 'en' ? "Submit Testimonial" : "إرسال الشهادة"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- PRODUCT DETAILS MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative animate-in zoom-in-95 duration-200 flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-white/50 dark:bg-black/50 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="md:w-1/2 h-64 md:h-auto bg-slate-100 dark:bg-slate-800">
              <img src={selectedProduct.image} alt={selectedProduct.name[lang]} className="w-full h-full object-cover" />
            </div>
            
            <div className="md:w-1/2 p-8 flex flex-col">
              <div className="flex items-center gap-2 text-sm font-bold text-brand-600 uppercase tracking-wider mb-2">
                <Tag size={16} /> {selectedProduct.category[lang]}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{selectedProduct.name[lang]}</h3>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{selectedProduct.price[lang]}</span>
                <div className="flex items-center gap-1 text-amber-400 font-bold"><Star size={18} fill="currentColor" /> {selectedProduct.rating}</div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1">
                {selectedProduct.description[lang]}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Select Size' : 'اختر المقاس'}</label>
                <div className="flex flex-wrap gap-3">
                  {(selectedProduct.category.en === 'FootWears' ? (selectedProduct.sizes || ["40", "41", "42", "43", "44", "45"]) : ["XL", "XXL", "Medium", "Small"]).map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center font-bold transition-all ${
                        selectedSize === size 
                          ? 'border-brand-600 bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400' 
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{lang === 'en' ? 'Select Color' : 'اختر اللون'}</label>
                <div className="flex flex-wrap gap-3">
                  {(selectedProduct.colors || defaultColors).map(color => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor?.value === color.value 
                          ? 'border-brand-600 scale-110 ring-2 ring-brand-100 dark:ring-brand-900/30' 
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name[lang]}
                    >
                      {selectedColor?.value === color.value && (
                        <Check size={20} className={color.value === '#FFFFFF' ? 'text-black' : 'text-white'} />
                      )}
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedColor({ value: 'custom', name: { en: 'Custom', ar: 'مخصص' } })}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all bg-slate-100 dark:bg-slate-800 ${
                      selectedColor?.value === 'custom'
                        ? 'border-brand-600 scale-110 ring-2 ring-brand-100 dark:ring-brand-900/30 text-brand-600' 
                        : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:border-brand-400'
                    }`}
                    title={lang === 'en' ? 'Custom Color' : 'لون مخصص'}
                  >
                    <Palette size={20} />
                  </button>
                </div>
                {selectedColor?.value === 'custom' && (
                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    placeholder={lang === 'en' ? "Enter color name" : "أدخل اسم اللون"}
                    className="mt-3 w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-600 outline-none"
                  />
                )}
                {selectedColor && selectedColor.value !== 'custom' && <p className="text-sm text-slate-500 mt-2">{selectedColor.name[lang]}</p>}
              </div>
              
              <div className="mt-auto space-y-4">
                <button onClick={() => addToCart(selectedProduct)} className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2">
                  <ShoppingCart size={20} /> {t.addToCart}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SHOPPING CART SIDEBAR --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[150] flex justify-end">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShoppingCart className="text-brand-600" /> {t.yourCart}
              </h3>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                  <p>{t.emptyCart}</p>
                  <button onClick={() => { setIsCartOpen(false); navigateTo('shop'); }} className="mt-4 text-brand-600 font-bold hover:underline">
                    {lang === 'en' ? 'Start Shopping' : 'ابدأ التسوق'}
                  </button>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <img src={item.image} alt={item.name[lang]} className="w-20 h-20 object-cover rounded-lg bg-white dark:bg-slate-800" />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.name[lang]}</h4>
                      {(item.selectedSize || item.selectedColor) && (
                        <div className="flex gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                          {item.selectedSize && <span>{lang === 'en' ? 'Size:' : 'المقاس:'} {item.selectedSize}</span>}
                          {item.selectedColor && <span>{lang === 'en' ? 'Color:' : 'اللون:'} {item.selectedColor.name[lang]}</span>}
                        </div>
                      )}
                      <p className="text-brand-600 font-bold text-sm mb-2">{item.price[lang]}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 px-2 py-1">
                          <button onClick={() => updateQuantity(item.cartId, -1)} className="p-1 hover:text-brand-600 disabled:opacity-50"><Minus size={14} /></button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.cartId, 1)} className="p-1 hover:text-brand-600"><Plus size={14} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.cartId)} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">{lang === 'en' ? 'Total' : 'المجموع'}</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">AED {getCartTotal().toFixed(2)}</span>
                </div>
                <button onClick={() => {
                  const text = lang === 'en' 
                    ? `Hi, I'd like to place an order:\n\n${cartItems.map(i => `- ${i.name.en} ${i.selectedSize ? `(Size: ${i.selectedSize})` : ''} ${i.selectedColor ? `(Color: ${i.selectedColor.name.en})` : ''} (x${i.quantity})`).join('\n')}\n\nTotal: AED ${getCartTotal().toFixed(2)}` 
                    : `مرحباً، أود تقديم طلب:\n\n${cartItems.map(i => `- ${i.name.ar} ${i.selectedSize ? `(المقاس: ${i.selectedSize})` : ''} ${i.selectedColor ? `(اللون: ${i.selectedColor.name.ar})` : ''} (x${i.quantity})`).join('\n')}\n\nالمجموع: ${getCartTotal().toFixed(2)} درهم`;
                  window.open(`https://wa.me/971556554093?text=${encodeURIComponent(text)}`, '_blank');
                }} className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20">
                  {t.checkout} (WhatsApp)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- CONFETTI ANIMATION --- */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
          {[...Array(100)].map((_, i) => {
            const shape = ['square', 'circle', 'triangle'][Math.floor(Math.random() * 3)];
            const color = ['#FFD700', '#FF6347', '#00BFFF', '#32CD32', '#FF69B4'][Math.floor(Math.random() * 5)];
            
            return (
              <div
                key={i}
                className="absolute w-3 h-3"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-5%`,
                  backgroundColor: color,
                  borderRadius: shape === 'circle' ? '50%' : '0',
                  clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
                  animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
                  animationDelay: `${Math.random() * 1}s`
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
