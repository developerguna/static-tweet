import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TimePrint = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
};
TimePrint.propTypes = {
    time: PropTypes.string.isRequired
};
export default TimePrint;