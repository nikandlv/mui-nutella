import { storiesOf } from "@storybook/react";
import React from "react";
import MyComponent from "../lib/MyComponent.es";

storiesOf("MyComponent", module).add("Component with title", () => (
	<MyComponent title="Hello World!" />
));
