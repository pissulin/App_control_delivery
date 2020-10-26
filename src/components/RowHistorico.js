import React from 'react';
import './RowHistorico.css'

function Row(props) {
    const num = props.numero
    const taxa = parseInt(props.taxa)
    return (
        <div className="row">
            <h2 id="comanda">Nº Comanda: { num in [1,2,3,4,5,6,7,8,9,10]? '0'+ props.numero: props.numero}</h2>
            <h2>|</h2>
            <h2 id ="taxa">Taxa: R$ {taxa.toFixed(2)}</h2>
        </div>
    )
}

export default Row
