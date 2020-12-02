import {React, useState} from 'react'
import {Link} from 'react-router-dom'

import './tela_cadastro.css'

function Cadastro(){

    const [nomePizzaria, setNomePizzaria] = useState('')
    const [diaria, setDiaria] = useState('')

    function handleSubmit(event){
        event.preventDefault()

        const regexValidaInput = RegExp(/^[,.]/g)
         
        if(regexValidaInput.test(nomePizzaria)){
            
            return alert('Deu certo')
        }

        if(regexValidaInput.test(diaria) ){
           
            return  alert('Deu certo')
        } 

            document.getElementById('nomePizzaria').value='';
            document.getElementById('diaria').value='';

        }


        return (
            <form className="form" onSubmit={handleSubmit} autoComplete={"false"}>
                <label htmlFor= "NomePizzaria">Nome da pizzaria</label>
                    <input 
                        id="nomePizzaria" 
                        value={nomePizzaria} 
                        onChange={event => setNomePizzaria(event.target.value)}
                        maxLength={250}
                        autoComplete={false}
                        autoFocus={true}
                        inputMode="text" 
                    />
    
                <label htmlFor= "NomePizzaria">Diária</label>
                    <input 
                        id="diaria" 
                        value={diaria} 
                        onChange={event => setDiaria(event.target.value)}
                        maxLength={10}
                        autoComplete={false}
                        autoFocus={true}
                        inputMode="numeric" 
                    />
                <button   
                    className="submit" 
                    type="submit"
                >
                 Salvar
                </button>
            </form>  
        )

    }

    



export default Cadastro