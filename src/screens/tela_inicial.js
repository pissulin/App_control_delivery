import React from 'react'
import {Link} from 'react-router-dom'
import './tela_inicial.css'
import Menu from '../components/Menu'
import 'react-pro-sidebar/dist/css/styles.css';
import db from '../db/db'



import backgroundImg from '../images/background.webp'

//icons
import {FiArrowRightCircle} from 'react-icons/fi' //icon seta p/direita 

<script data-ad-client="ca-pub-5869062660201180" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

const dbInicial = () =>{
    let res = JSON.parse(db.getStorage("estabelecimentos"))
    console.log(res)
    if(res === null ){
        db.setStorage('estabelecimentoEscolhido', "---")
        db.setStorage('estabelecimentos', JSON.stringify([{"estabelecimento": "---", "diaria": "0.00"}]))
    }
}

function Background(){
    return (
        <div className='background'>
            <Menu />
            {dbInicial()}
             <h1><span>Controle</span> suas <span>taxas</span> das <span>entregas</span></h1>             
         </div> 
    )
}

export default Background 