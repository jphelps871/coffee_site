import './App.scss';
import Header from '../features/header/Header';
import Signup from '../features/form/signup/Signup';
import Login from '../features/form/login/Login';
import Home from '../features/home/Home';
import Account from '../features/account/Account';
import Cart from '../features/cart/Cart';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { authRequest } from '../reducers/authSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.login);

  useEffect(() => dispatch(authRequest()), [dispatch, success]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
