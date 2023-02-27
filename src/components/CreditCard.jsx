import React from 'react';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/MasterCard_Logo.svg.webp';

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    const image = type === 'Visa' ? visa : mastercard;

    let hideNum = []
    for (let i = 0; i<number.length; i++) {
        if (i < number.length-4) {
            hideNum.push('*');
        } else {
            hideNum.push(number[i])
        }
    }

    let expMonth
    if (expirationMonth < 10) {
        expMonth = `0${expirationMonth}`
    } else {
        expMonth = expirationMonth
    }

    let expYear = expirationYear.toString().slice(-2);

    const divStyle = {
        color: `${color}`,
        background: `${bgColor}`
    }
  return (
    <div className="creditcard" style={divStyle}>
      <div className="image-visa">
        <img src={image} alt={type} />
      </div>
      <div className='bank-num'>
        <h2>{hideNum}</h2>
      </div>
      <div className="general-info-creditcard">
        <div className='expires-bank'>
          <h4>Expires: {expMonth} / {expYear} </h4>
          <h4>{bank}</h4>
          </div>
          <h4 className="owner-creditcard">{owner}</h4>  
      </div>
    </div>
  );
};

export default CreditCard;
