import Rating from './Rating';

const DriverCard = (props) => {
    const { name, rating, img, car } = props;

    return (
        <div className="driver-card">
            <img src={img} alt={name} />
            <div className="driver-card-info">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <h4>{car.model} {car.licensePlate}</h4>
            </div>
        </div>
    )
}

export default DriverCard;