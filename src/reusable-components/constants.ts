// Constants

import { NavItemData } from "./types";

export const TECH = {
  C: 'C',
  CPP: 'C++',
  CSHARP: 'C#',
  PYTHON: 'Python',
  JS: 'Javascript',
  TS: 'Typescript',
  HTML: 'HTML',
  CSS: 'CSS',
  JAVA: 'Java',
  RUST: 'Rust',
  SQL: 'SQL',
  GQL: 'GraphQL',
  GLSL: 'GLSL',
  OPENGL: 'OpenGL',
  WEBGL: 'WebGL',
  ANGULAR: 'Angular',
  REACT: 'React',
  RN: 'React Native',
  UE: 'UnityEngine',
  SWING: 'Java Swing',
  JDBC: 'JDBC',
  TFLOW: 'TensorFlow',
  FLASK: 'Flask',
  NODE: 'Node.js',
  AWS: 'AWS',
  AWS_COGNITO: 'AWS Cognito',
  AWS_APPSYNC: 'AWS AppSync',
  AWS_DB: 'AWS DynamoDB',
  FB: 'Firebase',
  FB_FIRESTORE: 'Cloud Firestore',
  FB_AUTH: 'Firebase Auth',
  MONGO: 'MongoDB',
  ORACLE: 'Oracle Database',
  TK: 'Tkinter',
  VSC: 'VSCode API',
  RXJS: 'RxJS',
  WIN: 'Windows',
  LINUX: 'Linux',
  GIT: 'Git',
}

export const languages = [
  TECH.JS,
  TECH.TS,
  TECH.JAVA,
  TECH.PYTHON,
  TECH.C,
  TECH.CPP,
  TECH.CSHARP,
  TECH.HTML,
  TECH.CSS,
  TECH.RUST,
  TECH.SQL,
  TECH.GQL,
  TECH.GLSL,
];

export const libraries = [
  TECH.ANGULAR,
  TECH.REACT,
  TECH.OPENGL,
  TECH.WEBGL,
  TECH.RN,
  TECH.UE,
  TECH.SWING,
  TECH.JDBC,
  TECH.TFLOW,
  TECH.FLASK,
  TECH.NODE,
  TECH.TK,
  TECH.RXJS,
];

export const tools = [
  TECH.GIT,
  TECH.WIN,
  TECH.LINUX,
  TECH.AWS,
  TECH.AWS_APPSYNC,
  TECH.AWS_COGNITO,
  TECH.AWS_DB,
  TECH.FB,
  TECH.FB_AUTH,
  TECH.FB_FIRESTORE,
  TECH.MONGO,
  TECH.ORACLE,
];

export const TAGS = {
  ...TECH,
  WEB: 'web app',
  DESKTOP: 'desktop app',
  GP: 'graphics programming',
  G: 'graphics',
  THREED: '3D',
  GAME: 'game',
  DBMS: 'DBMS',
  DB: 'database',
  IR: 'information retrieval',
  OOP: 'object-oriented programming',
  FUNC: 'functional programming',
  SCRIPT: 'scripting',
  ML: 'ML',
  CV: 'computer vision',
  PACKAGE: 'package',
  EXT: 'extension',
  FB: 'Firebase',
  AWS: 'AWS',
  SERVERLESS: 'serverless',
}

export const STATUSES = {
  live: 'live',
  wip: 'coming soon',
  comp: 'completed, private',
}

export const navItems: NavItemData[] = [
  { text: 'home', iconSrc: require('../assets/icon_home.svg'), link: '/' },
  { text: 'about', iconSrc: require('../assets/icon_about.svg'), link: '/about' },
  { text: 'projects', iconSrc: require('../assets/icon_projects.svg'), link: '/projects' },
  { text: 'resume', iconSrc: require('../assets/icon_skills.svg'), link: require('../assets/pdfs/Resume_Duha_Hassan_v3_1_default.pdf'), external: true, },
];

export const contactLinks: NavItemData[] = [
  { text: 'email', iconSrc: require('../assets/icon_contact.svg'), link: 'mailto:duha.h.153@gmail.com', external: true, },
  { text: 'github', iconSrc: require('../assets/icon_github.svg'), link: 'https://github.com/Duha-H', external: true, },
  { text: 'linkedin', iconSrc: require('../assets/icon_linkedin.svg'), link: 'https://linkedin.com/in/duha-hassan/', external: true, },
];
