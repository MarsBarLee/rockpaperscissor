import React, {Component} from 'react';
import PlayerCard from "./PlayerCard.js";

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissor", "paper"]
    this.state = {
      playerOne: "rock",
      playerTwo: "scissor",
    }
  }

  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() *3)],
      playerTwo: this.signs[Math.floor(Math.random() *3)],
    })
    // this is where we are going to create the functionality of the game
  }

  decideWinner = () =>  {
    const playerOne = this.state.playerOne;
    const playerTwo = this.state.playerTwo;

      if (playerOne === playerTwo) {
        console.log("Tie")
        return "It's a tie!"
      }
      else if // ((condition 1) || (condition 2) || (condition 3))
      ((playerOne === "rock" && playerTwo === "scissor") ||
      (playerOne === "scissor" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")) {
        return "Player 1 wins!"
        console.log("Player 1 wins")
      } else {
        return "Player 2 wins!"
        console.log("Player 2 wins")
      }
    } 

  render() { // render is for DOM/React elements visible to player
    return (
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner">{this.decideWinner()}</div>
        {/* need to put () after decideWinner */}
        <button type="button" onClick={this.playGame}>Play the Game</button>
      </div>
    );
  }
}


export default Game;