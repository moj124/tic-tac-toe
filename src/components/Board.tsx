import { useCallback, useState } from "react";
import GameState from '../types/GameState';
import getPlayerWon from "../utils/getPlayerWon";
import playerConfig from "../utils/playerConfig";
import Button from "./Button";

const BOARD_SIZE = 9;

const initialGameState: GameState = {
  board: Array(BOARD_SIZE).fill(0),
  currentPlayer: playerConfig[0],
  winner: null,
  isDraw: false,
};

export default function Board() {
  const [gameState, setGameState] = useState(initialGameState);

  const handleClick = (index: number) => {
    const {board, currentPlayer} = gameState;

    const newBoard = [...board];
    newBoard[index] = currentPlayer.value;

    const newGameState = {
      ...gameState,
      board: newBoard,
      currentPlayer: currentPlayer.value === 1 ? playerConfig[1] : playerConfig[0], 
    }

    
    const getWinner = getPlayerWon(newGameState.board, playerConfig);
    if( getWinner ) {
      setGameState({...newGameState, winner: getWinner});
      return;
    }
    
    const nonZeroCells = newGameState.board.filter((elem) => elem !== 0).length;
    const reachedDraw = nonZeroCells === BOARD_SIZE;
    if (reachedDraw) {
      setGameState({...newGameState, isDraw: true});
      return;
    }

    setGameState(newGameState);
  };

  const resetGame = useCallback(() => {
    setGameState(initialGameState);
  }, []);
  
  return (
    <>
      <main>
        <div className="flex flex-col gap-6 mb-4">
          {(!gameState.winner && !gameState.isDraw) && (<h2 className='text-3xl w-fit font-bold text-gray-200'>
            {`Player ${gameState.currentPlayer.text}\`s turn: ${gameState.currentPlayer.symbol}`}
          </h2>)}
          {gameState.winner && (
            <div className="flex flex-col gap-6">
              <h2 
              className='
                text-2xl
                text-white
                font-bold
                w-fit
                m-auto
                '
              >
                Game is over {`Player ${gameState.winner.text} won!`}
              </h2>
              <button 
                onClick={resetGame}
                className='
                bg-dark-border
                text-white
                  w-full
                  m-auto
                  sm:w-8/12
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
          {gameState.isDraw && (
            <div className="flex flex-col gap-6">
              <h2
                className='
                  text-xl
                  w-fit
                  text-gray-200
                  font-bold
                '
              >
                Game is a draw!
              </h2>
              <button 
                onClick={resetGame}
                className='
                bg-dark-blue
                text-white
                  w-full
                  m-auto
                  sm:w-8/12
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
        <div className='grid grid-cols-3 w-full size-auto bg-dark-border rounded p-4'>
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
      </main>
    </>
  )
}