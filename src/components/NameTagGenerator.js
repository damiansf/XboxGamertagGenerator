import React from 'react';
import ReactDOM from 'react-dom';
import './NameTagGenerator.css';

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
    if(this.state.gamertag.length != 0) {
      this.setState({ gamertag: "" });
    }
    this.setState({ input: e.target.value });
  }

  handleClick = (e) => {
      let num = ['69', '420'];
      let str = this.state.gamertag.length === 0 || e.target.id === "1" ? this.state.input : this.state.gamertag;
      str = str.toLowerCase();
      let selectedNum = num[Math.round(0 + Math.random() * (1 - 0))];

      str = "xxx" + selectedNum + str + selectedNum + "xxx";

      let i = 1;
      let newStr = "";

      while(i < str.length) {
        newStr += str[i-1] + str[i].toUpperCase();
        i += 2;
      }

      if(i === str.length) {
        newStr += str[i-1];
      }

      this.setState({gamertag: newStr});
  }

  render() {
    let redo;

    if(this.state.gamertag.length != 0) {
      redo = <button onClick={this.handleClick} className="xboxify">Make it more Xboxified!</button>;
    }
    return (
      <div className="containerDiv">
        <input type="text" onChange={this.handleChange} placeholder="Enter Gamertag" type="text" className="inputBox"/><br />
        <span className="gamertag">{this.state.gamertag}</span><br />
        <button id="1" onClick={this.handleClick} className="xboxify" >Xboxify!</button>
        {redo}
      </div>
    );
  }
}
