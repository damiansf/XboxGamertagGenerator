import React from 'react';
import ReactDOM from 'react-dom';

export default class NameTagGenerator extends React.Component {

  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      gamertag: ""
    };
  }

  handleKeyDown = (e) => {
    let num = ['69', '420'];
    let str = e.target.value;
    let selectedNum = num[Math.round(0 + Math.random() * (1 - 0))];

    str = "xXx" + str + selectedNum + "xXx";

    if(e.keyCode == 13){
      this.setState({gamertag: str});
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown} placeholder="Enter Gamertag" type="text"/>
        <span>{this.state.gamertag}</span>
      </div>
    );
  }
}
