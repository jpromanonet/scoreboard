import {ChangeEvent, FormEvent, useState} from "react";
import {ArithmeticSign} from "@/components/ChangePlayerScore";

interface PlayerScoreModalProps {
    onSavePlayerScore: (action: number) => void;
    onCancel: () => void;
    arithmeticSign: ArithmeticSign;
}

const PlayerScoreModal = (playerScoreModalProps: PlayerScoreModalProps) => {

    const [enteredPlayerScore, setPlayerScore] = useState('')

    const playerScoreChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerScore(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const playerScore: number = Number(enteredPlayerScore)

        playerScoreModalProps.onSavePlayerScore(playerScore)

        setPlayerScore('')

    }

    return (
        <form onSubmit={submitHandler}>
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-gray-600 m-auto p-8">
                    <div className="flex flex-col items-center">
                        <label>{playerScoreModalProps.arithmeticSign.toLocaleString()}</label>
                        <div>
                            <input type="number" value={enteredPlayerScore} step="1" onChange={playerScoreChangeHandler}
                                   className="text-black ml-2"/>
                        </div>
                    </div>
                    <div>
                        <button onClick={playerScoreModalProps.onCancel} type="button"
                                className="mr-20 bg-yellow-400 mt-2 rounded">Cancel
                        </button>
                        <button type="submit" className="bg-green-600 rounded mt-4">Update</button>
                    </div>
                </div>
            </dialog>
        </form>
    )
}

export default PlayerScoreModal
