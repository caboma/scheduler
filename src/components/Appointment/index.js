import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Saving from "components/Appointment/Save"
import Confirm from "components/Appointment/Confirm";
import Delete from "components/Appointment/Delete";
import useVisualMode from "hooks/useVisualMode";

const Appointment = (props) => {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  //saving the new appointment by calling the bookInterview funciton and pass appointment id and interview object
  const save = async(name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    await props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  //to show the delete confirmation dialog
  const confirm = () => {
    transition(CONFIRM)
  }

  //upon confirmation, call cancelInterview function to perform the delete using appointment id
  const cancel = async() => {
    transition(DELETING, true)
    await props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  }
  
  //Edit existing appoint
  const edit = () => {
    transition(EDIT)
  }

  return(
    <article className="appointment" data-testid="appointment">
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
          onEdit={edit}
          onDelete={confirm}
        />
      )}
      {mode === CREATE && (
        <Form 
          onCancel={back}
          interviewers={props.interviewers}
          onSave={ save }
        />
      )}
      {mode === SAVING && (
        <Saving message='Saving' />
      )}
      {mode === CONFIRM && (
        <Confirm 
          onConfirm={cancel}
          onCancel={back}
        />
      )}
      {mode === DELETING && (
        <Delete message='Deleting' />
      )}
      {mode === EDIT && (
        <Form 
          onCancel={back}
          name={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer}
          onSave={save}
        />
      )}
    </article>
  )
}
export default Appointment;
