import React, { useState } from 'react';
import Switch from 'react-switch';

const BidAmountDetails = ({bidAmount}) => {
  const [checked, setChecked] = useState(false);
  const [bidInputAmount, setBidInputAmount] = useState(bidAmount)
  const [bidInput, setBidInput] = useState('');

  const increaseBidAmount = () => {
    const bidInputAmountFloat = parseFloat(bidInputAmount.replace(/,/, ''));
    setBidInputAmount((bidInputAmountFloat + 1000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '.00');
  }

  const decreaseBidAmount= () => {
    const bidInputAmountFloat = parseFloat(bidInputAmount.replace(/,/, ''));
    setBidInputAmount((bidInputAmountFloat - 1000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '.00');
  }

  return (
    <div className="acudeen-card__bid-amount-details">
      <h4>Bid Amount Details</h4>
      <div className="acudeen-card__bid-amount-details__acu-go">
        <div className="acu-go-fee">
          <div className="acu-go-fee__price">PHP {bidAmount}</div>
          <div className="acu-go-fee__label">ACU GO Fee</div>
        </div>
        <div className="enable-acu-go">
          <div className="enable-acu-go__switch">
            <Switch
              onChange={() => setChecked(!checked)}
              checked={checked}
              height={22}
              width={60}
              checkedIcon={<span className="switch-on">ON</span>}
              uncheckedIcon={<span className="switch-off">OFF</span>}
            />
          </div>
          <div className="enable-acu-go__label">Enable ACU GO</div>
        </div>
      </div>
      <div className="acudeen-card__bid-amount-details__bid">
        <div className="input-group mb-3">
          <div className="input-group-prepend bid-prepend" onClick={() => decreaseBidAmount()}>
            <span className="input-group-text" id="basic-addon1">
              &minus;
            </span>
          </div>
          <input
            type="number"
            className="form-control form-control-lg bid-input"
            placeholder={`PHP ${bidInputAmount}`}
            value={bidInput}
            onChange={(e) => {setBidInput(e.target.value)}}
          />
          <div className="input-group-append bid-append" onClick={() => increaseBidAmount()}>
            <span className="input-group-text" id="basic-addon1">
              &#43;
            </span>
          </div>
          <button className="btn btn-primary btn-lg bid-btn">Bid</button>
        </div>
      </div>
      <div className="acudeen-card__bid-amount-details__net-profit">
        <span className="label">Net Profit:</span>
        <span className="amount">PHP 7,017.84</span>
      </div>
    </div>
  );
};

export default BidAmountDetails;
