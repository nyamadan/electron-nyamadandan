import "!style-loader!css-loader?modules=false&url=false!normalize.css";

import "!style-loader!css-loader?modules=false!sass-loader!../src/index.scss";

import * as React from "react";

import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import App from "../src/components/App";

storiesOf("App", module)
  .add(
    "Application",
    withInfo()(() => (
      <App />
    )),
  );
