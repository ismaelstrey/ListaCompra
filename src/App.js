import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./common/Header";
import theme from "./Theme";
import Router from "./router";

import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Header />
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
}

export default App;
