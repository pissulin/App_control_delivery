import React from 'react'
import {Link} from 'react-router-dom'
import './tela_inicial.css'

import backgroundImg from '../images/background.jpg'

//icons
import {FiArrowRightCircle} from 'react-icons/fi' //icon seta p/direita 

function Background(){
    return (
         <div className='background'>
             <h1><span>Controle</span> suas <span>taxas</span> das <span>entregas</span></h1>
             <img src={backgroundImg} />
             <Link to='/controle'>
             <FiArrowRightCircle className='setaDireita' size={50} color="white" />
             </Link>
         </div> 
    )
}

export default Background 