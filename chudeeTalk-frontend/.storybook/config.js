import { configure } from "@storybook/react";
import BaseStyles from "../src/styles";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
BaseStyles();
configure(loadStories, module);
