import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
	project: {
		margin: '2rem auto'
	},
	icon: {
		position: 'relative',
		top: '1rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '4rem',
			top: ''
		}
	},
	title: {
		fontWeight: '600',
		textTransform: 'uppercase',
		[theme.breakpoints.down('sm')]: {
			fontSize: '4rem'
		}
	}
}));

const ProjectTitle = () => {
	const classes = useStyles();
	return (
		<Grid variant="h1" alignItems="flex-end" container className={classes.project} justify="center">
			<Typography variant="h1">
				<CodeIcon color="secondary" fontSize="inherit" className={classes.icon} />
			</Typography>
			<Typography className={classes.title} variant="h1" color="primary">
				Projects
			</Typography>
		</Grid>
	);
};

export default ProjectTitle;
