import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '7rem',
		background: '#2F5075',
		color: 'white'
	},
	width: {
		width: '110rem',
		margin: '1rem auto'
	}
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.container}>
			<Grid alignContent="center" justify="space-between" container item className={classes.width}>
				<Typography variant="subtitle1">&copy; Copyright 2020. All rights reserved.</Typography>
				<Typography variant="subtitle1">Website developed and designed by Aldrich Ang.</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
