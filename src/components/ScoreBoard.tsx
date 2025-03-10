'use client';

import {PlayerData} from "@/components/Player";
import AddPlayer from "@/components/AddPlayer";
import ScoreCard from "@/components/ScoreCard";

import React, {useEffect, useState} from 'react';


const joakim: PlayerData = {
    id: 1,
    name: "Default name",
    score: 0
}

const birgitte: PlayerData = {
    id: 2,
    name: "Default name",
    score: 0
}


const ScoreBoard = () => {

    const initPlayers =
        [joakim, birgitte]

    const [players, setPlayers] = useState<PlayerData[]>([])


    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {

            const value = localStorage.getItem('players')


            if (value === null || value === 'undefined') {
                localStorage.setItem('players', JSON.stringify(initPlayers))
                setPlayers(initPlayers)
            } else {
                const valuePlayer: PlayerData[] = JSON.parse(value)
                setPlayers(valuePlayer)
            }
        }
    }, [])

    const addPlayerHandler = (player: PlayerData) => {
        if (typeof window !== 'undefined' && window.localStorage) {

            const value = localStorage.getItem('players')

            if (value !== null || value === 'undefined') {
                const valuePlayer: PlayerData[] = JSON.parse(value)
                valuePlayer.push(player)

                localStorage.setItem('players', JSON.stringify(valuePlayer))

                setPlayers(valuePlayer)
            }
        }
    }

    const removePlayerHandler = (playerId: number) => {
        const value = localStorage.getItem('players')

        if (value !== null || value === 'undefined') {
            const valuePlayer: PlayerData[] = JSON.parse(value)

            const index = valuePlayer.findIndex(playerdata => playerdata.id === playerId);

            if (index !== -1) {
                const newArray = [...valuePlayer.slice(0, index), ...valuePlayer.slice(index + 1)];

                localStorage.setItem('players', JSON.stringify(newArray))
                setPlayers(newArray)

            }

        }
    }

    const addPlayerScoreHandler = (playerId: number, playerScore: number) => {

        const value = localStorage.getItem('players')

        if (value !== null || value === 'undefined') {
            const valuePlayer: PlayerData[] = JSON.parse(value)

            const index = valuePlayer.findIndex(playerdata => playerdata.id === playerId);

            if (index !== -1) {
                const player = valuePlayer.findLast(playerdata => playerdata.id === playerId);
                if (player !== null && player !== undefined) {
                    player.score += playerScore

                    const newArray = [...valuePlayer.slice(0, index), ...valuePlayer.slice(index + 1)];
                    newArray.push(player)

                    localStorage.setItem('players', JSON.stringify(newArray))
                    setPlayers(newArray)
                }


            }

        }

    }

    const substractPlayerScoreHandler = (playerId: number, playerScore: number) => {
        const value = localStorage.getItem('players')

        if (value !== null || value === 'undefined') {
            const valuePlayer: PlayerData[] = JSON.parse(value)

            const index = valuePlayer.findIndex(playerdata => playerdata.id === playerId);

            if (index !== -1) {
                const player = valuePlayer.findLast(playerdata => playerdata.id === playerId);
                if (player !== null && player !== undefined) {
                    player.score -= playerScore

                    const newArray = [...valuePlayer.slice(0, index), ...valuePlayer.slice(index + 1)];
                    newArray.push(player)

                    localStorage.setItem('players', JSON.stringify(newArray))
                    setPlayers(newArray)
                }


            }

        }
    }


    return (
        <div className="text-center">
            <h1 className="text-white">Tabla de puntos</h1>
            <hr></hr>            
            <p>El que queda primero en una partida gana 3 puntos</p>
            <p>El que queda segundo gana 2 puntos</p>
            <p>El que queda tercero gana 1 punto</p>
            <ScoreCard players={players}
                       onChangRemovePlayer={removePlayerHandler}
                       onChangSubstractPlayerScore={substractPlayerScoreHandler}
                       onChangAddPlayerScore={addPlayerScoreHandler}/>
            <AddPlayer onChangAddPlayer={addPlayerHandler}/>
        </div>
    )
}

export default ScoreBoard
