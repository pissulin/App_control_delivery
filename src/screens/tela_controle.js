import {React, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import styled from 'styled-components';

import './tela_controle.css'

import {FiArrowRightCircle} from 'react-icons/fi'
import db from '../db/db';

let entrega = []
let id = 0;


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

const Select = styled.select`
      width: 150px;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 10px;
      padding: 5px 5px 5px 10px ;
      margin: 10px 0 30px 0

`

function Controle () {
    //const data = new Date()
    //const dataNormal =  new Date(data.valueOf() - data.getTimezoneOffset() * 120000)
    //const dataAtual = `${data.getDate().toLocaleString('pt-BR',{timeZone:'America/Sao_Paulo'})}/${(data.getMonth()+1)}/${data.getFullYear()}` 

    const [numComanda, setNumComanda] = useState('')
    const [valorTaxa, setValorTaxa] = useState('')
    const [caixinha, setCaixinha] = useState('')
    const [estabelecimento, setEstabelecimento] = useState(db.getStorage('estabelecimentoEscolhido'))

    const pizzarias = JSON.parse(db.getStorage('estabelecimentos'))?JSON.parse(db.getStorage('estabelecimentos')): []
    const arrayPizzaria = []
    pizzarias.map(e=> arrayPizzaria.push(e.estabelecimento))
    

    function handleOption(e){
        setEstabelecimento(e.target.value)
        db.setStorage('estabelecimentoEscolhido', e.target.value)
    }

   function handleSubmit(event){
          
        const regexValidaInput = RegExp(/^[,.]/g)
         
        if(regexValidaInput.test(numComanda)){
            const ele = document.querySelectorAll('#alerta2')
            ele[0].classList.remove('hidden')
            return 
        }else{
            const ele = document.querySelectorAll('#alerta2')
            ele[0].classList.add('hidden')
        }

        if(regexValidaInput.test(valorTaxa) || regexValidaInput.test(caixinha)){
            const ele = document.querySelectorAll('#alerta2')
            ele[1].classList.remove('hidden')
            return 
        } else{
            const ele = document.querySelectorAll('#alerta2')
            ele[1].classList.add('hidden')
        }
    
        if(numComanda === '' || valorTaxa === '' ){
            const ele = document.querySelectorAll('#alerta')
            ele[0].classList.remove('hidden')
            ele[1].classList.remove('hidden')
            return 
        }else{
            const ele = document.querySelectorAll('#alerta')
            ele[0].classList.add('hidden')
            ele[1].classList.add('hidden')
                       

            if(localStorage.getItem('entregas')){
               let arrayEntregas= JSON.parse(localStorage['entregas'])
               
               entrega = []
               
               arrayEntregas.map(e=> {
                   entrega.push(e)
                   
                })
                if(entrega.length === 0){
                    id += entrega.length
                }else{
                    id = 0
                    id = entrega.length + 1
                }
                
                entrega.push({"id":id, 'estabelecimento': estabelecimento, "numComanda": numComanda, "valorTaxa": valorTaxa.replace(/,/g, "."), "caixinha": caixinha.replace(/,/g, ".") || 0})
                localStorage.removeItem('entregas')
                localStorage.setItem('entregas', JSON.stringify(entrega))
                
            }
            else{
                id++
                entrega.push({"id":id, 'estabelecimento': estabelecimento, "numComanda": numComanda, "valorTaxa": valorTaxa.replace(/,/g, "."), "caixinha": caixinha.replace(/,/g, ".") || 0})
                localStorage.setItem('entregas', JSON.stringify(entrega))
                
            }
            
            setNumComanda('')
            setValorTaxa('')
            setCaixinha('')
            
            document.getElementById('numComanda').value='';
            document.getElementById('taxa').value='';
            document.getElementById('caixinha').value= '';
           
        }
        

    }

    return (
        <>
        <Menu />
        <div className='containerControle'>
            
            
            <ContainerFormulario>
            <form className="form" onSubmit={handleSubmit} autoComplete="off">
            
            <div className='formulario'>

            <Label htmlFor= 'nomeEstabelecimento'>Estabelecimento</Label>    
            <Select id ='nomeEstabelecimento' value={estabelecimento} onChange={handleOption}>
                <option value= {estabelecimento}>{estabelecimento}</option>
                {arrayPizzaria.map(e =><option value= {e}>{e}</option>)}
            </Select>

            <Label htmlFor= "numComanda">Número da comanda</Label>
            <Input 
                id="numComanda" 
                value={numComanda} 
                onChange={event => setNumComanda(event.target.value)}
                maxLength={10}
                autoComplete="off"
                autoFocus={true}
                inputMode="numeric" >
    
            </Input>
                <div id="alerta" className="hidden">Campo obrigatório</div>
                <div id="alerta2" className="hidden">Não é permitido virgula ou ponto antes dos numeros</div>

                        <div className="inputValores">
                            <Label htmlFor= "taxa">Valor da taxa</Label>
                            <Input 
                                id="taxa" 
                                value={valorTaxa}
                                onChange={event => setValorTaxa(event.target.value)}
                                maxLength={5}
                                inputMode="numeric"
                                autoComplete="off"
                                >
                                  
                            </Input>
                        </div>
                        <div className="inputValores">
                            <Label htmlFor= "caixinha">Caixinha</Label>
                            <Input 
                                id="caixinha" 
                                value={caixinha}
                                onChange={event => setCaixinha(event.target.value)}
                                maxLength={5}
                                inputMode="numeric"
                                autoComplete="off"
                                >

                            </Input>
                        </div>

                <div id="alerta" className="hidden">Campo obrigatório</div>
                <div id="alerta2" className="hidden">Não é permitido virgula ou ponto antes dos numeros</div>
                </div>
            <Submit   
                className="submit" 
                
            >
                Salvar
            </Submit>
        </form>
            </ContainerFormulario>
            
        </div>
        </>
    )
}

export default Controle