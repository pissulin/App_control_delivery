import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import styled from 'styled-components';

import './tela_controle.css'

import {FiArrowRightCircle} from 'react-icons/fi'

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

function Controle () {
    const data = new Date()
    const dataNormal =  new Date(data.valueOf() - data.getTimezoneOffset() * 120000)
    const dataAtual = `${data.getDate().toLocaleString('pt-BR',{timeZone:'America/Sao_Paulo'})}/${(data.getMonth()+1)}/${data.getFullYear()}` 

    const [numComanda, setNumComanda] = useState('')
    const [valorTaxa, setValorTaxa] = useState('')
    const [caixinha, setCaixinha] = useState('')
    const [diaria, setDiaria] = useState(40.00)

   function handleSubmit(event){
        event.preventDefault()

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
                if(entrega.length === 1){
                    id += entrega.length
                }else{
                    id = 0
                    id = entrega.length + 1
                }
                
                entrega.push({"id":id, "numComanda": numComanda, "valorTaxa": valorTaxa.replace(/,/g, "."), "caixinha": caixinha.replace(/,/g, ".") || 0})
                localStorage.removeItem('entregas')
                localStorage.setItem('entregas', JSON.stringify(entrega))
                
            }
            else{
                id++
                entrega.push({"id":id, "numComanda": numComanda, "valorTaxa": valorTaxa.replace(/,/g, "."), "caixinha": caixinha.replace(/,/g, ".") || 0})
                localStorage.setItem('entregas', JSON.stringify(entrega))
                
            }
            
       
            document.getElementById('numComanda').value='';
            document.getElementById('taxa').value='';
            document.getElementById('caixinha').value= '';
           
        }
        

    }

    return (
        
        <div className='container'>
            <Menu />
            <h1>Controle diário</h1>
            <p className='dataatual'>{dataAtual}</p>
            <ContainerFormulario>
            <form className="form" onSubmit={handleSubmit} autoComplete={"false"}>
            
            <div className='formulario'>

            <Label htmlFor= "numComanda">Número da comanda</Label>
            <Input 
                id="numComanda" 
                value={numComanda} 
                onChange={event => setNumComanda(event.target.value)}
                maxLength={10}
                autoComplete={false}
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
                                inputMode="numeric" >

                            </Input>
                        </div>
                        <div className="inputValores">
                            <Label htmlFor= "caixinha">Caixinha</Label>
                            <Input 
                                id="caixinha" 
                                value={caixinha}
                                onChange={event => setCaixinha(event.target.value)}
                                maxLength={5}
                                inputMode="numeric" >

                            </Input>
                        </div>

                <div id="alerta" className="hidden">Campo obrigatório</div>
                <div id="alerta2" className="hidden">Não é permitido virgula ou ponto antes dos numeros</div>
                </div>
            <Submit   
                className="submit" 
                type="submit"
            >
                Salvar
            </Submit>
        </form>
            </ContainerFormulario>
            
        </div>
        
    )
}

export default Controle