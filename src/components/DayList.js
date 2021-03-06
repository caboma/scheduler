import React from "react";
import DayListItem from "components/DayListItem"

const DayList = (props) => {
  const parsedDayListItem = props.days.map(day => 
    <DayListItem  
      key={day.id} 
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day} 
      setDay={props.setDay} 
    /> 
  );
  return(
    <ul>
      {parsedDayListItem}
    </ul>
  );
};
export default DayList;