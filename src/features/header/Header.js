import './header.scss';
// import Cart from './cart/Cart';
// import Nav from './nav/Nav';
import logo from './assets/logo.svg';

export default function Header() {
  return (
    <header>
      <div id="logo-cart-container">
        <div id="logo">
          <img src={logo} alt="logo" />
          {/* <Cart /> */}
        </div>
        {/* <Nav /> */}
      </div>
    </header>
  );
}
