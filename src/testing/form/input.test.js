// test the state matches input
import { shallow } from 'enzyme';
import Input from '../../common/Input';

describe('<Input>', () => {
  it('Correctly display props', () => {
    const wrapper = shallow(<Input name="firstName" />);

    const label = wrapper.find('label');
    expect(label.text()).toContain('firstName');
  });
});
