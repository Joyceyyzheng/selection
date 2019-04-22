import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Generator from './generator.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 9,
      number: 1
    }
  }

  componentDidMount() {
   this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
  }
  
  minChange = (event) => {
    this.setState({ min: event.target.value})
  }
  
  maxChange = (event) => {
    this.setState({ max: event.target.value})
  }
  
  generateNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }
  
  getInputs = () => {
    if(this.state.min > this.state.max ){
      const minTemp = this.state.min
      const maxTemp = this.state.max
      this.setState(
      { 
        min: maxTemp,
        max: minTemp
      }, () =>
        this.setState({
          number: this.generateNumber(this.state.min, this.state.max)  
        })
      );
    } else {
      this.setState({
        number: this.generateNumber(this.state.min, this.state.max)  
      })
    }
  }
  getImageURL = () => { return "https://i.imgur.com/qp32aXf.png"}
  
  render() {
    return (
      <div className="App">
        <div id="title">See What You Are Going to Eat Tonight!<br></br>Of course you can also change the 
        recipe by yourself!</div>
        <p id="rNum">{ this.state.number }</p>
        <div id="inputContainer">
          <div id="headers"> 
            <p className="p">Min</p>
            <p>Max</p>
            
          </div>
          <div id="inputs">
            <input id="min" min="-9999999999" max="9999999999" type="number" value={ this.state.min } onChange={this.minChange} />
            <input id="max" min="-9999999999" max="9999999999" type="number" value={ this.state.max } onChange={this.maxChange} />
            <input id="generate" type="submit" value="Food Number" onClick={ this.getInputs }/>
          </div>
        </div>
        <p> <img src= {this.getImageURL()}></img> </p>
        <Generator />
      </div>
    )
    }
}


export default App;
