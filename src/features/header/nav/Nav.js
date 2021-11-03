import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
					<li onClick={() => dispatch(logout())}>
						logout
						{/* <a onClick={() => dispatch(logout())}>logout</a> */}
					</li>
				) : (
					<li>
						<Link to="/signup">sign up</Link>
					</li>
				)}

				{/* CART */}
				<li>
					<Link to="/cart">
						<img className="icon" src={cart} alt="cart-icon" />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
