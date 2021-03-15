import React, {Component} from 'react';
import Button from './button';
import "./calculator.css";

class Calculator extends Component {
  render() {
    return (
      <div>
        <h1> My First Calculator </h1>
        <div className>
          <Button> 10 </Button>
        </div>
      </div>
    );
  }
}

export default Calculator;
