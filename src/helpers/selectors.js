export const getAppointmentsForDay = (state, day) => {
  const dayFound = state.days.find(eachDay => eachDay.name === day);
  
  if(!dayFound){
    return [];
  }
  
  const interviews = dayFound.appointments.map(apId => state.appointments[apId]);
  return interviews;  
}

export const getInterview = (state, interview) => {
  
  if(interview === null){
    return null;
  }
  const [foundInterview] = Object.values(state.interviewers).filter(interviewer => interviewer.id === interview.interviewer);
  interview = {...interview, ...foundInterview}
  return interview
}

export const getInterviewersForDay = (state, interviewers) => {
  
  if(interviewers === null){
    return null;
  }
  const [foundInterviewers] = Object.values(state.interviewers).filter(interviewer => interviewer.id === interviewers.interviewer);
  interviewers = {...interviewers, ...foundInterviewers}
  return interviewers
}