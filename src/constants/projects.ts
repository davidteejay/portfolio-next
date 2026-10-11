type Project = {
  id: string;
  name: string;
  description: string;
  role: string;
  outcome?: string;
  year: string;
  linksNote?: string;
  caseStudy?: { order: number; status: "draft" | "published" };
  links?: { label: string; url: string }[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "irish-times-news",
    name: "The Irish Times News",
    description:
      "Modernized The Irish Times News app by introducing Expo and upgrading its dependencies. Automated testing and store releases with Fastlane and Bitbucket Pipelines.",
    role: "Senior Full-stack Engineer · Square1; Software Engineer · The Irish Times",
    outcome:
      "Improved launch performance by 50% and reduced technical debt by 60% on an app serving 120,000+ users.",
    year: "Oct 2025 – Present",
    caseStudy: { order: 2, status: "draft" },
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/ie/app/the-irish-times-news/id365544593",
      },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.irishtimes.newsapp&hl=en",
      },
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Kotlin",
      "Swift",
      "Redux",
      "Expo",
      "Firebase",
      "Fastlane",
      "Bitbucket Pipelines",
      "AWS",
      "CI/CD",
    ],
  },
  {
    id: "female-invest",
    name: "Female Invest",
    description:
      "Led core mobile journeys for a financial education and investing platform for women. Shipped onboarding, subscriptions, learning modules, community, podcasts, referrals, and a trading simulator with product and design partners.",
    role: "Senior React Native Engineer · Female Invest",
    outcome:
      "Increased monthly active users by 46% through experimentation and product improvements, and reduced deployment time by 25%.",
    year: "May 2022 – Feb 2025",
    caseStudy: { order: 1, status: "draft" },
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/female-invest/id1621492150",
      },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.femaleinvest.mobileapp",
      },
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Nest.js",
      "Next.js",
      "MS App Center",
      "Firebase",
      "Instabug",
      "A/B Testing",
      "Feature Flags",
      "CI/CD",
      "Internationalization (i18n)",
    ],
  },
  {
    id: "ashia",
    name: "Ashia",
    description:
      "Built a blood pressure tracking app with measurement schedules, reminders, health data syncing, and sharing for family and caregivers. Added Bluetooth monitor support through native iOS and Android modules, plus English and Arabic localization.",
    role: "React Native Engineer",
    year: "2024 – 2025",
    caseStudy: { order: 5, status: "draft" },
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/sa/app/ashia-journey-to-wellness/id6695745480",
      },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=sa.ashia.android",
      },
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Application Services (EAS)",
      "GitHub Actions",
      "Zustand",
      "React Query",
      "Bluetooth LE",
      "Kotlin",
      "Swift",
      "Internationalization (i18n)",
      "Apple HealthKit",
      "Google Fit",
      "CI/CD",
    ],
  },
  {
    id: "earna",
    name: "Earna",
    description:
      "Led the migration of a money transfer and virtual card app from Flutter to React Native, including a redesign, biometric sign-in, account management, transfers, and transaction history. Added automated unit, component, and end-to-end testing and release workflows.",
    role: "Senior Product Engineer · Earna",
    outcome:
      "Improved app performance by over 50%, brought crash-free sessions close to 100%, and achieved over 90% test coverage for critical financial functionality.",
    year: "Jul 2025 – Oct 2025",
    linksNote: "Public store links are not listed for this project.",
    caseStudy: { order: 4, status: "draft" },
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Application Services (EAS)",
      "Zustand",
      "React Query",
      "Maestro",
      "Jest",
      "React Native Testing Library",
      "Firebase",
      "Sentry",
      "CI/CD",
    ],
  },
  {
    id: "facility-bills",
    name: "Facility Bills",
    description:
      "Built and later modernized a facility management app for payments, wallets, and visitor management. Migrated the JavaScript codebase to TypeScript and set up automated builds, store releases, and crash reporting.",
    role: "Technical Lead / Lead Mobile Software Engineer · FacilityBills Technologies",
    outcome:
      "Owned mobile delivery and maintained a 99% crash-free experience while improving type safety and release automation.",
    year: "2022; Mar 2025 – present",
    caseStudy: { order: 3, status: "draft" },
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/ng/app/facilitybills/id1626839320",
      },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.facilitybill&hl=en",
      },
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Expo",
      "Expo Application Services (EAS)",
      "GitHub Actions",
      "Firebase",
      "CI/CD",
      "React Query",
    ],
  },
  {
    id: "korensi",
    name: "Korensi",
    year: "2022",
    role: "Lead Mobile Software Engineer · Prunedge",
    description:
      "Built customer and driver apps for public transport payments, including wallet creation, top-ups, transaction history, and NFC tap-and-go payments.",
    outcome:
      "Supported real-time payment and transportation services for thousands of daily users in Lagos.",
    technologies: ["React Native", "JavaScript", "Expo", "React Query", "NFC"],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/ng/app/korensi/id6448962430",
      },
    ],
  },
  {
    id: "booosta",
    name: "Booosta",
    year: "2022",
    role: "Lead Mobile Software Engineer · Prunedge",
    description:
      "Built the Booosta and Booosta Agent apps for small businesses to manage products, sales, invoices, customers, and reporting.",
    technologies: ["React Native", "JavaScript", "Expo", "React Query"],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/pl/app/booosta/id1617990029",
      },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.prunedge.rms&hl=en",
      },
    ],
  },
  {
    id: "delta-lms",
    name: "Delta State LMS",
    year: "2021",
    role: "Mobile Software Engineer · Prunedge",
    description:
      "Built an iOS and Android learning app for students and teachers in Delta State, with courses, assignments, quizzes, grades, forums, progress tracking, and an e-library.",
    outcome: "Expanded access to digital education for thousands of students.",
    technologies: ["React Native", "JavaScript", "Expo", "Video Streaming"],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/ng/app/delta-state-lms/id1573378660",
      },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.prunedge.dslms&hl=en",
      },
    ],
  },
  {
    id: "polleasy",
    name: "PollEasy",
    year: "2021",
    role: "Mobile Software Engineer · Prunedge",
    description:
      "Built an election monitoring and polling app with online and offline data collection, surveys, real-time reporting, and incident reporting.",
    technologies: ["React Native", "JavaScript", "Expo"],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/ng/app/polleasy/id6443719312",
      },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.prunedge.polleasy&hl=en",
      },
    ],
  },
  {
    id: "prowoks-edms",
    name: "Prowoks EDMS",
    year: "2021",
    role: "Mobile Software Engineer · Prunedge",
    description:
      "Built a mobile document management app with capture and scanning, e-signatures, storage and retrieval, workflow automation, and collaboration tools.",
    outcome:
      "Shipped an enterprise document management system used by organizations.",
    linksNote: "No public app store links are listed for this project.",
    technologies: ["React Native", "JavaScript"],
  },
  {
    id: "splash-fm-radio",
    name: "Splash FM Radio",
    year: "2020",
    role: "Mobile Engineer",
    description:
      "Built mobile apps for Splash FM and Lagelu FM, with live radio, programme schedules, song requests, polls, and push notifications.",
    linksNote: "No public app store links are listed for these apps.",
    technologies: ["React Native", "JavaScript"],
  },
  {
    id: "maudition",
    name: "mAudition",
    year: "2020",
    role: "Software Engineer · Workforce Group",
    description:
      "Re-architected and redeployed a video audition app using React Native and Redux.",
    outcome:
      "Improved app performance by over 70% and raised user experience scores.",
    linksNote: "No public app store links are listed for this project.",
    technologies: [
      "React Native",
      "JavaScript",
      "Video Streaming",
      "Optimization",
    ],
  },
  {
    id: "learnry",
    name: "Learnry LMS",
    year: "2020",
    role: "Software Engineer · Workforce Group",
    description:
      "Built a mobile learning app with engagement features such as streaks and progress tracking.",
    outcome: "Improved learning session completion rates.",
    linksNote: "No public app store links are listed for this project.",
    technologies: ["React Native", "JavaScript", "Expo"],
  },
  {
    id: "kto-home",
    name: "Knowledge To Own",
    year: "2019",
    role: "Full-stack Software Engineer · Startup Builder",
    description:
      "Built a web platform with React and Node.js to connect prospective home buyers with affordable resources.",
    linksNote: "No public project link is listed.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "otto-travel",
    name: "Otto Travel",
    year: "2019",
    role: "Full-stack Software Engineer · Startup Builder",
    description:
      "Built a React Native travel app and owned booking workflows from design handoff through app store release.",
    linksNote: "No public app store links are listed for this project.",
    technologies: ["React Native", "JavaScript", "Expo", "GraphQL"],
  },
];
