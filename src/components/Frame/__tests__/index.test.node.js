/* global expect describe it: true */
import React from 'react';
import Frame from '../index';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const Instance = () => (
  <Frame className="instance">
    <p>P1</p>
    <p>P2</p>
    <p>P3</p>
  </Frame>
);

describe('<Frame />', () => {
  const wrapper = shallow(Instance());

  it('should render', () => {
    expect(wrapper.find('.instance').exists()).toBe(true);
  });

  it('should render the children', () => {
    expect(wrapper.find('p').children().length).toBe(3);
  });
});

