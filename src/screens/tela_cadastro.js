import {React, useState} from 'react'
import styled from 'styled-components';
//import {Link} from 'react-router-dom'

//import './tela_cadastro.css'

   const Input = styled.input`
        width: 100px;
        height: 30px;
        background-color: transparent;
        border-bottom: solid 2px white;
        margin-bottom: 20px;
    `
    const ContainerFormulario = styled.div`
        .container-formulario{
            display: flex;
            flex-direction: column;
            align-items: center;
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
                <button   
                    className="submit-formulario" 
                    type="submit"
                    >
                    SALVAR
                </button>
                </div>
                </ContainerFormulario>
                
            </form>  
        )

}



export default Cadastro