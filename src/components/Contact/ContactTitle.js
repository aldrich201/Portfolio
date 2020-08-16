import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	width: {
		width: '110rem',
		margin: '0 auto',
		padding: '3rem 0',
		height: '0'
	},
	icon: {
		position: 'relative',
		top: '5px',
		color: 'white'
	},
	title: {
		fontWeight: '600',
		textTransform: 'uppercase'
	}
}));

const ContactTitle = () => {
	const classes = useStyles();
	return (
		<Grid container item className={classes.width} justify="center">
			<Typography variant="h1">
				<SendIcon fontSize="inherit" className={classes.icon} />
			</Typography>
			<Typography className={classes.title} variant="h1" color="primary">
				Contact
			</Typography>
		</Grid>
	);
};

export default ContactTitle;
