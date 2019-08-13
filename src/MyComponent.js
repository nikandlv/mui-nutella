import React from "react";
import Button from "@material-ui/core/Button";
import Nutella from "./Nutella";
import Whatshot from "@material-ui/icons/Whatshot";
import {
	Select,
	MenuItem,
	Checkbox,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	FormControlLabel,
	Grid,
} from "@material-ui/core";
let counter = 0;
export default class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "top-right",
			name: "Android Notification " + counter,
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
		counter++;
		Nutella.push(this.state.type, this.state, [<Button>Inject test!</Button>], this.state.config);
	}

	setType(type) {
		this.setState({
			type: type.target.value,
		});
	}

	render() {
		const { type, config, title, body, date } = this.state;
		return (
			<div
				style={{
					display: "block",
					margin: "0 auto",
					maxWidth: "50%",
					padding: "10rem 0",
				}}
			>
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

				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="outlined-age-simple">Position</InputLabel>
					<Select
						input={<OutlinedInput labelWidth={60} />}
						fullWidth
						outlined
						variant="outlined"
						label="Test"
						value={type}
						onChange={this.setType}
					>
						<MenuItem value="top-right">Top Right</MenuItem>
						<MenuItem value="top-left">Top Left</MenuItem>
						<MenuItem value="bottom-right">Bottom Right</MenuItem>
						<MenuItem value="bottom-left">Bottom Left</MenuItem>
					</Select>
				</FormControl>
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
				<Nutella.View />
			</div>
		);
	}
}
