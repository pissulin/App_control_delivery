
const getStorage = (key) => localStorage.getItem(key)

const setStorage = (key, value) => localStorage.setItem(key, value)

const delStorage = (key) => localStorage.removeItem(key)

const deletarItem = (estabelecimento, comanda) => {
    if(estabelecimento !== null){
        let db_estabelecimento = JSON.parse(getStorage('estabelecimentos'))
        for(let i = 0; i < db_estabelecimento.length; i++){
            if(db_estabelecimento[i].estabelecimento === estabelecimento){
             db_estabelecimento.splice(i, 1)
              setStorage('estabelecimentos', JSON.stringify(db_estabelecimento))
              
        }
            
    }

    }
        if(comanda !== null){
            let db_entregas = JSON.parse(getStorage('entregas'))
            for(let i = 0; i < db_entregas.length; i++){
                if(db_entregas[i].numComanda == comanda){
                 db_entregas.splice(i, 1)
                  setStorage('entregas', JSON.stringify(db_entregas))
                 
            }
                
        }
        
        }
        window.location.reload()
    }


const updateItem = (estabelecimento, nome, diaria) => {
    let db_estabelecimento = JSON.parse(getStorage('estabelecimentos'))
    for(let i = 0; i < db_estabelecimento.length; i++){
        if(db_estabelecimento[i].estabelecimento === estabelecimento){
            if(nome !== 'undefined'){
                db_estabelecimento[i].estabelecimento = nome
            }
            if(diaria !== 'undefined'){
                db_estabelecimento[i].diaria = diaria
            }
            delStorage('estabelecimentos')
            setStorage('estabelecimentos', JSON.stringify(db_estabelecimento))
        }
            
    }
}



export default {
        getStorage, 
        setStorage, 
        delStorage, 
        deletarItem,
        updateItem,
    }