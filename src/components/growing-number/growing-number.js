import React from 'react';

import './growing-number.scss';

class GrowingNum extends React.Component {
  state = {
    growingNumber: 0,
    number: +this.props.number
  };

  componentDidMount = () => {
    this.growNum();
    this.growInterval();
  };

  growInterval = () => {
    setInterval(this.growNum, 50);
  }

  growNum = () => {
    if (this.state.growingNumber < this.state.number) {
      const interval = this.state.number / 8;
      const randomNum = Math.floor(Math.random() * interval);
      const growingNumber = this.state.growingNumber + randomNum;
      this.setState({ growingNumber });
    }
    if (this.state.growingNumber >= this.state.number) {
      this.setState({ growingNumber: this.state.number });
      clearInterval(this.growInterval);
    }
  };

  render() {
    return (
      <div className="number-box">
        <p className="number">{this.state.growingNumber}{this.props.unit}</p>
        <p className="text">{this.props.description}</p>
      </div>
    );
  }
}

export default GrowingNum;
