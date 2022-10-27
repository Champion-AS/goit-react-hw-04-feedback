import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css'

const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        className={s.statBtn}
        type="button"
        name={option}
        onClick={event => onLeaveFeedback(event)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default Feedback;

Feedback.PropsTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string),
  onLeaveFeedback: PropTypes.func,
}

