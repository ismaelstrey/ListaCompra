import React from "react";
import CustomCard from "../../../common/CustomCard";
import ListItem from "../ListItem";
import { Typography } from "@material-ui/core";
import { faCheck, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import ListFooter from "../ListFooter";

const ShowList = ({ date, price, lista, quantity, total }) => {
    return (
        <CustomCard
            link="/new"
            containerClass="list-container"
            footer={<ListFooter date={date} price={price} total={total} />}
        >
            <div>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="home-title"
                >
                    {lista}
                    <div className="list-card__body">
                        <ListItem
                            icon={faShoppingBasket}
                            message="Restantes"
                            quanty={quantity}
                        />
                        <ListItem
                            icon={faCheck}
                            message="Comprados"
                            quanty={quantity}
                        />
                    </div>
                </Typography>
            </div>
        </CustomCard>
    );
};

export default ShowList;
