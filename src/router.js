import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import ProductPage from './routes/ProductPage/ProductPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* exact 属于精准匹配的意思 */}
        <Route path="/" exact component={IndexPage} /> 
        <Route path="/product"  component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
