import { useEffect, useState } from "react"
import axios from "axios";


export function Pokemon({ data }) {

    const [pokeData, setPokeData] = useState(null);

    useEffect(() => {
        axios
            .get(data.url)
            .then(response => setPokeData(response.data))
    }, [])


    if (!pokeData) {
        return <div>-</div>
    }

    return (
        <div>
            <img src={pokeData.sprites.front_default} alt="pokemon" />
            <span>{pokeData.name}</span>
            <span>{pokeData.base_experience}</span>
        </div>
    )

}