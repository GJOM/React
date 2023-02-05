import { useContext } from "react";
import BattleContext from "../../Contexts/BattleContext";
import { LoseGame } from "./Rewards/LoseGame";
import { Rewards } from "./Rewards/Rewards";


export function AfterBattle() {

    const {currentHp, monsterCurrentHP} = useContext(BattleContext)

    return (
        <>
            <div className="after-battle-box">
                
                {monsterCurrentHP <= 0 ? <Rewards/> : currentHp <= 0 && <LoseGame/>}

                
            </div>
        </>
    )
}