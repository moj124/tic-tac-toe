import Player from "./player"

interface GameState {
    board: number[],
    currentPlayer: Player,
    winner: Player | null,
    reset: boolean,
}

export default GameState;