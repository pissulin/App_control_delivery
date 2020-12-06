import {React} from 'react'
import {Link} from 'react-router-dom'
import Row from '../components/RowHistorico'
import Menu from '../components/Menu'
import RelatorioTaxas from '../components/RelatoriosTaxas'

import './tela_historico.css'

import {FiArrowLeftCircle, FiArrowRightCircle, FiRefreshCcw} from 'react-icons/fi'



export default function Historico() {
    return (
        <div className="container">
            <Menu />
            <RelatorioTaxas/>
        </div>
    )
}