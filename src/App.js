import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "./common/Header";
import theme from "./Theme";
import Router from "./router";

import "./App.css";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Header />
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
