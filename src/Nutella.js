import React from "react";
import AndroidNotification from "react-mui-android-notification";
import { Button } from "@material-ui/core";

const Nutella = [];
let Update = () => [console.log("Nutella is not ready yet")];
function NutellaSection(props) {
	const items = Nutella.filter(item => item.position === props.position);
	return (
		<div className={props.position}>
			{items.map((item, key) => (
				<AndroidNotification {...item.data} key={key}>
					{item.actions.map((action, key) => (
						<React.Fragment key={key}>{action}</React.Fragment>
					))}
				</AndroidNotification>
			))}
		</div>
	);
}

class View extends React.Component {
	componentDidMount() {
		Update = () => {
			this.forceUpdate();
		};
	}
	render() {
		return (
			<React.Fragment>
				<NutellaSection position="top" />
				<NutellaSection position="bottom" />
				<NutellaSection position="left" />
				<NutellaSection position="right" />
			</React.Fragment>
		);
	}
}

const Interface = {
	push: (position, data, actions) => {
		Nutella.push({
			position,
			data,
			actions,
		});
		Update();
	},
};

export default {
	View,
	...Interface,
};
