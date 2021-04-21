import React from "react";
import "components/InterviewerListItem.scss";
import classNames from 'classnames/bind';

const InterviewerListItem = (props) => {
  const interviewerName = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  return (
    <li className={interviewerName} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};
export default InterviewerListItem;
