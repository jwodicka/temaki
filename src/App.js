import React from 'react';
import StreamText from './StreamText';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={StreamText} />
      <Route path="/st/w/:width/h/:height" component={StreamText} />
    </Router>
  );
}

export default App;
