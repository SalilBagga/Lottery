import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './LotteryBall.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lottery',
    numBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = { num: Array.from({ length: this.props.numBalls }) };
    this.genNum = this.genNum.bind(this);
  }
  genNum() {
    let arrSize = [];

    for (let i = 0; i < this.props.numBalls; i++) {
      arrSize.push(Math.floor(Math.random() * this.props.maxNum) + 1);
    }
    this.setState({ num: arrSize });
    console.log(arrSize);
  }
  render() {
    return (
      <div className="boundary">
        <h1>{this.props.title}</h1>
        <LotteryBall num={this.state.num} />
        <button className="genbutton" onClick={this.genNum}>
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery;
