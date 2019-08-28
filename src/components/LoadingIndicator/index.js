import React from 'react';
import Spinner from 'react-spinkit'

export default ({error}) => {
  console.log(error);
  
  return error 
    ? <div>An error occurred loading component</div>
    : <Spinner name="ball-scale-ripple-multiple"/>
}