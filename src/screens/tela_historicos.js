import React from 'react'
import {Link} from 'react-router-dom'

import {FiArrowLeftCircle, FiArrowRightCircle, FiRefreshCcw} from 'react-icons/fi'

import Historicos from '../components/ContainerHistorico'
import './tela_historico.css'



function HistoricosSalvos(){

    const arrayHistorico = require('../db/db_historico.json')

    const data = arrayHistorico.entregas

    console.log(data)

    return (
        <div className="container">
          {data.map((entrega,index) => {
                return <Historicos 
                            data={entrega['data']} 
                            totalEntregas={entrega['totalEntregas']}
                            totalTaxas={entrega['totalTaxas']}
                            diaria={entrega['diaria']}
                            totalReceber={entrega['totalReceber']}
                         />
            })}  
            <div className="setas">
                <Link to='/fechamento'>
                    <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
                </Link>
                <Link to='/'>
                    <FiArrowRightCircle className='setaDireita' size={50} color="white" />
                </Link>
            </div>
        </div>
        
    )
    
}

export default HistoricosSalvos