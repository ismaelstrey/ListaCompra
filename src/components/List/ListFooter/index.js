import React from "react";
import "./ListFooter.css";

const ListFooter = ({ date, price, total }) => {
    return (
        <div className="list-footer">
            <p>{date}</p>
            <p>R$ {total}</p>
        </div>
    );
};

export default ListFooter;
