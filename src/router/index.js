import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home";
import CreateList from "../components/List/CreateList";

const Router = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/new" component={CreateList} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
