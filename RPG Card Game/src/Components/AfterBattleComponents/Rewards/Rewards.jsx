import { useContext } from "react"
import BattleContext from "../../../Contexts/BattleContext";
import PlayerInitialStats from "../../../Utils/PlayerInitialStats";

export function Rewards() {

    const { newMonster, setNewMonster } = useContext(BattleContext);

    const onMoveOn = () => {
        setNewMonster(true)
        console.log(PlayerInitialStats)
    }


    return (
        <>
            <div className="rewards-box">
                <h2>Loots</h2>
                <span className="gold-loot">gold earned</span>
                <span>possible items</span>
                <span>possible items</span>
                <span>possible items</span>
            </div>
            <div>
                <button onClick={onMoveOn}>Move on</button>
            </div>
        </>
    )
}