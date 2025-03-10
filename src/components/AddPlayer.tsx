import {useState} from "react";
import {PlayerData} from "./Player";
import AddPlayerModal from "@/components/AddplayerModal";

interface AddPlayerProps {
    onChangAddPlayer: (action: PlayerData) => void;
}


const AddPlayer = (addPlayerProps: AddPlayerProps) => {

    const saveAddPlayerHandler = (enteredScore: PlayerData) => {
        addPlayerProps.onChangAddPlayer(enteredScore)
        setIsEditing(false)
    }

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div>
            {!isEditing && <button onClick={startEditingHandler} type="button" className="cursor-pointer mt-10 bg-green-600 text-white rounded font-bold py-2 px-4">Add</button>}
            {isEditing && <AddPlayerModal onSaveAddPlayer={saveAddPlayerHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default AddPlayer
