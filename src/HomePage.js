import React from "react";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
  const history = useHistory();

  const changeRoute = path => {
    history.push(path);
  };

  return (
    <div>
      <div className="buttonSet">
        <button
          onClick={() => {
            changeRoute("/basicDemo");
          }}
          className="navButton"
          type="button"
        >
          Basic one
        </button>
        <button
          onClick={() => {
            changeRoute("/useSpringDemo");
          }}
          className="navButton"
          type="button"
        >
          useSpring demo
        </button>
        <button
          onClick={() => {
            changeRoute("/useSpringsDemo");
          }}
          className="navButton"
          type="button"
        >
          useSprings demo
        </button>
        <button
          onClick={() => {
            changeRoute("/useTrailDemo");
          }}
          className="navButton"
          type="button"
        >
          useTrail demo
        </button>
        <button
          onClick={() => {
            changeRoute("/useTransitionDemo");
          }}
          className="navButton"
          type="button"
        >
          useTransition demo
        </button>
        <button
          onClick={() => {
            changeRoute("/useChainDemo");
          }}
          className="navButton"
          type="button"
        >
          useChain demo
        </button>
      </div>
    </div>
  );
};
