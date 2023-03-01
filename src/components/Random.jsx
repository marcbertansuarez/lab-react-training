import React from "react";

const Random = (props) => {

    const { min, max } = props;

    const random = (min, max) => (Math.random() * (max - min) + min);
    const randomNum = Math.floor(random(min, max));
    

    return (
        <div>
            <h4>Random value between {min} and {max} = {randomNum}</h4>
        </div>
    )
}

export default Random;