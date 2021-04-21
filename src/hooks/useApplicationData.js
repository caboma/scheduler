import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  
  const [state, setState] = useState({
      day: "Monday",
      days: [],
      appointments:{},
      interviewers:[],
    });
    
    const setDay = (day) => {
      setState(prev => ({...prev, day}));
    };
  
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
    
    //Save new appointment for the day
    const bookInterview = (id, interview) => {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview },
      };

      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      
      setState({
        ...state,
        appointments
      });
      
      return axios.put(`/api/appointments/${id}`, {interview})
      .then(()=> {
        setState({
          ...state,
          appointments,
          days: updateSpots(appointments)
        });
      });
    };

    //Updating the remaining spots upon adding or deleting appointment
    const updateSpots = (appointments) => {
      const newState = {...state};
      const currentDay = newState.days.find(day => day.name === state.day);
      const listOfAppointmentsForADay = [...currentDay.appointments];
  
      let numberOfSpots = 0
      for (const aptId of listOfAppointmentsForADay){
        if(appointments[aptId].interview === null){
          numberOfSpots++
        }
      }

      currentDay.spots = numberOfSpots;
      return newState.days;
    };
    
    /*******Cancels selected interview*******/
    //updating the state by removing the appointment to the state
    const cancelInterview = (id, interview) => {
      const appointment = {
        ...state.appointments[id],
        interview: null,
        
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      
      setState({
        ...state,
        appointments
      })

      //deleting the appointment to database api
      return axios.delete(`/api/appointments/${id}`, {interview})
      .then(()=> {
        setState({
          ...state,
          appointments,
          days: updateSpots(appointments)
        });
      });
    };

  return { state, setDay, bookInterview, cancelInterview};  
};
