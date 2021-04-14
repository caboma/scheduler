import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";

export default function Appointment(props) {
  if(props.interview){
    return (
      <article className="appointment">
         {props.time}<Header />
        <Show />
      </article>
    )
  } else {
    return (
      <article className="appointment"> 
        <Header />
        <Empty />
      </article>)
  }
}
