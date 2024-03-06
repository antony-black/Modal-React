import React from "react";
import "../index.scss";
import { CloseButton } from "./CloseButton";
import { OpenButton } from "./OpenButton";

export function Modal() {
  const [isVisible, setVisibility] = React.useState(false);
  return (
    <>
      <OpenButton setVisibility={setVisibility} />
      <div className={`overlay ${isVisible ? "show" : "hide"}`}>
        <div className="modal">
          <CloseButton setVisibility={setVisibility} />
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>
    </>
  );
}
