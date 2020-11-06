import React from 'react'
import {Link} from 'react-router-dom'

import {FiArrowLeftCircle, FiArrowRightCircle, FiRefreshCcw} from 'react-icons/fi'

import Historicos from '../components/ContainerHistorico'
import './tela_historicos.css'



function HistoricosSalvos(){
    try {
        const arrayHistorico = require('../db/db_historico.json')

        const data = arrayHistorico.entregas

        console.log(data)

        return (
            <div className="container">
            {data.map((entrega) => {
                    return <Historicos 
                                data={entrega['data']} 
                                totalEntregas={entrega['totalEntregas']}
                                totalTaxas={entrega['totalTaxas']}
                                diaria={entrega['diaria']}
                                totalReceber={entrega['totalReceber']}
                            />
                })}  
                <div className="setas">
                    <Link to='/fechamento' title="fechamento">
                        <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
                    </Link>
                    <Link to='/' title="home">
                        <FiArrowRightCircle className='setaDireita' size={50} color="white" />
                    </Link>
                </div>
            </div>
            
        )
    
    } catch (error) {
        
            return (
                <div className="container">
                    <div className="mensagem">
                        <h1>Você não tem histórico salvo</h1>
                    </div>
                    
                    <div className="setas">
                        <Link to='/fechamento' title="historico">
                            <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
                        </Link>
                        <Link to='/' title="home">
                            <FiArrowRightCircle className='setaDireita' size={50} color="white" />
                        </Link>
                    </div>
                </div>
                
            )
            
        }
    }

    

export default HistoricosSalvos