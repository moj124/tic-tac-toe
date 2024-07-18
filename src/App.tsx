import { Fragment, useState } from 'react';
import ButtonList from './components/ButtonList';
import GameState from './types/GameState';
import getPlayerWon from './utils/getPlayerWon';

const playerConfig = {
  1: {
    symbol: 'X',
    text: '1',
    value: 1,
  },
  2: {
    symbol: 'O',
    text: '2',
    value: -1,
  }
};

const initialGameState: GameState = {
  board: Array(9).fill(0),
  currentPlayer: playerConfig[1],
  winner: null,
  reset: false,
};

export default function App() {
  const [gameState, setGameState] = useState(initialGameState);

  const handleClick = (index: number) => {
    setGameState(({board, currentPlayer, winner, reset}: GameState) => {
      if (winner) return {board, currentPlayer, winner, reset};

      const newBoard = [...board];
      newBoard[index] = currentPlayer.value;
  
      const newGameState = {
        ...gameState,
        board: newBoard,
        currentPlayer: currentPlayer.value === 1 ? playerConfig[2] : playerConfig[1], 
      }
  
      const getWinner = getPlayerWon(newBoard, playerConfig);
      if( getWinner ) {
        newGameState.winner = getWinner;
      }
      return newGameState;
    });
  };

  const resetGame = () => {
    setGameState(initialGameState);
  }
  
  return (
    <> 
      <h1 className='text-3xl w-fit font-extrabold'>
        {`Player ${gameState.currentPlayer.text}\`s turn: ${gameState.currentPlayer.symbol}`}
      </h1>
      <div className='grid grid-cols-3 size-96'>
        <ButtonList list={gameState.board} onClick={handleClick} />
      </div>
      {gameState.winner && (
        <Fragment>
          <h2 className='text-xl w-fit font-bold'>Game is over {`Player ${gameState.winner.text} won!`}</h2>
          <button 
            onClick={resetGame}
            className='
            bg-white
            text-black
            border-gray-100
              border-2
              border-solid
              text-xl
              font-medium
              rounded
              p-8
            '
          >
            Reset Game
          </button>
        </Fragment>
      )}
    </>
  )
}
