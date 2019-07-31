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
		chrome: true,
		firefox: false,
		safari: true,
		explorer: false,
		opera: false,
		incognito: true
	});

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
						<Slider name='Minutes' />
						<Slider name='Seconds' />
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
								control={<Switch color='primary' />}
								label='Device Reset'
							/>
							<FormControlLabel
								control={<Switch color='primary' />}
								label='Vinn Reset'
							/>
							<FormControlLabel
								control={<Switch color='primary' />}
								label='Phone Reset'
							/>
							<FormControlLabel
								control={<Switch color='primary' />}
								label='Mobile Data'
							/>
							<FormControlLabel
								control={<Switch color='primary' />}
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
							<FormControlLabel control={<Switch />} label='Remove Cookies' />
							<FormControlLabel
								control={<Switch />}
								label='Change Resolution'
							/>
							<FormControlLabel control={<Switch />} label='Mouse Tracks' />
							<FormControlLabel control={<Switch />} label='Data Saving' />
							<FormControlLabel control={<Switch />} label='Random Generate' />
							<FormControlLabel
								control={<Switch />}
								label='Analytic Protection'
							/>
							<FormControlLabel control={<Switch />} label='Remove History' />
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
