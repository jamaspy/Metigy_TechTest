import React from "react";
import { makeStyles } from "@material-ui/core/styles/";
import Slider from "./Slider/slider";

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
	Switch
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

	//Handle Switches Change
	const handleChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

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
										onChange={handleChange("chrome")}
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
										onChange={handleChange("firefox")}
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
										onChange={handleChange("explorer")}
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
										onChange={handleChange("safari")}
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
										onChange={handleChange("opera")}
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
										onChange={handleChange("incognito")}
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
			{/* SLIDERS */}
			<Grid container style={{ marginTop: 10 }}>
				<Card item className={classes.website}>
					<FormGroup row>
						<Slider name='From Seconds' />
						<Slider name='To Seconds' />
					</FormGroup>
					<FormControlLabel
						control={<Switch />}
						label='Vist the Page within the Site'
					/>
					<br />
					<br />
					<FormGroup row>
						<Slider name='Pages' />
						<Slider name='Seconds' />
						<Slider name='Seconds' />
					</FormGroup>
					<br />
					<br />
					<FormGroup row>
						<Slider name='Seconds' />
						<Slider name='Seconds' />
					</FormGroup>
					<br />
					<br />
					<FormGroup row>
						<Slider name='Seconds' />
						<Slider name='Seconds' />
					</FormGroup>
					<br />
					<br />
					<FormGroup row>
						<Slider name='Auto Reset After Operation' />
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
										onChange={handleChange("device")}
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
										onChange={handleChange("vinn")}
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
										onChange={handleChange("phone")}
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
										onChange={handleChange("mobileData")}
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
										onChange={handleChange("fly")}
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
										onChange={handleChange("cookies")}
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
										onChange={handleChange("resolution")}
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
										onChange={handleChange("mouse")}
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
										onChange={handleChange("dataSaving")}
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
										onChange={handleChange("random")}
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
										onChange={handleChange("analytic")}
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
										onChange={handleChange("history")}
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
