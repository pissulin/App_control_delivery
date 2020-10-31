import React from 'react';
import './RowHistorico.css'

function Row(props) {
    const num = props.numero || 0
    const taxa = parseFloat(props.taxa) || 0
    const caixinha = parseFloat(props.caixinha) || 0
    return (
        <div className="row">
            <h2 id="comanda">Comanda: { num in [1,2,3,4,5,6,7,8,9,10]? '0'+ props.numero: props.numero}</h2>
            <h2><span>|</span></h2>
            <h2 id ="taxa">Taxa: R$ {taxa < 10? '0' + taxa.toFixed(2):  taxa.toFixed(2)}</h2>
            <h2><span>|</span></h2>
            <h2 id ="taxa">Caixinha: R$ {caixinha < 10? '0' + caixinha.toFixed(2): caixinha.toFixed(2)}</h2>
        </div>
    )
}

export default Row
