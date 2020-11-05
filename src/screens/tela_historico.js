import {React} from 'react'
import {Link} from 'react-router-dom'
import Row from '../components/RowHistorico'

import * as Db from '../db/Db_historico'
import './tela_historico.css'

import {FiArrowLeftCircle, FiArrowRightCircle, FiRefreshCcw} from 'react-icons/fi'

let dados = Db.PegarDados(14).then()
let entregas= []


entregas.push(dados)
entregas.push({caixinha: "2",
                data: "3/11/2020",
                diaria: "40",
                id: "15",
                numComanda: "47",
                valorTaxa: "8"
            })
export default function Historico() {
    
   
   try {    
           console.log(await entregas)
       
        //const id = dados.id
        //const numComanda = dados
        //const valorTaxa = dados.taxa
        //const caixinha = dados.caixinha*/
      
        return (
            <div className="container">
                <header>
                    <h1 className="historico">Histórico</h1>
                    <button onClick={function(){
                            if (window.confirm("Confirmar a exclusão!")) { 
                                localStorage.clear()
                                setInterval(() => window.location.reload(),1000)
                              }
                            
                        
                        
                        
                    }} ><FiRefreshCcw className="apagar" size={30} color={"white"} /></button>
                </header>
                
                <div id= "rows" className='rows'>
                    
                    {
                    //console.log(dados().then(e => e))
                    /*entregas.map((entrega) => {
                        //console.log(entrega, index);
                        return <Row 
                                id={entrega['id']} 
                                numero={entrega['numComanda']} 
                                taxa={entrega['valorTaxa']} 
                                caixinha={entrega['caixinha']} />
                    })*/}      
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