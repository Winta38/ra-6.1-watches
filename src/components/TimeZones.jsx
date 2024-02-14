import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class TimeZones extends Component {
  state = { clock: moment().utcOffset(this.props.zone) };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ clock: moment().utcOffset(this.props.zone) });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calcDegree(momentTime) {
    const second = momentTime.second() * 6;
    const minute = momentTime.minute() * 6;
    const hour = momentTime.hour() * 30;
    return { second, minute, hour };
  }

  render() {
    const { second, minute, hour } = this.calcDegree(this.state.clock);
    return (
      <div className="time-zones__clock">
        {this.props.title} (GMT {this.props.zone})
        <div className="time-zones__clock-clock">
          <div className="time-zones__clock-face">
            <div className="time-zones__clock-hour" style={{ transform: `rotate(${hour}deg)` }}>
              <div className="time-zones__clock-hand" />
            </div>
          </div>
          <div className="time-zones__clock-face">
            <div className="time-zones__clock-minute" style={{ transform: `rotate(${minute}deg)` }}>
              <div className="time-zones__clock-hand" />
            </div>
          </div>
          <div className="time-zones__clock-face">
            <div className="time-zones__clock-second" style={{ transform: `rotate(${second}deg)` }}>
              <div className="time-zones__clock-hand" />
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

TimeZones.propTypes = {
  title: PropTypes.string.isRequired,
  zone: PropTypes.number.isRequired,
};
