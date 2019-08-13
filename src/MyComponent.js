import React from "react";
import Button from "@material-ui/core/Button";
import Nutella from "./Nutella";
import Whatshot from "@material-ui/icons/Whatshot";
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
} from "@material-ui/core";
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
			config: {
				persistent: false,
				timeOut: 5000,
			},
		};

		this.setType = this.setType.bind(this);
		this.push = this.push.bind(this);
	}
	push() {
		Nutella.push(this.state.type, this.state, [<Button>Inject test!</Button>], this.state.config);
	}

	setType(event, type) {
		this.setState({
			type,
		});
	}

	render() {
		const { type, config, title, body, date } = this.state;
		const tabsStyle = {
			borderRadius: "100px",
			overflow: "hidden",
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
				<Grid item xs={11} md={7}>
					<Card>
						<CardContent>
							<Typography variant="h4">Notification builder</Typography>
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

							<Paper style={tabsStyle}>
								<Tabs value={type} color="primary" onChange={this.setType}>
									<Tab label="Top Right" value="top-right" />
									<Tab label="Top Left" value="top-left" />
									<Tab label="Bottom Right" value="bottom-right" />
									<Tab label="Bottom Left" value="bottom-left" />
								</Tabs>
							</Paper>
							<br />
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
							<br />
							<Button variant="contained" color="primary" onClick={this.push}>
								Push
							</Button>
						</CardContent>
					</Card>
				</Grid>
				<Nutella.View />
			</Grid>
		);
	}
}
