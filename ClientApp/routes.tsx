import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Fupincuoshi } from './components/zpc/fupincuoshi';

export default <Route component={Home}>
    <Route path='/' components={{ body: Home }} />
    <Route path='/zpc' components={{ body: Fupincuoshi }} />
</Route>;

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
