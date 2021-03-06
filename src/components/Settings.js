import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles/";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCogs,
	faPlayCircle,
	faPauseCircle,
	faDownload
} from "@fortawesome/free-solid-svg-icons";

//MUI Imports
import {
	Button,
	Card,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Input,
	Switch,
	Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	broswers: {
		display: "flex",
		boxSizing: "border-box",
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "0 auto",
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		color: "white"
	},
	incognito: {
		boxSizing: "border-box",
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "0 auto",
		padding: 20,
		alignItems: "center",
		width: "100%",
		color: "white"
	},
	website: {
		boxSizing: "border-box",
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "0 auto",
		padding: 20,
		alignItems: "center",
		width: "100%",
		color: "white"
	},
	devices: {
		display: "flex",
		boxSizing: "border-box",
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "10px auto 10px auto",
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		color: "white"
	},
	options: {
		display: "flex",
		boxSizing: "border-box",
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "0 auto 10px auto",
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		color: "white"
	},
	buttons: {
		display: "flex",
		boxSizing: "border-box",
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "0 auto",
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		color: "white"
	},
	exportButton: {
		marginLeft: "30px",
		backgroundColor: "#ffc133",
		color: "white"
	},
	stopButton: {
		marginLeft: "30px",
		backgroundColor: "#387de5",
		color: "white"
	},
	startButton: {
		marginLeft: "30px",
		backgroundColor: "#4fbd60",
		color: "white"
	},
	input: {
		width: 42,
		color: "white",
		marginLeft: 10,
		fontWeight: "bold"
	},
	checkbox: {
		marginLeft: 30
	}
}));

