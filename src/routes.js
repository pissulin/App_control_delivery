import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Controle from './screens/tela_controle';
import Home from './screens/tela_inicial'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/controle" component={Controle} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;