import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem component', () => {
  it('renders ListItem', () => {
    const item = {
      _id: '1234',
      name: 'allison',
      photoUrl: 'hey'
    };
    const wrapper = shallow(<ListItem
      {...item} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
