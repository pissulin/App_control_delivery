import Dexie from 'dexie';
import { useState } from 'react';


    var db = new Dexie('historico');
    db.version(1).stores({
        entregas: '++id, data, numComanda, valorTaxa, caixinha, diaria'
    });

    async function Add(data, numComanda, valorTaxa, caixinha, diaria) {
                
       const id = await db.entregas.add(
            {
                "date": data, 
                "numComanda": Number(numComanda), 
                "valorTaxa": Number(valorTaxa), 
                "caixinha": Number(caixinha),
                "diaria": Number(diaria)
            });
            
    }

     
    function PegarDados(index){
        return new Promise((resolve)=>{
            db.entregas.get(Number(index), (e) => {
         
                const dados = {
                    "data":`${e.date}`, 
                    "id":`${e.id}`, 
                    "numComanda":`${e.numComanda}`, 
                    "valorTaxa": `${e.valorTaxa}`, 
                    "caixinha": `${e.caixinha}`,
                    "diaria": `${e.diaria}`
                }
    
                const dadosJSON = JSON.stringify(dados)
                return resolve(dados)
                
        })
        
        })
   
    }

export {Add, PegarDados}


    /*function CreateDb(name, version) {
        let connection;

        let openRequest = window.indexedDB.open(name, version);
        
        openRequest.onupgradeneeded = e => {
            console.log("Criando um banco")

            let myConnection = e.target.result
            let objectStore = myConnection.createObjectStore('historico',{keyPath:'id',autoIncrement: true})
            objectStore.createIndex("numComanda","numComanda", {unique: true})

        };

        openRequest.onsuccess = e => {
            console.log("Conexao obtida com sucesso")
            connection = e.target.result
        };

        openRequest.onerror = e => {
            console.log(e.target.error)
        };
    
};

function ChangeDb(name, version, arrayEntregas) {
    let connection;

    let openRequest = window.indexedDB.open(name, version);
    
    openRequest.onupgradeneeded = e => {
        console.log(e.target.result)
        console.log("Alterando um banco ja existente")
        let myConnection = e.target.result
        const transactionAdd = myConnection.transaction(["entregas"],"readwrite")
        const objectStore = transactionAdd.objectStore("historico")
        
        objectStore.add(arrayEntregas)

    };

    openRequest.onsuccess = e => {
        console.log("Conexao obtida com sucesso")
        connection = e.target.result
    };

    openRequest.onerror = e => {
        console.log(e.target.error)
    };

} 




export {CreateDb, ChangeDb}*/