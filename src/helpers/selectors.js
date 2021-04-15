 function getAppointmentsForDay(state, day) {
  const filteredAppointments = [];
  const appointmentDay = state.days.filter(d => {

    if(d.name === day){
      d.appointments.forEach((apId)=>{
        filteredAppointments.push(state.appointments[apId])
      })
    }
  });
  return filteredAppointments;
}
export default getAppointmentsForDay;