
const getStorage = (key) => localStorage.getItem(key)

const setStorage = (key, value) => localStorage.setItem(key, value)

const delStorage = (key) => localStorage.removeItem(key)

const deletarItem = (estabelecimento) => {
    let db_estabelecimento = JSON.parse(getStorage('estabelecimentos'))
    for(let i = 0; i < db_estabelecimento.length; i++){
        if(db_estabelecimento[i].estabelecimento === estabelecimento){
            db_estabelecimento.splice(i, 1)
            setStorage('estabelecimentos', JSON.stringify(db_estabelecimento))
        }
            
    }
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