import {React, useState} from 'react'
import styled from 'styled-components';
import Menu from '../components/Menu'

import db from '../db/db'
//import {Link} from 'react-router-dom'


   const Label = styled.label`
    font-size: 20px;
    font-weight:bold;
    color: white;
   `
   const Input = styled.input`
        width: 70%;
        height: 30px;
        background-color: transparent;
        border-bottom: solid 2px rgba(255,255,255,0.4);
        
        margin:15px 0 50px;
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
        width: 100px;
        font-weight:bold;
        &:focus {
            outline: none;
            background-color: rgba(0,0,0,0.6)
          }
    `

function Cadastro(){

    const [nomePizzaria, setNomePizzaria] = useState('')
    const [diaria, setDiaria] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        
        db.setStorage('estabelecimentoEscolhido', nomePizzaria)

        const regexValidaInput = RegExp(/^[,.]/g)
         
        if(regexValidaInput.test(nomePizzaria)){
            alert('Deu certo')
            
        }

        if(regexValidaInput.test(diaria) ){
            alert('Deu certo')
            
        } 

        document.getElementById('nomePizzaria').value='';
        document.getElementById('diaria').value='';

        if(db.getStorage('estabelecimentos')){
            let db_estabelecimentos = JSON.parse(db.getStorage('estabelecimentos'))
            db_estabelecimentos.push({estabelecimento:nomePizzaria, diaria:diaria})
            console.log(db_estabelecimentos)
            db.setStorage('estabelecimentos',JSON.stringify(db_estabelecimentos))
        }else {
            db.setStorage('estabelecimentos',JSON.stringify([{estabelecimento:nomePizzaria, diaria:diaria}]))
        }
        
    }

 
        return (
            <>
            <Menu />
            <form className="container-cadastro" onSubmit={handleSubmit} autoComplete='off'>
                <ContainerFormulario>
                <div className= 'container-formulario'>
                <Label htmlFor= "NomePizzaria">Nome do estabelecimento</Label>
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
                    
    
                <Label htmlFor= "diaria">Diária</Label>
                    <Input
                        className='input-form'
                        id="diaria" 
                        value={diaria} 
                        onChange={event => setDiaria(event.target.value)}
                        maxLength={10}
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
            </>
        )

}



export default Cadastro