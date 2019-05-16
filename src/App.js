import React from 'react';
import Card from './components/Card.js';
import companyLogo from './assets/no_payor_logo.svg';

const App = props => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col py-5">
          <Card
            bidStatus="no bid"
            amount="450,000.00"
            companyLogo={companyLogo}
            companyName="JKSG Company"
            stars={[4, 3, 3]}
            bidAmount="4,500.00"
          />
        </div>
        <div className="col py-5">
          <Card
            bidStatus="hot"
            amount="375,000.00"
            companyLogo={companyLogo}
            companyName="ABCD Company"
            stars={[3, 3, 4]}
            bidAmount="3,500.00"
          />
        </div>
        <div className="col py-5">
          <Card
            bidStatus="sold"
            amount="522,000.00"
            companyLogo={companyLogo}
            companyName="EFGH Company"
            stars={[4, 4, 3]}
            bidAmount="6,500.00"
          />
        </div>
        <div style={{ height: '2000px' }} />
      </div>
    </div>
  );
};

export default App;
