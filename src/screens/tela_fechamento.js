import React from 'react'
import {Link} from 'react-router-dom'

import {FiArrowLeftCircle, FiArrowRightCircle,FiSave} from 'react-icons/fi'

import './tela_fechamento.css'

let historicos = []
let id = 0

function Close() {
    try {
        const entregas = JSON.parse(localStorage['entregas'])
    
    let soma = 0  
    let saldofinal = 0
    let diaria = 40.00
    let caixinha = 0

    entregas.map((e) => {
        soma++
        saldofinal = saldofinal + parseFloat(e['valorTaxa'])
        caixinha = caixinha + parseFloat(e['caixinha'])
    } )
   
    return <div className="container">
        <header>
            <h1>Fechamento</h1>
                <button disabled={true} onClick={function(){
                    if (window.confirm("Salvar agora?")) { 
                        
                        if(localStorage.getItem('historicos')){
                            let arrayHistoricos= JSON.parse(localStorage['historicos'])
                            
                           historicos = []
                            
                            arrayHistoricos.map(e=> {
                                historicos.push(e)
                                
                             })
                             if(historicos.length === 1){
                                 id += historicos.length
                             }else{
                                 id = 0
                                 id = historicos.length + 1
                             }
                             
                             historicos.push({"id":id, "QtdEntregas": soma, "saldofinal": saldofinal, "diaria": diaria, "caixinha": caixinha})
                             localStorage.removeItem('historicos')
                             localStorage.setItem('historicos', JSON.stringify(historicos))
                             
                         }
                         else{
                             id++
                             historicos.push(
                                 {
                                     "id":id, 
                                     "QtdEntregas": soma, 
                                     "saldofinal": saldofinal, 
                                     "diaria": diaria, 
                                     "caixinha": caixinha, 
                                     "totalReceber":(saldofinal + diaria + caixinha)
                                    }
                                )

                             localStorage.setItem('historicos', JSON.stringify(historicos))
                             
                         }

                        setInterval(() => window.location.reload(),900)
                    }
    
                }} ><FiSave className="apagar" size={30} color={"white"} /></button>
            </header>
        
            <div className="fechamento">
            <h2>{`Total entregas: ${soma}`}</h2>
            <h2>{`Total taxas: R$ ${(saldofinal).toFixed(2)}`}</h2>
            <h2>{`Total caixinhas: R$ ${(caixinha).toFixed(2)}`}</h2>
            <h2>{`Diária: R$ ${(diaria).toFixed(2)}`}</h2>
            <h2>{`Total a receber R$ ${(saldofinal + diaria + caixinha).toFixed(2)}`}</h2>
        </div>
        
        <div className="setas">
            <Link to='/historico' title="historico">
                <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
            </Link>
            <Link to='/historicos' title="historico">
                <FiArrowRightCircle className='setaDireita' size={50} color="white" />
            </Link>
        </div>
    </div>
       
    } catch (error) {
        return <div className="container">
         <header>
            <h1>Fechamento</h1>
                <button onClick={function(){
                    if (window.confirm("Salvar agora?")) { 
                        //localStorage.clear()
                        setInterval(() => window.location.reload(),900)
                    }
    
                }} ><FiSave className="apagar" size={30} color={"white"} /></button>
            </header>
            <div className="fechamento">
            <h2>{`Total entregas: 0`}</h2>
            <h2>{`Total taxas: 0 `}</h2>
            <h2>{`Total caixinhas: 0 `}</h2>
            <h2>{`Diária: 0`}</h2>
            <h2>{`Total a receber 0`}</h2>
        </div>
        
        <div className="setas">
            <Link to='/historico' title="historico">
                <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
            </Link>
            <Link to='/historicos' title="historico">
                <FiArrowRightCircle className='setaDireita' size={50} color="white" />
            </Link>
        </div>
    </div>
    }
}


export default Close