import React, {Component} from 'react';
import Calculator from './components/calculator';
import Button from './components/button';
import Input from './components/Input';
import Clear from './components/clear';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
    //this.addToInput = this.addToInput.bind(this)
  }
  addToInput = (val) => {
    this.setState({input: this.state.input + val});
  }

  clearInput = () => {
    this.setState({input: ''})
  }

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ''});
    this.state.operator = 'multiply'
  }

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ''});
    this.state.operator = 'divide'
  }

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ''})
    this.state.operator = 'add'
  }

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ''})
    this.state.operator = 'subtract'
  }

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator == 'multiply') {
      this.setState ({
        input:
        parseInt(this.state.previousNumber) *
        parseInt(this.state.currentNumber)
      })
    }
    else if (this.state.operator == 'divide') {
      this.setState({
        input:
        parseInt(this.state.previousNumber) /
        parseInt(this.state.currentNumber)
      })
    }
    else if (this.state.operator == 'add') {
      this.setState({
        input:
        parseInt(this.state.previousNumber) +
        parseInt(this.state.currentNumber)
      })
    }
    else if (this.state.operator == 'subtract') {
      this.setState({
        input:
        parseInt(this.previousNumber) -
        parseInt(this.currentNumber)
      })
    }
  }

  render() {
  return (
    <div className='App'>
    <div className='calc-wrapper'>
    <div>
      <Input input={this.state.input}> {this.state.input}</Input>
    </div>
      <div className="row">
          <Button handleClick={this.addToInput}> 7 </Button>
          <Button handleClick={this.addToInput}> 8 </Button>
          <Button handleClick={this.addToInput}> 9 </Button>
          <Button handleClick={this.multiply}> * </Button>
      </div>
      <div className="row">
          <Button handleClick={this.addToInput}> 4 </Button>
          <Button handleClick={this.addToInput}> 5 </Button>
          <Button handleClick={this.addToInput}> 6 </Button>
          <Button handleClick={this.subtract}> - </Button>
      </div>
      <div className="row">
          <Button handleClick={this.addToInput}> 1 </Button>
          <Button handleClick={this.addToInput}> 2 </Button>
          <Button handleClick={this.addToInput}> 3 </Button>
          <Button handleClick={this.add}> + </Button>
      </div>
      <div className="row">
          <Button handleClick={this.addToInput}> 0 </Button>
          <Button handleClick={this.divide}> / </Button>
          <Button handleClick={this.decimal}> . </Button>
          <Button handleClick={this.evaluate}> = </Button>
      </div>
      <Clear handleClear={this.clearInput}> Clear </Clear>
      

    </div>
    </div>
  );
}
}

export default App;
