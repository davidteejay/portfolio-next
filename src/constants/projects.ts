type Project = {
  id: string;
  name: string;
  description: string;
  year: string;
  links?: { label: string; url: string }[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "irish-times-news",
    name: "The Irish Times News",
    description:
      "A mobile application for The Irish Times newspaper. I implemented release automation using Fastlane and Bitbucket Pipelines, streamlining the deployment process to Firebase App Distribution for testing, and both the Apple App Store and Google Play Store. I worked on adding Expo to the app, and upgrading the app and all it's dependencies to the latest versions.",
    year: "2025 - present",
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
      "Female Invest aims to close the gender gap in finance and investing by providing financial education, resources, and a supportive community for women. As a Senior React Native Engineer, I led the development of the mobile application using React Native and TypeScript. I collaborated closely with designers and product managers to create an intuitive and user-friendly interface, implemented key features such as user authentication, in app subscriptions, the learning flows and modules, the community, podcasts, referrals and the trading simulator. I also implemented CI/CD pipelines using Microsoft App Center, and integrated bug and crash reporting using Firebase Crashlytics and App Center Crashes. Additionally, I worked on optimizing app performance and ensuring a smooth user experience across both iOS and Android platforms, implementing user feedback collection using Instabug, A/B testing and feature flags to experiment with new features and improve user engagement using DevCycle, and internationalization (i18n) to support English and Danish.",
    year: "2022 - 2025",
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
      "A mobile application that helps users keep track of their wellbeing, by setting a blood pressure measurement schedule, reminders, and tracking their measurements over time. I worked on building the app using React Native and TypeScript, implementing features such as user authentication, measurement scheduling and reminders, data visualization, sharing data with family and caregivers, and integration with Apple HealthKit and Google Fit to sync health data. I also set up CI/CD pipelines using GitHub Actions and EAS for automated testing and deployment to both the Apple App Store and Google Play Store. I implemented Bluetooth LE connectivity to connect with compatible blood pressure monitors for automatic data syncing using Native Modules (Kotlin and Swift), and internationalization (i18n) to support English and Arabic.",
    year: "2024 - 2025",
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
      "A mobile application that enables users to send and receive money globally and create cards to transact online. I led the migration of the app from Flutter to React Native, redesigning the app along the way. I led the implementation of all the features, including authentication (with biometric support), account management, money transfers, card creation, and transaction history, with Test Driven Development. I also set up the CI/CD pipelines using EAS Workflows for automated testing and deployment to both the Apple App Store and Google Play Store, and E2E testing using Maestro.",
    year: "2025",
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
      "A mobile ERP application that streamlines core facility management processes and integrates utilities and bill payments. I built the app from scratch using React Native and Javascript, implementing features such as authetication, bill payments, wallets, and visitor management. I eventually worked on migrating the app to TypeScript for better type safety and maintainability, and worked alongside another developer to add new features and implement a rebrand of the app. I also set up CI/CD pipelines using GitHub Actions and EAS for automated testing and deployment to both the Apple App Store and Google Play Store, and implemented Firebase Crashlytics for error monitoring and reporting.",
    year: "2022, 2025",
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
    description:
      "A mobile application that enables users to create a dedicated virtual wallet to be used for paying for public transportation services. It was built alongside an app for bus drivers, with React Native, JavaScript, and Expo. On this project, I collaborated closely with other developers, designers, and product managers to deliver a seamless user experience. I implemented key features such as user authentication, wallet creation, transaction history, and top-ups using various payment methods. I also implemented tap-and-go payments using NFC technology, allowing users to make quick and secure payments by simply tapping their phones on compatible readers, and on the drivers app, terminal onboarding to link payment terminals to the app. I also managed deployment to both the Apple App Store and Google Play Store.",
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
    description:
      "A mobile application for small and local businesses to manage their sales, inventory, inflow and customers. I worked on building the app, along with the Boosta Agent app using React Native, JavaScript, and Expo, implementing features such as product management, sales tracking, invoicing, customer management, and reporting.",
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
    description:
      "A mobile learning management system (LMS) for students and teachers in Delta State, Nigeria. I worked on building the app using React Native, JavaScript, and Expo, implementing features such as course management, assignments, quizzes, grades, reporting and analytics, forums, progress tracking, e-library and communication between students and teachers. I also managed deployment to both the Apple App Store and Google Play Store.",
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
    description:
      "A mobile application that provides solutions for election monitoring, surveys and opinion polls, and political campaigning for political parties and candidates. I worked on building the app using React Native, JavaScript, and Expo, implementing features such as real-time data collection and reporting, offline data collection, polling and surveys, and incidence reporting. I also managed deployment to both the Apple App Store and Google Play Store.",
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
    description:
      "A mobile electronic document management system (EDMS) that automates business processes and workflows for organizations. I worked on building the app using React Native and JavaScript, implementing features such as document capture and scanning, including an implementation for signing documents, document storage and retrieval, workflow automation, collaboration and sharing, and security and compliance. I also managed deployment to both the Apple App Store and Google Play Store.",
    technologies: ["React Native", "JavaScript"],
  },
  {
    id: "splash-fm-radio",
    name: "Splash FM Radio",
    year: "2020",
    description:
      "A mobile application for streaming Splash FM Radio, a popular radio station in Ibadan, Nigeria. I worked on building the app using React Native and JavaScript, implementing features such as live radio streaming, program schedule, song requests, social media integration, polls, and push notifications. I also built the Lagelu FM Radio app, which is a sister radio station to Splash FM Radio and broadcasted in Abeokuta, and managed deployment to both the Apple App Store and Google Play Store.",
    technologies: ["React Native", "JavaScript"],
  },
  {
    id: "maudition",
    name: "mAudition",
    year: "2020",
    description: "",
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
    description: "",
    technologies: ["React Native", "JavaScript", "Expo"],
  },
  {
    id: "kto-home",
    name: "Knowledge To Own",
    year: "2019",
    description: "",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "otto-travel",
    name: "Otto Travel",
    year: "2019",
    description: "",
    technologies: ["React Native", "JavaScript", "Expo", "GraphQL"],
  },
];
