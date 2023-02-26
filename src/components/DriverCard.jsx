const DriverCard = (props) => {
    const { name, rating, img, car } = props;

    const numRound = Math.round(rating)

    let stars = [];

    for(let i = 0; i<5; i++) {
        if (i < numRound) {
            stars.push('★')
        } else {
            stars.push('☆')
        }
    }
    return (
        <div className="driver-card">
            <img src={img} alt={name} />
            <div className="driver-card-info">
                <h3>{name}</h3>
                <h4>{stars}</h4>
                <h4>{car.model} {car.licensePlate}</h4>
            </div>
        </div>
    )
}

export default DriverCard;