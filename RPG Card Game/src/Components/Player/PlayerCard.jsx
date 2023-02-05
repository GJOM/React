import { useContext, useEffect, useState } from "react"
import { Backpack } from "./PlayerComponents/Backpack";
import { Items } from "../../Utils/Items";
import BattleContext from "../../Contexts/BattleContext";
import { AttackButtons } from "./PlayerComponents/AttackButtons";
import { EquippedItems } from "./PlayerComponents/EquippedItems";
import { Leveling } from "../../Utils/Leveling";

export function PlayerCard({ playerName }) {

    const { playerData, setPlayerData, currentHp, currentMp } = useContext(BattleContext)
    const [backpackOpen, setBackpackOpen] = useState(false);
    const [gear, setGear] = useState([]);


    useEffect(() => {

        setGear(Items().filter((item) => {
            if (item.name === playerData.weapon || item.name === playerData.armor || item.name === playerData.ring) {
                return item
            }
        }))
    }, [playerData.weapon, playerData.armor, playerData.ring])


    useEffect(() => {

        setPlayerData(Leveling(playerData));

    }, [playerData.exp])



    return (
        <>
            <div className="player-card-wrapper">
                <div className="player-infos">
                    <span>{playerName}</span>
                    <span>{`Lvl: ${playerData.level}`}</span>
                </div>
                <img src="src\images\mage.png" className="player-image" />
                <div className="player-health-wrapper">
                    <span className="Hp">HP: {Math.round(currentHp)}/{Math.round(playerData.totalHp)}</span>
                    <span className="Hp">MP: {Math.round(currentMp)}/{Math.round(playerData.totalMp)}</span>
                </div>
                <div className="valuables-wrapper">
                    <span>{`Gold: ${playerData.gold}`}</span>
                    <button className="backpack" onClick={() => setBackpackOpen(!backpackOpen)}>
                        <img src="src\images\backpack.png" alt="" />
                    </button>
                </div>
                {!backpackOpen ? <>
                    <div className="player-force">
                        <div className="main-stats">
                            <span>{`STR: ${Math.round(playerData.str)}`}</span>
                            <span>{`DES: ${Math.round(playerData.des)}`}</span>
                            <span>{`INT: ${Math.round(playerData.int)}`}</span>
                        </div>
                        <div className="items">
                            <EquippedItems gear={gear} />
                        </div>
                    </div>
                    <div>
                        <AttackButtons gear={gear} />
                    </div>
                </>

                    : <Backpack />}
            </div>
        </>
    )

}