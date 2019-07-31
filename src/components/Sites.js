import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

//MUI Imports
import { Grid, InputBase, Button, Paper, Card } from "@material-ui/core";

const styles = {
	card: {
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "0 auto",
		padding: 20,
		alignItems: "center"
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
	site: {
		boxSizing: "border-box",
		margin: "5px auto 0 auto",
		padding: 5,
		backgroundColor: "#263044",
		color: "white",
		width: 286,
		height: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	}
};

export class Sites extends Component {
	constructor() {
		super();
		this.state = {
			newSite: "",
			sites: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.addSite = this.addSite.bind(this);
	}

	//sites input field
	handleChange = input => event => {
		this.setState({
			[input]: event.target.value
		});
	};

	addSite = () => {
		console.log(`New Site: ${this.state.newSite}`);
		this.setState({
			sites: [...this.state.sites, this.state.newSite],
			newSite: ""
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid container direction='column' justify='center' alignItems='center'>
				<div>
					<h2>
						<FontAwesomeIcon color='#4fbd60' icon={faTv} /> Sites
					</h2>
				</div>
				<br />
				<Card className={classes.card}>
					<Paper className={classes.paper}>
						<InputBase
							className={classes.input}
							placeholder='Add Site'
							value={this.state.newSite}
							onChange={this.handleChange("newSite")}
							inputProps={{ "aria-label": "add sites" }}
						/>
						<Button variant='outlined' color='secondary' onClick={this.addSite}>
							+
						</Button>
					</Paper>
				</Card>
				<Grid container direction='column' justify='center' alignItems='center'>
					{this.state.sites.map(site => (
						<Card className={classes.site} key={Math.random()}>
							{site}
							<Button variant='outlined' color='light' onClick={this.addSite}>
								Remove
							</Button>
						</Card>
					))}
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Sites);
