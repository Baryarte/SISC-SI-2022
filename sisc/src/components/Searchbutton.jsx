import React from 'react';
import "./Button.css"
const Searchbutton = ({ children, onClick }) => {
  return (
    <button className='button' onClick={onClick} >
      {children}
    </button>);
}
export default Searchbutton;