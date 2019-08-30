import React from 'react';
import { shallow } from 'enzyme';
import SearchField from './SearchField';

it('renders without crashing', () => {
  shallow(<SearchField />);
});