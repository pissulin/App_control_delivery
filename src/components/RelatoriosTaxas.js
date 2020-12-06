import {React, useState} from 'react'
import styled from 'styled-components';

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
`
const Resumo = styled.div`
`
const Total = styled.div`
  font-size: 16px;
  color: black;
  ${pesoFonteTitulo};
  ${font}
`
const Fechamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
`

const nomeEstabelecimento = 'Buon Gusto'
const data = '06/12/2020'
const taxa = '40.00'  

function RelatorioTaxas(props){


  return (
    <ContainerRelatorioTaxas>
      <Titulo>{nomeEstabelecimento}</Titulo>
      <SubTitulo>Data: {data}</SubTitulo>
      <BorderBottom/>
      <Header>
      <Titulo>Comanda</Titulo>
      <Titulo>Taxa</Titulo>
      <Titulo>Caixinha</Titulo>
      <Titulo>Total</Titulo>
      </Header>
      <Body>
        <Item>
          <SubTitulo>Nº 01</SubTitulo>
          <SubTitulo>R$ 08.00</SubTitulo>
          <SubTitulo>R$ 02.50</SubTitulo>
          <SubTitulo>R$ 10.50</SubTitulo>
        </Item>
        <Item>
          <SubTitulo>Nº 02</SubTitulo>
          <SubTitulo>R$ 06.00</SubTitulo>
          <SubTitulo>R$ 02.00</SubTitulo>
          <SubTitulo>R$ 08.00</SubTitulo>
        </Item>
        <Item>
          <SubTitulo>Nº 03</SubTitulo>
          <SubTitulo>R$ 08.00</SubTitulo>
          <SubTitulo>R$ 02.50</SubTitulo>
          <SubTitulo>R$ 10.50</SubTitulo>
        </Item>
        <BorderBottom/>
        <Fechamento>
        <Resumo>
            <SubTitulo>Taxas: R$ 125.00</SubTitulo>
            <SubTitulo>Caixinhas: R$ 08.00</SubTitulo>
            <SubTitulo>Diária: R$ 40.00</SubTitulo>
          </Resumo>
          <Total>
           Total R$ 173.00
          </Total>
        </Fechamento>
          <BorderBottom />
      </Body>

    </ContainerRelatorioTaxas>
  )
}

export default RelatorioTaxas