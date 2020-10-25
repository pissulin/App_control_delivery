import {React, useState} from 'react'
import {Link} from 'react-router-dom'

import './tela_controle.css'

import {FiArrowLeftCircle} from 'react-icons/fi'

let id = 0;

function Controle () {
    const data = new Date()
    const dataAtual = data.getUTCDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear() 

    
    const [numComanda, setNumComanda] = useState('')
    const [valorTaxa, setValorTaxa] = useState('')
    console.log(numComanda)
    console.log(valorTaxa)
    console.log(id)

    function handleSubmit(event){
        event.preventDefault()
        id++
        console.log(
            id,
            Number(numComanda),
            Number(valorTaxa)
        )
    }

    return (
        
        <div className='container'>
            <h1>Controle diario</h1>
            <p className='dataatual'>{dataAtual}</p>
            <form className="form" onSubmit={handleSubmit}>
            <div className='formulario'>
                <label htmlFor= "numComanda">Número da comanda</label>
                <input 
                    id="numComanda" 
                    value={numComanda} 
                    onChange={event => setNumComanda(event.target.value)}
                    maxLength={10}
                    inputMode="numeric" />
            </div>
            <div className='formulario'>
                <label htmlFor= "taxa">Valor da taxa</label>
                <input 
                    id="taxa" 
                    value={valorTaxa}
                    onChange={event => setValorTaxa(event.target.value)}
                    maxLength={4}
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
            
              

            <Link to='/'>
                <FiArrowLeftCircle className='setaEsquerda' size={50} color="white" />
            </Link>
        </div>
        
    )
}

export default Controle