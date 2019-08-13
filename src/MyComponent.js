import React from "react";
import Button from "@material-ui/core/Button";
import Nutella from "./Nutella";
import Whatshot from "@material-ui/icons/Whatshot";

export default class MyComponent extends React.Component {
	push() {
		Nutella.push(
			"top",
			{
				name: "Android Notification",
				icon: <Whatshot />,
				date: "Nov 6",
				accent: "rgb(63, 81, 181)",
				title: "Awesome Notification",
				body: "this is an awesome notification !",
				rounded: false,
				variant: "oreo",
			},
			[<Button>Inject test!</Button>],
		);
	}

	render() {
		return (
			<div>
				<Button onClick={this.push}>Push top</Button>
				<Nutella.View />
			</div>
		);
	}
}
