import React from "react";
import "./ListFooter.css";

const ListFooter = ({ date, price }) => {
    return (
        <div className="list-footer">
            <p>{date}</p>
            <p>R$ {price}</p>
        </div>
    );
};

export default ListFooter;
