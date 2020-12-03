import {React, useState} from 'react'
import styled from 'styled-components';
//import {Link} from 'react-router-dom'

import './tela_cadastro.css'

   const Input = styled.input`
        width: 70%;
        height: 30px;
        background-color: transparent;
        border-bottom: solid 2px rgba(255,255,255,0.4);
        margin-bottom: 20px;
        &:focus {
            outline: none;
          }
    `
    const ContainerFormulario = styled.div`
        .container-formulario{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `

    const Submit = styled.button`
        color: white;
        background-color: black;
        padding: 10px;
        
        &:focus {
            outline: none;
            border: solid 1px rgba(255,255,255,0.6)
          }
    `


function Cadastro(){

 
    const [nomePizzaria, setNomePizzaria] = useState('')
    const [diaria, setDiaria] = useState('')

    function handleSubmit(event){
        event.preventDefault()

        const regexValidaInput = RegExp(/^[,.]/g)
         
        if(regexValidaInput.test(nomePizzaria)){
            alert('Deu certo')
            
        }

        if(regexValidaInput.test(diaria) ){
            alert('Deu certo')
            
        } 

        document.getElementById('nomePizzaria').value='';
        document.getElementById('diaria').value='';

    }


        return (
            <form className="container-cadastro" onSubmit={handleSubmit} autoComplete='off'>
                <ContainerFormulario>
                <div className= 'container-formulario'>
                <label htmlFor= "NomePizzaria">Nome da pizzaria</label>
                    <Input
                    className='input-form'
                    id="nomePizzaria" 
                    value={nomePizzaria} 
                    onChange={event => setNomePizzaria(event.target.value)}
                    maxLength={100}
                    autoFocus={true}
                    inputMode="text"
                    >
                    </Input>
                    
    
                <label htmlFor= "NomePizzaria">Diária</label>
                    <Input
                        className='input-form'
                        id="diaria" 
                        value={diaria} 
                        onChange={event => setDiaria(event.target.value)}
                        maxLength={10}
                        autoFocus={true}
                        inputMode="numeric" 
                    >
                    
                    </Input>
                <Submit   
                    className="submit-formulario" 
                    type="submit"
                    >
                    SALVAR
                </Submit>
                </div>
                </ContainerFormulario>
                
            </form>  
        )

}



export default Cadastro