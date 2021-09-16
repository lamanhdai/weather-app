import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({});
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}><App /></Provider>);
});
