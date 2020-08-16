import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles({
	container: {
		minHeight: '65vh',
		background: '#FFEC70',
		color: '#FFFFFF'
	},
	aboutHeader: {
		width: '110rem',
		margin: '3rem auto',
		height: '0'
	},
	about: {
		fontWeight: '600',
		textTransform: 'uppercase'
	},
	icon: {
		position: 'relative',
		top: '5px',
		color: '#FFFFFF'
	},
	ph: {
		color: '#FFEC70',
		fontWeight: '700'
	},
	au: {
		fontWeight: '700',
		fontSize: '1.8rem'
	},
	text: {
		marginTop: '2rem'
	}
});

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
