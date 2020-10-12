import { ProjectItem } from "../reusable-components/types";
import { TECH, TAGS, STATUSES } from "../reusable-components/constants";


const projects: {[key: number]: ProjectItem} = {
  0: {
    id: 0,
    title: 'Traccio',
    excerpt: 'Job-search tracking application',
    description: 'Traccio is a simple job hunt tracking application. It allows users to organize their job search endeavors, log in job applications they\'ve submitted, and conveniently track them. It also helps users better monitor their progress, and distill different trends in their job hunts.',
    media: [require('../assets/project-media/dashboard-traccio-desktop.png'), require('../assets/project-media/traccio_0.svg'), require('../assets/project-media/traccio_2.svg'), require('../assets/project-media/traccio_1.svg'), require('../assets/project-media/traccio_3.svg')],
    tech: [TECH.ANGULAR, TECH.TS, TECH.FB, TECH.FB_FIRESTORE, TECH.FB_AUTH, TECH.GQL ],
    mode: 'solo project',
    status: 'wip',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [TAGS.WEB, TAGS.FB, TAGS.SERVERLESS, ],
    motivation: 'Typically, whenever I start hunting for a job, I keep a text-file with a list of all applications I\'ve submitted in a particular "hunt". I continuously update that file with any changes to the status of a specific application. I prefer to keep track of my progress, and also avoid issues like submitting duplicate applications, or getting started on preparing an application to a company that I\'ve already applied to. While that helped me keep my job search organized, it didn\'t really do much in the way of helping me track my progress, or monitor my overall productivity. <br><br> I wanted to be able to notice trends in a specific "hunt", and react to them accordingly, and I was not successful in finding web-friendly tools out there that allowed me to do that. So, I went to work!',
    appBreakdown: 'Typically, whenever I start hunting for a job, I keep a text-file with a list of all applications I\'ve submitted in a particular "hunt". I continuously update that file with any changes to the status of a specific application. I prefer to keep track of my progress, and also avoid issues like submitting duplicate applications, or getting started on preparing an application to a company that I\'ve already applied to. While that helped me keep my job search organized, it didn\'t really do much in the way of helping me track my progress, or monitor my overall productivity. <br><br> I wanted to be able to notice trends in a specific "hunt", and react to them accordingly, and I was not successful in finding web-friendly tools out there that allowed me to do that. So, I went to work!',
    issues: 'Typically, whenever I start hunting for a job, I keep a text-file with a list of all applications I\'ve submitted in a particular "hunt". I continuously update that file with any changes to the status of a specific application. I prefer to keep track of my progress, and also avoid issues like submitting duplicate applications, or getting started on preparing an application to a company that I\'ve already applied to. While that helped me keep my job search organized, it didn\'t really do much in the way of helping me track my progress, or monitor my overall productivity. <br><br> I wanted to be able to notice trends in a specific "hunt", and react to them accordingly, and I was not successful in finding web-friendly tools out there that allowed me to do that. So, I went to work!',
    roadmap: 'Typically, whenever I start hunting for a job, I keep a text-file with a list of all applications I\'ve submitted in a particular "hunt". I continuously update that file with any changes to the status of a specific application. I prefer to keep track of my progress, and also avoid issues like submitting duplicate applications, or getting started on preparing an application to a company that I\'ve already applied to. While that helped me keep my job search organized, it didn\'t really do much in the way of helping me track my progress, or monitor my overall productivity. <br><br> I wanted to be able to notice trends in a specific "hunt", and react to them accordingly, and I was not successful in finding web-friendly tools out there that allowed me to do that. So, I went to work!',
  },
  1: {
    id: 1,
    title: 'Interactive 3D Modeller',
    excerpt: 'Simple, interactive, 3D modelling application',
    description: 'This application is a super simple, interactive 3D city block visualization tool built for the web. It allows the user to create and manipulate simple models, and store and upload 3D models.',
    media: [require('../assets/project-media/modeller_3.png'), require('../assets/project-media/modeller_0.svg'), require('../assets/project-media/modeller_group.svg'), require('../assets/project-media/modeller_4.svg'), ],
    tech: [TECH.JS, TECH.WEBGL, TECH.GLSL, TECH.HTML, TECH.CSS ],
    mode: 'solo project',
    status: 'live',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [TAGS.GP, TAGS.WEB, ],
    motivation: 'Prior to transitioning to programming and software development, I was an architecture student. At the time, I extensively used 3D modelling and rendering applications to digitally construct my designs. I\'ve been fascinated with them ever since, and that sparked my interest in computer graphics. <br> This application was a chance for me to delve behind the scenes a little more. I wanted to build a simpler version of the software I used to work with, and it was simple enough of an idea that I wanted to make it browser-based and more accessible to users and graphics programmers out there.',
    appBreakdown: 'Typically, whenever I start hunting for a job, I keep a text-file with a list of all applications I\'ve submitted in a particular "hunt". I continuously update that file with any changes to the status of a specific application. I prefer to keep track of my progress, and also avoid issues like submitting duplicate applications, or getting started on preparing an application to a company that I\'ve already applied to. While that helped me keep my job search organized, it didn\'t really do much in the way of helping me track my progress, or monitor my overall productivity. <br><br> I wanted to be able to notice trends in a specific "hunt", and react to them accordingly, and I was not successful in finding web-friendly tools out there that allowed me to do that. So, I went to work!',
    issues: 'Typically, whenever I start hunting for a job, I keep a text-file with a list of all applications I\'ve submitted in a particular "hunt". I continuously update that file with any changes to the status of a specific application. I prefer to keep track of my progress, and also avoid issues like submitting duplicate applications, or getting started on preparing an application to a company that I\'ve already applied to. While that helped me keep my job search organized, it didn\'t really do much in the way of helping me track my progress, or monitor my overall productivity. <br> I wanted to be able to notice trends in a specific "hunt", and react to them accordingly, and I was not successful in finding web-friendly tools out there that allowed me to do that. So, I went to work!',
    roadmap: 'Typically, whenever I start hunting for a job, I keep a text-file with a list of all applications I\'ve submitted in a particular "hunt". I continuously update that file with any changes to the status of a specific application. I prefer to keep track of my progress, and also avoid issues like submitting duplicate applications, or getting started on preparing an application to a company that I\'ve already applied to. While that helped me keep my job search organized, it didn\'t really do much in the way of helping me track my progress, or monitor my overall productivity. <br> I wanted to be able to notice trends in a specific "hunt", and react to them accordingly, and I was not successful in finding web-friendly tools out there that allowed me to do that. So, I went to work!',
  },
  2: {
    id: 2,
    title: 'Terra Pizza (Game)',
    excerpt: 'Desktop pizza-making game',
    description: 'This project is an experiment of natural interaction techniques in virtual reality, taking form in a cooking game. In this game, you\'ve been hired as a pizza cook at Terra Pizza, a pizza place on an alien planet. Aliens love their "Earth pizza", and you\'re the person for the job!',
    media: [require('../assets/project-media/terra_game_1.png'), require('../assets/project-media/terra_pizza_1.svg'), require('../assets/project-media/terra_pizza_2.svg'), require('../assets/project-media/terra_pizza_3.svg')],
    tech: [TECH.CSHARP, TECH.UE, ],
    mode: 'solo project',
    status: 'live',
    openSource: false,
    projectUrl: 'https://google.com',
    tags: [],
    motivation: 'Terra Pizza was an incredibly fun experiment. It was originally planned as a virtual reality project for a VR course I was taking in school. I wanted the chance to experiment with different interaction techniques with a virtual environment via hand-tracking. Then a pandemic hit, and classes were cancelled. And I didn\'t have access to our VR equipment any more &#128533;. So I just pivoted to a desktop proof of concept! This gave me the chance to model many more interaction techniques, and brought lots of fun challenges along the way!',
    appBreakdown: 'Typically, whenever I start hunting for a job, I keep a text-file with a list of all applications I\'ve submitted in a particular "hunt". I continuously update that file with any changes to the status of a specific application. I prefer to keep track of my progress, and also avoid issues like submitting duplicate applications, or getting started on preparing an application to a company that I\'ve already applied to. While that helped me keep my job search organized, it didn\'t really do much in the way of helping me track my progress, or monitor my overall productivity. <br><br> I wanted to be able to notice trends in a specific "hunt", and react to them accordingly, and I was not successful in finding web-friendly tools out there that allowed me to do that. So, I went to work!',
  },
  // 3: {
  //   id: 3,
  //   title: 'Timeline (NPM Package)',
  //   excerpt: 'Frontend library for timeline visualization',
  //   description: '',
  //   media: [require('../assets/project-media/placeholder_media.png')],
  //   tech: [TECH.TS, TECH.ANGULAR, TECH.REACT, ],
  //   mode: 'solo',
  //   status: 'wip',
  //   openSource: true,
  //   sourceUrl: 'https://google.com',
  //   projectUrl: 'https://google.com',
  //   tags: [],
  //   motivation: '',
  // },
  // 4: {
  //   id: 4,
  //   title: 'VSCode Extension',
  //   excerpt: 'bleep bloop',
  //   description: '',
  //   media: [require('../assets/project-media/placeholder_media.png')],
  //   tech: [TECH.TS, TECH.VSC, ],
  //   mode: 'solo',
  //   status: 'wip',
  //   openSource: true,
  //   sourceUrl: 'https://google.com',
  //   projectUrl: 'https://google.com',
  //   tags: [],
  // },
  5: {
    id: 5,
    title: 'HELIOS DBMS',
    excerpt: 'Graphical interface database management system',
    description: 'HELIOS is an application that interfaces with an Oracle database, and allows users to manage and manipulate data in that database.',
    media: [require('../assets/project-media/helios_0.svg'), require('../assets/project-media/helios_1.png')],
    tech: [TECH.JAVA, TECH.JDBC, TECH.SQL, TECH.SWING, TECH.ORACLE ],
    mode: 'team project',
    status: 'comp',
    openSource: false,
    tags: [],
    motivation: 'This application was part of a school project where our team was tasked with putting together a database management system. We ',
  },
  6: {
    id: 6,
    title: 'Text-Generating RNN',
    excerpt: 'Recurrent Neural Network generating phone reviews',
    description: '',
    media: [require('../assets/project-media/karen_0.svg'), require('../assets/project-media/karen_2.png')],
    tech: [TECH.PYTHON, TECH.TFLOW, ],
    mode: 'team project',
    status: 'comp',
    openSource: false,
    tags: [],
    motivation: '',
  }
}

export default projects;