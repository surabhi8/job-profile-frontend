import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  const actual = shallow(<App />);

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });
});
