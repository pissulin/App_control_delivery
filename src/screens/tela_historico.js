import {React} from 'react'
import {Link} from 'react-router-dom'
import Row from '../components/RowHistorico'
import Menu from '../components/Menu'

import './tela_historico.css'

import {FiArrowLeftCircle, FiArrowRightCircle, FiRefreshCcw} from 'react-icons/fi'



export default function Historico() {

    try {
        const entregas = JSON.parse(localStorage['entregas'])
    
    return (
        <div className="container">
            <Menu />
            <header>
                <h1 className="historico">Histórico</h1>
                <button onClick={function(){
                        if (window.confirm("Confirmar a exclusão!")) { 
                            localStorage.removeItem('entregas')
                            setInterval(() => window.location.reload(),900)
                          }
                        
                    
                    
                    
                }} ><FiRefreshCcw className="apagar" size={30} color={"white"} /></button>
            </header>
            
            <div id= "rows" className='rows'>
                
                {entregas.map((entrega) => {
                    return <Row 
                            id={entrega['id']} 
                            numero={entrega['numComanda']} 
                            taxa={entrega['valorTaxa']} 
                            caixinha={entrega['caixinha']} />
                })}      
            </div>
            <div className="setas">
                <Link to='/controle' title="controle">
                    <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
                </Link>
                <Link to='/fechamento' title="fechamento">
                    <FiArrowRightCircle className='setaDireita' size={50} color="white" />
                </Link>
            </div>
        </div>
    )

    } catch (error) {
        return (
            <div className="container">
                <Menu />
                <header>
                    <h1 className="historico">Histórico</h1>
                    <button><FiRefreshCcw className="apagar" size={30} color={"white"} /></button>
                </header>
                
                <div id= "rows" className='rows'>
                        
                </div>
                <div className="setas">
                    <Link to='/controle' title="controle">
                        <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
                    </Link>
                    <Link to='/fechamento' title="fechamento">
                        <FiArrowRightCircle className='setaDireita' size={50} color="white" />
                    </Link>
                </div>
            </div>
        )
    }
    
        
}