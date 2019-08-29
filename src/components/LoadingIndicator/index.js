import React from 'react';

export default ({error}) => {
  console.log(error);

  return error 
    ? <div>An error occurred loading component</div>
    : <div>loading...</div>
};