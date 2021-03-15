import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div className='above'>
      <p> {props.input} </p>
    </div>
  )
}

export default Input;
