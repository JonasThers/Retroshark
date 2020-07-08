import React, { useRef } from "react";

const TextBlock = (props) => {
  const textBlock = useRef();

  const highlightTextBlock = () => {
    textBlock.current.classList.add("highlight");
  };

  const leaveTextBlock = () => {
    textBlock.current.classList.remove("highlight");
  };

  return (
    <div>
      <div
        ref={textBlock}
        onMouseOver={highlightTextBlock}
        onMouseLeave={leaveTextBlock}
        className="text-block"
      >
        <div className="text-block__img">
          <img src={props.imgUrl} />
        </div>
        <div className="text-block__content">{props.content}</div>
      </div>
    </div>
  );
};

export default TextBlock;
