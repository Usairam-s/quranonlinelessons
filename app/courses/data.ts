export interface Course {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroHeading: string;
  heroSubtext: string;
  imagePlaceholderLabel: string;
  imageUrl: string;
  bodyParagraphs: string[];
}

export const courses: Course[] = [
  {
    slug: "hifz",
    name: "Hifz",
    title: "Online Hifz Classes | Memorize the Qur'an with 1-on-1 Guidance",
    description: "Learn Hifz online with personalised one-on-one classes. Structured memorisation with daily revision, suitable for children and adults. Female teachers available. Book a free trial.",
    heroHeading: "Hifz — Memorising the Holy Qur'an",
    heroSubtext: "Begin your journey of memorising the Qur'an with a dedicated teacher who adapts to your pace. Live one-on-one classes via Zoom, with structured daily revision to help new memorisation stay with you for life.",
    imagePlaceholderLabel: "Student reciting Quran from memory with teacher listening on video call",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781571953/pexels-timur-weber-9127619_mcsopt.jpg",
    bodyParagraphs: [
      "Hifz, the memorisation of the Holy Qur'an, is one of the most rewarding journeys a Muslim can undertake — and one that benefits greatly from consistent, personal guidance. Our online Hifz programme follows the traditional Sabaq, Sabqi, and Manzil system: new portions are learned (Sabaq), recently memorised portions are revised (Sabqi), and older portions are kept fresh through regular long-term revision (Manzil). This structure ensures that what is memorised is genuinely retained, not just recited once and forgotten.",
      "This course is suitable for young children just beginning their Hifz journey, as well as adults who wish to complete their memorisation later in life — it's never too late to start. Every student progresses at their own pace, with the teacher adjusting daily targets based on the student's age, memory, and available time. There is no rigid one-size-fits-all schedule; instead, the pace is set collaboratively between teacher, student, and parent.",
      "Classes take place live, one-on-one, via Zoom — meaning the teacher listens to every recitation in real time, gently correcting mistakes as they happen, which is far more effective than recorded lessons. Sessions can be scheduled flexibly across morning, evening, or weekend slots to suit families across the UK, Australia, and beyond. Female teachers are available for sisters and young girls who prefer to learn in that environment. Progress is tracked consistently, so parents always know exactly how their child is doing."
    ]
  },
  {
    slug: "tajweed",
    name: "Tajweed",
    title: "Online Tajweed Classes | Learn Correct Qur'an Recitation",
    description: "Improve your Qur'an recitation with live online Tajweed classes. Learn proper pronunciation, articulation points, and recitation rules with one-on-one guidance. Free trial available.",
    heroHeading: "Tajweed — Reciting the Qur'an Beautifully and Correctly",
    heroSubtext: "Tajweed is the set of rules that govern how the Qur'an should be recited — and it's best learned by ear, with someone listening and correcting you live. One-on-one online classes make that possible from anywhere in the world.",
    imagePlaceholderLabel: "Close-up of Quran page with Tajweed colour-coded markings",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781571952/pexels-muhtelifane-70593160-28119078_qceinu.jpg",
    bodyParagraphs: [
      "Many people read the Qur'an for years without ever being corrected on their pronunciation — small mistakes in articulation points (Makharij) or elongation rules can change meaning, or simply make recitation less beautiful than it could be. Tajweed exists to fix exactly this. Our online Tajweed classes focus on listening to each student recite, identifying specific points that need correction, and practising them repeatedly until they become natural.",
      "This course suits a wide range of students — those who already know how to read Arabic but want to refine their recitation, those preparing to begin Hifz and want a strong foundation first, and adults who learned to read the Qur'an as children but never focused on Tajweed rules properly. Lessons are paced according to the student's current level; complete beginners and advanced reciters both benefit, just at different starting points.",
      "Because Tajweed is fundamentally about sound and correction, live one-on-one classes via Zoom are particularly effective — a teacher can hear subtle errors that would be missed in a recorded course or group class. Sessions are flexible around UK and Australia time zones, with female teachers available for sisters. Many students notice a real difference in their recitation within just a few weeks of consistent practice."
    ]
  },
  {
    slug: "qaida",
    name: "Qaida",
    title: "Online Qaida Classes | Arabic Reading for Beginners",
    description: "Start your Qur'an journey with online Qaida classes. Learn Arabic letters, joining rules, and reading fluency — perfect for young children and adult beginners. Book a free trial.",
    heroHeading: "Qaida — Your First Step Toward Reading the Qur'an",
    heroSubtext: "Every Qur'an journey begins with learning the Arabic alphabet and how letters join together to form words. Our Qaida classes build this foundation patiently, one-on-one, so reading the Qur'an feels natural rather than overwhelming.",
    imagePlaceholderLabel: "Young child learning Arabic alphabet with teacher online, Qaida book visible",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781571952/pexels-hatice-1054684715-33761914_cmgsfv.jpg",
    bodyParagraphs: [
      "Qaida (sometimes called Noorani Qaida or Alif Ba Ta) is the starting point for anyone learning to read the Qur'an — most commonly young children, but equally suitable for adults who never learned Arabic reading growing up. The course covers individual letter recognition, how letter shapes change depending on their position in a word, vowel marks, and gradually combines these into simple word and sentence reading.",
      "This is often the stage where a student's relationship with learning the Qur'an is formed — which is why patience and encouragement matter just as much as the content itself. Our teachers are experienced in working with young children specifically, keeping lessons engaging without rushing, while also being equally comfortable teaching adult beginners who may feel self-conscious starting from scratch. Female teachers are available for young girls and sisters.",
      "Classes are live and one-on-one via Zoom, meaning the teacher can immediately notice if a letter sound or shape isn't quite right and correct it before it becomes a habit — something that's very difficult to fix later if learned incorrectly early on. Once a student completes Qaida with confidence, they're ready to move on to reading directly from the Qur'an, with Tajweed rules introduced alongside."
    ]
  },
  {
    slug: "tafseer",
    name: "Tafseer",
    title: "Online Tafseer Classes | Understand the Meaning of the Qur'an",
    description: "Go beyond recitation — understand the meaning and context of the Qur'an with online Tafseer classes. Simple explanations connecting verses to daily life. Female teachers available.",
    heroHeading: "Tafseer — Understanding What the Qur'an Means",
    heroSubtext: "Reciting the Qur'an is the beginning — understanding what it actually says is what brings it to life. Our Tafseer classes explain the meaning and context of verses in simple, accessible language, one-on-one.",
    imagePlaceholderLabel: "Teacher and student discussing Quran meaning over video call, open book and notes visible",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781571953/pexels-sirmudi_photography-2155088036-33750569_lkgf4q.jpg",
    bodyParagraphs: [
      "For many students, especially those raised outside Arabic-speaking countries, the Qur'an can feel like something recited rather than understood. Tafseer classes address this directly — exploring the meaning, historical context, and practical lessons behind verses and chapters, explained in clear English (or alongside Urdu, where helpful) without assuming prior religious education.",
      "This course is suitable for students of any age who can already read the Qur'an and want to deepen their connection with it — teenagers preparing to understand their faith more independently, adults who want to revisit familiar surahs with new understanding, and anyone curious about why certain verses were revealed and what they mean for daily life today.",
      "Because understanding often raises questions — and because everyone's questions are different — one-on-one live classes via Zoom allow for genuine discussion, not just a lecture. Students are encouraged to ask \"why\" and \"what does this mean for me,\" and lessons can be tailored toward topics a student is personally curious about. Flexible scheduling across UK and Australia time zones, with female teachers available for sisters."
    ]
  },
  {
    slug: "kalima-tawheed",
    name: "Kalima & Tawheed",
    title: "Learn Kalima & Tawheed Online | Foundations of Islamic Faith",
    description: "Learn the Kalimas and the concept of Tawheed (the Oneness of Allah) through live one-on-one online classes. Suitable for children and adults. Female teachers available.",
    heroHeading: "Kalima & Tawheed — The Foundations of Faith",
    heroSubtext: "Before reciting or memorising the Qur'an, every Muslim benefits from understanding its foundation — the Kalimas and the concept of Tawheed. These short, simple lessons build a lifelong understanding of faith, taught one-on-one online.",
    imagePlaceholderLabel: "Child reciting Kalima with teacher on video call, simple calligraphy in background",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781571952/pexels-saramazin-19892296_reg4o7.jpg",
    bodyParagraphs: [
      "The Kalimas are short declarations of faith that form the bedrock of a Muslim's beliefs — affirming the Oneness of Allah (Tawheed) and the role of Prophet Muhammad ﷺ. For many families, teaching these is one of the very first steps in a child's religious education, often before formal Qur'an reading begins. Understanding not just the words but their meaning helps these declarations carry weight throughout a person's life, not just as memorised phrases.",
      "This course is ideal for young children just starting their religious learning journey, as well as for adults who memorised the Kalimas as children but never had the meaning explained to them properly. Parents often join this course alongside their children, ensuring the whole family understands these foundational concepts together.",
      "Classes are live, one-on-one, conducted in simple English (with Urdu support where helpful), focusing on correct pronunciation, memorisation, and — most importantly — meaning. Repetition is used naturally and gently, without pressure. Flexible timings suit families across the UK and Australia, and female teachers are available for young girls and sisters."
    ]
  },
  {
    slug: "masnoon-duas",
    name: "Masnoon Du'ain",
    title: "Learn Masnoon Duas Online | Daily Islamic Supplications for Kids & Adults",
    description: "Learn the Masnoon Duas (daily supplications) for everyday situations — waking up, eating, travelling, and more — through live one-on-one online classes. Female teachers available.",
    heroHeading: "Masnoon Du'ain — Du'as for Everyday Life",
    heroSubtext: "From waking up in the morning to leaving the house, there's a dua for nearly every moment of daily life. These short, memorable supplications connect daily routines with remembrance of Allah — taught one-on-one, at a pace that suits you.",
    imagePlaceholderLabel: "Open dua book with translation, soft warm lighting",
    imageUrl: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1781571953/pexels-firman-marek_brew-2148918143-36319737_f4wwyi.jpg",
    bodyParagraphs: [
      "Masnoon Duas are the supplications taught by Prophet Muhammad ﷺ for everyday moments — waking up, eating, leaving home, travelling, and more. They're short, practical, and meant to be woven naturally into daily life rather than treated as separate religious study. For children especially, learning these duas early helps build habits that last a lifetime.",
      "This course suits young children building their first daily routines around remembrance of Allah, as well as adults who want a structured way to learn (or finally learn correctly) duas they may have heard growing up but never formally studied. Families often choose specific duas relevant to their daily life — school mornings, travel, mealtimes — as a starting point.",
      "Classes are live and one-on-one, focusing on correct pronunciation alongside simple explanations of meaning and when each dua is used. Because these duas are tied to real daily moments, students are encouraged to practise them at home between lessons — turning classroom learning into lived habit. Flexible scheduling across UK and Australia time zones, with female teachers available for sisters."
    ]
  }
];
