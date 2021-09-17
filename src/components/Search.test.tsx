import React from 'react';
import { mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Search from './Search';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const contextValue = {
  dispatch: jest.fn(),
};

describe('Search', () => {
  it('search element', () => {
    const SearchElement = renderer
      .create(<Search onSearch={contextValue.dispatch} />)
      .toJSON();
    expect(SearchElement).toMatchSnapshot();
  });

  it('render', () => {
    const wrapper = mount(
      <Search onSearch={contextValue.dispatch} />
    );
    expect(wrapper.find('input').props().role).toEqual('search');
  });
});