import React from "react";
import { useSpring, animated } from "react-spring";

const basicDemoPageStyle = {
  width: "75%",
  margin: "auto"
};

const numberDemoStyle = {
  textAlign: "center",
  fontFamily: "Lato",
  fontSize: "25px",
  marginTop: "1vw"
};

const opacityDemoStyle = {
  textAlign: "center",
  fontFamily: "Lato",
  fontSize: "25px",
  marginTop: "5vw"
};

const svgDemoStyle = {
  textAlign: "center",
  marginTop: "5vw"
};

const svgStyle = {
  height: "50px",
  width: "50px"
};

export const BasicDemoPage = ({}) => {
  // Defining the spring
  const numberDemoSpring = useSpring({ number: 10, from: { number: 0 } });
  const opacityDemoSpring = useSpring({ delay: 50, opacity: 1, from: { opacity: 0 }});
  const svgDemoSpring = useSpring({ x: 100, from: { x: 0 } });

  return (
    <div style={basicDemoPageStyle}>
      <div style={opacityDemoStyle}>
        <animated.div style={opacityDemoSpring}>Hello React-Spring</animated.div>
      </div>
      <div style={numberDemoStyle}>
        <animated.span>{numberDemoSpring.number}</animated.span>
      </div>
    </div>
  );
};
