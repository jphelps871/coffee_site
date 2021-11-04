import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import QuantityNum from '../../../common/QuantityNum/QuantityNum';
import cart from '../assets/cart.svg';
import './nav.scss';

import { logout } from '../../../reducers/authSlice';

export default function Nav() {
	/* Give and take user authorization  */
	const { loggedIn } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	return (
		<nav>
			<ul>
				{/* HOME */}
				<li className="home">
					<Link to="/">home</Link>
				</li>

				{/* ACCOUNT / LOGIN */}
				<li>{loggedIn ? <Link to="/account">my account</Link> : <Link to="/login">login</Link>}</li>

				{/* LOGOUT / SIGN UP */}
				{loggedIn ? (
					<li>
						<Link onClick={() => dispatch(logout())} to="/">
							logout
						</Link>
					</li>
				) : (
					<li>
						<Link to="/signup">sign up</Link>
					</li>
				)}

				{/* CART */}
				<li style={{ position: 'relative' }}>
					<Link to="/cart">
						<QuantityNum />
						<img className="icon" src={cart} alt="cart-icon" />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
