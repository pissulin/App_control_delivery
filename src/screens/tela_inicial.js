import React from 'react'
import {Link} from 'react-router-dom'
import './tela_inicial.css'
import Menu from '../components/Menu'
import 'react-pro-sidebar/dist/css/styles.css';



import backgroundImg from '../images/background.webp'

//icons
import {FiArrowRightCircle} from 'react-icons/fi' //icon seta p/direita 

function Background(){
    return (
        <div className='background'>
            <Menu />
             <h1><span>Controle</span> suas <span>taxas</span> das <span>entregas</span></h1>
             <img src={backgroundImg} alt="braços com mãos calculando " />
             
         </div> 
    )
}

export default Background 