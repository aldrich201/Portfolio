import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Typist from 'react-typist';

import { Grid, Avatar, Typography } from '@material-ui/core';
import Pdf from '../../_blank/resume.pdf';
import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	container: {
		overflow: 'hidden',
		position: 'relative',

		'&::before': {
			content: '""',
			backgroundImage:
				'linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(./images/background.jpg)',
			backgroundSize: 'cover',
			width: '100%',
			height: '100%',
			zIndex: '-1',
			position: 'fixed'
		}

		// clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%, 0 25%, 25% 0 )'
	},
	picture: {
		marginTop: 'calc(100vh * 0.15)',
		height: '25rem',
		width: '25rem',
		boxShadow: '10px 5px 5px rgba(0,0,0,0.2)',
		[`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
			marginTop: 'calc(100vh * 0.1)',
			width: '15rem',
			height: '15rem'
		},

		[`${theme.breakpoints.down('md')} and (orientation: portrait)`]: {
			marginTop: 'calc(100vh * 0.15)'
		}
	},
	name: {
		marginTop: 'calc(100vh * 0.02)',
		letterSpacing: '2px',
		textShadow: '0 5px 5px rgba(0,0,0,0.2)',
		fontWeight: '700',
		[theme.breakpoints.down('md')]: {
			fontSize: '5rem'
		},
		[`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
			fontSize: '4rem'
		},
		[`${theme.breakpoints.down('sm')} and (orientation: portrait)`]: {
			fontSize: '4rem'
		}
	},
	bold: {
		color: '#FF4754',
		fontWeight: '700'
	},
	div: {
		margin: 0
	},
	a: {
		'&:link': {
			textDecoration: 'none'
		},
		'&:visited': {
			textDecoration: 'none'
		},
		marginTop: '2rem',
		[`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
			marginTop: '1rem'
		}
	}
}));

const Intro = () => {
	const [ typing, setTyping ] = useState(true);

	function doneTyping() {
		setTyping(false);
		setTyping(true);
	}
	const classes = useStyles();

	const subContent = typing ? (
		<Typist onTypingDone={doneTyping} cursor={{ show: false }}>
			<span style={{ color: '#2F5075' }}>I am a </span>{' '}
			<strong className={classes.bold}>Mechanical Engineer</strong>
			<Typist.Backspace delay={2000} count={25} />
			<span style={{ color: '#2F5075' }}>am an</span>{' '}
			<strong className={classes.bold}>Aspiring Web Developer</strong>
			<Typist.Backspace delay={2000} count={28} />
			<span style={{ color: '#2F5075' }}>am a</span>
			<strong className={classes.bold}> Gamer</strong>
			<Typist.Backspace delay={2000} count={9} />
			<Typist.Delay ms={100} />
		</Typist>
	) : null;

	return (
		<Grid container alignItems="center" className={classes.container} direction="column">
			<Avatar alt="Aldrich Ang" src="./images/me.jpg" className={classes.picture} />
			<Typography color="primary" className={classes.name} variant="h1">
				Aldrich Ang
			</Typography>

			<Typography className={classes.name} variant="h1">
				{subContent}
			</Typography>

			<a className={classes.a} href={Pdf} rel="noopener noreferrer" target="_blank">
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<DescriptionIcon />}
				>
					<Typography variant="subtitle1">Download Resume</Typography>
				</Button>
			</a>
		</Grid>
	);
};

export default Intro;
