import { storiesOf } from "@storybook/react";
import React from "react";
import NotificationBuilder from "../lib/NotificationBuilder";
console.log(NotificationBuilder);

storiesOf("Demos", module).add("Notification Builder", () => <NotificationBuilder />);
