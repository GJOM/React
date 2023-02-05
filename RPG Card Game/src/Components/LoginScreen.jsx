import { useState } from "react";

export function LoginScreen({setName}) {

    const [value, setValue] = useState('');

  

    return (
        <>
            <label htmlFor="name">Nome do Personagem:</label>
            <input type="text" id="name" value={value}
                onChange={({ target }) => setValue(target.value)} />
            <button onClick={() => setName(value)}>Ok</button>
        </>
    )
}