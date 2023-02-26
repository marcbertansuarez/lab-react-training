const Rating = (props) => {

    const { children } = props;

    const numRound = Math.round(children)

    let stars = [];

    for(let i = 0; i<5; i++) {
        if (i < numRound) {
            stars.push('★')
        } else {
            stars.push('☆')
        }
    }

    return <div>{stars}</div>
}

export default Rating;