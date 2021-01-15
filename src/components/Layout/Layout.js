import React from "react";

import Aux from "../../hoc/Auxil";
import classes from "./Layout.module.css";
import Toolbar from "../Navgations/Toolbar/Toolbar";

const Layout = (props) => (
  <Aux>
    <Toolbar/>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
