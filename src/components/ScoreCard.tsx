import {PlayerData} from "./Player";
import PlayerList from "./PlayerList";


export interface ScoreCardProps {
    onChangRemovePlayer: (playerId: number) => void;
    onChangSubstractPlayerScore: (playerId: number, playerScore: number) => void;
    onChangAddPlayerScore: (playerId: number, playerScore: number) => void;
    players: PlayerData[];
}

const ScoreCard = (players: ScoreCardProps) => {


    return (
        <PlayerList players={players.players}
                    onChangRemovePlayer={players.onChangRemovePlayer}
                    onChangSubstractPlayerScore={players.onChangSubstractPlayerScore}
                    onChangAddPlayerScore={players.onChangAddPlayerScore}
        />
    )
}

export default ScoreCard
