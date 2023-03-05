import React, {useState} from "react";

const ClickablePicture = (props) => {

    const {img, imgClicked} = props;

    const [image, setNewImg] = useState(img);

    const handleNewImg = () => {
        setNewImg((prev) => (prev === img ? imgClicked : img));
    }

    return (
        <button onClick={handleNewImg}>
            <img src={image} alt="img" />
        </button>
    )
}

export default ClickablePicture;