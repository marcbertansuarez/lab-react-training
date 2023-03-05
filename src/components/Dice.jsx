import React, {useState} from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {

    const [dice, setDice] = useState(diceEmpty);

    let allDice = [dice1, dice2, dice3, dice4, dice5, dice6];


    const handleRandom = () => {
        const i = Math.floor(Math.random() * allDice.length)
        const randomDice = allDice[i];
        setDice((prev) => (prev === diceEmpty ? randomDice : diceEmpty))
    }
    
    return (
        <button onClick={handleRandom}>
            <img src={dice} alt="dice" />
        </button>
    )
}

export default Dice;