export function Monsters(playerData) {

    const monsterList = [
        { name: 'Snake', src: 'src/images/monsters/Snake.png', level: Math.round(1 + Math.random() * 4), damage: 1, totalHP: 2, exp: 2, minLevel: 1, maxLevel: 9, },
        { name: 'Slime', src: 'src/images/monsters/slime.png', level: Math.round(1 + Math.random() * 4), damage: .8, totalHP: 5, exp: 3, minLevel: 1, maxLevel: 9, },
        { name: 'Bully Wug', src: 'src/images/monsters/Lancer_Bullywug.png', level: Math.round(2 + Math.random() * 5), damage: 1, totalHP: 4, exp: 5, minLevel: 1, maxLevel: 10, },
        { name: 'Kobold', src: 'src/images/monsters/Kobold.png', level: Math.round(3 + Math.random() * 4), damage: .9, totalHP: 6, exp: 6, minLevel: 3, maxLevel: 12, },
        { name: 'Goblin', src: 'src/images/monsters/Goblin.png', level: Math.round(3 + Math.random() * 6), damage: 1.2, totalHP: 7, exp: 7, minLevel: 3, maxLevel: 12, },
        { name: 'Gnoll', src: 'src/images/monsters/Gnoll.png', level: Math.round(5 + Math.random() * 4), damage: .9, totalHP: 10, exp: 7, minLevel: 3, maxLevel: 12, },
        { name: 'HellHound', src: 'src/images/monsters/Hellhound.png', level: Math.round(6 + Math.random() * 6), damage: 2, totalHP: 4, exp: 9, minLevel: 5, maxLevel: 15, },
        { name: 'Ghoul', src: 'src/images/monsters/Ghoul.png', level: Math.round(8 + Math.random() * 8), damage: 3.7, totalHP: 16, exp: 14, minLevel: 7, maxLevel: 18, },
        { name: 'Minotaur', src: 'src/images/monsters/Minotaur.png', level: Math.round(10 + Math.random() * 12), damage: 7.5, totalHP: 20, exp: 17, minLevel: 9, maxLevel: 48, },
        { name: 'Shadow', src: 'src/images/monsters/Shadow.png', level: Math.round(12 + Math.random() * 28), damage: 5.7, totalHP: 25, exp: 22, minLevel: 10, maxLevel: 82, },
        { name: 'Ogre', src: 'src/images/monsters/Ogre.png', level: Math.round(20 + Math.random() * 32), damage: 9, totalHP: 42, exp: 40, minLevel: 16, maxLevel: 92, },
        { name: 'Hydra', src: 'src/images/monsters/Hydra.png', level: Math.round(52 + Math.random() * 37), damage: 12.7, totalHP: 36, exp: 72, minLevel: 42, maxLevel: 116, },
    ]

    const monsterListAvaible = monsterList.filter(monster => {
        if (monster.minLevel <= playerData.level && monster.maxLevel >= playerData.level) {
            monster.damage = Math.round(monster.damage * monster.level * (0.8 + (Math.round(Math.random() * 10)/20)))
            monster.totalHP = Math.round((monster.totalHP * monster.level) * (0.8 + (Math.round(Math.random() * 10)/20)));
            monster.exp = Math.round((monster.exp * monster.level))
            return monster;
        }
    })

    return monsterListAvaible;
}