import React from 'react';

// these lines of code below our import statements and above our PlayerCard component.
const scissors = "http://i.imgur.com/pgjyhIZ.png";
const rock = "http://i.imgur.com/LghSkIw.png";
const paper = "http://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => {
    let sign = props.sign
    let image = "" // use let instead of const, because value of variable image changes

    if (sign === "rock") { // == and === data types
        image = rock;
    } else if (sign === "paper") {
        image = paper;
    } else {
        image = scissors
    }

    return (
        <div className="player-card">
            <img src={image} />
        </div>
        // why not className="playerCard"?
        // why previously have {props.sign}?
    )
}

export default PlayerCard;