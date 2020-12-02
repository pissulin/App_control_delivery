import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Home from './screens/tela_inicial';
import Cadastro from './screens/tela_cadastro'
import Controle from './screens/tela_controle';
import Historico from './screens/tela_historico';
import Fechamento from './screens/tela_fechamento';
import Historicos from './screens/tela_historicos';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/cadastro' component={Cadastro} />
                <Route path="/controle" component={Controle} />
                <Route path="/historico" component={Historico} />
                <Route path="/fechamento" component={Fechamento} />
                <Route path="/historicos" component={Historicos} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;