export default function Settings() {

	//Getting Settings from settings.JSON & setr initial State
	const [state, setState] = useState({});
	useEffect(() => {
		axios
			.get("./settings.json")
			.then(res => {
				setState(res.data);
				console.log(JSON.stringify(res.data.chrome));
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	//Handle Changes Functions
	const handleSwitch = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

	const handleInput = event =>
		setState({ ...state, [event.target.name]: event.target.value });

	const handleExport = () => {
		alert("Export Clicked");
	};
	const handleStart = () => {
		alert("Start Clicked");
	};
	const handleStop = () => {
		alert("Stop Clicked");
	};

	const classes = useStyles();

	return (
		<Grid container direction='column' justify='center' alignItems='center'>
			<div>
				<Typography variant='h5'>
					<FontAwesomeIcon color='#ffc133' icon={faCogs} /> Settings
				</Typography>
			</div>
			<br />

			{/* BROSWERS */}
			<Grid container spacing={1}>
				<Grid item xs={9}>
					<Card className={classes.broswers}>
						<FormGroup row>
							<FormControlLabel
								control={
									<Switch
										checked={state.chrome === "false" ? false : true}
										onChange={handleSwitch("chrome")}
										value='chrome'
										inputProps={{ "aria-label": "chrome switch" }}
									/>
								}
								label='Chrome'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.firefox === "false" ? "" : "true"}
										onChange={handleSwitch("firefox")}
										value='firefox'
										inputProps={{ "aria-label": "firefox switch" }}
									/>
								}
								label='FireFox'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.explorer === "false" ? "" : "true"}
										onChange={handleSwitch("explorer")}
										value='explorer'
										inputProps={{ "aria-label": "explorer switch" }}
									/>
								}
								label='Explorer'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.safari === "false" ? "" : "true"}
										onChange={handleSwitch("safari")}
										value='safari'
										inputProps={{ "aria-label": "safari switch" }}
									/>
								}
								label='Safari'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.opera === "false" ? "" : "true"}
										onChange={handleSwitch("opera")}
										value='opera'
										inputProps={{ "aria-label": "opera switch" }}
									/>
								}
								label='Opera'
							/>
						</FormGroup>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card className={classes.incognito}>
						<FormGroup row>
							<FormControlLabel
								control={
									<Switch
										checked={state.incognito === "false" ? "" : "true"}
										onChange={handleSwitch("incognito")}
										value='incognito'
										inputProps={{ "aria-label": "incognito switch" }}
									/>
								}
								label='Incognito'
							/>
						</FormGroup>
					</Card>
				</Grid>
			</Grid>
			{/* INPUTS */}
			<Grid container style={{ marginTop: 10 }}>
				<Card item className={classes.website}>
					<Typography variant='h5'>Configure Your Search</Typography>
					<br />
					<FormGroup row>
						<Typography variant='body1'>
							Wait
							<Input
								className={classes.input}
								name='websiteWait1'
								value={state.websiteWait1}
								margin='dense'
								onChange={handleInput}
								inputProps={{
									step: 1,
									min: 0,
									max: 100,
									type: "number",
									"aria-labelledby": "input-slider"
								}}
							/>
							<Input
								className={classes.input}
								name='websiteWait2'
								value={state.websiteWait2}
								margin='dense'
								onChange={handleInput}
								inputProps={{
									step: 1,
									min: 0,
									max: 100,
									type: "number",
									"aria-labelledby": "input-slider"
								}}
							/>
							seconds on the target website
						</Typography>
					</FormGroup>
					<FormControlLabel
						className={classes.checkbox}
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleSwitch("checkedA")}
								value='checkedA'
							/>
						}
						label='Visit the Page within the Site'
					/>
					<br />
					<FormGroup row>
						<Input
							className={classes.input}
							name='numPages'
							value={state.numPages}
							margin='dense'
							onChange={handleInput}
							inputProps={{
								step: 1,
								min: 0,
								max: 100,
								type: "number",
								"aria-labelledby": "input-slider"
							}}
						/>
						<Typography variant='body1'>
							Pages{" "}
							<Input
								className={classes.input}
								name='numPagesSec1'
								value={state.numPagesSec1}
								margin='dense'
								onChange={handleInput}
								inputProps={{
									step: 1,
									min: 0,
									max: 100,
									type: "number",
									"aria-labelledby": "input-slider"
								}}
							/>
							<Input
								className={classes.input}
								name='numPagesSec2'
								value={state.numPagesSec2}
								margin='dense'
								onChange={handleInput}
								inputProps={{
									step: 1,
									min: 0,
									max: 100,
									type: "number",
									"aria-labelledby": "input-slider"
								}}
							/>{" "}
							visit from to seconds
						</Typography>
					</FormGroup>
					<br />
					<FormGroup row>
						<Typography variant='body1'>
							After the operation is complete{" "}
							<Input
								className={classes.input}
								name='postOp1'
								value={state.postOp1}
								margin='dense'
								onChange={handleInput}
								inputProps={{
									step: 1,
									min: 0,
									max: 100,
									type: "number",
									"aria-labelledby": "input-slider"
								}}
							/>
							Pages{" "}
							<Input
								className={classes.input}
								name='postOp2'
								value={state.postOp2}
								margin='dense'
								onChange={handleInput}
								inputProps={{
									step: 1,
									min: 0,
									max: 100,
									type: "number",
									"aria-labelledby": "input-slider"
								}}
							/>
							seconds wait.
						</Typography>
					</FormGroup>
					<br />
					<FormGroup row>
						<Typography variant='body1'>
							Target site{" "}
							<Input
								className={classes.input}
								name='targetSite'
								value={state.targetSite}
								margin='dense'
								onChange={handleInput}
								inputProps={{
									step: 1,
									min: 0,
									max: 100,
									type: "number",
									"aria-labelledby": "input-slider"
								}}
							/>{" "}
							if not found times{" "}
							<Input
								className={classes.input}
								name='targetSiteMins'
								value={state.targetSiteMins}
								margin='dense'
								onChange={handleInput}
								inputProps={{
									step: 1,
									min: 0,
									max: 100,
									type: "number",
									"aria-labelledby": "input-slider"
								}}
							/>
							minutes wait.
						</Typography>
					</FormGroup>
					<br />
					<FormGroup row>
						<Input
							className={classes.input}
							name='autoReset'
							value={state.autoReset}
							margin='dense'
							onChange={handleInput}
							inputProps={{
								step: 1,
								min: 0,
								max: 100,
								type: "number",
								"aria-labelledby": "input-slider"
							}}
						/>{" "}
						<Typography vairant='body1'>
							automatic reset after operation.
						</Typography>
					</FormGroup>
				</Card>
			</Grid>

			{/* DEVICES */}
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Card className={classes.devices}>
						<FormGroup row>
							<FormControlLabel
								control={
									<Switch
										color='primary'
										checked={state.device === "false" ? "" : "true"}
										onChange={handleSwitch("device")}
										value='device'
										inputProps={{ "aria-label": "device switch" }}
									/>
								}
								label='Device Reset'
							/>
							<FormControlLabel
								control={
									<Switch
										color='primary'
										checked={state.vinn === "false" ? "" : "true"}
										onChange={handleSwitch("vinn")}
										value='vinn'
										inputProps={{ "aria-label": "vinn switch" }}
									/>
								}
								label='Vinn Reset'
							/>
							<FormControlLabel
								control={
									<Switch
										color='primary'
										checked={state.phone === "false" ? "" : "true"}
										onChange={handleSwitch("phone")}
										value='phone'
										inputProps={{ "aria-label": "phone switch" }}
									/>
								}
								label='Phone Reset'
							/>
							<FormControlLabel
								control={
									<Switch
										color='primary'
										checked={state.mobileData === "false" ? "" : "true"}
										onChange={handleSwitch("mobileData")}
										value='mobileData'
										inputProps={{ "aria-label": "mobileData switch" }}
									/>
								}
								label='Mobile Data'
							/>
							<FormControlLabel
								control={
									<Switch
										color='primary'
										checked={state.fly === "false" ? "" : "true"}
										onChange={handleSwitch("fly")}
										value='fly'
										inputProps={{ "aria-label": "fly switch" }}
									/>
								}
								label='Fly Mode'
							/>
						</FormGroup>
					</Card>
				</Grid>
			</Grid>
			{/* OPTIONS */}
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Card className={classes.options}>
						<FormGroup row>
							<FormControlLabel
								control={
									<Switch
										checked={state.cookies === "false" ? "" : "true"}
										onChange={handleSwitch("cookies")}
										value='cookies'
										inputProps={{ "aria-label": "cookies switch" }}
									/>
								}
								label='Remove Cookies'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.resolution === "false" ? "" : "true"}
										onChange={handleSwitch("resolution")}
										value='resolution'
										inputProps={{ "aria-label": "resolution switch" }}
									/>
								}
								label='Change Resolution'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.mouse === "false" ? "" : "true"}
										onChange={handleSwitch("mouse")}
										value='mouse'
										inputProps={{ "aria-label": "mouse switch" }}
									/>
								}
								label='Mouse Tracks'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.dataSaving === "false" ? "" : "true"}
										onChange={handleSwitch("dataSaving")}
										value='dataSaving'
										inputProps={{ "aria-label": "dataSaving switch" }}
									/>
								}
								label='Data Saving'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.random === "false" ? "" : "true"}
										onChange={handleSwitch("random")}
										value='random'
										inputProps={{ "aria-label": "random switch" }}
									/>
								}
								label='Random Generate'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.analytic === "false" ? "" : "true"}
										onChange={handleSwitch("analytic")}
										value='analytic'
										inputProps={{ "aria-label": "analytic switch" }}
									/>
								}
								label='Analytic Protection'
							/>
							<FormControlLabel
								control={
									<Switch
										checked={state.history === "false" ? "" : "true"}
										onChange={handleSwitch("history")}
										value='history'
										inputProps={{ "aria-label": "history switch" }}
									/>
								}
								label='Remove History'
							/>
						</FormGroup>
					</Card>
				</Grid>
			</Grid>
			{/* ACTION BUTTONS */}
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Card className={classes.buttons}>
						<Button
							variant='contained'
							size='large'
							className={classes.exportButton}
							onClick={handleExport}
						>
							Export <FontAwesomeIcon icon={faDownload} />
						</Button>
						<Button
							variant='contained'
							size='large'
							className={classes.startButton}
							onClick={handleStart}
						>
							Start <FontAwesomeIcon icon={faPlayCircle} />
						</Button>
						<Button
							variant='contained'
							size='large'
							className={classes.stopButton}
							onClick={handleStop}
						>
							Stop <FontAwesomeIcon icon={faPauseCircle} />
						</Button>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
}
