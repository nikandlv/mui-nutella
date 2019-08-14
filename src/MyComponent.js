import React from "react";
import Button from "@material-ui/core/Button";
import Nutella from "./Nutella";
import Whatshot from "@material-ui/icons/Whatshot";
import Message from "@material-ui/icons/Message";
import {
	Checkbox,
	TextField,
	OutlinedInput,
	FormControlLabel,
	Grid,
	Tabs,
	Tab,
	Paper,
	Card,
	CardContent,
	Typography,
	Slider,
} from "@material-ui/core";
import { CirclePicker } from "react-color";
import AndroidNotification from "react-mui-android-notification";
let cache = [];
let counter = 0;
let iconCache = "whatshot";
export default class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "top-right",
			name: "Android Notification ",
			icon: <Whatshot />,
			date: "Nov 6",
			accent: "rgb(63, 81, 181)",
			title: "Awesome Notification",
			body: "this is an awesome notification !",
			rounded: false,
			variant: "oreo",
			absolute: false,
			config: {
				persistent: false,
				timeOut: 5000,
			},
		};

		this.setType = this.setType.bind(this);
		this.push = this.push.bind(this);
		this.setVariant = this.setVariant.bind(this);
		this.setIcon = this.setIcon.bind(this);
	}
	push() {
		counter++;
		cache.push(
			Nutella.push(
				"key-" + counter,
				this.state.type,
				this.state,
				[<Button>Inject test!</Button>],
				this.state.config,
			),
		);
	}

	clear() {
		cache.forEach(persistent => {
			Nutella.dismiss(persistent);
		});
	}

	setType(event, type) {
		this.setState({
			type,
		});
	}

	setVariant(event, variant) {
		this.setState({
			variant,
		});
	}
	setIcon(event, tab) {
		iconCache = tab;
		if (tab === "whatshot") {
			this.setState({
				icon: <Whatshot />,
			});
		} else {
			this.setState({
				icon: <Message />,
			});
		}
	}

	render() {
		const {
			type,
			config,
			name,
			title,
			body,
			date,
			accent,
			rounded,
			variant,
			absolute,
		} = this.state;
		const tabsStyle = {
			borderRadius: "100px",
			overflow: "hidden",
		};
		const colorPickerWrapper = {
			display: "flex",
			justifyContent: "center",
		};
		const cardStyles = {
			overflowY: "scroll",
			maxHeight: "50vh",
		};
		const notification = {
			zIndex: 2000,
			position: "relative",
		};
		return (
			<Grid container justify="center">
				<Grid item xs={12}>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</Grid>
				<Grid item xs={11} sm={7} md={5} lg={4}>
					<Card>
						<div style={notification}>
							<AndroidNotification {...this.state} />
						</div>
						<CardContent style={cardStyles}>
							<br />
							<br />
							<Typography variant="h4">Notification builder</Typography>
							<br />
							<br />
							<TextField
								label="Application/Service name"
								fullWidth
								variant="outlined"
								value={name}
								onChange={event => this.setState({ name: event.currentTarget.value })}
							/>
							<br />
							<br />
							<Grid container spacing={2}>
								<Grid item xs={12} md={6}>
									<TextField
										label="Title"
										fullWidth
										variant="outlined"
										value={title}
										onChange={event => this.setState({ title: event.currentTarget.value })}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextField
										label="Date"
										fullWidth
										variant="outlined"
										value={date}
										onChange={event => this.setState({ date: event.currentTarget.value })}
									/>
								</Grid>
							</Grid>
							<br />
							<br />
							<TextField
								label="Body"
								fullWidth
								variant="outlined"
								value={body}
								onChange={event => this.setState({ body: event.currentTarget.value })}
							/>
							<br />
							<br />
							<Typography variant="h6">Position</Typography>
							<br />
							<Paper style={tabsStyle}>
								<Tabs
									value={type}
									color="primary"
									onChange={this.setType}
									variant="scrollable"
									scrollButtons="auto"
								>
									<Tab label="Top Right" value="top-right" />
									<Tab label="Top Left" value="top-left" />
									<Tab label="Bottom Right" value="bottom-right" />
									<Tab label="Bottom Left" value="bottom-left" />
								</Tabs>
							</Paper>
							<br />
							<Typography variant="h6">Style</Typography>
							<br />
							<Paper style={tabsStyle}>
								<Tabs value={variant} color="primary" onChange={this.setVariant} centered>
									<Tab label="Nougat/Oreo" value="oreo" />
									<Tab label="Pie" value="pie" />
								</Tabs>
							</Paper>
							<br />
							<Typography variant="h6">Icon</Typography>
							<br />
							<Paper style={tabsStyle}>
								<Tabs value={iconCache} color="primary" onChange={this.setIcon} centered>
									<Tab icon={<Whatshot />} value="whatshot" />
									<Tab icon={<Message />} value="message" />
								</Tabs>
							</Paper>
							<br />
							<FormControlLabel
								control={
									<Checkbox
										color="primary"
										checked={absolute}
										onChange={() => {
											this.setState({
												absolute: !absolute,
											});
										}}
									/>
								}
								label="Absolute"
							/>
							<br />
							<FormControlLabel
								control={
									<Checkbox
										color="primary"
										checked={config.persistent}
										onChange={() => {
											this.setState({
												config: { ...config, persistent: !config.persistent },
											});
										}}
									/>
								}
								label="Persistent"
							/>
							<br />
							<FormControlLabel
								control={
									<Checkbox
										color="primary"
										checked={rounded}
										onChange={() => {
											this.setState({
												rounded: !rounded,
											});
										}}
									/>
								}
								label="Rounded"
							/>
							<br />
							<br />
							<Typography variant="h6">Accent color</Typography>
							<br />
							<br />
							<div style={colorPickerWrapper}>
								<CirclePicker
									color={accent}
									onChangeComplete={color => {
										this.setState({ accent: color.hex });
									}}
								/>
							</div>
							<CardContent>
								<Typography variant="h6">Duration</Typography>
								<br />
								<br />
								<Slider
									defaultValue={config.timeOut / 1000}
									valueLabelDisplay="auto"
									step={1}
									marks
									min={1}
									max={10}
									onChange={(_, value) => {
										this.setState({
											config: { ...config, timeOut: value * 1000 },
										});
									}}
								/>
							</CardContent>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Button fullWidth variant="outlined" color="primary" onClick={this.push}>
										Push
									</Button>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Button fullWidth variant="outlined" color="secondary" onClick={this.clear}>
										Clear
									</Button>
								</Grid>
								<Grid item xs={12}>
									<Button
										fullWidth
										variant="text"
										onClick={() => {
											console.log(this.state);
										}}
									>
										Print to console
									</Button>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Nutella.View variant={absolute ? "absolute" : "fixed"} />
			</Grid>
		);
	}
}
