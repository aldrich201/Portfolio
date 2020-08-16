import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles( theme => ({
	intro: {
		height: '100vh'
	},
	project: {
		background: '#FFFFFF'
	},
	container: {
		animation: `$fadeIn 500ms ${theme.transitions.easing.easeOut}`
	},
	"@keyframes fadeIn": {
		"0%": {
			opacity: '0',
		},
		"100%": {
			opacity: '1'
		}
	}
}));
