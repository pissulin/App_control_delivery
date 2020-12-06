import React from 'react';
import './ContainerHistorico.css';

import {FiX} from 'react-icons/fi'

function HistoricoSalvo(props){
    return <div className="container-historico">
        
        <div className="container-filho">
        <FiX size={30} color="white" className="fechar" />
            <h2>{props.data}</h2>
            <h2>Total de entregas: {`${props.totalEntregas}`}</h2>
            <h2>Total das taxas: {`R$ ${props.totalTaxas}`}</h2>
            <h2>Diária: {`R$ ${props.diaria}`}</h2>
            <h2>Total caixinhas: {`R$ ${props.caixinha}`}</h2>
            <h2>Total a receber: {`R$ ${props.totalReceber}`}</h2>
        </div>
    </div>
}

export default HistoricoSalvo