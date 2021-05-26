import { shallow } from 'enzyme';
import Nav from '../../features/header/nav/Nav';

describe('<Nav />', () => {
  it('Render all 3 nav links', () => {
    const wrapper = shallow(<Nav />);
    const navList = wrapper.find('li');
    expect(navList.length).toEqual(3);
  });
});
