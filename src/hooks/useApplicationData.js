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
    }
  
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
    
    const updateSpots = (appointments) => {
      const newState = {...state}
      const currentDay = newState.days.find(day => day.name === state.day)
      const listOfAppointmentsForADay = [...currentDay.appointments]
  
      let numberOfSpots = 0
      for (const aptId of listOfAppointmentsForADay){
        if(appointments[aptId].interview === null){
          numberOfSpots++
        }
      }

      currentDay.spots = numberOfSpots
      return newState.days
    }

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
      })
      
      return axios.put(`/api/appointments/${id}`, {interview})
      .then(()=> {
        setState({
          ...state,
          appointments,
          days: updateSpots(appointments)
        })
      })
    }
  
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
      
      return axios.delete(`/api/appointments/${id}`, {interview})
      .then(()=> {
        setState({
          ...state,
          appointments,
          days: updateSpots(appointments)
        })
      })
    }

  return { state, setDay, bookInterview, cancelInterview};  
}
