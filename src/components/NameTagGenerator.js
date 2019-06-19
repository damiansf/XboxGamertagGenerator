import React from 'react';
import ReactDOM from 'react-dom';

export default class NameTagGenerator extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      gamertag: "",
      input: ""
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleClick = (e) => {
      let num = ['69', '420'];
      let str = this.state.input;
      let selectedNum = num[Math.round(0 + Math.random() * (1 - 0))];

      str = "xxx" + str + selectedNum + "xxx";

      let i = 1;
      let newStr = "";

      while(i < str.length) {
        newStr += str[i-1] + str[i].toUpperCase();
        i += 2;
      }

      if(i === str.length) {
        newStr += str[i-1];
      }

      this.setState({gamertag: newStr, input: ""});
  }

  render() {
    let redo;

    if(this.state.gamertag.length != 0) {
      redo = <button onClick={this.handleClick} >Make it more Xboxified!</button>;
    }
    return (
      <div>
        <p>Enter a gamertag</p>
        <input type="text" onKeyDown={this.handleChange} placeholder="Enter Gamertag" type="text"/>
        <button onClick={this.handleClick} >Xboxify!</button>
        <span>{this.state.gamertag}</span>
        {redo}
      </div>
    );
  }
}
