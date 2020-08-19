import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import ContactTitle from './ContactTitle';
import { contactDetails } from './ContactDetails';

import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';

import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '50vh',
		background: '#FFEC70',
		[`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
			height: '90vh'
		},
		[`${theme.breakpoints.down('xs')} and (orientation: portrait)`]: {
			height: '35vh'
		}
	},
	container2: {
		marginTop: '2rem',
		[theme.breakpoints.down('xs')]: {
			margin: '0 auto',
			width: '90%',
			marginTop: '0'
		}
	},
	social: {
		alignSelf: 'center',
		[theme.breakpoints.down('xs')]: {
			margin: '0 auto',
			width: '90%'
		}
	},

	media: {
		color: '#FFFFFF',
		position: 'relative',
		top: '5px',
		marginRight: '1rem',
		transform: 'scale(1.2)',
		[theme.breakpoints.down('xs')]: {
			top: '0'
		}
	},
	media2: {
		color: '#FFFFFF',
		position: 'relative',
		top: '5px',
		marginRight: '1rem',
		transform: 'scale(1.5)'
	},
	details: {
		width: '110rem',
		margin: '0 auto',
		[theme.breakpoints.down('md')]: {
			width: '90%'
		}
	},
	type: {
		fontWeight: '700',
		fontSize: '2rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem'
		}
	},
	contactMe: {
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem'
		}
	}
}));

const Contact = () => {
	const classes = useStyles();

	const mediaClick = (id) => {
		const data = contactDetails.filter((contact) => contact.id === id);
		const { link } = data[0];
		window.open(link);
	};

	return (
		<Grid container className={classes.container}>
			<Grid direction="row" item container className={classes.details}>
				<ContactTitle />
				<Grid className={classes.container2} direction="column" justify="space-between" container item>
					<Grid container item>
						<Typography variant="h4" className={classes.media}>
							<EmailIcon fontSize="inherit" />
						</Typography>
						<Typography className={classes.contactMe} variant="h4" color="primary">
							<Typography className={classes.type} display="inline">
								Email:
							</Typography>{' '}
							angaldrich31@gmail.com
						</Typography>
					</Grid>

					<Grid container item>
						<Typography variant="h4" className={classes.media}>
							<PermPhoneMsgIcon fontSize="inherit" />
						</Typography>
						<Typography className={classes.contactMe} variant="h4" color="primary">
							<Typography className={classes.type} display="inline">
								Call/Message:
							</Typography>{' '}
							+61 432 738 176
						</Typography>
					</Grid>

					<Grid container item>
						<Typography variant="h4" className={classes.media}>
							<HomeIcon fontSize="inherit" />
						</Typography>
						<Typography className={classes.contactMe} variant="h4" color="primary">
							<Typography className={classes.type} display="inline">
								Location:
							</Typography>{' '}
							Australian Capital Territory, Australia
						</Typography>
					</Grid>
				</Grid>
				<Grid container item className={classes.social}>
					{contactDetails.map((contact) => (
						<IconButton
							size="medium"
							key={contact.id}
							className={classes.media2}
							onClick={() => mediaClick(contact.id)}
						>
							{contact.icon}
						</IconButton>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Contact;
