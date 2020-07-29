import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo() {
    return (
        <div>
            pagina de cadastro de video
        </div>
    )
}

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/cadastro/video" exact component={CadastroVideo} />
            <Route path="/" exact component={App} />
            <Route component={() => (<div>pagina 404</div>)} />

        </Switch>
    </BrowserRouter>,

    document.getElementById('root')

);