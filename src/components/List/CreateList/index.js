import React from "react";
import { Typography, Checkbox } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import Form from "./Form";
import CustomCard from "../../../common/CustomCard";
import "./CreateList.css";

const units = ["Kg", "Lt", "Un"];
const CreateList = () => {
    return (
        <div className="page-container">
            <Form units={units} />

            <div className="list-items-container">
                <CustomCard
                    link="#"
                    image="https://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
                    containerClass="list-item"
                    footer={<ListItemFooter />}
                >
                    <div>
                        <div className="list-item-header">
                            <Typography variant="subtitle1" component="h2">
                                Café
                            </Typography>
                            <Checkbox />
                        </div>
                        <Typography component="p">1 Unidade</Typography>
                        <Typography component="p">R$ 10,00</Typography>
                    </div>
                </CustomCard>
            </div>
        </div>
    );
};

const ListItemFooter = () => (
    <div className="list-card-footer">
        <div className="list-card-footer-actions">
            <FontAwesomeIcon icon={faPen} color="#00b0ff" size="1x" />
            <FontAwesomeIcon icon={faTrash} color="#e91e63" size="1x" />
        </div>
        <p>Total: R$ 50,00</p>
    </div>
);

export default CreateList;
