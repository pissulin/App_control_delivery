import React from 'react'
import styled from 'styled-components';
import { FiXSquare} from 'react-icons/fi'

import Menu from '../components/Menu'
import db from '../db/db'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items:center;

    h1{
        font-size: 20px;
        margin-top: 40px;
        color: white;
    }
`
const ContainerLista = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 70%;
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    div{
        display: flex;
        align-items: center;
    }
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    margin-bottom: 5px;
    p{
        padding: 0 30px;
        margin-bottom: 5px;
        color: white;
        font-weight: bold;
    }
     
`

const MenuCadastro = styled.div`
    button {
        background-color: black;
        color: white;
        margin-top: 30px;
        padding: 10px;
        font-weight: bold;
        border-radius: 5px;
        font-size: 16px;


    }
`

const estabelecimentos = ()=> {
    if(db.getStorage('estabelecimentos')){
      return JSON.parse(db.getStorage('estabelecimentos'))
    } else{
      return []
    }
  }

const ScreenEstabelecimentos = () => {


 return (
     <>
    <Menu />
    <Container>
        <h1>Lista de estabelecimentos</h1>
        <ContainerLista>
            <Header>
                <p>Nome</p>
                <p>Taxa</p>
            </Header>
                
                {
                    estabelecimentos()?.map(e => 
                        <Item>
                            <div >
                            <button 
                                onClick={()=> {
                                    if (window.confirm(`Excluir Estabelecimento ${e.estabelecimento} ?`)){db.deletarItem(e.estabelecimento ,null)
                                }}}
                            style={
                                    {
                                        backgroundColor:'transparent', 
                                        display:"flex", 
                                        outline:'none'
                                    }
                                }><FiXSquare size={20} color= 'white' style={{marginRight: '10px'}}/></button>
                            <p>{e.estabelecimento}</p>
                            </div>
                            <p>{`R$ ${e.diaria}`}</p>
                        </Item>
                    )
                    
                }
            
        </ContainerLista>
        <MenuCadastro>
            <button 
            onClick={
                ()=> window.location.href="/cadastro"
            }>Cadastrar</button>
        </MenuCadastro>
    </Container>
     
     </>
 )
}


export default ScreenEstabelecimentos