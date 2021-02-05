import React, { Component } from "react";
import Question from "./Question";

const audioClip = [
  {
    id: 1,
    sound: "https://www.computerhope.com/jargon/m/example.mp3",
    Question: "Demo Question1",
    pic:
      "https://images.unsplash.com/photo-1612490709630-b69079eb0103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    options: ["A", "B", "C", "D"],
  },
  {
    id: 2,
    sound: "https://designshack.net/tutorialexamples/MP3/SearchTheWorld.mp3",
    Question: "Demo Question2",
    pic:
      "https://images.unsplash.com/photo-1612325259244-9c850fc5a14b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    options: ["A", "B", "C", "D"],
  },
  {
    id: 3,
    sound: "https://designshack.net/tutorialexamples/MP3/Blasphemy.mp3",
    Question: "Demo Question3",
    pic:
      "https://images.unsplash.com/photo-1612488261779-be3483951c46?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    options: ["A", "B", "C", "D"],
  },
];
class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handleNextClick() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  }
  render() {
    return (
      <>
        <Question sound={audioClip[this.state.count]} />
        {audioClip[this.state.count].options.map((o, i) => (
          <button key={i}>{o}</button>
        ))}
        <br />
        <button
          onClick={this.handleNextClick}
          disabled={this.state.count === audioClip.length - 1}
        >
          Next
        </button>
      </>
    );
  }
}

export default Quiz;
