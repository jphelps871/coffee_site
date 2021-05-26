import Cart from '../../features/header/cart/Cart';
import { shallow } from 'enzyme';

import cart from '../../features/header/assets/cart.svg';

describe('<Cart />', () => {
  it('renders cart icon', () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper.contains(<img className="icon" src={cart} alt="" />)).toBe(
      true,
    );
  });
});
