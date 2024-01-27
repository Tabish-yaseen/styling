import React from 'react';

import './Button.css';

const Button = (props)=> {
  // let checkValid=props.isValid?'':'inValid' // alternative way
  
  return (
    <button type={props.type} className={`button ${!props.isValid && 'inValid'}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
