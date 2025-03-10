import ChangePlayerScore from "./ChangePlayerScore";
import React from "react";


interface PlayerProps {
    playerData: PlayerData;
    onSaveRemovePlayer: (playerId: number) => void;
    onChangSubstractPlayerScore: (playerId: number, playerScore: number) => void;
    onChangAddPlayerScore: (playerId: number, playerScore: number) => void;
}

const Player = (playerProps: PlayerProps) => {

    const addPlayerScoreHandler = (playerScore: number) => {
        playerProps.onChangAddPlayerScore(playerProps.playerData.id, playerScore)
    }

    const substractPlayerScoreHandler = (playerScore: number) => {
        playerProps.onChangSubstractPlayerScore(playerProps.playerData.id, playerScore)
    }

    const onSaveRemovePlayerHandler = () => {
        playerProps.onSaveRemovePlayer(playerProps.playerData.id)
    }

    return (
        <ul className="mt-2 flex border-solid border-white border-2">
            <li className="w-1/6 text-left ml-2">{playerProps.playerData.name}</li>
            <li className="w-1/5">{playerProps.playerData.score}</li>
            <li className="w-1/3"><ChangePlayerScore onAddChangePlayerScore={addPlayerScoreHandler}
                                                    onSubstractChangePlayerScore={substractPlayerScoreHandler}/></li>
            <li className="w-1/3 text-right mr-2">
                <button onClick={onSaveRemovePlayerHandler} type="button" className="bg-red-700 rounded font-bold py-2 px-2">Remove
                </button>
            </li>
        </ul>
    )
}

export type PlayerData = {
    id: number,
    name: string
    score: number
}

export default Player
