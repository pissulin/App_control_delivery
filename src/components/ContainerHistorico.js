import React from 'react';
import './ContainerHistorico.css';


function HistoricoSalvo(props){
    return <div className="container">
        <div className="container-filho">
            <h1>{props.data}</h1>
            <h2>Total de entregas: {`${props.totalEntregas}`}</h2>
            <h2>Total das taxas: {`${props.totalTaxas}`}</h2>
            <h2>Diária: {`${props.diaria}`}</h2>
            <h2>Total a receber: {`${props.totalReceber}`}</h2>
        </div>
    </div>
}

export default HistoricoSalvo