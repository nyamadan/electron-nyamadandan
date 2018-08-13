import "!style-loader!css-loader?modules=false&url=false!normalize.css";

import "!style-loader!css-loader?modules=false!sass-loader!./index.scss";
import * as React from "react";
import { render } from "react-dom";

import App from "./components/App";
render(<App/>, document.getElementById("root"));
