import React from "react";
import "./About.css";

class About extends React.Component {

  componentDidMount() {
    document.title = 'About | Duha Hassan';
  }

  render() {
    return (
      <div className="page-content">
        <h2>About me</h2>
        <div className="slide-up">
          <p>Welp, I'm not always sure how to describe myself, but I'll give it a shot!</p>
          <p>I'm a recently-graduated software developer, currently based in Toronto. I enjoy building pieces of software that solve a problem, or make a task slightly easier!</p>
          <p>I haven't always had an interest in software development, but 4 years ago in an inadvertent escape from an Architecture degree (2/10 would not recommend &#128578;) I decided to transfer to a Computer Science program, and it has kind of just clicked for me since. Coming from a background in architectural design projects, I think I've developed the ability to view projects holistically and anticipate future concerns, as well as a unique attention to minute details. Which, I think, is kind of neat! &#9996;&#128513;</p>
          <p>I have quite a bit of learning to do (to say the least), and I, therefore, find great value in working as part of a team. I do my best to be a teammate I would want to have, and I greatly value communication in as a team member above all else.</p>
          <p>You can find a bit more about my educational and professional backgrounds <a href="/skills">here</a>, or in my <a href="">resume</a> if you're in a hurry!</p>

          <div className="about-section">
            <p className="title">Career Goals&nbsp;</p>
            <ul>
              <li><b>Short term</b>, I'd essentially like to gain some well-rounded <b>industry experience</b>, and get the chance to meaningfully <b>contribute to products and projects</b> that challenge and strengthen my problem-solving skills.</li>
              <li>On the <b>longer term</b>, I've developed a specific interest in <b>graphics programming</b> and building graphics software. I've had the chance to work on a few projects on a very small scale, and I'd ultimately like to steer my career towards more graphics programming and graphics software based roles. Whether it be on the web, or on platform-based applications. That would be exciting!</li>
            </ul>
          </div>
          
          <div className="about-section">
            <p className="title">Interests&nbsp;</p>
            <ul>
              <li>As far as tech goes, <b>graphics programming</b> is my go to! I've worked with a number of 3D modelling and rendering applications, and I'm in constant fascination by the computational intricacies that go into building highly performant graphics software.</li>
              <li><b>Computer Vision</b> topics are a very close second. I've had the chance to cover some coursework in vision concepts such as image filtering and feature extraction, and facial recognition, and have written some (very) simple programs performing some of these tasks. It's become an incredibly intruiging facet of tech for me.</li>
              <li>Outside of tech, I'm an <b>astronomy</b> nerd. Space, man. It's infinite(?) and empty and wild. Have a look at <a href="https://en.wikipedia.org/wiki/Superbubble">Superbubbles</a>!</li>
              <li>My free time is consumed by watching a good <b>sci-fi</b> drama (The Expanse currently tops my list), consuming good <b>music</b> (I'm a grunge-head), re-reading <b>The Dark Tower</b> series, re-watching <b>The Office</b> for the 10th time, or solving a <b>rubik's cube</b> (I can currently reliably solve it in under 3 minutes, and I think that's a personality trait for some reason).</li>
            </ul>
          </div>

          <p>I think that pretty much covers it &#128578;</p>
        </div>
      </div>
    );
  }
}

export default About;