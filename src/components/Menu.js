import {React, useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
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

const sizeIcon = 32
const colorIcon = 'white'

function Menu(props){


  return (
    <ContainerMenu>
      <Link to='/' title="home">
        <FaHome size={sizeIcon} color={colorIcon}/>
      </Link>

      <Link to='/controle' title="controle">
        <FaFax size={sizeIcon} color={colorIcon}/>
      </Link>
      <a href='/historico' title="historico">
        <FaFileInvoiceDollar size={sizeIcon} color={colorIcon} />
      </a>
      <Link to='/historicos' title="historicos">
       <FaChartPie size={sizeIcon} color={colorIcon} />
      </Link>
      <Link to='/cadastro' title="cadastro">
       <FaEdit size={sizeIcon} color={colorIcon} />
      </Link>
    </ContainerMenu>
  )
}

export default Menu