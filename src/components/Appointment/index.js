import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    interviewers:{} 
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
      
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
  },[]);

  const interviewers = getInterviewersForDay(state, state.interviewers);

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
          onCancel={ () => back() }
          interviewers={interviewers}
        />
      )}
    </article>
  )
}
