import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import App from './App';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2F5075'
		},
		secondary: {
			main: '#FF4754'
		},
		warning: {
			main: '#FFEC70'
		},
	},
	typography: {
		fontFamily: 'Raleway'
	}
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
