import React from 'react';

function Description(props) {
  return (
    <>
      <h2>Hello, {props.name}!</h2> 
      <div className="card">Title Stats</div>
      <div className="card">Title Stats</div>
      <div className="card">Title Stats</div>
    </>
  );
}

export default Description;
