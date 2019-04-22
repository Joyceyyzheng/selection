import React, { Component } from 'react';
import './App.css';


class Generator extends React.Component {
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
    <div className="Generator"></div>
    )
    }
}
    export default Generator;