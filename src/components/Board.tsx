import { useState } from "react";
import GameState from "../types/GameState";
import getPlayerWon from "../utils/getPlayerWon";
import playerConfig from "../utils/playerConfig";
import Button from "./Button";

const initialGameState: GameState = {
  board: Array(9).fill(0),
  currentPlayer: playerConfig[0],
  winner: null,
  reset: false,
};

export default function Board() {
  const [gameState, setGameState] = useState(initialGameState);

  const handleClick = (index: number) => {
    const {board, currentPlayer, reset} = gameState;

    const newBoard = [...board];
    newBoard[index] = currentPlayer.value;

    const newGameState = {
      ...gameState,
      board: newBoard,
      currentPlayer: currentPlayer.value === 1 ? playerConfig[1] : playerConfig[0], 
    }

    const getWinner = getPlayerWon(newGameState.board, playerConfig);
    if( getWinner ) {
      setGameState({...newGameState, winner: getWinner, reset});
      return;
    }

    setGameState(newGameState);
  };

  const resetGame = () => {
    setGameState(initialGameState);
  }
  
  return (
    <>
      <div className="flex flex-col gap-6 mb-4">
        <h1 className='text-3xl w-fit font-extrabold'>
          {`Player ${gameState.currentPlayer.text}\`s turn: ${gameState.currentPlayer.symbol}`}
        </h1>
        {gameState.winner && (
          <div className="flex flex-col gap-6">
            <h2 className='text-xl w-fit font-bold'>Game is over {`Player ${gameState.winner.text} won!`}</h2>
            <button 
              onClick={resetGame}
              className='
              bg-white
              text-black
              border-gray-100
                border-2
                border-solid
                text-md
                font-medium
                rounded
                p-3
              '
            >
              Reset Game
            </button>
          </div>
        )}
      </div>
      <div className='grid grid-cols-3 w-fit size-auto bg-gray-200 rounded p-4'>
        {gameState.board.map((cell, index) =>
          <Button 
              key={index}
              index={index}
              value={cell}
              hasWon={!!gameState.winner}
              onClick={handleClick}
          />
        )}
      </div>
    </>
  )
}