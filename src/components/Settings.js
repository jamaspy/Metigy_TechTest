import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

//MUI Imports
import { Grid, Card } from "@material-ui/core";


const styles = {
	card: {
		boxSizing: "border-box",
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "0 auto",
		padding: 20,
		alignItems: "center",
		width: "100%"
	},
	paper: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center"
	},
	input: {
		marginLeft: 8,
		flex: 1
	},
	word: {
		boxSizing: "border-box",
		margin: "5px auto 0 auto",
		padding: 5,
		backgroundColor: "#263044",
		color: "white",
		width: "100%",
		height: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	},
	button:{
		color: "white",
		textTransform: "lowercase"
	}
};

export class Settings extends Component {



	render() {
		const { classes } = this.props;
		return (
			<Grid container direction='column' justify='center' alignItems='center'>
				<div>
					<h2>
						<FontAwesomeIcon color='#ffc133' icon={faCogs} /> Settings
					</h2>
				</div>
				<br />
				<Card className={classes.card}>
					
				</Card>
				
			</Grid>
		);
	}
}

export default withStyles(styles)(Settings);
