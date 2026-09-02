export const siteConfig = {
  name: "Good Will Nutrition and Wellness Centre",
  shortName: "Good Will NWC",
  tagline: "अच्छी सेहत पायें, पूछिये कैसे",
  city: "Azamgarh",
  phone: "+91 91964 14477",
  phoneDisplay: "91964 14477",
  altPhone: "+91 63068 78170",
  altPhoneDisplay: "63068 78170",
  whatsapp: "919196414477",
  email: "info@goodwillnutrition.in",
  address: "हनुमान गढ़ी मन्दिर के पीछे, कोलपाण्डेय, आज़मगढ़, उत्तर प्रदेश",
  hours: "7:00 AM – 8:30 AM",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Hanuman+Garhi+Mandir+Kolpandey+Azamgarh&output=embed",
  mapsLinkUrl: "https://maps.google.com/?q=Hanuman+Garhi+Mandir+Kolpandey+Azamgarh",
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  icon: "loss" | "gain" | "diet" | "lifestyle" | "coaching";
};

export const services: Service[] = [
  {
    slug: "weight-loss",
    title: "Weight Loss Programs",
    shortDescription:
      "Personalised, sustainable weight loss plans built around Indian food habits.",
    description:
      "Our weight loss programs are designed by qualified nutritionists to help you lose weight the healthy and sustainable way — without crash diets or starvation. We create a customised plan based on your body type, lifestyle, and food preferences.",
    benefits: [
      "Customised diet plans, no crash dieting",
      "Regular progress tracking & body measurements",
      "Sustainable habits for long-term results",
      "Continuous support from our expert team",
    ],
    icon: "loss",
  },
  {
    slug: "weight-gain",
    title: "Weight Gain Programs",
    shortDescription:
      "Healthy, muscle-focused weight gain plans for a stronger, fuller you.",
    description:
      "Struggling to gain healthy weight? Our weight gain programs focus on building lean muscle and improving overall strength through balanced, high-nutrition diet plans tailored to your daily routine.",
    benefits: [
      "Balanced high-calorie, high-nutrition diets",
      "Focus on muscle gain, not just weight",
      "Plans that fit your daily routine and budget",
      "Regular follow-ups and plan adjustments",
    ],
    icon: "gain",
  },
  {
    slug: "diet-consultation",
    title: "Diet Consultation",
    shortDescription:
      "One-on-one consultation to understand your body and build the right plan.",
    description:
      "Get expert, one-on-one diet consultation from our certified nutritionists. We assess your current diet, lifestyle, and health goals to recommend the right nutrition plan for you and your family.",
    benefits: [
      "In-depth assessment of health & lifestyle",
      "Practical, easy-to-follow diet charts",
      "Guidance for diabetes, thyroid, PCOS & more",
      "Family and children nutrition plans available",
    ],
    icon: "diet",
  },
  {
    slug: "lifestyle-management",
    title: "Lifestyle Management",
    shortDescription:
      "Practical lifestyle changes for better energy, sleep, and long-term health.",
    description:
      "Good health is more than just diet. Our lifestyle management program covers sleep, activity, stress, and daily routine to help you build habits that keep you healthy for life.",
    benefits: [
      "Personalised daily routine guidance",
      "Sleep, stress & activity management",
      "Habit-building for long-term wellness",
      "Support for managing lifestyle diseases",
    ],
    icon: "lifestyle",
  },
  {
    slug: "wellness-coaching",
    title: "Wellness Coaching",
    shortDescription:
      "Ongoing coaching and motivation to help you stay consistent on your journey.",
    description:
      "Staying consistent is the hardest part of any health journey. Our wellness coaches stay with you every step of the way, offering motivation, accountability, and expert advice.",
    benefits: [
      "Regular check-ins to keep you motivated",
      "Goal setting and progress reviews",
      "One-on-one guidance from wellness experts",
      "Support via call and WhatsApp",
    ],
    icon: "coaching",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  result?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ravi Kumar",
    location: "Azamgarh",
    quote:
      "Good Will Nutrition Centre ने मेरा 8 किलो वज़न कम करने में मदद की, वो भी बिना किसी crash diet के। Diet plan बहुत ही practical और follow करने में आसान था।",
    result: "Lost 8kg in 4 months",
  },
  {
    name: "Anjali Singh",
    location: "Azamgarh",
    quote:
      "Team बहुत supportive है। हर हफ्ते follow-up होता था जिससे motivation बना रहा। Highly recommended for anyone serious about their health.",
    result: "Improved energy & sleep",
  },
  {
    name: "Mohd. Arshad",
    location: "Azamgarh",
    quote:
      "Weight gain के लिए मैंने कई जगह try किया, लेकिन यहाँ के diet plan से सच में फर्क दिखा। Staff बहुत friendly और knowledgeable है।",
    result: "Gained healthy 6kg",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-simple-diet-tips-for-weight-loss",
    title: "5 Simple Diet Tips for Sustainable Weight Loss",
    excerpt:
      "Skip the crash diets. These five practical, doctor-approved habits actually work in the long run.",
    date: "2026-06-10",
    content: [
      "Crash diets may show quick results, but they rarely last. Sustainable weight loss comes from small, consistent changes to your daily eating habits.",
      "1. Eat protein with every meal to stay full longer and preserve muscle mass.",
      "2. Don't skip breakfast — it helps control cravings later in the day.",
      "3. Drink water before meals; mild thirst is often mistaken for hunger.",
      "4. Reduce refined sugar gradually instead of cutting it out overnight.",
      "5. Focus on portion control rather than eliminating entire food groups.",
      "Book a free consultation with our nutritionists to get a plan customised for your body and lifestyle.",
    ],
  },
  {
    slug: "healthy-weight-gain-without-junk-food",
    title: "How to Gain Weight the Healthy Way (Without Junk Food)",
    excerpt:
      "Gaining weight doesn't mean eating unhealthy. Here's how to gain lean mass the right way.",
    date: "2026-05-22",
    content: [
      "Many people trying to gain weight turn to fried and sugary food — but this often adds fat, not strength.",
      "Focus on calorie-dense whole foods like nuts, dairy, whole grains, and healthy fats such as ghee and olive oil.",
      "Strength training combined with a high-protein diet helps convert extra calories into muscle rather than fat.",
      "Consistency matters more than intensity — small daily surplus adds up over months.",
      "Our weight gain program creates a plan around your budget and daily routine so it's easy to follow.",
    ],
  },
  {
    slug: "managing-diabetes-with-diet",
    title: "Managing Diabetes and Thyroid with the Right Diet",
    excerpt:
      "Lifestyle diseases like diabetes and thyroid can be managed effectively with the right nutrition plan.",
    date: "2026-04-15",
    content: [
      "Diet plays a central role in managing blood sugar levels and thyroid function alongside medication.",
      "Low-glycemic foods, fibre-rich vegetables, and controlled carbohydrate portions help keep blood sugar stable.",
      "Regular meal timing supports better hormone regulation for thyroid patients.",
      "Every individual responds differently — a one-size-fits-all diet chart rarely works.",
      "Our diet consultation service creates a personalised plan based on your reports, lifestyle, and food preferences.",
    ],
  },
];
