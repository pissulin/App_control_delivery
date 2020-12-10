import db from '../db/db';


function DelItem( numComanda){
    let entregas = JSON.parse(db.getStorage('entregas'))
    for(let i = 0; i < entregas.length; i++){
        if(entregas[i].numComanda === numComanda){
           /* let id = entregas[i].id
            let gorjeta = entregas[i].caixinha
            let estabelecimento = entregas[i].estabelecimento
            let comanda = entregas[i].numComanda
            let taxa = entregas[i].valorTaxa*/
            
           // console.log(comanda, taxa, gorjeta)
           /* console.log(document.getElementById('numComanda').value= comanda)
            console.log(document.getElementById('taxa').value= taxa);
            console.log(document.getElementById('caixinha').value= gorjeta);*/

            entregas.splice(i, 1)
            console.log(entregas)
          /* if(gorjeta !== caixinha){ gorjeta = caixinha } 
           if(comanda !== numComanda){comanda = numComanda}
           if(diaria !== valorDiaria){diaria = valorDiaria}*/
            /* entregas = []
             entregas.push(
                 {
                    id: id, 
                    caixinha: gorjeta === caixinha? gorjeta: caixinha , 
                    estabelecimento: estabelecimento,
                    numComanda: comanda === numComanda? comanda: numComanda,
                    valorDiaria: taxa === valorTaxa? taxa: valorTaxa
                })   */
            
            db.setStorage('entregas', JSON.stringify(entregas))

            
        }
            
    }
}

export default DelItem