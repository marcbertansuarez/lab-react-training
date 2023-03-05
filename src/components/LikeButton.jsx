import React, {useState, useEffect} from "react";

const LikeButton = () => {

    const [like, setLike] = useState(0);

    const handleLike = () => {
        setLike(prev => prev + 1);
    }

   

    return (
        <div>
            <button onClick={handleLike}>{like} Likes</button>
        </div>
    )
}

export default LikeButton;