import { storiesOf } from "@storybook/react";
import React from "react";
import NotificationBuilder from "../lib/NotificationBuilder.es";

storiesOf("Demos", module).add("Notification Builder", () => (
	<NotificationBuilder title="Hello World!" />
));
