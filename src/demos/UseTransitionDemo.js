import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import "../style.css";

const items = [
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        background:
          "url(https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) no-repeat"
      }}
    >
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "url(https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) no-repeat" }}></animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "url(https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) no-repeat" }}>
      
    </animated.div>
  )
];

export const UseTransitionDemoPage = () => {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(
    () => setIndex(state => (state + 1) % items.length),
    []
  );
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return (
    <div className="useTransitionDemoPage">
      <div className="simpleTransitionDemo" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = items[item];
          return <Page key={key} style={props} />;
        })}
      </div>
    </div>
  );
};
