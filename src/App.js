import React from 'react';
import MediaCard from './MediaCard'
import './App.css';


const App=(props)=> {
  const {imageUrl,title, body} = props;
  console.log(imageUrl);
  return (
    <div className="App">
   <h1><u>Assigment # 3</u></h1>
   <MediaCard />
   
    </div>
  );
}

export default App;
