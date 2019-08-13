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
		"&.top-right": {
			right: 0,
			top: 0,
			flexDirection: "column-reverse",
		},
		"&.bottom-right": {
			right: 0,
			bottom: 0,
		},
		"&.top-left": {
			left: 0,
			top: 0,
			flexDirection: "column-reverse",
		},
		"&.bottom-left": {
			left: 0,
			bottom: 0,
		},
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
	exited: { maxHeight: 0, opacity: 0 },
};

const variants = {
	pie: { margin: "0.2rem 0rem" },
	oreo: { margin: "0rem 0rem" },
};

const FadeTransition = ({ children, in: inProp, variant }) => (
	<Transition in={inProp} timeout={duration} unmountOnExit={true} mountOnEnter={true}>
		{state => (
			<div
				style={{
					...defaultStyle,
					...transitionStyles[state],
					...variants[variant],
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
				<FadeTransition key={key} variant={item.data.variant} className={styles.notification}>
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
	push: (position, data, actions, config) => {
		Nutella.push({
			position,
			data,
			actions,
		});
		let index = Nutella.length - 1;
		Update();
		if (typeof config === "undefined") {
			config = {
				persistent: false,
				timeOut: 5000,
			};
		}
		if (!config.persistent) {
			window.setTimeout(() => {
				delete Nutella[index];
				Update();
			}, config.timeOut);
		}
		return index;
	},
	dismiss: index => {
		if (typeof Nutella[index] === "undefined") {
			return;
		}
		delete Nutella[index];
		Update();
	},
};

export default {
	View,
	...Interface,
};
