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
            <div className="containerHistorico">
              <Menu />  
            <header>
            <h1 className='title'>Históricos salvos</h1> 
             <button onClick={function(){
                        if (window.confirm("Confirmar a exclusão!")) { 
                            localStorage.removeItem('historicos')
                            setInterval(() => window.location.reload(),1000)
                          }

                }} ><FiTrash className="apagar" size={30} color={"red"} /></button>  
            </header>
                
            {arrayHistorico.map((entrega) => {
                    return <Historicos 
                                data={entrega['data']} 
                                totalEntregas={entrega['QtdEntregas']}
                                totalTaxas={entrega['saldoTaxas']}
                                diaria={entrega['diaria']}
                                caixinha ={entrega['caixinha']}
                                totalReceber={entrega['totalReceber']}
                            />
                })}  
                
            </div>
            
        )
    
    } catch (error) {
        
            return (
                <div className="container">
                    <Menu />
                    <h1>Históricos salvos</h1>
                    <div className="mensagem">
                    
                        <h1>Você não tem histórico salvo</h1>
                    </div>
                
                </div>
                
            )
            
        }
    }

    

export default HistoricosSalvos