import React from "react";
import Button from "@material-ui/core/Button";
import Nutella from "./Nutella";

export default class MyComponent extends React.Component {
	push() {
		Nutella.push();
	}

	render() {
		return (
			<div>
				<Button onClick={this.push}>test</Button>
				<Nutella.View />
			</div>
		);
	}
}
