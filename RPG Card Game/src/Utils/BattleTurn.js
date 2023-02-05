
export function BattleTurn(playerAttack, monsterAttack, currentHp, setCurrentHp,
    monsterCurrentHP, setMonsterCurrentHP, setPlayerData, playerData, monster, gear) {

    playerAttack = Math.round(playerAttack);
    let defense = 0;

    if (gear.length > 0) {
        gear.reduce((_, current) => {
            current.defense === undefined ? current.defense = 0 : null;
            return defense += current.defense;
        }, 0)
    }

    setMonsterCurrentHP(monsterCurrentHP - playerAttack);

    if (playerAttack > monsterCurrentHP) {
        setMonsterCurrentHP(0);

        const newPlayerData = playerData
        newPlayerData.exp += monster.exp
        setPlayerData(newPlayerData);

    } else {
        setCurrentHp(currentHp - Math.max(monsterAttack - defense, 0));
        if (monsterAttack > (currentHp + defense) && monsterCurrentHP > 0) setCurrentHp(0);
    };





}