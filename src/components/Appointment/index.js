import React, { useState, useEffect } from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";
import {getInterviewersForDay} from "helpers/selectors";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SHOW)
    props.bookInterview(props.id, interview)
    
  }

  return(
    <article className="appointment">
      {props.time} <Header />
      {mode === EMPTY && 
        <Empty onAdd={ () => 
          transition(CREATE) } 
        />
      }
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.name}
        />
      )}
      {mode === CREATE && (
        
        <Form 
          onCancel={ back }
          interviewers={props.interviewers}
          onSave={ save }
          
        />
      )}
    </article>
  )
}
