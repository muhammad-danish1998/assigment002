import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaCard from './MediaCard';
import Gate from './Gate'

ReactDOM.render(<>
<MediaCard title='My Profile' body='i am Learning Reactjs' imageUrl="https://i.picsum.photos/id/866/220/100.jpg"
  para={<p>well, my name is <b>Danish Tanoli</b> student of CnC Batch #2 i want to become Web Developer </p>} />
<Gate isOpen = {false} />
</>

  , document.getElementById('root'));
