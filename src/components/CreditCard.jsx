import visa from '../assets/images/visa.png';

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

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
        <img src={visa} alt="" />
      </div>
      <div>
        <h2>{hideNum}</h2>
      </div>
      <div className="general-info-creditcard">
        <div>
          <h4>Expires: {expMonth} / {expYear} </h4>
          <h4>{bank}</h4>
          <h4>{owner}</h4>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
