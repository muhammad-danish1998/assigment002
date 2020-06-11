import React from 'react';

import './App.css';

const MediaCard=(props)=> {
  const {imageUrl,title, body , para} = props;
  console.log(imageUrl);
  return (
    <div className="App">
    <h2>{title}</h2>
    <p>{body}</p>
      <img src= {imageUrl} alt="Scenery" style = { { marginTop:'10px'}} />
      <div><h1>introDuction</h1>
      {para}
      </div>
    </div>
  );
}

export default MediaCard;
