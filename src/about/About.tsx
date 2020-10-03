import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="page-content">
        <h2>About me</h2>
        <p>Alright, I'm not always sure how to describe myself, but I'll do my best and keep this short!</p>
        <p>I'm Duha, I build tools and apps for people to use. I haven't always had an interest in software development, but 4 years ago as I was trying to escape an Architecture degree (2/10 would not recommend &#128578;) I decided to transfer to a Computer Science program, and have been hooked ever since!</p>
        <p>While developing any project, I primarily value two things:
          <ul>
            <li>Problem solving: </li>
            <li>Attention to detail: I generally like to see my work </li>
          </ul>
        </p>
        <p>You can find details about my educational and professional experience in my <a href="">resume</a>.</p>

      </div>
    );
  }
}

export default About;