import React from "react";

import ShowList from "../components/List/ShowList";
import NewList from "../components/List/NewList";
import "./home.css";
const Home = (props) => {
    return (
        <div className="page-container">
            <NewList />
            <ShowList />
        </div>
    );
};

export default Home;
