import React from 'react';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductListPage from '../pages/ProductListPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';
import { Route, Switch } from 'react-router-dom';

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/products' component={ProductListPage} />
        <Route path='/product/:product' component={ProductsPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/login' component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default Page;