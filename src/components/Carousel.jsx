import React, {useState} from "react";

const Carousel = ({images}) => {

    const [image, setImage] = useState(0)
    
    const clickRight = () => {
        const increase = image + 1;
        increase >= 4 ? setImage(0) : setImage(increase);
    }

    const clickLeft = () => {
        const decrease = image - 1;
        decrease < 0 ? setImage(3) : setImage(decrease);
    }

    return (
        <div>
            <button onClick={clickLeft}>Left</button>
            <button onClick={clickRight}>Right</button>
            <img src={images[image]} alt="img" />
        </div>

    )
}

export default Carousel;