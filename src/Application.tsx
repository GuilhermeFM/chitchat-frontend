import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyle from './styles';

const Aplicacao: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default Aplicacao;
