import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/meu-carrinho" component={Cart} />
        </Switch>
    );
}

export default Routes;