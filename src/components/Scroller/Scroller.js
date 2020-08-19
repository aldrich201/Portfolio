import React, { useRef, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import Fab from '@material-ui/core/Fab';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	timeline: {
		position: 'fixed',
		top: '30%',
		right: '2%',

		transition: 'all 0.2s linear',
		[`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
			top: '0'
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},

	primaryTail: {
		backgroundColor: theme.palette.primary.main
	},
	button: {
		color: '#FFFFFF'
	},
	button1: {
		opacity: 0.5
	},
	button2: {
		opacity: 0.5
	},
	button3: {
		opacity: 0.5
	},
	button4: {
		opacity: 0.5
	}
}));

const Scroller = () => {
	const classes = useStyles();
	const [ scrollTop, setScrollTop ] = useState(0);
	const ref1 = useRef();
	const ref2 = useRef();
	const ref3 = useRef();
	const ref4 = useRef();

	useEffect(
		() => {
			let onScroll;
			window.addEventListener(
				'scroll',
				(onScroll = (e) => {
					setScrollTop(e.target.documentElement.scrollTop);

					if (scrollTop >= 0 && scrollTop <= 0.1 * window.document.body.scrollHeight) {
						ref1.current.style.opacity = 1;
						ref2.current.style.opacity = 0.5;
						ref3.current.style.opacity = 0.5;
						ref4.current.style.opacity = 0.5;
					} else if (
						scrollTop >= 0.1 * window.document.body.scrollHeight &&
						scrollTop <= 0.3 * window.document.body.scrollHeight
					) {
						ref2.current.style.opacity = 1;
						ref1.current.style.opacity = 0.5;
						ref3.current.style.opacity = 0.5;
						ref4.current.style.opacity = 0.5;
					} else if (
						scrollTop >=
						0.98 * (parseInt(window.document.body.scrollHeight) - parseInt(window.innerHeight))
					) {
						ref4.current.style.opacity = 1;
						ref1.current.style.opacity = 0.5;
						ref3.current.style.opacity = 0.5;
						ref2.current.style.opacity = 0.5;
					} else {
						ref3.current.style.opacity = 1;
						ref1.current.style.opacity = 0.5;
						ref4.current.style.opacity = 0.5;
						ref2.current.style.opacity = 0.5;
					}
				})
			);

			return () => window.removeEventListener('scroll', onScroll);
		},
		[ scrollTop ]
	);

	//could prolly use map here or use a switch statement
	const onClickHandler1 = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const onClickHandler2 = () => {
		window.scrollTo({
			top: 0.2 * window.document.body.scrollHeight,
			behavior: 'smooth'
		});
	};

	const onClickHandler3 = () => {
		window.scrollTo({
			top: 0.38 * window.document.body.scrollHeight,
			behavior: 'smooth'
		});
	};

	const onClickHandler4 = () => {
		window.scrollTo({
			top: window.document.body.scrollHeight,
			behavior: 'smooth'
		});
	};

	return (
		<Timeline className={classes.timeline}>
			<TimelineItem>
				<TimelineSeparator>
					<Fab innerRef={ref1} color="secondary" className={classes.button1} onClick={onClickHandler1}>
						<AccountCircleIcon fontSize="large" className={classes.button} />
					</Fab>

					<TimelineConnector className={classes.primaryTail} />
				</TimelineSeparator>
			</TimelineItem>

			<TimelineItem>
				<TimelineSeparator>
					<Fab innerRef={ref2} color="secondary" className={classes.button2} onClick={onClickHandler2}>
						<InfoIcon fontSize="large" className={classes.button} />
					</Fab>

					<TimelineConnector className={classes.primaryTail} />
				</TimelineSeparator>
			</TimelineItem>

			<TimelineItem>
				<TimelineSeparator>
					<Fab innerRef={ref3} color="secondary" className={classes.button3} onClick={onClickHandler3}>
						<CodeIcon fontSize="large" className={classes.button} />
					</Fab>
					<TimelineConnector className={classes.primaryTail} />
				</TimelineSeparator>
			</TimelineItem>

			<TimelineItem>
				<TimelineSeparator>
					<Fab innerRef={ref4} color="secondary" className={classes.button4} onClick={onClickHandler4}>
						<SendIcon fontSize="large" className={classes.button} />
					</Fab>
				</TimelineSeparator>
			</TimelineItem>
		</Timeline>
	);
};

export default Scroller;
