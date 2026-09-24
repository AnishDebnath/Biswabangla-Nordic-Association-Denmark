export interface ScheduleEvent {
  time: string;
  title: string;
  bengaliTitle?: string;
  description?: string;
  isHighlight?: boolean;
}

export interface DaySchedule {
  dayNumber: string;
  dayKey: string;
  dayName: string;
  bengaliName: string;
  dateStr: string;
  dateSubtitle: string;
  badge?: string;
  themeColor?: string;
  highlights: string[];
  events: ScheduleEvent[];
}

export interface EventConfig {
  meta: {
    title: string;
    description: string;
    shareUrl: string;
  };
  organization: {
    name: string;
    bengaliName: string;
    tagline: string;
    bengaliTagline: string;
    edition: string;
    bengaliEdition: string;
    year: string;
    country: string;
  };
  hero: {
    subtitle: string;
    mainTitle: string;
    year: string;
    bengaliGreeting: string;
    invitationLine: string;
    targetCountdownDate: string; // ISO string for 16 October 2026
  };
  invitation: {
    headingEn: string;
    headingBn: string;
    welcomeTextEn: string;
    welcomeTextBn: string[];
    themeMottoEn: string;
    themeMottoBn: string;
    paragraphsEn: string[];
    paragraphsBn: string[];
  };
  pujaInfo: {
    dates: string;
    bengaliDates: string;
    venueName: string;
    city: string;
    country: string;
    organizedBy: string;
  };
  pushpanjali: {
    headingEn: string;
    headingBn: string;
    tagline: string;
    slots: {
      day: string;
      bengaliDay: string;
      date: string;
      timings: string[];
      notes?: string;
      isSpecial?: boolean;
    }[];
    guidelines: string[];
  };
  schedule: DaySchedule[];
  cultural: {
    headingEn: string;
    headingBn: string;
    subtitle: string;
    committeeSign: string;
    items: {
      time: string;
      title: string;
      bengaliTitle?: string;
      category: 'Children' | 'Adults' | 'Drama' | 'Music' | 'Dhak' | 'Community';
      description: string;
      subEvents?: string[];
      registrationNote?: string;
    }[];
  };
  donation: {
    headingEn: string;
    headingBn: string;
    appealTextEn: string;
    appealTextBn: string;
    familyContribution: string;
    singleContribution: string;
    mobilePay: string;
    accountName: string;
    bankName: string;
    regNo: string;
    accountNo: string;
  };
  venue: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    landmark: string;
    transportTips: string[];
    mapsQuery: string;
    lat: number;
    lng: number;
  };
  contact: {
    organization: string;
    email: string;
    phones: string[];
    phoneList: {
      number: string;
      raw: string;
      label: string;
      telUrl: string;
      whatsappUrl: string;
    }[];
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappUrl: string;
    facebook: string;
    instagram: string;
  };
}

