import { ColorModeScript } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <Fragment>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </Fragment>,
  document.getElementById('root')
);
