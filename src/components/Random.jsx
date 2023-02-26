import React from "react";

const Random = (props) => {

    const { min, max } = props;

    const random = (min, max) => (Math.random() * (max - min) + min)
    const randomNum = random(min, max)

    
    console.log(random)
    console.log(randomNum)
    return (
        <div>
            <h4>Random value between {min} and {max} = {Math.floor(randomNum)}</h4>
        </div>
    )
}

export default Random;