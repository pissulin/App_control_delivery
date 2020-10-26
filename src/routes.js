import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Controle from './screens/tela_controle';
import Home from './screens/tela_inicial';
import Historico from './screens/tela_historico';
import Fechamento from './screens/tela_fechamento';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/controle" component={Controle} />
                <Route path="/historico" component={Historico} />
                <Route path="/fechamento" component={Fechamento}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;