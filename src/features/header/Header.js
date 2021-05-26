import './header.scss';
import Nav from './nav/Nav';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import Cart from './cart/Cart';

export default function Header() {
  return (
    <header>
      <div className="wrapper header-responsive">
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <Nav />
        </div>
        <Link className="cart" to="/cart">
          <Cart />
        </Link>
      </div>
    </header>
  );
}
