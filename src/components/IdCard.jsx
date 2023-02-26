const IdCard = (props) => {

     const { lastName, firstName, gender, height, birth, picture} = props;
     console.log(lastName)
     console.log(birth)
    return (
        <div className="idcard">
            <img src={picture} alt={firstName} />
            <div>
                <h4>First name: {firstName}</h4>
                <h4>Last name: {lastName}</h4>
                <h4>Gender: {gender}</h4>
                <h4>Height: {height}</h4>
                <h4>Birth: {birth}</h4>
            </div>
        </div>
    )
}

export default IdCard;