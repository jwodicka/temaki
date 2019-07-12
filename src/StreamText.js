import React from 'react';
import './StreamText.css';

const StreamText = ({match}) => {
  const {width = 1200, height = 100} = match.params;

  const style = {
    width, height, overflow: 'hidden'
  }

  return (
    <div className="streamtext" style={style}>
      <strong>Current Topic:</strong> Making <em>Temaki</em>, the web app that makes this text bubble!<br/>
      Got questions? Feel free to ask and we'll get to them!
    </div>
  );
};

export default StreamText;