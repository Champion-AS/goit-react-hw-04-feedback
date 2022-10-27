import React from "react";
import s from "./Statistics.module.css"
import PropTypes from 'prop-types';

export default function Statistics({ message, good, bad, neutral, total, percentage }) {
    return total ? (<div className={s.statsThumb}>
        <span className={s.start}>
            Good: <span>{ good }</span>    
        </span>
        <span className={s.start}>
            Neutral: <span>{ neutral }</span>    
        </span>
        <span className={s.start}>
            Bad: <span>{ bad }</span>    
        </span>
        <span className={s.start}>
            Total: <span>{ total }</span>    
        </span>
        <span className={s.start}>
            Percentage: <span>{ percentage }%</span>    
        </span>
    </div>) : (<p>{ message }</p>)
}

Statistics.propTypes = {
    total: PropTypes.func,
    percentage: PropTypes.func,
    message: PropTypes.string.isRequired,
    good: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
}