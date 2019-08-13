import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('<Login />', () => {
  const actual = shallow(<Login />);

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });
});
