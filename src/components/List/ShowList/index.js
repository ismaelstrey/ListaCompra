import React from "react";
import CustomCard from "../../../common/CustomCard";
import ListItem from "../ListItem";
import { Typography } from "@material-ui/core";
import { faCheck, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import ListFooter from "../ListFooter";

const ShowList = () => {
    return (
        <CustomCard
            link="/new"
            containerClass="list-container"
            footer={<ListFooter date="01/06/2020" price="100,00" />}
        >
            <div>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="home-title"
                >
                    Mês
                    <div className="list-card__body">
                        <ListItem
                            icon={faShoppingBasket}
                            message="Restantes"
                            quanty={5}
                        />
                        <ListItem
                            icon={faCheck}
                            message="Comprados"
                            quanty={50}
                        />
                    </div>
                </Typography>
            </div>
        </CustomCard>
    );
};

export default ShowList;
