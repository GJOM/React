export function Leveling(playerData){


    const newPlayerData = playerData;
    if (playerData.exp >= playerData.expLevelUp) {
        
        newPlayerData.level = playerData.level + 1;
        newPlayerData.exp = Math.round(newPlayerData.exp - newPlayerData.expLevelUp);
        newPlayerData.expLevelUp = Math.round(newPlayerData.expLevelUp + 1.2);
        
        newPlayerData.totalHp = playerData.totalHp * 1.045;
        newPlayerData.totalMp = playerData.totalMp * 1.050;
        newPlayerData.int = playerData.int * 1.08;
        newPlayerData.str = playerData.str * 1.05;
        newPlayerData.des = playerData.des * 1.06;
    }

    return newPlayerData;

}