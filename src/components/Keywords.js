import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTag,
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
	button: {
		color: "grey",
		border: "grey",
		textTransform: "lowercase"
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
		this.clearKeyword = this.clearKeyword.bind(this);
	}

	//Keywords input field
	handleChange = input => event => {
		this.setState({
			[input]: event.target.value
		});
	};

	addKeyWord = () => {
		if (this.state.newKeyword === "") {
			alert("Please Enter A New Keyword");
		} else {
			this.setState({
				keywords: [...this.state.keywords, this.state.newKeyword],
				newKeyword: ""
			});
		}
	};

	clearKeyword(index) {
		this.setState(({ keywords }) => {
			const newKeywords = [...keywords];
			newKeywords.splice(index, 1);
			return { keywords: newKeywords };
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container direction='column' justify='center' alignItems='center'>
				<div>
					<Typography variant='h5'>
						<FontAwesomeIcon color='#387de5' icon={faTag} /> KeyWords
					</Typography>
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
							<FontAwesomeIcon icon={faPlusCircle} />
						</Button>
					</Paper>
				</Card>
				<Grid container direction='column' justify='center' alignItems='center'>
					{this.state.keywords.map((word, index) => (
						<Card className={classes.word} key={index}>
							{word}
							<Button
								variant='outlined'
								className={classes.button}
								onClick={() => this.clearKeyword(index)}
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

export default withStyles(styles)(Keywords);
