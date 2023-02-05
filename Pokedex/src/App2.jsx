import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { Pokemon } from './Pokemon';


function App2() {
  const [pokedex, setPokedex] = useState([]);
  const [sortedPokedex, setSortedPokedex] = useState(null);


  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokedex(response.data.results);

      })
  }, [pokedex])

  const handleSortByName = () => {
    if (!sortedPokedex) {
      setSortedPokedex(pokedex.sort((a, b) => { if (a.name < b.name) return -1 }))

    } else {
      setSortedPokedex(null);

    }
  }


  return (
    <>
      <div>
        <span>Ordernar por: </span>
        <button onClick={handleSortByName}>{!sortedPokedex ? 'Alfabético' : 'Desordenar'}</button>
        <button id='b' onClick={handleSortByName}>Ordenar por Experiencia</button>
      </div>
      {!sortedPokedex ? pokedex.map((elem, ind) => (
        <Pokemon key={ind} data={elem} />
      ))
        :
        sortedPokedex?.map((elem, ind) => (
          <Pokemon key={`sorted${ind}`} data={elem} />
        ))}


    </>
  )
}
export default App2


