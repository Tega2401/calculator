import React from 'react';
import './clear.css';

const Clear = (props) => {
  return (
    <div
    className='clear'
    onClick={() => props.handleClear(props.children)}>
      {props.children}
    </div>
  )
}

export default Clear;
