import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import AndroidNotification from "react-mui-android-notification";

const propTypes = {
	title: PropTypes.string.isRequired,
};

export default function MyComponent(props) {
	const { title } = props;
	return (
		<div className="my-component">
			<h1>{title}</h1>
			<p>This is an example component.</p>
			<Button>test</Button>
			<AndroidNotification />
		</div>
	);
}

MyComponent.propTypes = propTypes;
