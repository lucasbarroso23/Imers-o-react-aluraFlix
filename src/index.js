import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/homepage';
import CadastroVideo from './pages/cadastro/video';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/cadastro/video" exact component={CadastroVideo} />
            <Route path="/" exact component={Home} />
            <Route component={() => (<div>pagina 404</div>)} />

        </Switch>
    </BrowserRouter>,

    document.getElementById('root')

);