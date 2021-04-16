const getAppointmentsForDay = (state, day) => {
  const dayFound = state.days.find(eachDay => eachDay.name === day);
  
  if(!dayFound){
    return [];
  }
  
  const interviews = dayFound.appointments.map(apId => state.appointments[apId]);
  return interviews;
}
export default getAppointmentsForDay;
