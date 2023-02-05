import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [pokedex, setPokedex] = useState([]);
  const [sortedPokedex, setSortedPokedex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const pokemons = await response.json()
      try {


        const pokeData = await Promise.all(pokemons.results.map(async ({ name, url }) => {
          let pokeResponse = await fetch(url);
          let pokeDetails = await pokeResponse.json()

          return pokeDetails;
        }))

        setPokedex(pokeData);


      } catch (err) {
        console.log(err)
      }
    }
    (async () => fetchData(pokedex))()
  }, [sortedPokedex])

  const handleSort = ({ target }) => {
    if (target.id === 'name') {
      setSortedPokedex(pokedex.sort((a, b) => { if (a.name < b.name) return -1 }))

    } else if (target.id === 'exp') {
      setSortedPokedex(pokedex.sort((a, b) => { if (a.base_experience < b.base_experience) return -1 }))

    } else if (target.id === 'unorder') {
      setSortedPokedex(null);
    }

  }

  return (
    <div>
      <div className='button-box'>
        <span>Ordenar por:</span>
        <button id='name' onClick={handleSort}>Nome</button>
        <button id='exp' onClick={handleSort}>Experiência</button>
        <button id='unorder' onClick={handleSort}>Desordenar</button>
      </div>
      {!sortedPokedex ? pokedex.map(({ name, base_experience, sprites }, ind) => (
        <div className='pokeinfo' key={ind}>
          <img src={sprites.front_default} alt="pokemon"
            key={`image${ind}`} className='poke-image' />
          <span key={`name${ind}`} className='poke-name'>{name}</span>
          <span key={`exp${ind}`} className='poke-exp'>{`exp:${base_experience}`}</span>
        </div>
      )) :
        sortedPokedex.map(({ name, base_experience, sprites }, ind) => (
          <div className='pokeinfo' key={ind}>
            <img src={sprites.front_default} alt="pokemon"
              key={`image${ind}`} className='poke-image' />
            <span key={`name${ind}`} className='poke-name'>{name}</span>
            <span key={`exp${ind}`} className='poke-exp'>{base_experience}</span>
          </div>
        ))
      }
    </div>
  )
}

export default App