import React, { Component } from 'react';

class LotteryBall extends Component {
  render() {
    let num = this.props.num;
    return (
      <div>
        {num.map(el => (
          <h7 className="ball">{el}</h7>
        ))}
      </div>
    );
  }
}

export default LotteryBall;
