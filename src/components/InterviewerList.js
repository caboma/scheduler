import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";
import PropTypes from "prop-types";

const InterviewerList = (props) => {
  const parsedInterviewerList = props.interviewers.map(interviewer => (
    <InterviewerListItem  
      key={interviewer.id}
      name={interviewer.name} 
      avatar={interviewer.avatar} 
      selected={interviewer.id === props.value} 
      setInterviewer = {(event) => props.onChange(interviewer.id)}/>
  ));
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewerList}</ul>
    </section>
  );
}

export default InterviewerList;