import { useContext, useEffect } from "react";
import BattleContext from "../../../Contexts/BattleContext";
import { BattleTurn } from "../../../Utils/BattleTurn";

export function AttackButtons({gear}) {

    const { playerAttack, monsterAttack, currentHp, playerData, setPlayerAttack,
        setCurrentHp, monsterCurrentHP, setMonsterCurrentHP, monster,setPlayerData, setMonsterAttack } = useContext(BattleContext)

    const onAttack = ({ target }) => {
        setTimeout(() => {

            const weapon = gear.find((item) => {
                if (item.type === 'Weapon') {
                    return item
                }
            })

            if (target.id === 'default-attack') {
                const critical = Math.random()
                const random = Math.random()*.5

                const atkDamage = playerData.int * (.8 + random) * weapon.damage

                setPlayerAttack(atkDamage)

                if (critical >= 0.98) {
                    setPlayerAttack(2 * atkDamage);
                }

            }

        const monsterDamage = Math.round(monster.damage / Math.ceil(Math.random() * 4));

        const monsterCritical = Math.random();

        monsterCritical > 0.98 ? setMonsterAttack(monsterDamage * 2) : setMonsterAttack(monsterDamage);


        }, 1500);
    }

    useEffect(()=>{
        BattleTurn(playerAttack, monsterAttack, currentHp, setCurrentHp, monsterCurrentHP,
             setMonsterCurrentHP, setPlayerData, playerData,monster, gear);
    },[playerAttack])

    return (
        <>
            <button id="default-attack"
                onClick={onAttack} disabled={currentHp <= 0 || monsterCurrentHP <= 0}>Atacar</button>
        </>
    )
}