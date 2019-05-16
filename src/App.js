import React from 'react';
import Card from './components/Card.js';

const App = props => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col py-5">
          <Card bidStatus="no bid" amount="450,000.00" companyName="JKSG Company"/>
        </div>
        <div className="col py-5">
          <Card bidStatus="hot" amount="375,000.00" companyName="ABCD Company"/>
        </div>
        <div className="col py-5">
          <Card bidStatus="sold" amount="522,000.00" companyName="EFGH Company"/>
        </div>
        <div style={{ height: '2000px' }} />
      </div>
    </div>
  );
};

export default App;
