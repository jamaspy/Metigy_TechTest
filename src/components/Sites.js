import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTv,
	faMinusCircle,
	faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

//MUI Imports
import {
	Button,
	Card,
	Grid,
	InputBase,
	Paper,
	Typography
} from "@material-ui/core";

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
	site: {
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
	button: {
		color: "grey",
		border: "grey",
		textTransform: "lowercase"
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

	//Handle add-site input field
	handleChange = input => event => {
		this.setState({
			[input]: event.target.value
		});
	};

	addSite = () => {
		if (this.state.newSite === "") {
			alert("Please Enter A Web Address");
		} else {
			this.setState({
				sites: [...this.state.sites, this.state.newSite],
				newSite: ""
			});
		}
	};

	clearSite(index) {
		this.setState(({ sites }) => {
			const newSites = [...sites];
			newSites.splice(index, 1);
			return { sites: newSites };
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container direction='column' justify='center' alignItems='center'>
				<div>
					<Typography variant='h5'>
						<FontAwesomeIcon color='#4fbd60' icon={faTv} /> Sites
					</Typography>
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
							<FontAwesomeIcon icon={faPlusCircle} />
						</Button>
					</Paper>
				</Card>
				<Grid container direction='column' justify='center' alignItems='center'>
					{this.state.sites.map((site, index) => (
						<Card className={classes.site} key={index}>
							{site}
							<Button
								variant='outlined'
								className={classes.button}
								onClick={() => this.clearSite(index)}
							>
								<p>
									<FontAwesomeIcon color='grey' icon={faMinusCircle} /> clear{" "}
								</p>
							</Button>
						</Card>
					))}
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Sites);
