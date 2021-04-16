const getInterview = (state, interview) => {
  
  if(interview === null){
    return null;
  }
  const [foundInterview] = Object.values(state.interviewers).filter(interviewer => interviewer.id === interview.interviewer);
  interview = {...interview, ...foundInterview}
  return interview
}

export default getInterview;
