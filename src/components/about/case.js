import React from "react";
import caseData from "../../json/cases";

const Case = (props) => {
  return (
    <div className="case">
      <div className="case__info">
        <div className="case__info-title">{props.title}</div>
        <div className="case__info-description">{props.description}</div>
      </div>
      <div className="case__img">
        <img className="case__img-img" src={props.imgUrl} />
      </div>
    </div>
  );
};

export default Case;
