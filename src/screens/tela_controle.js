import {React, useState} from 'react'
import {Link} from 'react-router-dom'


import './tela_controle.css'

import {FiArrowRightCircle} from 'react-icons/fi'

let entrega = []
let id = 0;

function Controle () {
    const data = new Date()
    const dataNormal =  new Date(data.valueOf() - data.getTimezoneOffset() * 120000)
    const dataAtual = `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}` 

    const [numComanda, setNumComanda] = useState('')
    const [valorTaxa, setValorTaxa] = useState('')
    const [caixinha, setCaixinha] = useState('')

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
            <h1>Controle diário</h1>
            <p className='dataatual'>{dataAtual}</p>
            <form className="form" onSubmit={handleSubmit} autoComplete={"false"}>
                <div className='formulario'>
                <label htmlFor= "numComanda">Número da comanda</label>
                <input 
                    id="numComanda" 
                    value={numComanda} 
                    onChange={event => setNumComanda(event.target.value)}
                    maxLength={10}
                    autoComplete={false}
                    autoFocus={true}
                    inputMode="numeric" />
                    <div id="alerta" className="hidden">Campo obrigatório</div>
                    <div id="alerta2" className="hidden">Não é permitido virgula ou ponto antes dos numeros</div>
            </div>
                
                        <div className='formulario'>
                        <div className="containerInputValores">
                            <div className="inputValores">
                                <label htmlFor= "taxa">Valor da taxa</label>
                                <input 
                                    id="taxa" 
                                    value={valorTaxa}
                                    onChange={event => setValorTaxa(event.target.value)}
                                    maxLength={5}
                                    inputMode="numeric" />
                            </div>
                            <div className="inputValores">
                                <label htmlFor= "caixinha">Caixinha</label>
                                <input 
                                    id="caixinha" 
                                    value={caixinha}
                                    onChange={event => setCaixinha(event.target.value)}
                                    maxLength={5}
                                    inputMode="numeric" />
                            </div>
                    </div>
                    
                
                    <div id="alerta" className="hidden">Campo obrigatório</div>
                    <div id="alerta2" className="hidden">Não é permitido virgula ou ponto antes dos numeros</div>
            </div>
                <button   
                    className="submit" 
                    type="submit"
                >
                    Salvar
                </button>
            </form>
            
              

            <Link to='/historico' title="historico">
                <FiArrowRightCircle className='setaDireita' size={50} color="white" />
            </Link>
        </div>
        
    )
}

export default Controle