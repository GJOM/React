import { useContext } from "react"
import BattleContext from "../../../Contexts/BattleContext"
import PlayerInitalStats from "../../../Utils/PlayerInitialStats";

export function LoseGame() {

    const {setPlayerData, setNewMonster} = useContext(BattleContext);


    const onRestart = () => {
        console.log(PlayerInitalStats)
        setPlayerData(PlayerInitalStats)
        setNewMonster(true);
    }

    return (
        <>
            <div>
                <h2>Você Morreu!</h2>

                <button onClick={onRestart}>Restart</button>
            </div>
        </>
    )
}