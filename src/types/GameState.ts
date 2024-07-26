import Player from "./Player";

export default interface GameState {
    board: number[],
    currentPlayer: Player,
    winner: Player | null,
    isDraw: boolean,
}