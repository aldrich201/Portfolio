import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: '50rem',
		background: '#FFEC70',
		color: '#FFFFFF',
		[theme.breakpoints.up('xl')]: {
			minHeight: '47.5rem'
		},
		[theme.breakpoints.down('lg')]: {
			minHeight: '50rem'
		},
		[theme.breakpoints.down('md')]: {
			minHeight: '60rem'
		},
		[theme.breakpoints.down('xs')]: {
			minHeight: '90rem'
		}
	},
	aboutHeader: {
		width: '110rem',
		margin: '3rem auto',
		height: '0',
		[theme.breakpoints.up('xl')]: {
			width: '75%'
		},
		[theme.breakpoints.down('lg')]: {
			width: '90%'
		},
		[theme.breakpoints.down('xs')]: {
			width: '85%'
		}
	},
	about: {
		fontWeight: '600',
		textTransform: 'uppercase',
		[theme.breakpoints.down('sm')]: {
			fontSize: '4rem'
		}
	},
	icon: {
		position: 'relative',
		top: '5px',
		color: '#FFFFFF',
		[theme.breakpoints.down('sm')]: {
			fontSize: '4rem',
			top: '-11px'
		}
	},
	au: {
		fontWeight: '700',
		fontSize: '2rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem'
		}
	},
	text: {
		marginTop: '2rem',
		lineHeight: '3rem',
		[theme.breakpoints.down('sm')]: {
			marginTop: '0'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem'
		}
	}
}));

const About = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.container}>
			<Grid container justify="center" align-items="center" className={classes.aboutHeader} item>
				<Typography variant="h1">
					<InfoIcon className={classes.icon} fontSize="inherit" color="primary" />
				</Typography>
				<Typography color="primary" variant="h1" className={classes.about}>
					About me
				</Typography>
				<Typography color="primary" variant="h4" className={classes.text}>
					Hi! My name is{' '}
					<Typography className={classes.au} display="inline">
						Aldrich
					</Typography>. I am a Mechanical Engineer from the{' '}
					<Typography className={classes.au} display="inline">
						Philippines
					</Typography>
					, I just recently migrated to{' '}
					<Typography className={classes.au} display="inline">
						Australia
					</Typography>{' '}
					last 30 January 2020. I have been coding since December of 2019 when I bought an online course on
					web development and since then, I’ve never had a single day without coding.
					<br />
					<br />
					I am interested in both{' '}
					<Typography className={classes.au} display="inline">
						Front-End
					</Typography>{' '}
					and{' '}
					<Typography className={classes.au} display="inline">
						Back-End
					</Typography>{' '}
					development and I am currently working on my Front-End Development skills with{' '}
					<Typography className={classes.au} display="inline">
						ReactJS
					</Typography>{' '}
					where I made most of my projects with. I also have a good understanding of the Back-End side of Web
					Development having done projects with{' '}
					<Typography className={classes.au} display="inline">
						NodeJS
					</Typography>. I look forward to{' '}
					<Typography className={classes.au} display="inline">
						learning more and improving my skills
					</Typography>{' '}
					in this fast-paced and ever-changing industry.
					<br />
					<br />
					Currently, I work as a {' '}
					<Typography className={classes.au} display="inline">
						Facilities Coordinator / Administrator
					</Typography>{' '}
					in a Property Management company. In all my previous and current jobs, I have always showcased my
					ability to liaise with people, solve problems, and work in a team. But if you ask me what my best
					asset is, it would be {' '}
					<Typography className={classes.au} display="inline">
						my curiosity and my drive for learning.
					</Typography>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default About;
