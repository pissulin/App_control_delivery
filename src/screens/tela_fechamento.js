import React from 'react'
import {Link} from 'react-router-dom'

import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'

import './tela_fechamento.css'

function Close() {
    try {
        const entregas = JSON.parse(localStorage['entrega'])
    
    let soma = 0  
    let saldofinal = 0
    let diaria = 40.00

    entregas.map((e) => {
        soma++
        saldofinal = saldofinal + parseFloat(e['valorTaxa'])
    } )
   
    return <div className="container">
        <h1>Fechamento</h1>
            <div className="fechamento">
            <h2>{`Total de entregas: ${soma}`}</h2>
            <h2>{`Total das taxas: R$ ${(saldofinal).toFixed(2)}`}</h2>
            <h2>{`Diária: R$ ${(diaria).toFixed(2)}`}</h2>
            <h2>{`Total a receber R$ ${(saldofinal + diaria).toFixed(2)}`}</h2>
        </div>
        
        <div className="setas">
            <Link to='/historico'>
                <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
            </Link>
            <Link to='/historicos'>
                <FiArrowRightCircle className='setaDireita' size={50} color="white" />
            </Link>
        </div>
    </div>
       
    } catch (error) {
        return <div className="container">
        <h1>Fechamento</h1>
            <div className="fechamento">
            <h2>{`Total de entregas: 0`}</h2>
            <h2>{`Total das taxas: 0 `}</h2>
            <h2>{`Diária: 0`}</h2>
            <h2>{`Total a receber 0`}</h2>
        </div>
        
        <div className="setas">
            <Link to='/historico'>
                <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
            </Link>
            <Link to='/historicos'>
                <FiArrowRightCircle className='setaDireita' size={50} color="white" />
            </Link>
        </div>
    </div>
    }
}


export default Close