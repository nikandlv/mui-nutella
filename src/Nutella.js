import React from "react";
import AndroidNotification from "react-mui-android-notification";
import { makeStyles } from "@material-ui/styles";
import { TransitionGroup, Transition } from "react-transition-group";

const Nutella = {};
// eslint-disable-next-line no-console
let Update = () => console.log("Nutella is not ready yet");

const useStyles = makeStyles({
	wrapper: {
		display: "flex",
		flexDirection: "column",
		width: 380,
		position: "fixed",
		padding: "1rem",
		transition: "all 1s",
		overflow: "visible",
		zIndex: 2000,
		boxSizing: "border-box",
		"@media( max-width: 500px )": {
			width: "100%",
			padding: "0rem",
		},
		"&.absolute": {
			position: "absolute",
		},
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
	const { position, variant } = props;
	const items = Object.keys(Nutella).filter(key => Nutella[key].position === position);

	return (
		<TransitionGroup className={`${styles.wrapper} ${position} ${variant}`}>
			{items.map(index => {
				let item = Nutella[index];
				return (
					<FadeTransition
						key={index}
						variant={item.notification.variant}
						className={styles.notification}
					>
						{item.actions.length === 0 ? (
							<AndroidNotification className="test" {...item.notification} />
						) : (
							<AndroidNotification className="test" {...item.notification}>
								{item.actions.map((action, key) => (
									<React.Fragment key={key}>{action}</React.Fragment>
								))}
							</AndroidNotification>
						)}
					</FadeTransition>
				);
			})}
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
		const variant = this.props.variant || "fixed";
		return (
			<React.Fragment>
				<NutellaSection variant={variant} position="top-left" />
				<NutellaSection variant={variant} position="bottom-left" />
				<NutellaSection variant={variant} position="top-right" />
				<NutellaSection variant={variant} position="bottom-right" />
			</React.Fragment>
		);
	}
}

const Interface = {
	push: (index, input) => {
		const position = input.position || "bottom-left";
		const notification = input.notification || {};
		const actions = input.actions || [];
		const inputConfig = input.config;
		let config = {};
		Nutella[index] = {
			position,
			notification,
			actions,
		};
		Update();
		if (typeof inputConfig === "undefined") {
			config = {
				persistent: false,
				timeOut: 5000,
			};
		} else {
			config = inputConfig;
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
