import React from 'react';
import { shallow } from 'enzyme';
import Company from '../Company';

describe('<Company />', () => {
  const actual = shallow(<Company />);

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });
});
