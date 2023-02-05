import { useContext, useEffect, useState } from "react"
import { Monsters } from "../Utils/Monsters"
import BattleContext from "../Contexts/BattleContext"

export function MonsterCard() {


    const { monster, setMonster, monsterCurrentHP, setMonsterCurrentHP,
        setCurrentMp, playerData, setCurrentHp, newMonster, setNewMonster } = useContext(BattleContext)


    useEffect(() => {
        setNewMonster(false);
        const monsterSpawned = Math.round(Math.random() * (Monsters(playerData).length -1));
        setMonster(
            Monsters(playerData).find((monster, ind) => {
                if (ind === monsterSpawned) {
                    setMonsterCurrentHP(monster.totalHP);
                    return monster
                }
            })
        );

        setCurrentHp(playerData.totalHp)
        setCurrentMp(playerData.totalMp)

    }, [newMonster])


    return (
        <>
            <div className='monster-card-wrapper'>
                <div className="monster-infos">
                    <span>{monster.name}</span>
                    <span>Lvl: {monster.level}</span>
                </div>
                <img src={monster.src} alt="monster" className="monster-image" />
                <span>{monsterCurrentHP}/{monster.totalHP}</span>
            </div>
        </>
    )


}