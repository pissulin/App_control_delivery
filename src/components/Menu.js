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
const sizeIcon = 32
const colorIcon = 'white'

function Menu(props){


  return (
    <ContainerMenu>
      <a href='/'>
        <FaHome size={sizeIcon} color={colorIcon}/>
      </a>
      <a href='/controle'>
        <FaFax size={sizeIcon} color={colorIcon}/>
      </a>
      <a href='/historico'>
        <FaFileInvoiceDollar size={sizeIcon} color={colorIcon} />
      </a>
      <a href='/historicos'>
       <FaChartPie size={sizeIcon} color={colorIcon} />
      </a>
      <a href='/cadastro'>
       <FaEdit size={sizeIcon} color={colorIcon} />
      </a>
    </ContainerMenu>
  )
}

export default Menu