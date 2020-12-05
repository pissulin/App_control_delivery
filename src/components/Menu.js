import {React, useState} from 'react'
import styled from 'styled-components';
import {
  FaFax, 
  FaFileInvoiceDollar, 
  FaHandHoldingUsd, 
  FaEdit, 
  FaHome,
  FaChartPie
} from 'react-icons/fa'


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
const Link = styled.a`

  background-color: white;
  color: black

`

function Menu(props){


  return (
    <ContainerMenu>
      <a href='/'>
        <FaHome size={24} color={'white'}/>
      </a>
      <a href='/controle'>
        <FaFax size={24} color={'white'}/>
      </a>
      <a href='/historico'>
        <FaFileInvoiceDollar size={24} color={'white'} />
      </a>
      <a href='/fechamento'>
        <FaHandHoldingUsd size={24} color={'white'} />
      </a>
      <a href='/historicos'>
       <FaChartPie size={24} color={'white'} />
      </a>
      <a href='/cadastro'>
       <FaEdit size={24} color={'white'} />
      </a>
    </ContainerMenu>
  )
}

export default Menu