export const eventConfig: EventConfig = {
  meta: {
    title: "Durga Puja 2026 Denmark | Biswabangla Nordic Association",
    description: "Join Biswabangla Nordic Association for the 5th Annual Durga Puja Celebration 2026 in Denmark. Explore the puja schedule, Anjali timings, cultural programmes, venue at Hirtshalsvej 1, Vanløse, and RSVP.",
    shareUrl: "https://biswabanglanordic.dk",
  },
  organization: {
    name: "BISWABANGLA NORDIC ASSOCIATION",
    bengaliName: "বিশ্ববাংলা নর্ডিক অ্যাসোসিয়েশন",
    tagline: "UNITY • HERITAGE • CULTURE • COMPASSION",
    bengaliTagline: "ঐক্য • ঐতিহ্য • সংস্কৃতি • সহানুভূতি",
    edition: "5th Annual Durga Puja Celebration",
    bengaliEdition: "পঞ্চম বার্ষিক সর্বজনীন দুর্গোৎসব",
    year: "2026",
    country: "Denmark",
  },
  hero: {
    subtitle: "BISWABANGLA NORDIC ASSOCIATION",
    mainTitle: "5th Annual Durga Puja Celebration",
    year: "2026",
    bengaliGreeting: "শুভ শারদীয়া",
    invitationLine: "Carrying the sacred message of Sharodiya and the divine arrival of Goddess Durga, Biswabangla Nordic Association warmly invites you and your family to celebrate the Sarbojanin Shri Shri Durga Puja 2026 in Denmark.",
    targetCountdownDate: "2026-10-16T10:00:00+02:00",
  },
  invitation: {
    headingEn: "INVITATION TO DURGA PUJA 2026",
    headingBn: "সর্বজনীন দুর্গোৎসব ২০২৬ — সাদর আমন্ত্রণ",
    welcomeTextEn: "BiswaBangla Nordic Association takes immense joy and pride in inviting you all to our 5th Annual Durga Puja Celebration!",
    welcomeTextBn: [
      "মাননীয় মহাশয়/মহাশয়া, প্রতি বছরের ন্যায় এ বছরও বিশ্ববাংলা নর্ডিক অ্যাসোসিয়েশন দুর্গাপূজা কমিটি ২০২৬-এর পরিচালনায় সর্বজনীন দুর্গোৎসবের আয়োজন করা হয়েছে।",
      "উক্ত পুজোর দিনগুলিতে আপনার উপস্থিতি ও সহযোগিতা বিশ্ববাংলা নর্ডিক অ্যাসোসিয়েশন এর ২০২৬ সর্বজনীন দুর্গাপূজা কমিটির সকল সদস্যবৃন্দের পক্ষ থেকে একান্তভাবে আমরা কামনা করি।"
    ],
    themeMottoEn: "UNITY • HERITAGE • CULTURE • COMPASSION",
    themeMottoBn: "ঐক্য, সংস্কৃতি ও উৎসবের গৌরবময় ৫ বছর!",
    paragraphsEn: [
      "Carrying the sacred message of Sharodiya and the divine arrival of Goddess Durga, the Biswabangla Nordic Association Durga Puja Committee 2026 is delighted to organize the Sarbojanin Shri Shri Durga Puja from 16th to 20th October 2026 in an atmosphere filled with devotion, spirituality, and celebration.",
      "On this auspicious occasion of seeking the eternal blessings of Maa Durga, the members of the Biswabangla Nordic Association Durga Puja Committee 2026 sincerely invite your gracious presence, participation, and kind support along with your family.",
      "Marking half a decade of community, culture, and beautiful memories in the Nordic region, this year’s celebration promises to be grander and closer to our hearts. Come, let’s join hands, share laughter, enjoy the festive beats of Dhak, and welcome Ma Durga together.",
      "May the divine blessings of Maa Durga fill every heart and home with peace, prosperity, happiness, and spiritual harmony.",
    ],
    paragraphsBn: [
      "দূর প্রবাসের কর্মব্যস্ত জীবনের মাঝেও আমরা বুকের গভীরে বাঁচিয়ে রেখেছি আমাদের মাটির টান, আমাদের উৎসবের আনন্দ। দেখতে দেখতে আমাদের সবার প্রিয় ‘বিশ্ববাংলা নরডিক অ্যাসোসিয়েশন’ পদার্পণ করল তার সাফল্যের ৫ম বছরে।",
      "উক্ত পুজোর দিনগুলিতে আপনার উপস্থিতি ও সহযোগিতা বিশ্ববাংলা নর্ডিক অ্যাসোসিয়েশন এর ২০২৬ সর্বজনীন দুর্গাপূজা কমিটির সকল সদস্যবৃন্দের পক্ষ থেকে একান্তভাবে আমরা কামনা করি।",
      "আসুন, আগামী ১৬ই থেকে ২০শে অক্টোবর—এই পাঁচটা দিন আমরা একসাথে মেতে উঠি ঢাকের আওয়াজে, শিউলির গন্ধে, আর ধুনুচি নাচের ছন্দে। নতুন পোশাকের আনন্দ আর চেনা মানুষের হাসিমুখ নিয়ে মেতে উঠি প্রাণের উৎসবে।",
      "ধন্যবাদান্তে — বিশ্ববাংলা নর্ডিক অ্যাসোসিয়েশন",
    ],
  },
  pujaInfo: {
    dates: "16–20 October 2026",
    bengaliDates: "১৬ই অক্টোবর – ২০শে অক্টোবর, ২০২৬",
    venueName: "Biswabangla Nordic Puja Mandap",
    city: "Vanløse, Copenhagen",
    country: "Denmark",
    organizedBy: "Biswabangla Nordic Association",
  },
  pushpanjali: {
    headingEn: "PUSHPANJALI & RITUAL TIMINGS",
    headingBn: "পুষ্পাঞ্জলি ও পূজার সময়সূচি",
    tagline: "Sacred floral offerings to Maa Durga. Devotees are requested to arrive at the mandap before the scheduled times.",
    slots: [
      {
        day: "Maha Sasthi",
        bengaliDay: "মহাষষ্ঠী",
        date: "Friday, 16 October 2026",
        timings: ["Puja Start: 4:00 PM", "Pushpanjali: 6:00 PM", "Dinner: 8:30 PM"],
        notes: "Welcoming Maa Durga with Bodhan, Adhibas & evening Pushpanjali",
      },
      {
        day: "Maha Saptami",
        bengaliDay: "মহাসপ্তমী",
        date: "Saturday, 17 October 2026",
        timings: ["Puja Start: 10:00 AM", "Pushpanjali: 12:00 PM", "Lunch: 1:30 PM", "Cultural: 5:00 PM – 8:00 PM", "Dinner: 8:30 PM"],
        notes: "Nabapatrika Snan, Saptami floral prayers, drawing competition & Go As You Like",
      },
      {
        day: "Maha Ashtami",
        bengaliDay: "মহাঅষ্টমী",
        date: "Sunday, 18 October 2026",
        timings: ["Puja Start: 10:00 AM", "Pushpanjali: 12:00 PM", "Lunch: 1:30 PM", "Adult Cultural Program: 5:30 PM – 8:00 PM", "Dinner: 8:30 PM"],
        notes: "Auspicious Maha Ashtami Pushpanjali and vibrant evening cultural performances (Note: Kumari Puja is not performed)",
        isSpecial: true,
      },
      {
        day: "Maha Navami",
        bengaliDay: "মহানবমী",
        date: "Monday, 19 October 2026",
        timings: [
          "Sandhi Puja: 6:58 AM – 7:46 AM",
          "Puja Start: 10:00 AM",
          "Pushpanjali: 12:00 PM",
          "Lunch: 1:30 PM",
          "Kid's Cultural Program: 5:30 PM – 8:00 PM",
          "Dinner: 8:30 PM",
        ],
        notes: "Early morning sacred Sandhi Puja, midday Pushpanjali, and Kid's Cultural Extravaganza with KidsDrama",
        isSpecial: true,
      },
      {
        day: "Maha Dashami",
        bengaliDay: "মহাদশমী",
        date: "Tuesday, 20 October 2026",
        timings: ["Puja Start: 10:00 AM", "Pushpanjali: 12:00 PM", "Devi Boron: 12:30 PM", "Lunch: 1:30 PM", "Closing: 5:00 PM"],
        notes: "Devi Boron, Sindoor Khela, Shantijal & auspicious Bijoya Dashami farewell",
      },
    ],
    guidelines: [
      "Fresh flowers, bel leaves (bael patra), and sacred chandan will be arranged at the puja hall.",
      "Traditional festive attire is warmly encouraged for all morning and evening pushpanjali sessions.",
      "Please note that Kumari Puja is not performed at our venue.",
      "Devotees observing fast are kindly requested to be present by the scheduled morning/evening timings.",
    ],
  },
  schedule: [
    {
      dayNumber: "DAY 01",
      dayKey: "sasthi",
      dayName: "FRIDAY, OCTOBER 16",
      bengaliName: "শুক্রবার, ১৬ই অক্টোবর — মহাষষ্ঠী",
      dateStr: "16 October 2026",
      dateSubtitle: "Friday • Maha Sasthi",
      highlights: ["Puja Start (4:00 PM)", "Pushpanjali (6:00 PM)", "Dinner (8:30 PM)"],
      events: [
        { time: "04:00 PM", title: "Puja Start", bengaliTitle: "পূজার শুভারম্ভ ও বোধন", description: "Beginning of the 5th Annual Durga Puja rituals and welcome of Maa Durga." },
        { time: "06:00 PM", title: "Pushpanjali", bengaliTitle: "মহাষষ্ঠী পুষ্পাঞ্জলি", description: "Sacred floral offering prayers to Maa Durga for peace and prosperity.", isHighlight: true },
        { time: "08:30 PM", title: "Dinner", bengaliTitle: "নৈশভোজ ও প্রসাদ বিতরণ", description: "Community dinner and festive gathering with warm hospitality." },
      ],
    },
    {
      dayNumber: "DAY 02",
      dayKey: "saptami",
      dayName: "SATURDAY, OCTOBER 17",
      bengaliName: "শনিবার, ১৭ই অক্টোবর — মহাসপ্তমী",
      dateStr: "17 October 2026",
      dateSubtitle: "Saturday • Maha Saptami",
      highlights: ["Puja Start (10:00 AM)", "Pushpanjali (12:00 PM)", "Lunch (1:30 PM)", "Cultural (5:00 PM – 8:00 PM)", "Dinner (8:30 PM)"],
      events: [
        { time: "10:00 AM", title: "Puja Start", bengaliTitle: "মহাসপ্তমী পূজা আরম্ভ ও নবপত্রিকা প্রবেশ", description: "Morning rituals, Nabapatrika consecration, and invocation prayers." },
        { time: "12:00 PM", title: "Pushpanjali", bengaliTitle: "মহাসপ্তমী পুষ্পাঞ্জলি", description: "Grand Pushpanjali offering by devotees and community members.", isHighlight: true },
        { time: "01:30 PM", title: "Lunch", bengaliTitle: "মহাপ্রসাদ ও মধ্যাহ্নভোজ", description: "Traditional authentic Bengali lunch and bhog distribution." },
        { time: "05:00 PM – 08:00 PM", title: "Cultural Programme (Drawing Competition & Go As You Like)", bengaliTitle: "সাংস্কৃতিক অনুষ্ঠান (চিত্রাঙ্কন ও যেমন খুশি তেমন সাজো)", description: "Drawing Competition (5:00 PM) & Go As You Like (Jemon Khushi Temon Sajo at 7:00 PM) based on Durga Puja themes.", isHighlight: true },
        { time: "08:30 PM", title: "Dinner", bengaliTitle: "নৈশভোজ", description: "Community dinner and festive adda." },
      ],
    },
    {
      dayNumber: "DAY 03",
      dayKey: "ashtami",
      dayName: "SUNDAY, OCTOBER 18",
      bengaliName: "রবিবার, ১৮ই অক্টোবর — মহাঅষ্টমী",
      dateStr: "18 October 2026",
      dateSubtitle: "Sunday • Maha Ashtami",
      badge: "HIGHLIGHT",
      themeColor: "from-amber-700/30 to-red-950/40",
      highlights: ["Puja Start (10:00 AM)", "Pushpanjali (12:00 PM)", "Lunch (1:30 PM)", "Cultural Program (5:30 PM – 8:00 PM)", "Dinner (8:30 PM)"],
      events: [
        { time: "10:00 AM", title: "Puja Start", bengaliTitle: "মহাঅষ্টমী পূজা আরম্ভ", description: "Solemn Maha Ashtami prayers and Chandi path." },
        { time: "12:00 PM", title: "Pushpanjali", bengaliTitle: "মহাঅষ্টমী পুষ্পাঞ্জলি", description: "The most sacred and revered Pushpanjali of the festival.", isHighlight: true },
        { time: "01:30 PM", title: "Lunch", bengaliTitle: "অষ্টমীর মহাতৃপ্তির ভোগ ও মধ্যাহ্নভোজ", description: "Delicious traditional Ashtami bhog and festive meal." },
        { time: "05:30 PM – 08:00 PM", title: "Cultural Program", bengaliTitle: "সাংস্কৃতিক অনুষ্ঠান", description: "Performances by adult artists: Song, Dance, Instrument, Recitation, and other cultural presentations.", isHighlight: true },
        { time: "08:30 PM", title: "Dinner", bengaliTitle: "নৈশভোজ", description: "Festive dinner and evening gathering." },
      ],
    },
    {
      dayNumber: "DAY 04",
      dayKey: "navami",
      dayName: "MONDAY, OCTOBER 19",
      bengaliName: "সোমবার, ১৯শে অক্টোবর — মহানবমী ও সন্ধিপূজা",
      dateStr: "19 October 2026",
      dateSubtitle: "Monday • Maha Navami",
      badge: "SANDHI PUJA",
      highlights: ["Sandhi Puja (6:58 AM – 7:46 AM)", "Puja Start (10:00 AM)", "Pushpanjali (12:00 PM)", "Kid's Cultural Program (5:30 PM – 8:00 PM)"],
      events: [
        { time: "06:58 AM – 07:46 AM", title: "Sandhi Puja", bengaliTitle: "পবিত্র সন্ধিপূজা", description: "The auspicious junction between Ashtami and Navami with 108 diyas and sacred chanting.", isHighlight: true },
        { time: "10:00 AM", title: "Puja Start", bengaliTitle: "মহানবমী পূজা আরম্ভ", description: "Maha Navami morning adoration, archana, and prayers." },
        { time: "12:00 PM", title: "Pushpanjali", bengaliTitle: "মহানবমী পুষ্পাঞ্জলি", description: "Navami floral offering to the divine mother.", isHighlight: true },
        { time: "01:30 PM", title: "Lunch", bengaliTitle: "নবমী মধ্যাহ্নভোজ ও প্রসাদ", description: "Community lunch feast." },
        { time: "05:30 PM – 08:00 PM", title: "Kid's Cultural Program & KidsDrama", bengaliTitle: "ছোটদের সাংস্কৃতিক অনুষ্ঠান ও কিডস ড্রামা", description: "Performances by our little stars: Song, Dance, Instrument, and special attraction KidsDrama!", isHighlight: true },
        { time: "08:30 PM", title: "Dinner", bengaliTitle: "নৈশভোজ", description: "Community banquet and joyful gathering." },
      ],
    },
    {
      dayNumber: "DAY 05",
      dayKey: "dashami",
      dayName: "TUESDAY, OCTOBER 20",
      bengaliName: "মঙ্গলবার, ২০শে অক্টোবর — বিজয়া দশমী",
      dateStr: "20 October 2026",
      dateSubtitle: "Tuesday • Maha Dashami",
      highlights: ["Puja Start (10:00 AM)", "Pushpanjali (12:00 PM)", "Devi Boron (12:30 PM)", "Lunch (1:30 PM)", "Closing (5:00 PM)"],
      events: [
        { time: "10:00 AM", title: "Puja Start", bengaliTitle: "বিজয়া দশমী বিহিত পূজা", description: "Morning rituals concluding the 5-day worship." },
        { time: "12:00 PM", title: "Pushpanjali", bengaliTitle: "দশমী পুষ্পাঞ্জলি", description: "Final floral offering of Durga Puja 2026." },
        { time: "12:30 PM", title: "Devi Boron", bengaliTitle: "দেবী বিদায় ও সিঁদুর খেলা", description: "Devi Boron, Sindoor Khela, and mishtimukh farewell rituals." },
        { time: "01:30 PM", title: "Lunch", bengaliTitle: "মধ্যাহ্নভোজ", description: "Festive Dashami community lunch." },
        { time: "05:00 PM", title: "Closing & Subho Bijoya", bengaliTitle: "পূজা সমাপন, শান্তিজল ও শুভ বিজয়া", description: "Emotional farewell with 'Aschhe bochhor abar hobe', Shantijal, and Bijoya greetings.", isHighlight: true },
      ],
    },
  ],
  cultural: {
    headingEn: "BNA CULTURAL EVENTS 2026",
    headingBn: "সাংস্কৃতিক অনুষ্ঠান ও আনন্দানুষ্ঠান",
    subtitle: "Three days of cultural programs filled with music, dance, creativity, talent, and entertainment organized by the BNA Cultural Committee.",
    committeeSign: "Rakhi Nandi Das — On behalf of the BNA Cultural Committee",
    items: [
      {
        time: "17th October (Saptomi Pujo) • 5:00 PM – 8:00 PM",
        title: "Children's Small Event: Drawing Competition & Go As You Like",
        bengaliTitle: "১৭ই অক্টোবর (সপ্তমী পুজো) — চিত্রাঙ্কন ও যেমন খুশি তেমন সাজো",
        category: "Children",
        description: "Children can participate alone or with their mothers if they feel uncomfortable or shy. Theme: Durga Puja related characters, such as Maa Durga, Maa Lakshmi, Maa Saraswati, Lord Kartik, Lord Ganesha and more.",
        subEvents: [
          "Drawing Competition — 5:00 PM",
          "Go As You Like (Jemon Khushi Temon Sajo) — 7:00 PM",
        ],
        registrationNote: "Open for children with parent encouragement",
      },
      {
        time: "18th October (Astomi Pujo) • 5:30 PM – 8:00 PM",
        title: "Adult Cultural Program",
        bengaliTitle: "১৮ই অক্টোবর (অষ্টমী পুজো) — বড়দের সাংস্কৃতিক অনুষ্ঠান",
        category: "Adults",
        description: "We welcome adult artists and community members to showcase their artistic talents across diverse classical and contemporary genres.",
        subEvents: [
          "Song & Vocals",
          "Dance Performances",
          "Instrumental Music",
          "Poetry Recitation",
          "Other Cultural Performances",
        ],
        registrationNote: "Participation open for adult artists",
      },
      {
        time: "19th October (Nabomi Pujo) • 5:30 PM – 8:00 PM",
        title: "Kid's Cultural Program & Special Attraction: KidsDrama!",
        bengaliTitle: "১৯শে অক্টোবর (নবমী পুজো) — ছোটদের সাংস্কৃতিক অনুষ্ঠান ও নাটক",
        category: "Drama",
        description: "Our little stars take center stage to entertain us with their wonderful creativity, music, dance, and a signature stage production.",
        subEvents: [
          "Kids' Singing & Vocals",
          "Kids' Dance Presentations",
          "Instrumental Talent",
          "Special Attraction: KidsDrama! (Registration CLOSED)",
          "Other Youth Performances",
        ],
        registrationNote: "KidsDrama registration closed; other categories welcome",
      },
    ],
  },
  donation: {
    headingEn: "APPEAL FOR GENEROUS DONATIONS",
    headingBn: "শারদোৎসব ২০২৬ — আন্তরিক আর্থিক অনুদানের আবেদন",
    appealTextEn: "This festival belongs to all of us - any contribution given from the heart brings us closer to a memorable celebration of Durga Puja 2026.",
    appealTextBn: "প্রিয় সদস্য ও ভক্তবৃন্দ, দূর প্রবাসে মায়ের আবাহন আমাদের সকলের যৌথ প্রচেষ্টা ও আন্তরিক সহযোগিতার ফলেই সার্থক হয়ে ওঠে। দুর্গাপূজা ২০২৬ সুন্দর ও সফলভাবে সম্পন্ন করতে আপনাদের সকলের মুক্তহস্তে অনুদান একান্তভাবে কাম্য।",
    familyContribution: "DKK 1,500",
    singleContribution: "DKK 1,000",
    mobilePay: "534682",
    accountName: "BISWABANGLA NORDIC ASSOCIATION",
    bankName: "Biswabangla Nordic Association",
    regNo: "9570",
    accountNo: "13503486",
  },
  venue: {
    name: "Biswabangla Nordic Puja Venue",
    address: "Hirtshalsvej 1, 2720 Vanløse",
    city: "Vanløse, Copenhagen",
    postalCode: "2720",
    country: "Denmark",
    landmark: "Hirtshalsvej 1, 2720 Vanløse — Easy access from Copenhagen metro/train & bus routes",
    transportTips: [
      "Public Transport: Convenient access via S-train / Metro to Vanløse station followed by local bus/walk",
      "By Car: Designated parking available around the venue area",
      "Accessibility: Full wheelchair and family stroller accessible venue hall",
    ],
    mapsQuery: "Hirtshalsvej 1, 2720 Vanløse, Denmark",
    lat: 55.6885,
    lng: 12.4842,
  },
  contact: {
    organization: "Biswabangla Nordic Association",
    email: "contact@biswabanglanordic.dk",
    phones: ["+45 60 63 70 78"],
    phoneList: [
      {
        number: "+45 60 63 70 78",
        raw: "60637078",
        label: "Contact Number 1",
        telUrl: "tel:+4560637078",
        whatsappUrl: "https://wa.me/4560637078",
      },
    ],
    phoneDisplay: "60 63 70 78",
    whatsappNumber: "+45 60 63 70 78",
    whatsappUrl: "https://wa.me/4560637078",
    facebook: "https://www.facebook.com/share/g/19f4BQrB2P/?mibextid=wwXIfr",
    instagram: "https://www.facebook.com/share/g/19f4BQrB2P/?mibextid=wwXIfr",
  },
};
