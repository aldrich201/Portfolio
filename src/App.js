import React, { useState, useEffect } from 'react';
import './App.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Loader from './Loader';
// import Scroll from './components/Scroll/Scroll';
import Scroller from './components/Scroller/Scroller';

import { Grid } from '@material-ui/core';

import { useStyles } from './styles';
import ProjectTitle from './components/Projects/ProjectTitle';

//need resume
//sidebar
//scroll up click

function App() {
	const [ loading, setLoading ] = useState(true);
	const classes = useStyles();

	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	useEffect(() => {
		const waitLoad = async (milliseconds = 2000) => {
			await sleep(milliseconds);
			setLoading(false);
		};
		waitLoad(2000);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<Loader />
			) : (
				<Grid container className={classes.container}>
					<Grid container item className={classes.intro}>
						<Intro />
					</Grid>

					<About />

					<Grid container item className={classes.project}>
						<ProjectTitle />
						<Projects />
					</Grid>

					<Contact />

					<Footer />

					<Scroller />
				</Grid>
			)}
		</div>
	);
}

export default App;
