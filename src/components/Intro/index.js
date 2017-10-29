import React from "react";
import styled from 'styled-components';
import Typing from "react-typing-animation";


const TypingGenerator = ({ phrases }) => (
  <Typing loop={true} speed={20}>
    {phrases.map(phrase => (
      <span>
        <Typing.Reset count={1} delay={1000} speed={20} />
        {phrase}
        <Typing.Backspace
          speed={100}
          length={2000}
          delay={300}
        />
      </span>
    ))}
  </Typing>
);

class Intro extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <TypingGenerator
            phrases={[
                <span>Art&nbsp;Direction, Software&nbsp;UX, Layouts</span>,
                <span>Interaction, Empathy, Engagement</span>,
                <span>Digital, Geometry, Environment</span>,
                <span>Visuals, Emotion, Language</span>
            ]}
        />
      </div>
    );
  }
}


export default styled(Intro)`
    width: 100%;
    font-size: 76px;
    font-weight: 300;
    line-height: 1.38;
    text-align: left;
    color: #001d60;
    height: 600px;
`