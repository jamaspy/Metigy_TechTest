import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

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
	word: {
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

export class Keywords extends Component {
	constructor() {
		super();
		this.state = {
			newKeyword: "",
			keywords: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.addKeyWord = this.addKeyWord.bind(this);
	}

	//Keywords input field
	handleChange = input => event => {
		this.setState({
			[input]: event.target.value
		});
	};

	addKeyWord = () => {
		console.log(`New Word: ${this.state.newKeyword}`);
		this.setState({
			keywords: [...this.state.keywords, this.state.newKeyword],
			newKeyword: ""
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid container direction='column' justify='center' alignItems='center'>
				<div>
					<h2>
						<FontAwesomeIcon color='#387de5' icon={faTag} /> KeyWords
					</h2>
				</div>
				<br />
				<Card className={classes.card}>
					<Paper className={classes.paper}>
						<InputBase
							className={classes.input}
							placeholder='Add Keyword'
							value={this.state.newKeyword}
							onChange={this.handleChange("newKeyword")}
							inputProps={{ "aria-label": "add keywords" }}
						/>
						<Button
							variant='outlined'
							color='secondary'
							onClick={this.addKeyWord}
						>
							+
						</Button>
					</Paper>
				</Card>
				<Grid container direction='column' justify='center' alignItems='center'>
					{this.state.keywords.map(word => (
						<Card className={classes.word} key={Math.random()}>
							{word}
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

export default withStyles(styles)(Keywords);