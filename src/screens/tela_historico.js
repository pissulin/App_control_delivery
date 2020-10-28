import {React} from 'react'
import {Link} from 'react-router-dom'
import Row from '../components/RowHistorico'

import './tela_historico.css'

import {FiArrowLeftCircle, FiArrowRightCircle, FiRefreshCcw} from 'react-icons/fi'

export default function Historico() {

    try {
        const entregas = JSON.parse(localStorage['entrega'])
    //console.log({"teste":entregas[0]})

    return (
        <div className="container">
            <header>
                <h1 className="historico">Histórico</h1>
                <button onClick={function(){
                    localStorage.clear()
                    window.location.reload()
                }} ><FiRefreshCcw className="apagar" size={30} color={"white"} /></button>
            </header>
            
            <div id= "rows" className='rows'>
                
                {entregas.map((entrega) => {
                    //console.log(entrega, index);
                    return <Row id={entrega['id']} numero={entrega['numComanda']} taxa={entrega['valorTaxa']} />
                })}      
            </div>
            <div className="setas">
                <Link to='/controle'>
                    <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
                </Link>
                <Link to='/fechamento'>
                    <FiArrowRightCircle className='setaDireita' size={50} color="white" />
                </Link>
            </div>
        </div>
    )

    } catch (error) {
        return (
            <div className="container">
                <header>
                    <h1 className="historico">Histórico</h1>
                    <button><FiRefreshCcw className="apagar" size={30} color={"white"} /></button>
                </header>
                
                <div id= "rows" className='rows'>
                        
                </div>
                <div className="setas">
                    <Link to='/controle'>
                        <FiArrowLeftCircle className='setaDireita' size={50} color="white" />
                    </Link>
                    <Link to='/fechamento'>
                        <FiArrowRightCircle className='setaDireita' size={50} color="white" />
                    </Link>
                </div>
            </div>
        )
    }
    
        
}