import React from 'react';
import './ContainerHistorico.css';

import {FiX} from 'react-icons/fi'

function HistoricoSalvo(props){
    return <div className="container">
        
        <div className="container-filho">
        <FiX size={30} color="white" className="fechar" />
            <h1>{props.data}</h1>
            <h2>Total de entregas: {`${props.totalEntregas}`}</h2>
            <h2>Total das taxas: {`${props.totalTaxas}`}</h2>
            <h2>Diária: {`${props.diaria}`}</h2>
            <h2>Total caixinhas: {`${props.caixinha}`}</h2>
            <h2>Total a receber: {`${props.totalReceber}`}</h2>
        </div>
    </div>
}

export default HistoricoSalvo