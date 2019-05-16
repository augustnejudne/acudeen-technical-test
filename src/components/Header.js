import React from 'react';
import AcudeenLogo from '../assets/ACU GO LOGO@2x.png';

const Header = props => {
  return (
    <div className="acudeen-card__header bg-success text-white">
      <div className="acudeen-card__header">
        <div
          className={`acudeen-card__header__bid-status
            ${props.bidStatus === 'no bid' ? 'text-success' : ''}
            ${props.bidStatus === 'hot' ? 'bg-warning text-dark' : ''}
            ${props.bidStatus === 'sold' ? 'bg-primary text-white' : ''}
        `}
        >
          <span>{props.bidStatus}</span>
        </div>
        <div className="acudeen-card__header__time">
          <div className="time">
            <div className="time--digits">
              05<span>:</span>
              <div className="time--digits--label">Days</div>
            </div>
          </div>
          <div className="time">
            <div className="time--digits">
              02<span>:</span>
              <div className="time--digits--label">Hours</div>
            </div>
          </div>
          <div className="time">
            <div className="time--digits">
              30<span>:</span>
              <div className="time--digits--label">Min</div>
            </div>
          </div>
          <div className="time">
            <div className="time--digits">
              15
              <div className="time--digits--label">Sec</div>
            </div>
          </div>
        </div>
        <div className="acudeen-card__header__logo">
          <img src={AcudeenLogo} alt="Acudeen Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
