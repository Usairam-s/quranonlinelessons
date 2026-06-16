export interface City {
  slug: string;
  city: string;
  country: string;
  title: string;
  description: string;
  heroHeading: string;
  heroSubtext: string;
  imagePlaceholderLabel: string;
  imageUrl: string;
  localIntroHeading: string;
  localIntroContent: string[];
  featuresHeading: string;
  features: {
    title: string;
    description: string;
  }[];
  coursesHeading: string;
  coursesIntro: string;
  faqHeading: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaHeading: string;
  ctaSubtext: string;
  schemaServiceArea: string;
  nearbyAreas: string[];
}

export const cities: City[] = [
  {
    slug: "online-quran-classes-birmingham",
    city: "Birmingham",
    country: "UK",
    title: "Online Quran Classes in Birmingham | Live 1-on-1 | Quran Online Lessons",
    description: "Looking for online Quran classes in Birmingham? Live one-on-one classes via Zoom for kids, adults & sisters. Female teachers available. Flexible timings. Book a free trial today.",
    heroHeading: "Online Quran Classes in Birmingham",
    heroSubtext: "Live one-on-one Quran classes via Zoom for children, adults and sisters across Birmingham. Female teachers available. Flexible timings to suit your schedule. First class completely free.",
    imagePlaceholderLabel: "Birmingham city skyline or mosque, warm lighting",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781575081/entrance-to-birmingham-central-mosque_goetbr.webp",
    localIntroHeading: "Serving Birmingham's Muslim Community",
    localIntroContent: [
      "Birmingham is home to one of the largest and most established Pakistani Muslim communities in the United Kingdom. Families across Sparkbrook, Small Heath, Handsworth, Alum Rock, and Bordesley Green have long prioritised Quranic education for their children — and increasingly, parents are turning to trusted online teachers who can deliver that same quality of teaching directly into the home.",
      "Our online Quran academy has been built specifically to serve families like yours — diaspora parents who want their children to grow up connected to the Qur'an, who value a teacher they can trust, and who need the flexibility that local mosque classes simply cannot always provide. Whether your child is a complete beginner just starting with the Arabic alphabet, or an adult looking to improve their Tajweed, we teach students at every level.",
      "Classes take place live, one-on-one, via Zoom — meaning your child gets the teacher's full attention every single session. There are no group classes, no distractions, and no falling behind. Timings are flexible around Birmingham school hours, weekend availability, and evening slots — whatever works for your family."
    ],
    featuresHeading: "Why Birmingham Families Choose Us",
    features: [
      {
        title: "Female Teachers Available",
        description: "We understand the importance of a comfortable learning environment. Female teachers are available for sisters and young girls across Birmingham."
      },
      {
        title: "Flexible Timings for Birmingham Families",
        description: "Morning, evening and weekend slots available — all scheduled around UK timezone and Birmingham school hours."
      },
      {
        title: "All Ages Welcome",
        description: "From young children in primary school to adults and elders — we teach complete beginners through to advanced students."
      },
      {
        title: "One-on-One Live Classes",
        description: "Every session is private, live, and personal. Your child is never one of twenty students in a group — they have the teacher's complete focus."
      },
      {
        title: "Complete Curriculum",
        description: "Hifz, Tajweed, Qaida, Tafseer, Kalima and Masnoon Du'ain — a full Islamic education delivered online."
      },
      {
        title: "Free Trial Class",
        description: "Not sure if online learning is right for your child? Book a completely free trial class with no commitment — see for yourself."
      }
    ],
    coursesHeading: "What We Teach",
    coursesIntro: "We offer a complete Quranic curriculum for Birmingham students of all ages and levels — from the very first Arabic letters through to full Qur'an memorisation and Tafseer.",
    faqHeading: "Questions From Birmingham Families",
    faqs: [
      {
        question: "Are there female Quran teachers available for my daughter in Birmingham?",
        answer: "Yes — female teachers are available for all sisters and young girls. We understand this is important for many Birmingham families, and we ensure every student is matched with a teacher they and their parents are comfortable with."
      },
      {
        question: "What times are available for Birmingham students?",
        answer: "We offer morning, evening and weekend slots, all scheduled in UK timezone. Whether your child needs a class before school, after school, or on Saturday morning — we will find a time that works for your family."
      },
      {
        question: "My child has never read Arabic before. Can they still join?",
        answer: "Absolutely. Many of our Birmingham students start from complete zero — not knowing a single Arabic letter. We begin with Qaida (Alif Ba Ta), teaching the alphabet, letter joining and reading foundations before moving on to the Qur'an itself. There is no minimum level required."
      },
      {
        question: "How do online Quran classes work — what does my child need?",
        answer: "All classes take place via Zoom, which most Birmingham families already have on their phone, tablet or laptop. Your child simply joins the Zoom call at the agreed time, and the teacher conducts the class live — listening, correcting and guiding in real time, exactly as a face-to-face class would work."
      },
      {
        question: "How is this different from a local mosque class in Birmingham?",
        answer: "The main difference is personal attention. In a typical mosque class, a teacher may have 15 to 20 students in one session — meaning your child gets only a few minutes of direct attention. Our classes are one-on-one, every session, so every minute is focused entirely on your child's progress. Classes also happen at home, removing the need for travel."
      },
      {
        question: "How much do classes cost?",
        answer: "We keep our fees simple and affordable for Birmingham families. The first class is completely free with no commitment. Get in touch via WhatsApp and we will discuss a schedule and pricing that works for you."
      }
    ],
    ctaHeading: "Start Your Child's Quran Journey Today",
    ctaSubtext: "Join families across Birmingham who are giving their children the gift of the Qur'an — from the comfort of home, with a teacher they can trust.",
    schemaServiceArea: "Birmingham, United Kingdom",
    nearbyAreas: ["Sparkbrook", "Small Heath", "Handsworth", "Alum Rock", "Bordesley Green", "Aston", "Erdington"]
  },
  {
    slug: "online-quran-classes-bradford",
    city: "Bradford",
    country: "UK",
    title: "Online Quran Classes in Bradford | Live 1-on-1 | Quran Online Lessons",
    description: "Looking for online Quran classes in Bradford? Live one-on-one classes via Zoom for kids, adults & sisters. Female teachers available. Flexible timings. Book a free trial today.",
    heroHeading: "Online Quran Classes in Bradford",
    heroSubtext: "Live one-on-one Quran classes via Zoom for children, adults and sisters across Bradford. Female teachers available. Flexible timings to suit your schedule. First class completely free.",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781576143/13a_i8qafd.jpg",
    imagePlaceholderLabel: "Bradford Grand Mosque or Bradford city Pakistani community",
    localIntroHeading: "Serving Bradford's Muslim Community",
    localIntroContent: [
      "Bradford has one of the highest concentrations of Pakistani Muslims anywhere in the United Kingdom — roughly one in four Bradford residents is of Pakistani heritage, making it one of the most established South Asian Muslim communities in the country. Families across Manningham, Girlington, Toller, Great Horton, and Heaton have deep roots in Islamic tradition and have long prioritised Quranic education for their children.",
      "As Bradford's Muslim community has grown across generations, the challenge of maintaining that connection with the Qur'an has grown alongside it. Children raised in Bradford are navigating two worlds — and many parents feel a genuine urgency to ensure their children grow up with a strong foundation in their deen, their language, and their identity. Online Quran classes make that possible without disrupting busy family schedules.",
      "Our academy serves Bradford families with live, one-on-one classes via Zoom — taught by experienced, trusted teachers who understand the background and values of Pakistani Muslim families. Whether your child is starting from the very beginning with Qaida, working toward Hifz, or an adult wanting to finally learn Tajweed properly — we teach every level, every age, with patience and care."
    ],
    featuresHeading: "Why Bradford Families Choose Us",
    features: [
      {
        title: "Female Teachers Available",
        description: "Female teachers are available for sisters and young girls. We know this matters deeply to Bradford families and we ensure every student is comfortable with their teacher."
      },
      {
        title: "Flexible Timings for Bradford Families",
        description: "Morning, evening and weekend slots available — scheduled around UK timezone and Bradford school hours so learning never disrupts family life."
      },
      {
        title: "All Ages Welcome",
        description: "From young children in primary school to adults and elders — we welcome complete beginners and work at whatever pace suits the student."
      },
      {
        title: "One-on-One Live Classes",
        description: "Every session is private, live, and entirely focused on your child. No group classes, no waiting, no distractions — just a teacher and a student."
      },
      {
        title: "Complete Curriculum",
        description: "Hifz, Tajweed, Qaida, Tafseer, Kalima and Masnoon Du'ain — everything a Bradford student needs from their first Arabic letter to full Qur'an memorisation."
      },
      {
        title: "Free Trial Class",
        description: "Book a completely free first class with no commitment. See how online learning works for your child before making any decision."
      }
    ],
    coursesHeading: "What We Teach",
    coursesIntro: "We offer a complete Quranic curriculum for Bradford students of all ages and levels — from the very first Arabic letters through to full Qur'an memorisation and Tafseer.",
    faqHeading: "Questions From Bradford Families",
    faqs: [
      {
        question: "Are female Quran teachers available for my daughter in Bradford?",
        answer: "Yes — female teachers are available for all sisters and young girls. This is something we prioritise because we know how important it is for Bradford families. Every student is matched with a teacher they and their parents are fully comfortable with."
      },
      {
        question: "What times are classes available for Bradford students?",
        answer: "We offer morning, evening and weekend slots, all in UK timezone. Whether your child needs a class before school, after school, or on a Saturday — we will find a time that fits around your family's schedule."
      },
      {
        question: "My child was born in Bradford and does not know any Arabic. Where do they start?",
        answer: "They start with Qaida — the Arabic alphabet and reading foundations. This is exactly where most Bradford-born children begin, and there is absolutely no minimum level required. Many of our students start without knowing a single Arabic letter and progress to reading the Qur'an within months."
      },
      {
        question: "How do the online classes actually work?",
        answer: "Classes take place via Zoom, which you likely already have on your phone or laptop. Your child joins at the agreed time and the teacher conducts the class live — listening, correcting and guiding in real time. It works exactly like a face-to-face class, just from the comfort of your home in Bradford."
      },
      {
        question: "Is online Quran learning as effective as going to a local mosque in Bradford?",
        answer: "For one-on-one attention, online is often more effective. In a typical Bradford mosque class, a teacher may have fifteen to twenty children in one session — your child gets only a few minutes of direct attention. Our classes are entirely one-on-one, every session, so every minute is focused on your child's individual progress and mistakes are corrected immediately."
      },
      {
        question: "How much do classes cost?",
        answer: "The first class is completely free with no commitment. After that, we keep pricing simple and fair for Bradford families. Message us on WhatsApp and we will discuss a schedule and fees that work for you."
      }
    ],
    ctaHeading: "Give Your Child the Gift of the Qur'an",
    ctaSubtext: "Join families across Bradford who are ensuring their children grow up connected to their faith — from home, with a teacher they can trust.",
    schemaServiceArea: "Bradford, United Kingdom",
    nearbyAreas: ["Manningham", "Girlington", "Toller", "Great Horton", "Heaton", "Thornton", "Idle"]
  },
  {
    slug: "online-quran-classes-manchester",
    city: "Manchester",
    country: "UK",
    title: "Online Quran Classes in Manchester | Live 1-on-1 | Quran Online Lessons",
    description: "Looking for online Quran classes in Manchester? Live one-on-one classes via Zoom for kids, adults & sisters. Female teachers available. Flexible timings. Book a free trial today.",
    heroHeading: "Online Quran Classes in Manchester",
    heroSubtext: "Live one-on-one Quran classes via Zoom for children, adults and sisters across Manchester. Female teachers available. Flexible timings to suit your schedule. First class completely free.",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781576621/EmZjUUzDWkclqphqbRs37r3LhojwYj4kQcDPYuFS%D9%85%D8%B3%D8%AC%D8%AF_%D9%85%D8%A7%D9%86%D8%B4%D8%B3%D8%AA%D8%B1_%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A_8_shp2d8.jpg",
    imagePlaceholderLabel: "Manchester Central Mosque exterior",
    localIntroHeading: "Serving Manchester's Muslim Community",
    localIntroContent: [
      "Manchester is home to one of the most vibrant and diverse Muslim communities in the United Kingdom, with over 100,000 Muslims living across the city and the wider Greater Manchester area. Families across Rusholme, Longsight, Cheetham Hill, Levenshulme, and Oldham have built strong Islamic traditions across generations — and for many, Quranic education remains a cornerstone of family life.",
      "The famous Curry Mile in Rusholme sits at the heart of Manchester's South Asian Muslim community, but the community stretches far beyond it. Pakistani, Bangladeshi, and Arab families across Greater Manchester share a common concern — ensuring their children grow up with a genuine connection to the Qur'an, even as life in a busy British city pulls in many directions.",
      "Our online Quran academy was built for families exactly like yours. Live, one-on-one classes via Zoom mean your child gets a dedicated teacher's full attention — without the travel, without the group setting, and without the rigid schedule that local mosque classes often require. We teach students of all ages and levels, from complete beginners to those working toward Hifz."
    ],
    featuresHeading: "Why Manchester Families Choose Us",
    features: [
      {
        title: "Female Teachers Available",
        description: "Female teachers are available for all sisters and young girls across Manchester. We ensure every student is matched with a teacher they and their family are comfortable with."
      },
      {
        title: "Flexible Timings for Manchester Families",
        description: "Morning, evening and weekend slots available — all scheduled in UK timezone around Manchester school hours and family commitments."
      },
      {
        title: "All Ages Welcome",
        description: "From young children in primary school to adults and elders — complete beginners are welcome and we work at whatever pace suits each student."
      },
      {
        title: "One-on-One Live Classes",
        description: "Every session is private, live, and entirely focused on your child. No group classes, no distractions — just a teacher and a student working together."
      },
      {
        title: "Complete Curriculum",
        description: "Hifz, Tajweed, Qaida, Tafseer, Kalima and Masnoon Du'ain — a full Islamic education delivered live online for Manchester students."
      },
      {
        title: "Free Trial Class",
        description: "Book a completely free first class with no commitment. See how online learning works for your child before making any decision."
      }
    ],
    coursesHeading: "What We Teach",
    coursesIntro: "We offer a complete Quranic curriculum for Manchester students of all ages and levels — from the very first Arabic letters through to full Qur'an memorisation and Tafseer.",
    faqHeading: "Questions From Manchester Families",
    faqs: [
      {
        question: "Are female Quran teachers available for my daughter in Manchester?",
        answer: "Yes — female teachers are available for all sisters and young girls. We understand this is a priority for many Manchester families and we make sure every student is paired with a teacher they feel comfortable learning from."
      },
      {
        question: "What times are classes available for Manchester students?",
        answer: "We offer morning, evening and weekend slots, all scheduled in UK timezone. Whether your child needs a class before or after school, or on a Saturday morning — we will find a time that works around your Manchester family's schedule."
      },
      {
        question: "My child has never learned Arabic. Can they join?",
        answer: "Absolutely — many of our Manchester students start from complete zero. We begin with Qaida, teaching the Arabic alphabet and reading foundations step by step. There is no minimum level and no rush — we go at the pace that suits your child."
      },
      {
        question: "How do online Quran classes work?",
        answer: "Classes take place via Zoom, which most Manchester families already have on their phone, tablet or laptop. Your child joins at the agreed time and the teacher conducts the class live — listening, correcting and guiding exactly as a face-to-face class would work, just from the comfort of home."
      },
      {
        question: "How is this different from a local mosque class in Manchester?",
        answer: "The key difference is personal attention. A typical mosque class in Manchester may have fifteen to twenty students sharing one teacher — your child gets only a few minutes of direct focus. Our classes are entirely one-on-one, so every minute is dedicated to your child's individual progress."
      },
      {
        question: "How much do classes cost?",
        answer: "The first class is completely free with no commitment. After that, we keep pricing simple and affordable for Manchester families. Message us on WhatsApp and we will discuss a schedule and fees that work for you."
      }
    ],
    ctaHeading: "Start Your Child's Qur'an Journey Today",
    ctaSubtext: "Join families across Manchester who are giving their children a strong foundation in their faith — from home, with a teacher they can trust.",
    schemaServiceArea: "Manchester, United Kingdom",
    nearbyAreas: ["Rusholme", "Longsight", "Cheetham Hill", "Levenshulme", "Didsbury", "Oldham", "Rochdale"]
  },
  {
    slug: "online-quran-classes-london",
    city: "London",
    country: "UK",
    title: "Online Quran Classes in London | Live 1-on-1 | Quran Online Lessons",
    description: "Looking for online Quran classes in London? Live one-on-one classes via Zoom for kids, adults & sisters. Female teachers available. Flexible timings. Book a free trial today.",
    heroHeading: "Online Quran Classes in London",
    heroSubtext: "Live one-on-one Quran classes via Zoom for children, adults and sisters across London. Female teachers available. Flexible timings to suit your schedule. First class completely free.",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781576816/40723_body_10-October-2019-_RJ__1_msiuwl.jpg",
    imagePlaceholderLabel: "East London Mosque exterior",
    localIntroHeading: "Serving London's Muslim Community",
    localIntroContent: [
      "London is home to the largest Pakistani Muslim community in the United Kingdom — nearly 300,000 people of Pakistani heritage live across the capital, concentrated in areas like Waltham Forest, Newham, Redbridge, Ealing, Brent, and Hounslow. Alongside this, London's broader Muslim population of over one million makes it one of the most significant Muslim cities in the Western world.",
      "London's Pakistani Muslim families are, on the whole, an established and professionally settled community — many are second and third generation British Pakistanis who have built successful careers in healthcare, law, business and finance. Yet despite that success, one concern remains constant across generations: ensuring children grow up with a genuine, deep connection to the Qur'an and their Islamic identity.",
      "Our online Quran academy serves London families with live, one-on-one classes via Zoom — taught by experienced, trusted teachers who understand the values and background of Pakistani Muslim families. Whether your child is a complete beginner, a teenager who wants to improve their Tajweed, or an adult who never had the opportunity to learn properly — we teach every level, every age, with patience and care."
    ],
    featuresHeading: "Why London Families Choose Us",
    features: [
      {
        title: "Female Teachers Available",
        description: "Female teachers are available for all sisters and young girls across London. Every student is matched with a teacher their family is fully comfortable with."
      },
      {
        title: "Flexible Timings for London Families",
        description: "Morning, evening and weekend slots available — all in UK timezone, designed around London school hours and busy family schedules."
      },
      {
        title: "All Ages Welcome",
        description: "From young children in primary school to adults and elders — complete beginners are welcome and we move at whatever pace suits each student."
      },
      {
        title: "One-on-One Live Classes",
        description: "Every session is private, live, and entirely focused on your child. No group classes, no waiting — just a dedicated teacher and one student."
      },
      {
        title: "Complete Curriculum",
        description: "Hifz, Tajweed, Qaida, Tafseer, Kalima and Masnoon Du'ain — everything a London student needs from their very first Arabic letter to full Qur'an memorisation."
      },
      {
        title: "Free Trial Class",
        description: "Book a completely free first class with no commitment. See how online learning works for your child before making any decision."
      }
    ],
    coursesHeading: "What We Teach",
    coursesIntro: "We offer a complete Quranic curriculum for London students of all ages and levels — from the very first Arabic letters through to full Qur'an memorisation and Tafseer.",
    faqHeading: "Questions From London Families",
    faqs: [
      {
        question: "Are female Quran teachers available for my daughter in London?",
        answer: "Yes — female teachers are available for all sisters and young girls. We know how important this is for London families and we ensure every student is paired with a teacher they feel completely comfortable learning from."
      },
      {
        question: "What times are classes available for London students?",
        answer: "We offer morning, evening and weekend slots, all scheduled in UK timezone. Whether your child needs a class before school, after school, or on a weekend — we will find a time that fits around your London family's schedule."
      },
      {
        question: "My child was born in London and has never learned Arabic. Where do they start?",
        answer: "They start with Qaida — the Arabic alphabet and reading foundations. This is where most London-born children begin, and there is no minimum level required. Many students start without knowing a single Arabic letter and progress to reading the Qur'an within months."
      },
      {
        question: "How do online Quran classes work for London students?",
        answer: "Classes take place via Zoom, which most London families already have on their phone, tablet or laptop. Your child joins at the agreed time and the teacher conducts the class live — listening, correcting and guiding in real time, exactly as a face-to-face class would work, just from home."
      },
      {
        question: "Is online Quran learning as good as a local class in London?",
        answer: "For personal attention, online is often better. A typical London mosque class may have fifteen to twenty students sharing one teacher — your child gets only minutes of direct focus. Our classes are entirely one-on-one, so every minute is dedicated to your child's individual progress and corrections happen immediately."
      },
      {
        question: "How much do classes cost?",
        answer: "The first class is completely free with no commitment. After that, we keep pricing simple and fair for London families. Message us on WhatsApp and we will discuss a schedule and fees that work for you."
      }
    ],
    ctaHeading: "Give Your Child a Strong Foundation in the Qur'an",
    ctaSubtext: "Join families across London who are ensuring their children grow up connected to their faith — from home, with a teacher they can trust.",
    schemaServiceArea: "London, United Kingdom",
    nearbyAreas: ["Waltham Forest", "Newham", "Redbridge", "Ealing", "Brent", "Hounslow", "Tower Hamlets"]
  }
];
