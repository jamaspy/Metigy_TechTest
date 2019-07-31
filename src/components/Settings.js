import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Slider from "./Slider/slider";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

//MUI Imports
import {
	Grid,
	Card,
	FormGroup,
	FormControlLabel,
	Button,
	Switch
} from "@material-ui/core";

const styles = {
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
    button:{
        marginLeft: '30px'
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

				{/* BROSWERS */}
				<Grid container spacing={1}>
					<Grid item xs={10}>
						<Card className={classes.broswers}>
							<FormGroup row>
								<FormControlLabel control={<Switch />} label='Chrome' />
								<FormControlLabel control={<Switch />} label='FireFox' />
								<FormControlLabel control={<Switch />} label='Explore' />
								<FormControlLabel control={<Switch />} label='Safari' />
								<FormControlLabel control={<Switch />} label='Opera' />
							</FormGroup>
						</Card>
					</Grid>
					<Grid item xs={2}>
						<Card className={classes.incognito}>
							<FormGroup row>
								<FormControlLabel control={<Switch />} label='Incognito' />
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
								<FormControlLabel control={<Switch />} label='Device Reset' />
								<FormControlLabel control={<Switch />} label='Vinn Reset' />
								<FormControlLabel control={<Switch />} label='Phone Reset' />
								<FormControlLabel control={<Switch />} label='Mobile Data' />
								<FormControlLabel control={<Switch />} label='Fly Mode' />
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
								<FormControlLabel
									control={<Switch />}
									label='Random Generate'
								/>
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
							<Button
								variant='contained'
								color='secondary'
								className={classes.button}
							>
								Export
							</Button>
							<Button
								variant='contained'
								color='secondary'
								className={classes.button}
							>
								Start
							</Button>
							<Button
								variant='contained'
								color='secondary'
								className={classes.button}
							>
								Stop
							</Button>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Settings);
