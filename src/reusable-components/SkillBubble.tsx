import React from "react";
import { Skill } from "./types";
import "./SkillBubble.css";

interface SkillBubbleProp {
  skill: Skill;
  scale?: boolean;
}

interface SkillBubbleState {
  skill: Skill;
}

export class SkillBubble extends React.Component<SkillBubbleProp, SkillBubbleState> {
  constructor(props: SkillBubbleProp) {
    super(props);
    this.state = {
      skill: props.skill,
    };
  }

  render() {
    return (
      <div className="skill">
        <img src={this.state.skill.logoUrl} alt={this.state.skill.name} className="logo"/>
        <p>{ this.state.skill.name }</p>
      </div>
    );
  }
}