import React from 'react';
import Card from './components/Card.js';

const App = props => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col py-5">
          <Card bidStatus="no bid" />
        </div>
        <div className="col py-5">
          <Card bidStatus="hot" />
        </div>
        <div className="col py-5">
          <Card bidStatus="sold" />
        </div>
        <div style={{height: '2000px'}} />
      </div>
    </div>
  );
};

export default App;