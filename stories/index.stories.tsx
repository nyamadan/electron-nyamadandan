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
