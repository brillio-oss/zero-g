import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs]
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const knobsButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);

export const asDynamicVariables = () => {
  const name = text("Name", "Brillio");
  const age = number("Age", 5);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};
