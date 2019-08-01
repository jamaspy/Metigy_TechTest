import React from "react";
import { makeStyles } from "@material-ui/core/styles/";
import "typeface-roboto";
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
	Grid,
	Card,
	FormGroup,
	FormControlLabel,
	Button,
	Switch,
	Typography,
	Input,
	Checkbox
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
	const [state, setState] = React.useState({
		// Browser Settings
		chrome: true,
		firefox: false,
		safari: true,
		explorer: false,
		opera: false,
		incognito: true,

		//Input Settings
		websiteWait1: 20,
		websiteWait2: 50,
		PageInSite: false,
		numPages: 10,
		numPagesSec1: 40,
		numPagesSec2: 20,
		postOp1: 30,
		postOp2: 60,
		targetSite: 20,
		targetSiteMins: 10,
		autoReset: 20,

		// Device Settings
		device: true,
		phone: true,
		mobileData: false,
		vinn: false,
		fly: false,

		// Option Settings
		cookies: true,
		analytic: false,
		dataSaving: true,
		mouse: true,
		resolution: false,
		random: false,
		history: true
	});

	//Handle Changes Functions
	const handleSwitch = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};
	const handleChecked = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};
	const handleInput = e =>
		setState({ ...state, [e.target.name]: e.target.value });

	const classes = useStyles();
	return (
		<Grid container direction='column' justify='center' alignItems='center'>
			<div>
				<h2>
					<FontAwesomeIcon color='#ffc133' icon={faCogs} /> Settings
				</h2>
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
										checked={state.chrome}
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
										checked={state.firefox}
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
										checked={state.explorer}
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
										checked={state.safari}
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
										checked={state.opera}
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
										checked={state.incognito}
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
					<Typography variant="h5">Configure Your Search</Typography>
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
									onChange={handleChecked("checkedA")}
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
										checked={state.device}
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
										checked={state.vinn}
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
										checked={state.phone}
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
										checked={state.mobileData}
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
										checked={state.fly}
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
										checked={state.cookies}
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
										checked={state.resolution}
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
										checked={state.mouse}
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
										checked={state.dataSaving}
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
										checked={state.random}
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
										checked={state.analytic}
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
										checked={state.history}
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
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Card className={classes.buttons}>
						<Button variant='contained' className={classes.exportButton}>
							Export <FontAwesomeIcon icon={faDownload} />
						</Button>
						<Button variant='contained' className={classes.startButton}>
							Start <FontAwesomeIcon icon={faPlayCircle} />
						</Button>
						<Button variant='contained' className={classes.stopButton}>
							Stop <FontAwesomeIcon icon={faPauseCircle} />
						</Button>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
}
