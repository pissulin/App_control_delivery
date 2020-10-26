import {React, useState} from 'react'
import {Link} from 'react-router-dom'


import './tela_controle.css'

import {FiArrowRightCircle} from 'react-icons/fi'

const entrega = []
let id = 0;

function Controle () {
    const data = new Date()
    const dataAtual = data.getUTCDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear() 
    
    
    const [numComanda, setNumComanda] = useState('')
    const [valorTaxa, setValorTaxa] = useState('')
    

    
   function handleSubmit(event){

        
        event.preventDefault()
        id++
        entrega.push({"id":id, "numComanda": numComanda, "valorTaxa": valorTaxa})
        localStorage["entrega"] = JSON.stringify(entrega) 
        document.getElementById('numComanda').value='';
        document.getElementById('taxa').value='';
        //const teste = localStorage["entrega"]
        //console.log(teste)

    }

    return (
        
        <div className='container'>
            <h1>Controle diário</h1>
            <p className='dataatual'>{dataAtual}</p>
            <form className="form" onSubmit={handleSubmit} autoComplete={"false"}>
                <div className='formulario'>
                <label htmlFor= "numComanda">Número da comanda</label>
                <input 
                    id="numComanda" 
                    value={numComanda} 
                    onChange={event => setNumComanda(event.target.value)}
                    maxLength={10}
                    autoComplete={false}
                    autoFocus={true}
                    inputMode="numeric" />
            </div>
                <div className='formulario'>
                <label htmlFor= "taxa">Valor da taxa</label>
                <input 
                    id="taxa" 
                    value={valorTaxa}
                    onChange={event => setValorTaxa(event.target.value)}
                    maxLength={5}
                    inputMode="numeric"
                    />
            </div>
                <button   
                    className="submit" 
                    type="submit"
                >
                    Salvar
                </button>
            </form>
            
              

            <Link to='/historico'>
                <FiArrowRightCircle className='setaDireita' size={50} color="white" />
            </Link>
        </div>
        
    )
}

export default Controle