import React from 'react';

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
		opacity: 0.5,
		transition: 'all 0.2s linear',

		'&:hover': {
			opacity: 1
		}
	},

	primaryTail: {
		backgroundColor: theme.palette.primary.main
	},
	button: {
		color: '#FFFFFF'
	}
}));

const Scroller = () => {
	const classes = useStyles();

	//could prolly use map here or use a switch statement
	const onClickHandler1 = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const onClickHandler2 = () => {
		window.scrollTo({
			top: 0.1738 * window.document.body.scrollHeight,
			behavior: 'smooth'
		});
	};

	const onClickHandler3 = () => {
		window.scrollTo({
			top: 0.375 * window.document.body.scrollHeight,
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
					<Fab color="secondary" className={classes.button} onClick={onClickHandler1}>
						<AccountCircleIcon fontSize="large" className={classes.button} />
					</Fab>

					<TimelineConnector className={classes.primaryTail} />
				</TimelineSeparator>
			</TimelineItem>

			<TimelineItem>
				<TimelineSeparator>
					<Fab color="secondary" className={classes.button} onClick={onClickHandler2}>
						<InfoIcon fontSize="large" className={classes.button} />
					</Fab>

					<TimelineConnector className={classes.primaryTail} />
				</TimelineSeparator>
			</TimelineItem>

			<TimelineItem>
				<TimelineSeparator>
					<Fab color="secondary" className={classes.button} onClick={onClickHandler3}>
						<CodeIcon fontSize="large" className={classes.button} />
					</Fab>
					<TimelineConnector className={classes.primaryTail} />
				</TimelineSeparator>
			</TimelineItem>

			<TimelineItem>
				<TimelineSeparator>
					<Fab color="secondary" className={classes.button} onClick={onClickHandler4}>
						<SendIcon fontSize="large" className={classes.button} />
					</Fab>
				</TimelineSeparator>
			</TimelineItem>
		</Timeline>
	);
};

export default Scroller;
