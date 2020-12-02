import {React, useState} from 'react'
import {Link} from 'react-router-dom'

import './tela_cadastro.css'

function Cadastro(){

    const [nomePizzaria, setNomePizzaria] = useState('')


    return (
        <form className="form" onSubmit={()=> {return}} autoComplete={"false"}>
            <label htmlFor= "NomePizzaria">Noma da pizzaria</label>
                <input 
                    id="nomePizzaria" 
                    value={nomePizzaria} 
                    onChange={event => setPizzaria(event.target.value)}
                    maxLength={10}
                    autoComplete={false}
                    autoFocus={true}
                    inputMode="text" 
                />

            <label htmlFor= "NomePizzaria">Noma da pizzaria</label>
                <input 
                    id="diaria" 
                    value={diaria} 
                    onChange={event => setDiaria(event.target.value)}
                    maxLength={10}
                    autoComplete={false}
                    autoFocus={true}
                    inputMode="numeric" 
                />



        </form>  
    )
}


export default Cadastro