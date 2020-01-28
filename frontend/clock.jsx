import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick() {
    // debugger
    this.setState({ date: new Date() });
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000);
  } 

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){

    const date = this.state.date;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    function month(date){
      return months[date.getMonth()];
    }

    function day(date){
      return days[date.getDay()];
    }

    return(
      <>
          <h1>
            Clock
          </h1>
        <div className = "time-widget">
          <h2 className = "clock">
            <div>
              Time:
            </div>
            <div>
             {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} EDT
            </div>
          </h2>
          <h2 className = "clock">
            <div>
              Date:
            </div>
            <div>
              {day(date)} {month(date)} {date.getDate()} {date.getFullYear()} 
            </div>
          </h2>
        </div>
      </>
    )
  }
}

export default Clock;