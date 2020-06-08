import React from "react";
import { connect } from "react-redux";

import ShowList from "../components/List/ShowList";
import NewList from "../components/List/NewList";

import { getListTotal } from "../store/reducers/list";
import "./home.css";
const Home = ({ list, total }) => {
    return (
        <div className="page-container">
            <NewList />
            {list.items.length > 0 && (
                <ShowList
                    date="06/06/2020"
                    price={list.items.price}
                    lista={list.items.ShowList}
                    quantity={list.items.length}
                    total={total}
                />
            )}
        </div>
    );
};
const mapStateToProps = (state) => ({
    list: state.list,
    total: getListTotal(state),
});
export default connect(mapStateToProps, null)(Home);
