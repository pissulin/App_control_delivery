import {React, useState} from 'react'
import styled from 'styled-components';
import db from '../db/db'
import DelItem from '../utils/Crud'
import { FiSave, FiXSquare} from 'react-icons/fi'


const pesoFonteTitulo = 'font-weight: 900'
const pesoFonteSubTitulo = 'font-weight: 500'
const font = "font-family: 'Roboto Mono', sans-serif"

const ContainerRelatorioTaxas = styled.div`
  background-color: #ffffeb;
  padding: 20px;
  width: 100%;
  min-height: Calc(100% - 36px);
`
const Titulo = styled.h1`
  font-size: 16px;
  color: black;
  ${pesoFonteTitulo};
  ${font}
`
const SubTitulo = styled.h2`
  font-size: 12px;
  margin-top: 5px;
  ${pesoFonteSubTitulo};
  ${font}
`

const BorderBottom = styled.div `
  border-bottom: dashed 1px black ;
  margin: 10px 0
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
`
const Body = styled.div`
display: flex;
flex-direction: column;
width: 100%
`
const Item = styled.div`
display: flex;
justify-content: space-between;
&:hover {
  background-color: rgb(255, 255, 142);
  cursor:pointer
}
`
const Resumo = styled.div`
`
const Total = styled.div`
  font-size: 14px;
  color: black;
  background-color: rgba(255, 255, 0, 0.5);
  padding:10px 5px;
  border-radius:20px;
  ${pesoFonteTitulo};
  ${font}
`
const Fechamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
`
const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
`


let estabelecimentoEscolhido = db.getStorage('estabelecimentoEscolhido')

const entregas = ()=> {
  if(db.getStorage('entregas')){
    return JSON.parse(db.getStorage('entregas'))
  } else{
    return []
  }
}
let somaTaxas = 0.00 
let somaCaixinha = 0.00

if(entregas()!==[]){
  entregas().map(e => {
    somaTaxas += Number(e.valorTaxa)
    somaCaixinha += Number(e.caixinha)
  })
}
 function getTaxa(nomeEstabelecimento){
  const estabelecimentos = db.getStorage('estabelecimentos')? JSON.parse(db.getStorage('estabelecimentos')) : []
  if(estabelecimentos.length > 0){
    for(let i=0; i< estabelecimentos.length; i++){
      if(estabelecimentos[i].estabelecimento === nomeEstabelecimento){
        return {"diaria": estabelecimentos[i].diaria, 'nome': estabelecimentos[i].estabelecimento} 
      }
    }
  }else{
    return {"diaria": 0.00, "nome": "Sem nome"}
  }
}

const nomeEstabelecimento = getTaxa(estabelecimentoEscolhido).nome//? estabelecimentos[0].estabelecimento: "Sem Estabelecimento cadastrado"
const taxa = parseFloat(getTaxa(estabelecimentoEscolhido).diaria).toFixed(2)

const total = somaTaxas + somaCaixinha + Number(taxa)

const data = new Date()
const dataNormal =  new Date(data.valueOf() - data.getTimezoneOffset() * 120000)
const dataAtual = `${data.getDate().toLocaleString('pt-BR',{timeZone:'America/Sao_Paulo'})}/${(data.getMonth()+1)}/${data.getFullYear()}` 

let historicos = []
let id = 0

