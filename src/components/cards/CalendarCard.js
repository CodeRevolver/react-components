import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const Time = styled.time`
  font-variant: normal;
  font-style: normal;
  font-weight: normal;
  font-family: "Helvetica", "Arial", sans-serif;

  /* It seems vertical-align: baseline does not work correctly with display: inline-flex. */
  vertical-align: top;

  /* margin: 1ex; */

  color: black;
  background: white;
  background : linear-gradient(to bottom right, #FFF 0%, #EEE 100%);

  border: 1px solid #888;
  border-radius: 3px;
  overflow: hidden;

  box-shadow: 2px 2px 2px -2px black;
  
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
      
  .weekday,
  .day,
  .month,
  .year {
    text-align: center;
    line-height: 1.0;
  }
  
  .month {
      font-family: "Oswald", sans-serif;
      text-transform: uppercase;
      background: #B11;
      background : linear-gradient(to bottom right, #D66 0%, #A00 100%);
      color: white;
    }
    
    .weekday,
    .day,
    .month,
    .year {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 1em;
    }
    .month {
      top: 0px;
      font-size: 12px;
      padding: 2px 0;
    }
    .weekday {
      top: 16px;
      font-size: 10px;
    }
    .day {
      top: 26px;
      font-size: 24px;
    }
    .year {
      top: 50px;
      font-size: 14px;
    }

`;

const CalendarCard = () => {
    const d = new Date();
    console.log(d);
    const year = d.getFullYear();
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = months[d.getMonth()];
    const day = d.getDate();
    const dayName = days[d.getDay()];

    return (
        <Time dateTime="2014-09-24" className="date-as-calendar position-em size1x">
            <span className="weekday">{dayName}</span>
            <span className="day">{day}</span>
            <span className="month">{month}</span>
            <span className="year">{year}</span>
        </Time>
    )
};

CalendarCard.propTypes = {
    /** The name of the answer group */
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    /** The width of each item when not in mobile view */
    itemWidth: PropTypes.string,
    /** Select the color style of the buttons, types come from theme */
    styleType: PropTypes.string,
    /** Select the color style of the selected button, types come from theme */
    selectedType: PropTypes.string,
    /** Set the button size, sizes come from theme (buttonStyles) */
    size: PropTypes.string,
    /** Set if the items should have a flat outline style */
    isOutline: PropTypes.bool,
    /** Disable all radio buttons */
    disableAllOptions: PropTypes.bool,
    /** Selected option for the answer group */
    selectedValue: PropTypes.any
};

CalendarCard.defaultProps = {
    size: 'default',
    itemWidth: '100px',
    isOutline: false,
    disableAllOptions: false,
    selectedValue: undefined
};

export default CalendarCard;