import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Spring} from 'react-spring/renderprops'
import VisibilitySensor from "../../Visibility";

import {
	Grid,
	Typography,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	IconButton,
	Chip,
	Avatar,

} from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';

import { portfolio } from './Portfolio.js';
//style this more

const buttonClicked = (link) => {
	window.open(link, '_blank');
};

const gitClicked = (link) => {
	window.open(link, '_blank');
};

const useStyles = makeStyles(theme => ({
	container: {
		width: '110rem',
		margin: '0 auto 5rem auto'
	},
	root: {
		maxWidth: 360
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	chip: {
		fontSize: '1.8rem',
		marginTop: '5px'
	},
	button: {
		transition: 'all 0.2s',
		'&:active': {
			transform: 'scale(0.95)'
		}
	},
	git: {
		transition: 'all 0.2s',
		transform: 'scale(1.3)',
		'&:hover': {
			transform: 'scale(1.4)'
		}
	},
	avatar: {
		width: theme.spacing(5),
		height: theme.spacing(5)
	},
	subHeader: {
		fontWeight: '700'
	}
}));

const Projects = () => {
	// const [ shown, setShown ] = useState(false);

	

	const classes = useStyles();
	// //changethis
	// // if(shown) {
	// // 	revealed();
	// }

	// useEffect(
	// 	() => {
	// 		let onScroll;
	// 		window.addEventListener(
	// 			'scroll',
	// 			(onScroll = (e) => {
	// 				setScrollTop(e.target.documentElement.scrollTop);

	// 				if (e.target.documentElement.scrollTop >= 900) {
	// 					setShown(true);
	// 				}
	// 				// setScrolling(e.target.documentElement.scrollTop > scrollTop);
	// 			})
	// 		);

	// 		return () => window.removeEventListener('scroll', onScroll);
	// 	},
	// 	[ scrollTop ]
	// );


	const handleClick = () => {
		console.log('I am just here for the hover effect and to not look boring');
	};

	return (
		<Grid container justify="center" spacing={2} className={classes.container}>
			
			{portfolio.map((port) => (
				<VisibilitySensor key={port.id} once>
					{({isVisible}) => (
						<Spring to={{opacity: isVisible?1:0 }}>
					{props => (
						<Grid item xs={12} sm={4} style={props}>
						<Card className={classes.root}>
							<CardHeader
								color="primary"
								title={<Typography variant="h4" className={classes.subHeader}>{port.title}</Typography>}
								subheader={port.skillSumamry.map((skill) => (
									<Chip
										onClick={handleClick}
										label={skill.name}
										key={skill.name}
										avatar={<Avatar src={skill.logo} alt={skill.name} color="none" className={classes.avatar} />}
										color="primary"
										variant="outlined"
										className={classes.chip}
										size='small'
									/>
								))}
								disableTypography

							/>
							<CardMedia className={classes.media} image={port.photo} title={port.title} />
							<CardContent>
								<Typography variant="h5" color="textSecondary" component="p">
									{port.projectSummary}
								</Typography>
							</CardContent>
							<CardActions disableSpacing={false}>
								<Button
									variant="outlined"
									startIcon={<VisibilityOutlinedIcon />}
									color="secondary"
									onClick={() => buttonClicked(port.projectLink)}
									size="large"
									className={classes.button}
								>
									<Typography variant="h6" component="p">
										View Project
									</Typography>
								</Button>
								<IconButton
									aria-label="add to favorites"
									size="medium"
									edge="end"
									onClick={() => gitClicked(port.github)}
									color="secondary"
									className={classes.git}
									disableRipple={true}
									disableFocusRipple={true}
								>
									<GitHubIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
					)}
					
					</Spring>
					)}
				</VisibilitySensor>
				
			))}
			
			
		</Grid>
	);
};

export default Projects;
