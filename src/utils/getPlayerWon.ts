import Player from "../types/player";

const getPlayerWon = (gameState: number[], playerConfig: Player[]) => {
    const winConditions = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // cols
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      
      if ( (gameState[a] === playerConfig[0].value) && (gameState[b] === playerConfig[0].value) && (gameState[c] === playerConfig[0].value)){
        return playerConfig[0];
      }
  
      if ( (gameState[a] === playerConfig[1].value) && (gameState[b] === playerConfig[1].value) && (gameState[c] === playerConfig[1].value)) {
        return playerConfig[1];
      }
    }
  
    return null;
  }
  export default getPlayerWon;