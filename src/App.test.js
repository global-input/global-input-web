import React from 'react';
import ReactDOM from 'react-dom';
import "./tests/setup";
import App from './App';

it('renders without crashing', () => {

  beforeAll(() => {
      Object.defineProperty(window, "matchMedia", {
        value: jest.fn(() => { return { matches: true } })
      });
    });

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

});
