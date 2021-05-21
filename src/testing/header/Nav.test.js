// Jest and Enzyme testing
import { Enzyme, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../../features/header/Header';

Enzyme.configure({ adapter: new Adapter() });

// test header features
