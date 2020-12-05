import React from 'react'
import styled from 'styled-components';
import {FaFax, FaFileInvoiceDollar, FaHandHoldingUsd, FaEdit} from 'react-icons/fa'


const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  text-align: center;
  background-color: black;
  bottom: 0;
  padding: 10px 0
`

function Menu(){
  
  return (
    <ContainerMenu>
      <a href='/controle'>
        <FaFax size={24} color={'white'}/>
      </a>
      <a href='/fechamento'>
        <FaHandHoldingUsd size={24} color={'white'} />
      </a>
      <a href='/historico'>
        <FaFileInvoiceDollar size={24} color={'white'} />
      </a>
      <a href='/cadastro'>
       <FaEdit size={24} color={'white'} />
      </a>
    </ContainerMenu>
  )
}

export default Menu