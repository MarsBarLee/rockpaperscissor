import React, {Component} from 'react';

class Game extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div>
          put the playerCard Components here
        </div>
        <div className="winner">Place the winner here</div>
        <button type="button">Play the Game</button>
      </div>
    )
  }
}

export default Game;