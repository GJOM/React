import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { LoginScreen } from './Components/LoginScreen';
import { MonsterCard } from './Components/MonsterCard';
import { PlayerCard } from './Components/Player/PlayerCard'
import { AfterBattle } from './Components/AfterBattleComponents/AfterBattle';
import BattleContext from './Contexts/BattleContext';

function App() {

  const [name, setName] = useState('');
  const [playerAttack, setPlayerAttack] = useState(0);
  const [monsterAttack, setMonsterAttack] = useState(0);
  const [monster, setMonster] = useState({
    name: '',
    src: '',
    level: 0,
    damage: 0,
    totalHP: 0
  })
  const [playerData, setPlayerData] = useState({
    level: 1,
    exp: 0,
    expLevelUp: 5,
    totalHp: 10,
    totalMp: 20,
    gold: 0,
    str: 2,
    des: 3,
    int: 5,
    weapon: 'Commom Staff',
    armor: 'Blue Robe',
    ring: 'Bronze Ring'
  })
  const [newMonster, setNewMonster] = useState(true)
  const [monsterCurrentHP, setMonsterCurrentHP] = useState(0);
  const [currentHp, setCurrentHp] = useState(playerData.totalHp);
  const [currentMp, setCurrentMp] = useState(playerData.totalMp);

  const contextValue = useMemo(() => ({
    playerAttack, setPlayerAttack,
    monsterAttack, setMonsterAttack,
    currentHp, setCurrentHp,
    currentMp, setCurrentMp,
    playerData, setPlayerData,
    monsterCurrentHP, setMonsterCurrentHP,
    monster, setMonster,
    newMonster, setNewMonster,

  }), [playerData, currentHp, monster, monsterCurrentHP, playerAttack, monsterAttack, playerAttack, monsterAttack, newMonster])



  return (
    <>
      {!name ? <LoginScreen setName={setName} />
        :
        <BattleContext.Provider value={contextValue}>
          <div className='game-run'>
            <PlayerCard playerName={name} />
            {monsterCurrentHP <= 0 || currentHp <= 0 ? <AfterBattle/> : null}
            <MonsterCard />
          </div>
        </BattleContext.Provider>}
    </>
  )
}

export default App
