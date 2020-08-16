import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import ContactTitle from './ContactTitle'
import {contactDetails} from './ContactDetails'

import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';

import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '50vh',
		background: '#85CAFF'
	},
	width: {
		width: '110rem',
		margin: '0 auto',
		padding: '2rem 0',
		height: '0'
	},
	social: {
		alignSelf: 'center'
	},
	
	media: {
		color: '#FFFFFF',
		position: 'relative',
		top: '2px',
		right: '2px'
	},
	details: {
		width: '110rem',
		margin: '0 auto'
	}
}));

const Contact = () => {
	const classes = useStyles();

	const mediaClick = (id) => {
		const data = contactDetails.filter(contact => contact.id === id)
		const {link} = data[0];
		window.open(link)
	} 

	return (
		<Grid container className={classes.container}>
			<Grid direction='row' item container className={classes.details}>
				<ContactTitle />
				<Grid direction='column' justify='space-between' container item>
					<Grid container item>
					<Typography variant='h4' className={classes.media} >
						<EmailIcon fontSize='inherit' />
					</Typography>
					<Typography variant="h4" color="primary">
						Email: angaldrich31@gmail.com
					</Typography>	
					</Grid>
					
					<Grid container item>
					<Typography variant='h4' className={classes.media}>
						<PermPhoneMsgIcon fontSize='inherit' />
					</Typography>
					<Typography variant="h4" color="primary">
						Call/Message: +61 432 738 176
					</Typography>
					</Grid>

					<Grid container item>
					<Typography variant='h4' className={classes.media}>
						<HomeIcon fontSize='inherit'/>
					</Typography>
					<Typography variant="h4" color="primary">
						Address: Australian Capital Territory, Australia
					</Typography>
					</Grid>

					
				</Grid>
				<Grid container item className={classes.social}>
				
					{contactDetails.map(contact => (
						<IconButton key={contact.id} className={classes.media} onClick={() => mediaClick(contact.id)} >
							{contact.icon}
						</IconButton>
					))}
				</Grid>
					

			</Grid>
			
		</Grid>
	);
};

export default Contact;
