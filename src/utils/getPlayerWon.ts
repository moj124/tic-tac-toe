import Player from "../types/player";

const getPlayerWon = (gameState: number[], playerConfig: Record<number, Player>) => {
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
      
      if ( (gameState[a] === 1) && (gameState[b] === 1) && (gameState[c] === 1)){
        return playerConfig[1];
      }
  
      if ( (gameState[a] === -1) && (gameState[b] === -1) && (gameState[c] === -1)) {
        return playerConfig[2];
      }
    }
  
    return null;
  }
  export default getPlayerWon;