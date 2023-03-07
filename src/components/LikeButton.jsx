import React, { useState } from 'react';

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const [like1, setLike1] = useState(0);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  let index = like % colors.length;
  let index1 = like1 % colors.length;

  let color = colors[index];
  let color1 = colors[index1];

  const handleLike = () => {
    setLike((prev) => prev + 1);
  };

  const handleLike1 = () => {
    setLike1((prev) => prev + 1);
  };

  return (
    <div className="like-button">
      <button style={{ backgroundColor: color }} onClick={handleLike}>
        {like} Likes
      </button>
      <button style={{ backgroundColor: color1 }} onClick={handleLike1}>
        {like1} Likes
      </button>
    </div>
  );
};

export default LikeButton;
