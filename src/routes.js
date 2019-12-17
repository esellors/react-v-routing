import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Store from './Components/Store';
import Item from './Components/Item';

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Contact} path='/about/contact' />
        <Route component={About} path='/about' />
        <Route component={Item} path='/store/:itemId' />
        <Route component={Store} path='/store' />
        <Route render={() => <h1>404 NOT FOUND. TRY AGAIN.</h1>} />
    </Switch>
)