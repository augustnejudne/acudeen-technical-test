import React, { useState } from 'react';

const OtherDetails = props => {
  const [showOtherDetails, setShowOtherDetails] = useState(false);
  return (
    <div className="acudeen-card__other-details">
      <div className="acudeen-card__other-details__toggler">
        <h2>Other Details</h2>
        <a
          data-toggle="collapse"
          href="#other-details"
          role="button"
          aria-expanded="false"
          aria-controls="other-details"
        >
          <i
            className={`fas ${
              showOtherDetails ? 'fa-angle-up' : 'fa-angle-down'
            }`}
            onClick={() => setShowOtherDetails(!showOtherDetails)}
          />
        </a>
      </div>
      <div className="collapse" id="other-details">
        <div className="other-details--wrapper">
          <div className="reference-number">
            <div className="number">6JR44S3F7R</div>
            <div className="label">Reference No.</div>
          </div>
          <div className="invoice-number">
            <div className="number">INV-63291</div>
            <div className="label">Invoice Number</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
