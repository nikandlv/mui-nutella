import React from "react";
import AndroidNotification from "react-mui-android-notification";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { TransitionGroup, Transition } from "react-transition-group";

const Nutella = [];
let Update = () => [console.log("Nutella is not ready yet")];

const useStyles = makeStyles({
	wrapper: {
		display: "flex",
		flexDirection: "column",
		width: 380,
		position: "absolute",
		padding: "1rem",
		transition: "all 1s",
		overflow: "hidden",
		"&.top-left": {
			left: 0,
			top: 0,
		},
		"&.bottom-right": {
			right: 0,
			bottom: 0,
		},
	},
	notification: {
		transition: "all 1s",
	},
});

const duration = 300;

const defaultStyle = {
	transition: `all ${duration}ms ease-in-out`,
	maxHeight: 0,
	opacity: 0,
};

const transitionStyles = {
	entering: { maxHeight: 0, opacity: 0 },
	entered: { maxHeight: "200px", opacity: 1 },
};

const FadeTransition = ({ children, in: inProp }) => (
	<Transition in={inProp} timeout={duration} unmountOnExit={true} mountOnEnter={true}>
		{state => (
			<div
				style={{
					...defaultStyle,
					...transitionStyles[state],
				}}
			>
				{children}
			</div>
		)}
	</Transition>
);

function NutellaSection(props) {
	const styles = useStyles();
	const items = Nutella.filter(item => item.position === props.position);
	return (
		<TransitionGroup className={`${styles.wrapper} ${props.position}`}>
			{items.map((item, key) => (
				<FadeTransition key={key} className={styles.notification}>
					<AndroidNotification className="test" {...item.data}>
						{item.actions.map((action, key) => (
							<React.Fragment key={key}>{action}</React.Fragment>
						))}
					</AndroidNotification>
				</FadeTransition>
			))}
		</TransitionGroup>
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
				<NutellaSection position="top-left" />
				<NutellaSection position="bottom-left" />
				<NutellaSection position="top-right" />
				<NutellaSection position="bottom-right" />
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
