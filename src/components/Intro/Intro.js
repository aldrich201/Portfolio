import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Typist from 'react-typist';

import { Grid, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
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
		transition: 'all 0.2s ease'
	},
	name: {
		marginTop: 'calc(100vh * 0.02)',
		color: '#2F5075',
		letterSpacing: '2px',
		textShadow: '0 5px 5px rgba(0,0,0,0.2)',
		fontWeight: '700'
	},
	bold: {
		color: '#FF4754'
	}
});

const Intro = () => {
	const [ typing, setTyping ] = useState(true);

	function doneTyping() {
		setTyping(false);
		setTyping(true);
	}
	const classes = useStyles();

	const subContent = typing ? (
		<Typist onTypingDone={doneTyping} cursor={{ show: false }}>
			<span>I am a </span> <strong className={classes.bold}>Mechanical Engineer</strong>
			<Typist.Backspace delay={2000} count={27} />
			<span>I am an </span> <strong className={classes.bold}>Aspiring Web Developer</strong>
			<Typist.Backspace delay={2000} count={31} />
			<span>I am a </span> <strong className={classes.bold}>Gamer</strong>
			<Typist.Backspace delay={2000} count={20} />
		</Typist>
	) : null;

	return (
		<Grid container alignItems="center" className={classes.container} direction="column">
			<Avatar alt="Aldrich Ang" src="./images/me.jpg" className={classes.picture} />
			<Typography className={classes.name} variant="h1">
				Aldrich Ang
			</Typography>

			<Typography className={classes.name} variant="h1">
				{subContent}
			</Typography>
		</Grid>
	);
};

export default Intro;