function RelatorioTaxas(props){


  return (
    <ContainerRelatorioTaxas>
      <Cabecalho>
        <div>
          <Titulo>{nomeEstabelecimento}</Titulo>
          <SubTitulo>Data: {dataAtual}</SubTitulo>
        </div>
        <button disabled={false} onClick={function(){
                    if (window.confirm("Salvar agora?")) { 
                        
                        if(localStorage.getItem('historicos')){
                            let arrayHistoricos= JSON.parse(localStorage['historicos'])
                            
                           historicos = []
                            
                            arrayHistoricos.map(e=> {
                                historicos.push(e)
                                
                             })
                             if(historicos.length === 1){
                                 id += historicos.length
                             }else{
                                 id = 0
                                 id = historicos.length + 1
                             }
                             
                             historicos.push(
                                 {  
                                   "data": dataAtual,
                                   "nomeEstabelecimento": nomeEstabelecimento ,
                                   "id":id, 
                                   "QtdEntregas":  entregas().length, 
                                   "saldoTaxas": somaTaxas, 
                                   "diaria": taxa, 
                                   "caixinha": somaCaixinha, 
                                   "totalReceber": total
                                }
                            )
                             localStorage.removeItem('historicos')
                             localStorage.setItem('historicos', JSON.stringify(historicos))
                             
                         }
                         else{
                             id++
                             historicos.push(
                              {  "data": dataAtual,
                              "nomeEstabelecimento": nomeEstabelecimento ,
                                  "id":id, 
                                  "QtdEntregas":  entregas().length, 
                                  "saldoTaxas": somaTaxas.toFixed(2), 
                                  "diaria": taxa, 
                                  "caixinha": somaCaixinha.toFixed(2), 
                                  "totalReceber": total.toFixed(2)
                             }
                                )

                             localStorage.setItem('historicos', JSON.stringify(historicos))
                             
                         }
                         localStorage.removeItem('entregas')
                        setInterval(() => window.location.reload(),900)
                    }
    
                }} ><FiSave className="apagar" size={30} color={"black"} style= {{ backgroundColor: '#ffffeb'}} /></button>
      </Cabecalho>
      
      <BorderBottom/>
      <Header>
      <Titulo>Comanda</Titulo>
      <Titulo>Taxa</Titulo>
      <Titulo>Caixinha</Titulo>
      <Titulo>Total</Titulo>
      </Header>
      <Body>

          { 
            entregas()?.map(e => 
            <Item >
              <SubTitulo onClick={()=> db.deletarItem(null, e.numComanda)}><FiXSquare size={18} color="red"/></SubTitulo>
              <SubTitulo>Nº { Number(e.numComanda) in [1,2,3,4,5,6,7,8,9]? `0${Number(e.numComanda)}`:Number(e.numComanda)}</SubTitulo>
              <SubTitulo>R$ { parseInt(e.valorTaxa) in [1,2,3,4,5,6,7,8,9]? `0${parseFloat(e.valorTaxa).toFixed(2)}`:parseFloat(e.valorTaxa).toFixed(2)}</SubTitulo>
              <SubTitulo>R$ { parseInt(e.caixinha) in [1,2,3,4,5,6,7,8,9]? `0${parseFloat(e.caixinha).toFixed(2)}`:parseFloat(e.caixinha).toFixed(2)}</SubTitulo>
              <SubTitulo>R$ { parseInt((parseFloat(e.valorTaxa) + parseFloat(e.caixinha)).toFixed(2)) in [1,2,3,4,5,6,7,8,9]? `0${(parseFloat(e.valorTaxa) + parseFloat(e.caixinha)).toFixed(2)}`: (parseFloat(e.valorTaxa) + parseFloat(e.caixinha)).toFixed(2)}</SubTitulo>
            </Item>
            )
          }   
 
        <BorderBottom/>
        <Fechamento>
        <Resumo>
          <SubTitulo>Nº de entregas: { entregas().length}</SubTitulo>
          <SubTitulo>Taxas: R$ {somaTaxas.toFixed(2)}
          </SubTitulo>
            
        <SubTitulo>Caixinhas: R$ {somaCaixinha.toFixed(2)}</SubTitulo>
          <SubTitulo>Diária: R$ {taxa}</SubTitulo>
        </Resumo>
          <Total>
           Total R$ {total.toFixed(2)}
          </Total>
        </Fechamento>
          <BorderBottom />
      </Body>
      
    </ContainerRelatorioTaxas>
  )
}

export default RelatorioTaxas