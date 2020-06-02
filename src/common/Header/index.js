import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./header.css";
const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to="/">
                    {" "}
                    <Typography variant="h5" className="header-title">
                        Lista de compras
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
