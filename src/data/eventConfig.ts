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
    edition: string;
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
    welcomeText: string;
    themeMotto: string;
    paragraphs: string[];
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
    items: {
      time: string;
      title: string;
      category: 'Dance' | 'Music' | 'Dhak' | 'Children' | 'Community' | 'Bhog';
      description: string;
    }[];
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
    phone: string;
    facebook: string;
    instagram: string;
    whatsappCommunity: string;
  };
}

export const eventConfig: EventConfig = {
  meta: {
    title: "Durga Puja 2026 Denmark | Biswabangla Nordic Association",
    description: "Join Biswabangla Nordic Association for the 5th Annual Durga Puja Celebration 2026 in Denmark. Explore the puja schedule, Anjali timings, cultural programmes, venue and RSVP.",
    shareUrl: "https://biswabanglanordic.dk/durga-puja-2026",
  },
  organization: {
    name: "BISWABANGLA NORDIC ASSOCIATION",
    bengaliName: "বিশ্ববাংলা নর্ডিক অ্যাসোসিয়েশন",
    tagline: "Celebrating faith, culture, community & togetherness in the Nordics",
    edition: "5th Annual Durga Puja Celebration",
    year: "2026",
    country: "Denmark",
  },
  hero: {
    subtitle: "BISWABANGLA NORDIC ASSOCIATION",
    mainTitle: "5th Annual Durga Puja Celebration",
    year: "2026",
    bengaliGreeting: "শুভ শারদীয়া",
    invitationLine: "With hearts full of devotion and joy, we invite you to celebrate the spirit of Durga Puja with our Bengali community in Denmark.",
    targetCountdownDate: "2026-10-16T09:00:00+02:00",
  },
  invitation: {
    headingEn: "YOU ARE WARMLY INVITED",
    headingBn: "সপরিবারে সাদর আমন্ত্রণ",
    welcomeText: "Biswabangla Nordic Association warmly invites members, families, friends, and the wider Bengali and international community in Denmark to join our 5th Annual Durga Puja Celebration 2026.",
    themeMotto: "Come together. Pray together. Celebrate together.",
    paragraphs: [
      "As autumn arrives with the whispering winds of Scandinavia and the nostalgic fragrance of Shiuli and white Kash flowers, our hearts yearn for the beats of the Dhak and the auspicious presence of Maa Durga.",
      "Join us for five magical days filled with sacred rituals, divine Pushpanjali, soul-stirring cultural performances, authentic community Mahabhog, and joyous festivities that bridge our rich Bengali heritage with the warmth of Nordic togetherness.",
    ],
  },
  pujaInfo: {
    dates: "16–20 October 2026",
    bengaliDates: "২৯ আশ্বিন – ৩ কার্তিক ১৪৩৩",
    venueName: "Biswabangla Nordic Pandal & Cultural Hall",
    city: "Copenhagen / Denmark",
    country: "Denmark",
    organizedBy: "Biswabangla Nordic Association",
  },
  pushpanjali: {
    headingEn: "PUSHPANJALI TIMINGS",
    headingBn: "পুষ্পাঞ্জলি সময়সূচি",
    tagline: "Sacred floral offerings to Maa Durga. Please arrive 15 minutes before scheduled rounds.",
    slots: [
      {
        day: "Maha Saptami",
        bengaliDay: "মহা সপ্তমী",
        date: "Saturday, 17 October 2026",
        timings: ["Round 1: 10:30 AM", "Round 2: 11:30 AM"],
        notes: "Nabapatrika Pravesh followed by sacred floral offering",
      },
      {
        day: "Maha Ashtami",
        bengaliDay: "মহা অষ্টমী",
        date: "Sunday, 18 October 2026",
        timings: ["Round 1: 10:00 AM", "Round 2: 11:00 AM", "Round 3: 12:00 PM"],
        notes: "Most auspicious day. Grand Anjali batches & Sandhi Puja later in the evening.",
        isSpecial: true,
      },
      {
        day: "Maha Nabami",
        bengaliDay: "মহা নবমী",
        date: "Monday, 19 October 2026",
        timings: ["Round 1: 11:00 AM", "Round 2: 12:00 PM"],
        notes: "Pushpanjali followed by Homa (Yajna) & Mahabhog offering",
      },
    ],
    guidelines: [
      "Fresh flowers, bel leaves (bael patra), and sacred threads (chandan) will be provided at the mandap.",
      "Traditional Bengali attire is warmly encouraged for morning Pushpanjali.",
      "Devotees observing fast for Anjali are requested to join morning batches.",
    ],
  },
  schedule: [
    {
      dayNumber: "DAY 01",
      dayKey: "shashthi",
      dayName: "SHASHTHI",
      bengaliName: "ষষ্ঠী — মহাষষ্ঠী",
      dateStr: "16 October 2026",
      dateSubtitle: "Friday • Welcoming Maa Durga",
      highlights: ["Bodhan & Amantran", "Adhibas", "Evening Arati", "Welcome Adda & Snacks"],
      events: [
        { time: "05:00 PM", title: "Arrival of Devotees & Mandap Opening", bengaliTitle: "ভক্তবৃন্দের আগমন ও মণ্ডপ দ্বারোদ্ঘাটন", description: "Welcoming community members and guests with chandan and sweet greetings." },
        { time: "06:00 PM", title: "Shashthi Bodhan, Amantran & Adhibas", bengaliTitle: "দেবী বোধন, আমন্ত্রণ ও অধিবাস", description: "Sacred awakening rituals of Maa Durga under the Bilva tree." },
        { time: "07:30 PM", title: "Sandhya Arati & Dhak Recital", bengaliTitle: "সন্ধ্যা আরতি ও ঢাকের বাদ্য", description: "Traditional evening lamp offering accompanied by rhythmic beats of the Dhak." },
        { time: "08:30 PM", title: "Welcome Cultural Adda & Light Dinner", bengaliTitle: "স্বাগতম সাংস্কৃতিক আড্ডা ও নৈশভোজ", description: "Community gathering with traditional Bengali festive snacks." },
      ],
    },
    {
      dayNumber: "DAY 02",
      dayKey: "saptami",
      dayName: "SAPTAMI",
      bengaliName: "সপ্তমী — মহাসপ্তমী",
      dateStr: "17 October 2026",
      dateSubtitle: "Saturday • Sacred Nabapatrika & Joy",
      highlights: ["Nabapatrika Snan", "Saptami Pushpanjali", "Community Bhog", "Grand Cultural Evening"],
      events: [
        { time: "09:30 AM", title: "Nabapatrika Pravesh & Saptami Puja", bengaliTitle: "নবপত্রিকা প্রবেশ ও মহাসপ্তমী পূজা", description: "Holy bathing of Kolabou (Nabapatrika) and consecration in the pandal." },
        { time: "11:00 AM", title: "Saptami Pushpanjali (Batches 1 & 2)", bengaliTitle: "মহাসপ্তমী পুষ্পাঞ্জলি", description: "Devotional floral prayer offering to Maa Durga and her children." },
        { time: "01:00 PM", title: "Traditional Community Mahabhog", bengaliTitle: "মহাপ্রসাদ ও কমিউনিটি মহাতৃপ্তির ভোগ", description: "Sacred Khichuri bhog, Labra, Chutney, and Payesh served with love." },
        { time: "06:30 PM", title: "Sandhya Arati & Dhunuchi Naach", bengaliTitle: "সন্ধ্যা আরতি ও ধুনুচি নাচ", description: "Vibrant traditional incense dance accompanied by resonating Dhak rhythm." },
        { time: "07:30 PM", title: "Nordic-Bengali Cultural Extravaganza", bengaliTitle: "সাংস্কৃতিক অনুষ্ঠান — সঙ্গীত ও নৃত্য", description: "Live Rabindra Sangeet, classical dances, and folk music by community artists." },
      ],
    },
    {
      dayNumber: "DAY 03",
      dayKey: "ashtami",
      dayName: "ASHTAMI",
      bengaliName: "অষ্টমী — মহাষ্টমী ও সন্ধিপূজা",
      dateStr: "18 October 2026",
      dateSubtitle: "Sunday • Peak Devotion & 108 Diyas",
      badge: "HIGHLIGHT",
      themeColor: "from-amber-700/30 to-red-950/40",
      highlights: ["Maha Ashtami Puja", "Grand Pushpanjali", "Kumari Puja", "Auspicious Sandhi Puja"],
      events: [
        { time: "09:30 AM", title: "Maha Ashtami Puja & Chandi Path", bengaliTitle: "মহাষ্টমী পূজা ও চণ্ডীপাঠ", description: "Solemn recitation of sacred hymns invoking the divine supreme goddess." },
        { time: "10:30 AM", title: "Grand Maha Ashtami Pushpanjali", bengaliTitle: "মহাষ্টমী পুষ্পাঞ্জলি (সকলের জন্য)", description: "The most sacred Pushpanjali of the year across three dedicated batches.", isHighlight: true },
        { time: "12:00 PM", title: "Kumari Puja (Symbolic Worship of Divine Girl Child)", bengaliTitle: "কুমারী পূজা", description: "Worship of the young girl as the embodiment of Goddess Durga." },
        { time: "01:30 PM", title: "Ashtami Mahabhog Distribution", bengaliTitle: "অষ্টমীর মহাতৃপ্তির ভোগ বিতরণ", description: "Festive bhog prasad, luchi, cholar dal, begun bhaja, and mishti." },
        { time: "06:45 PM", title: "Sandhya Arati & Dhunuchi Challenge", bengaliTitle: "সন্ধ্যা আরতি ও ধুনুচি নৃত্য প্রতিযোগিতা", description: "Enthusiastic participation across all age groups to honor Maa Durga." },
        { time: "08:15 PM", title: "Sacred Sandhi Puja (108 Lotus & 108 Lamps)", bengaliTitle: "সন্ধিপূজা (১০৮ পদ্ম ও ১০৮ প্রদীপ প্রজ্বলন)", description: "The climactic transition between Ashtami & Nabami when Maa Chamunda vanquished Chanda and Munda.", isHighlight: true },
        { time: "09:45 PM", title: "Grand Drama & Musical Night", bengaliTitle: "মহানাটক ও শারদ সঙ্গীত সন্ধ্যা", description: "Signature theatrical production by Biswabangla Nordic performers." },
      ],
    },
    {
      dayNumber: "DAY 04",
      dayKey: "nabami",
      dayName: "NABAMI",
      bengaliName: "নবমী — মহানবমী",
      dateStr: "19 October 2026",
      dateSubtitle: "Monday • Sacred Homa & Celebration",
      highlights: ["Mahanabami Puja", "Nabami Pushpanjali", "Maha Yajna / Homa", "Youth & Kids Gala"],
      events: [
        { time: "10:00 AM", title: "Mahanabami Puja & Archana", bengaliTitle: "মহানবমী পূজা ও অর্চনা", description: "Morning prayers and adoration of the Mother Goddess." },
        { time: "11:30 AM", title: "Mahanabami Pushpanjali", bengaliTitle: "মহানবমী পুষ্পাঞ্জলি", description: "Floral prayer offerings and blessing recitation." },
        { time: "12:30 PM", title: "Maha Yajna & Homa", bengaliTitle: "হোম ও মহাযজ্ঞ", description: "Sacred fire oblation praying for global peace, health, and harmony in the Nordics." },
        { time: "01:30 PM", title: "Nabami Community Feast", bengaliTitle: "নবমী ভোজ প্রসাদ", description: "Grand festive banquet with traditional delicacies and sweets." },
        { time: "06:30 PM", title: "Sandhya Arati & Festive Beats", bengaliTitle: "সন্ধ্যা আরতি ও ধামাকা ঢাক বাদন", description: "Evening arati with traditional lighting and rhythmic joy." },
        { time: "07:30 PM", title: "Youth & Children's Talent Extravaganza", bengaliTitle: "শিশু-কিশোর শারদ উৎসব ও সঙ্গীত", description: "Showcasing the vibrant talents of our Nordic Bengali younger generation." },
      ],
    },
    {
      dayNumber: "DAY 05",
      dayKey: "dashami",
      dayName: "BIJOYA DASHAMI",
      bengaliName: "দশমী — বিজয়া দশমী ও সিঁদুর খেলা",
      dateStr: "20 October 2026",
      dateSubtitle: "Tuesday • Sindoor Khela & Bijoya Greetings",
      highlights: ["Darpan Bisarjan", "Sindoor Khela", "Dhunuchi Farewell", "Shantijal & Bijoya Pronam"],
      events: [
        { time: "10:00 AM", title: "Dashami Puja & Darpan Bisarjan", bengaliTitle: "দশমী বিহিত পূজা ও দর্পণ বিসর্জন", description: "Symbolic mirror immersion concluding the five-day ritual worship." },
        { time: "11:30 AM", title: "Devi Boron & Sindoor Khela", bengaliTitle: "দেবী বরণ ও সিঁদুর খেলা", description: "Traditional sweet feeding and vermilion blessing ceremony for married women and community joy.", isHighlight: true },
        { time: "01:30 PM", title: "Bijoya Special Sweet Treats & Bhog", bengaliTitle: "বিজয়ার মিষ্টিমুখ ও প্রসাদ", description: "Homemade Rossogolla, Sandesh, Kucho Nimki, and Ghugni." },
        { time: "05:00 PM", title: "Farewell Dhak & Dhunuchi Dance", bengaliTitle: "বিদায় বন্দনা ও শেষ ঢাকের বোল", description: "Bidding an emotional farewell to Maa Durga with 'Ashche bochor abar hobe'." },
        { time: "06:30 PM", title: "Shantijal & Subho Bijoya Exchange", bengaliTitle: "শান্তিজল গ্রহণ ও শুভ বিজয়া কোলাকুলি", description: "Sprinkling of holy peace water, touching elders' feet, warm hugs, and sweets." },
      ],
    },
  ],
  cultural: {
    headingEn: "BEYOND PUJA • CULTURE & COMMUNITY",
    headingBn: "সংস্কৃতি, সুর ও মিলনোৎসব",
    subtitle: "Experience the vibrant cultural soul of Bengal right here in Denmark.",
    items: [
      {
        time: "17 Oct • 07:30 PM",
        title: "Classical & Contemporary Bengali Melodies",
        category: "Music",
        description: "Enchanting performances featuring Rabindra Sangeet, Nazrul Geeti, and modern Bengali classics by resident artists.",
      },
      {
        time: "18 Oct • 06:45 PM",
        title: "Dhunuchi Dance & Dhak Grand Showcase",
        category: "Dhak",
        description: "The captivating sound of traditional brass cymbals (Kashor) and master Dhak players echoing festive devotion.",
      },
      {
        time: "18 Oct • 09:45 PM",
        title: "Annual Community Theatrical Drama",
        category: "Dance",
        description: "A specially produced Bengali drama highlighting heritage, humor, and diasporic warmth in the Nordics.",
      },
      {
        time: "19 Oct • 07:30 PM",
        title: "Children's & Youth Talent Showcase",
        category: "Children",
        description: "Dance dramas, poetry recitations, and storytelling by the young generation born and growing up in Denmark.",
      },
      {
        time: "Daily • 01:00 PM",
        title: "Authentic Bengali Mahabhog & Food Stalls",
        category: "Bhog",
        description: "Pure traditional feast served with genuine love, alongside afternoon snacks, tea, and Bengali mishti.",
      },
      {
        time: "Daily • All Day",
        title: "Alpona & Heritage Exhibition",
        category: "Community",
        description: "Intricate floor art patterns, traditional handicraft stalls, and photo booth in authentic Bengali festive attires.",
      },
    ],
  },
  venue: {
    name: "Biswabangla Nordic Pandal & Cultural Hall",
    address: "Kulturvej 10, 2000 Frederiksberg",
    city: "Copenhagen",
    postalCode: "2000",
    country: "Denmark",
    landmark: "Close to Metro & Public Transport, ample designated parking available",
    transportTips: [
      "Metro: 5 minutes walk from closest station",
      "Bus lines: Direct access via routes 2A, 7A & 9A",
      "Free venue parking available on weekends for attendees",
      "Full wheelchair and stroller accessibility throughout the premises",
    ],
    mapsQuery: "Frederiksberg, Copenhagen, Denmark",
    lat: 55.6761,
    lng: 12.5683,
  },
  contact: {
    organization: "Biswabangla Nordic Association",
    email: "contact@biswabanglanordic.dk",
    phone: "+45 50 12 34 56",
    facebook: "https://facebook.com/biswabanglanordic",
    instagram: "https://instagram.com/biswabanglanordic",
    whatsappCommunity: "https://chat.whatsapp.com/sample-durga-puja-denmark",
  },
};
