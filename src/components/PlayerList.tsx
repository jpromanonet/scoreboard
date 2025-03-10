import Player, {PlayerData} from "@/components/Player";

export interface PlayerProps {
    players: PlayerData[];
    onChangRemovePlayer: (playerId: number) => void;
    onChangSubstractPlayerScore: (playerId: number, playerScore: number) => void;
    onChangAddPlayerScore: (playerId: number, playerScore: number) => void;
}

const PlayerList = (playerProps: PlayerProps) => {

    const playersSortedByScore = playerProps.players.sort((a, b) => b.score - a.score)

    return (
        <div className="mt-10">
            {playersSortedByScore
                .map(player =>
                    <Player playerData={player} key={player.id}
                            onSaveRemovePlayer={playerProps.onChangRemovePlayer}
                            onChangSubstractPlayerScore={playerProps.onChangSubstractPlayerScore}
                            onChangAddPlayerScore={playerProps.onChangAddPlayerScore}
                    />
                )}
        </div>
    )
}

export default PlayerList
