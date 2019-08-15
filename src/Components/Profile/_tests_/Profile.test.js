import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../Profile';

describe('<App />', () => {
  const profileObject = {
    name: 'Test 1',
    jobRole: 'Dummy Company',
    companyObject: {
      name: 'ABC',
    },
    companyId: 1,
  };
  const actual = shallow(<Profile
    profileObject={profileObject}
  />);

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });
});
