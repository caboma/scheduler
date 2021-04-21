import React from "react";
import "components/DayListItem.scss";
import classNames from 'classnames/bind';

const DayListItem = (props) => {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots===0
  });
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} data-testid="day">
      <h2>{props.name}</h2>
      <h3>{props.spots===0 ? "no" : props.spots} {props.spots===1 ? "spot" : "spots"} remaining</h3>
    </li>
  );
};
export default DayListItem;