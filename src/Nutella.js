import React from "react";
import Whatshot from "@material-ui/icons/Whatshot";
import AndroidNotification from "react-mui-android-notification";

const Nutella = [
	{
		position: "top",
		data: {
			name: "Android Notification",
			icon: <Whatshot />,
			date: "Nov 6",
			accent: "rgb(63, 81, 181)",
			title: "Awesome Notification",
			body: "this is an awesome notification !",
			rounded: false,
			variant: "oreo",
		},
	},
];

function NutellaSection(props) {
	const items = Nutella.filter(item => item.position === props.position);
	return (
		<div className={props.position}>
			{items.map((item, key) => {
				console.log(item);
				return <AndroidNotification {...item.data} key={key} />;
			})}
		</div>
	);
}

function View() {
	return (
		<React.Fragment>
			<NutellaSection position="top" />
			<NutellaSection position="bottom" />
			<NutellaSection position="left" />
			<NutellaSection position="right" />
		</React.Fragment>
	);
}

const Interface = {
	push: (position, data) => {
		Nutella.push({
			position,
			data,
		});
	},
};

export default {
	View,
	...Interface,
};
