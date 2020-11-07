import React from 'react'
import {Link} from 'react-router-dom'

import {FiArrowLeftCircle, FiArrowRightCircle, FiRefreshCcw, FiX} from 'react-icons/fi'

import Historicos from '../components/ContainerHistorico'
import './tela_historicos.css'



function HistoricosSalvos(){
    try {
        const arrayHistorico = JSON.parse(localStorage.historicos)
 
        console.log(arrayHistorico)

        return (
            <div className="container">
                <FiX size={30} color="white"/>
            {arrayHistorico.map((entrega) => {
                    return <Historicos 
                                //data={entrega['data']} 
                                totalEntregas={entrega['QtdEntregas']}
                                totalTaxas={entrega['saldofinal']}
                                diaria={entrega['diaria']}
                                caixinha ={entrega['caixinha']}
                                totalReceber={entrega['totalReceber']}
                            />
                })}  
                <div className="setas fixo">
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
                    
                    <div className="setas fixo">
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