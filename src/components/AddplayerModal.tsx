import {ChangeEvent, FormEvent, useState} from "react";
import {PlayerData} from "./Player";

interface AddPlayerModalProps {
    onSaveAddPlayer: (action: PlayerData) => void;
    onCancel: () => void;
}

const AddPlayerModal = (addPlayerModalProps: AddPlayerModalProps, numberOfPlayers: number) => {

    const [enteredPlayerName, setPlayerData] = useState('')

    const addNewPlayerChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerData(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const min = 3;
        const max = 1000;
        const randomNumber =
            Math.floor(Math.random() * (max - min + 1)) + min;

        const playerData: PlayerData = {
            id: randomNumber,
            name: enteredPlayerName,
            score: 0
        }

        addPlayerModalProps.onSaveAddPlayer(playerData)

    }

    return (
        <form onSubmit={submitHandler}>
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-gray-600 m-auto p-8">
                    <div className="flex flex-col items-center">
                        <div>
                            <label>Name</label>
                            <input type="text" pattern="^[^0-9]+$" value={enteredPlayerName}
                                   onChange={addNewPlayerChangeHandler} className="ml-4 text-black mt-4"/>
                        </div>
                    </div>
                    <div>
                        <button onClick={addPlayerModalProps.onCancel} type="button"
                                className="mr-20 bg-yellow-400 mt-2 rounded">Cancel
                        </button>
                        <button type="submit" className="bg-green-600 rounded">Add</button>
                    </div>
                </div>
            </dialog>
        </form>
    )
}
export default AddPlayerModal

