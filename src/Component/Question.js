import React, { Component } from "react";
import { Howl, Howler } from "howler";

class Question extends Component {
  constructor(props) {
    super(props);

    this.soundPlay = this.soundPlay.bind(this);
  }

  soundPlay = (src, start) => {
    const sound = new Howl({
      src,
      html5: true,
      autoplay: true,
      volume: 1.0,
      pool: 10,
    });
    if (start) {
      sound.play();
    } else {
      sound.stop();
    }
  };
  componentDidMount() {
    setTimeout(() => this.soundPlay(this.props.sound.sound, true), 1000);
  }
  componentDidUpdate() {
    Howler.stop();
    setTimeout(() => this.soundPlay(this.props.sound.sound, true), 3000);
  }
  render() {
    return (
      <div>
        <p>{this.props.sound.Question}</p>
        <img width="25%" height="500rem" src={this.props.sound.pic}></img>
      </div>
    );
  }
}

export default Question;
