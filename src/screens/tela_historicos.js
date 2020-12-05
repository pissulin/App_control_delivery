import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

import {FiArrowLeftCircle, FiArrowRightCircle, FiRefreshCcw, FiTrash} from 'react-icons/fi'

import Historicos from '../components/ContainerHistorico'
import './tela_historicos.css'



function HistoricosSalvos(){
    try {
        const arrayHistorico = JSON.parse(localStorage.historicos)
 
        console.log(arrayHistorico)

        return (
            <div className="container">
              <Menu />  
            <header>
            <h1>Históricos salvos</h1> 
             <button onClick={function(){
                        if (window.confirm("Confirmar a exclusão!")) { 
                            localStorage.removeItem('historicos')
                            setInterval(() => window.location.reload(),1000)
                          }

                }} ><FiTrash className="apagar" size={30} color={"white"} /></button>  
            </header>
                
            {arrayHistorico.map((entrega) => {
                    return <Historicos 
                                data={entrega['data']} 
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
                    <h1>Históricos salvos</h1>
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