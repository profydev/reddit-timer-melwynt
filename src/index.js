import React from 'react';
import { render } from 'react-dom';
import './sass/main.scss';
import App from './App';

const rootElement = document.getElementById('root');
// eslint-disable-next-line react/jsx-filename-extension
render(<App />, rootElement);
