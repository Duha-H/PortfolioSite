/* eslint-disable no-multi-str */
import { ProjectItem } from "../reusable-components/types";
import { TECH, TAGS } from "../reusable-components/constants";


const projects: {[key: string]: ProjectItem} = {
  'traccio': {
    id: 'traccio',
    title: 'Traccio',
    excerpt: 'Job-search tracking application',
    description: 'Traccio is a simple <b>job search tracking application</b>. It allows users to organize their job search endeavors, log in job applications they\'ve submitted, and conveniently track them. It also helps users better monitor their progress, and distill different trends in their job hunts. <br><br> More details about Traccio are available in the <a href="https://github.com/Duha-H/Traccio/wiki" target="_blank" rel="noopener noreferrer">application wiki</a>.',
    media: [
      { content: require('../assets/project-media/dashboard-traccio-desktop.png'), altText: 'Traccio cover image'},
      { content: require('../assets/project-media/traccio_0.svg'), altText: 'Traccio desktop and mobile dashboard screenshots'}, 
      { content: require('../assets/project-media/traccio_2.svg'), altText: 'Traccio dark theme dashboard screenshot'}, 
      { content: require('../assets/project-media/traccio_1.svg'), altText: 'Traccio full landing page screenshot'},
      { content: require('../assets/project-media/traccio_3.svg'), altText: 'Traccio logo and mobile screenshots'},
    ],
    tech: [TECH.ANGULAR, TECH.TS, TECH.FB, TECH.FB_FIRESTORE, TECH.FB_AUTH, TECH.RXJS ],
    mode: 'solo project',
    status: 'wip',
    openSource: true,
    sourceUrl: 'https://github.com/Duha-H/Traccio',
    projectUrl: '',
    tags: [TAGS.WEB, TAGS.FB, TAGS.SERVERLESS, ],
    motivation: 'I started building Traccio out of <b>necessity</b>. During a typical job-hunt, I keep a text-file with a list of all my applications, and different details about each of them. It helps me keep track of my progress, and avoid getting started on an application to a company that I\'ve already applied to. <br><br> I needed a tool that helped me <b>monitor trends</b> in a specific "hunt", and <b>keep track</b> of what I was doing right or wrong. So, I went to work!',
    appBreakdown: 'Traccio is a serverless web application, built using <b>Angular 9</b> on the front-end, and a serverless <b>Firebase</b> back-end setup for authentication and database storage. I took the serverless route in an attempt to speed up the development process, and give more attention to developing the core features of the application. I experimented with both <b>AWS</b> services and <b>Firebase</b>. Both made it fairly simple to get up and running, but ultimately Firebase was the more <b>cost-effective</b> option for me, especially when it came to <b>databse storage</b> and reads/writes. <br><br> ',
    challenges: 'The biggest challenge for me (and hopefully my biggest point of improvement) was configuring <b>state-management in Angular</b>. Traccio is my first experience in developing a <i>moderately</i>-scaled application, with a continuous data-flow across multiple components that need to be in-sync. <ul>\
      <li>The application fetches user data from the database, and performs some <b>data-management and processing</b> on it to provide the user with the visualization that Traccio is centered around.</li>\
      <li>The processed data is short-lived and continuously-updating, meaning it has little need for long-term storage in a database. However, it still <b>needs to be continuously in-sync</b> with long-term data.</li>\
      </ul> I was able to handle that with observable datastreams using <b>RxJS</b>. I went with using RxJS, as opposed to a full-fledged state-management library like Ngrx, to get a better understanding of how observables work. I think that helped me take <b>full-advantage of piping asynchronous data</b> to Angular templates, while unifying my data-sources and updates using RxJS\'s <b>BehaviourSubjects</b> and observables.',
    roadmap: 'I plan to continue to maintain and add features to Traccio continuously. Currently, <a href="https://github.com/Duha-H/Traccio/wiki/Changelog" target="_blank" rel="noopener noreferrer">v0.1.0</a> is set for release. In future releases, I plan to configure <b>more customizable relationship visualizations</b> between application data, I think this is going to allow users to have a better understanding of their progress. Like which resume version they submitted gave them more responses, or what percentage of applications they submitted through a job-fair gave them more offers, and other interesting details like that!',
  },
  '3d-modeller': {
    id: '3d-modeller',
    title: 'Interactive 3D Modeller',
    excerpt: 'Simple, interactive, 3D modelling application',
    description: 'This application is a super simple, <b>interactive 3D city block visualization tool</b> built for the web. It allows the user to create and manipulate simple models, and store and upload 3D models.',
    media: [
      { content: require('../assets/project-media/modeller_3.png'), altText: '3D Modeller cover image'},
      { content: require('../assets/project-media/modeller_0.svg'), altText: '3D Modeller demo screenshot'}, 
      { content: require('../assets/project-media/modeller_group.svg'), altText: '3D Modeller main view and customization view screenshots'}, 
      { content: require('../assets/project-media/modeller_4.svg'), altText: '3D Modeller light theme screenshot'},
    ],
    tech: [TECH.JS, TECH.WEBGL, TECH.GLSL, TECH.HTML, TECH.CSS ],
    mode: 'solo project',
    status: 'live',
    openSource: true,
    sourceUrl: 'https://github.com/Duha-H/3D-Modeller',
    projectUrl: 'https://duha-h.github.io/3D-Modeller/',
    tags: [TAGS.GP, TAGS.WEB, ],
    motivation: 'Prior to transitioning to programming and software development, <b>I was an architecture student</b>. At the time, I extensively used 3D modelling and rendering applications to digitally construct my designs. I\'ve been fascinated with them ever since, and that sparked my interest in computer graphics. <br><br> This application was a chance for me to delve behind the scenes a little more. I wanted to <b>build a simpler version of the software I used to work with</b>, and it was simple enough of an idea that I wanted to make it browser-based and more accessible to users and graphics programmers out there.',
    appBreakdown: 'This application is one that I periodically come back and tinker with. So an important aspect of its development was <b>scalability and code readability</b>. I wanted to be able to pick it up whenever, and add features easily. I also planned to possibly abstract the graphics engine more, and provide that as a tool for other graphics programmers to use. <br><br> With that in mind, I split the application into <b>3 main components</b>: <ul>\
      <li>The <b>renderer</b>: tasked with handling the compilation and linking of <b>shader programs written in GLSL</b>, and appropriately activating different shader programs as desired.</li>\
      <li>The <b>modeller</b>: basically a <b>wrapper</b> around the WebGL canvas. It handles the function of drawing scene objects, and managing their transformations and interactions.</li>\
      <li>The <b>event listener</b>: as the name suggests, this is where interactivity is handled. That includes direct keyboard/mouse input from the user, as well as input facilicated through customization tools in the GUI such as the <b>profile customizer</b>. It propagates events to the modeller to perform the required updates to the canvas.</li>\
    </ul> Given that breakdown, I\'m able to quickly add functionalities to the application and experiment with it more comfortably.',
    challenges: 'The most exciting challenge in building this application, and precisely why I set out to build it in the first place, was <b>understanding the rendering pipeline</b> a little better. Using WebGL without a wrapper framework eliminates the existence of a fixed pipeline; meaning that it forces the user to <b>manually handle the communication with a shader program</b>, the order of their <b>model, view, and projection matrix multiplcations</b>, and the <b>binding of an object\'s vertex buffers</b> for rendering. It also gave me the chance to manually create vertex array objects for models that I wanted to include, which is a very tedious but educating process to say the least. <br><br> However, countless educational sources exist out there that I was able to use to my advantage, and a basic understanding of the graphics pipeline (from my previous experience with <b>OpenGL</b>) made the learning curve a little more gentle &#128578;.',
  },
  'terra-pizza': {
    id: 'terra-pizza',
    title: 'Terra Pizza (Game)',
    excerpt: 'Desktop pizza-making game',
    description: 'This project is an <b>experiment of natural interaction techniques in virtual reality</b>, taking form in a cooking game. In this game, you\'ve been hired as a pizza cook at Terra Pizza, a pizza place on an alien planet. Aliens love their "Earth pizza", and you\'re the person for the job!',
    media: [
      { content: require('../assets/project-media/terra_game_1.png'), altText: 'Terra Pizza cover image'},
      { content: require('../assets/project-media/terra_pizza_1.svg'), altText: 'Terra Pizza demo screenshot with logo'}, 
      { content: require('../assets/project-media/terra_pizza_2.svg'), altText: 'Terra Pizza startup screen and in-game pizza order interface'}, 
      { content: require('../assets/project-media/terra_pizza_3.svg'), altText: 'Terra Pizza game demo screenshots'},
    ],
    tech: [TECH.CSHARP, TECH.UE, ],
    mode: 'solo project',
    status: 'live',
    openSource: false,
    projectUrl: 'https://duha-h.github.io/TerraPizza/',
    tags: [],
    motivation: 'Terra Pizza was an incredibly fun experiment. It was originally planned as a virtual reality project for a VR course I took while at Ryerson. I wanted the chance to experiment with different <b>virtual interaction techniques</b> within a virtual environment via hand-tracking. <br><br> Then a pandemic hit, and classes were cancelled. And I didn\'t have access to our VR equipment any more &#128533;. So I just pivoted to a <b>desktop proof of concept</b>! This gave me the chance to model many more interaction techniques, and brought lots of fun challenges along the way.',
    appBreakdown: 'Terra Pizza takes advantage of a Unity application\'s <b>component-based design approach</b>. It defines the behaviour of different game objects using component scripts that can be re-applied to objects with the same behaviour. Some I implemented for Terra Pizza are: <ul>\
      <li><b>Slicing</b>: this behaviour was implemented by defining the interaction between a <b>slicing tool</b> and a <b>sliced object</b>. It primarily involved defining a slicing plane that intersects with an object. The plane of intersection is then used to compute <b>vertex positions</b> in the sliced object to define <b>two new objects</b>. The computed vertex positions are then used to construct a sliced face for each section of the sliced parent mesh.</li>\
      <li><b>Deformation</b>: working with pizza, I thought that rolling out a piece of dough would be a perfect interaction experiment! So, similar to slicing, I modelled deformation as an interaction between a <b>deformation tool</b> and a <b>deformed object</b>. The deformed object would <b>update its geometry</b> relative to the impact of the deformation tool, an event which is triggered via <b>ray-casting from the deformation tool</b> to determine the position and direction of impact.</li>\
    </ul> You can learn more about the development details of Terra Pizza <a href="https://duha-h.github.io/TerraPizza/about" target="_blank" rel="noopener noreferrer">here</a>.',
    challenges: 'I think the functionality that was most-tasking while implementing Terra Pizza was definitely the <b>slicing behaviour</b>. This is because it involved altering the geometry of the parent mesh to produce two new meshes. And given the confines of Unity Game Engine\'s <b>vertex buffer definitions</b>, I had to navigate computing intersection positions between the slicing plane and an arbitrary object, of arbitrary shape, and figure out how to use these intersection points to generate mesh triangles of a new sliced surface for both resulting meshes. <br><br> It was a fun challenge that gave me the chance to tinker with some lower level aspects of the application, and not fully rely on Unity Engine\'s existing object interactions. In the future, I would probably like to <b>improve the computational performance of the slicing behaviour</b>, since my primary goal at the time was to simply implement the functionality.',
  },
  // 'timeline': {
  //   id: 'timeline',
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
  // 'vscode-ext': {
  //   id: 'vscode-ext',
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
  // 'helios': {
  //   id: 'helios',
  //   title: 'HELIOS DBMS',
  //   excerpt: 'Graphical interface database management system',
  //   description: 'HELIOS is a desktop application that <b>interfaces with an Oracle database</b>, and allows users to manage and manipulate data in that database.',
  //   media: [require('../assets/project-media/helios_0.svg'), require('../assets/project-media/helios_1.png')],
  //   tech: [TECH.JAVA, TECH.JDBC, TECH.SQL, TECH.SWING, TECH.ORACLE ],
  //   mode: 'team project',
  //   status: 'comp',
  //   openSource: false,
  //   tags: [],
  //   motivation: 'This application was part of a school project where our team was tasked with putting together a database management system. We chose to create ',
  // },
  'text-gen-rnn': {
    id: 'text-gen-rnn',
    title: 'Text-Generating RNN',
    excerpt: 'Recurrent Neural Network generating phone reviews',
    description: 'KAREN is a <b>cellphone review-generating Recurrent Neural Network</b>. It is part of a research project centered around designing and training a neural network to generate text of restricted length. The network uses <b>Long Short Term Memory (LSTM)</b> architecture, which is better suited for recognizing long-distance dependencies in input data, and ideal for generating text predictions.',
    media: [
      { content: require('../assets/project-media/karen_0.svg'), altText: 'Text Generating RNN cover image'},
      { content: require('../assets/project-media/karen_2.png'), altText: 'KAREN: The Cellphone Review-Generating RNN'},
    ],
    tech: [TECH.PYTHON, TECH.TFLOW, ],
    mode: 'team project',
    status: 'comp',
    openSource: false,
    tags: [],
    motivation: '"Why cellphone reviews?" you\'re probably wondering. Well, it was initially a joke decision that eventually proved to be an interesting concept to myself and my teammate! We wanted to experiment with training a Recurrent Neural Network. Most existing examples seemed to revolve around training networks to generate long-form text (poems, books, etc), but shorter forms of text was something that posed an interesting challenge.',
    appBreakdown: 'The goal of this project was to train the network to recognize the structure and sentiment of reviews, and generate its own. Achieving that involved <b>two main steps</b>, the first of which was <b>preprocessing</b> which involved: <ul>\
      <li>Extracting the review data and formatting it in a <b>consistent structure</b>.</li>\
      <li>Creating an <b>80-20% split of the data for training and testing respectively</b>.</li>\
      <li>Splitting the extracted reviews into overlapping <b>50-character sequences</b>. These sequences would be fed to the network which would make its prediction on the subsequent 51st character.</li>\
      <li>Encoding all characters in each sequence in a binary vector that is fed to the network. In order for the network to be properly trained on the character sequences, these sequences have to be in a numerical format that it can make sense of. We used a method known as <b>character-level encoding</b>, which involves creating a dictionary of all unique characters in our dataset and encoding those in integer values. We used this method because it provided us with a <b>smaller vocabulary size</b> that helped the network recognize word frequencies better across the dataset.</li>\
    </ul> The second step in our process involved composing the actual <b>structure of our network</b>. This was fairly fascilitated by using <b>TensorFlow\'s Keras library</b>. The library offers a Sequential model type for creating a stack of network layers of different types. We experimented with a number of network structures to arrive at a result that we were happy with.',
    contribution: 'My role in this project involved portions of the preprocessing phase (specifically data-encoding), as well as designing and configuring the network structure. While the preprocessing of text for training is a widely documented phase in existing references, designing the network itself was very much a shot in the dark. It involved gradually increasing the size of the network (adding additional hidden layers, and increasing the number of neurons in each layer), while maintaining a manageable architecture for training. My GPU was probably not happy.',
    challenges: 'I think that our biggest take-away from working on this project was how designing and training neural networks is a heavily empirically-based process. It involves tonnes of <b>trial and error</b>. Our generated network actually <b>did not quite deliver</b>! It managed to recognize review structures and produce a format similar to the input data, but the generated text was mostly incoherent and had a poor test performance. We suspect that we had a classic case of <b>over-fitting</b> our input data, which explains the variations in our training and testing results. <br><br> However, we gained a <b>great deal of insight</b> into the process of designing and training a neural network, and the magnitudes of difference that minor variations in the structure of the network and the format of the input dataset can create. It was a strenuous process (for us and our GPUs), but a fulfilling one nonetheless.',
  }
}

export default projects;