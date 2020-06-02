import React from "react";
import CustomCard from "../../../common/CustomCard";

import "./NewList.css";
const NewList = () => {
    return (
        <CustomCard
            className="new-list-container"
            containerClass={"new-list-container"}
            link={"/new"}
        >
            <h3>Adicionar novas listas</h3>
        </CustomCard>
    );
};

export default NewList;
