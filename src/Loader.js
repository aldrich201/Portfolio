import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100vh',
        background: '#FFEC70',
        animation: `$disappear 2000ms ${theme.transitions.easing.easeOut}`
	},
	loader: {
        fontSize: '10rem',
        animation: `$spin 5000ms linear`,
        animationIterationCount: 'infinite'
    },
    "@keyframes spin": { 
        "0%": { 
            transform: 'rotate(0deg)',
        },
        "100%": { 
            transform: 'rotate(360deg)'
        }
    },
    "@keyframes disappear": {
        "0%": {
            opacity: '1',
        },
        "95%": {
            opacity: '1',
        },
        "100%": {
            opacity: '0',
        }
    }
}));

const Loader = () => {
	const classes = useStyles();
	return (
		<Grid container justify="center" alignItems="center" className={classes.container}>
			<SettingsIcon className={classes.loader} />
		</Grid>
	);
};

export default Loader;
