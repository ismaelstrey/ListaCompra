import React from "react";
import CustomCard from "../../../common/CustomCard";

import { Typography, Checkbox } from "@material-ui/core";
import ListItemFooter from "../ListItemFooter";
const Item = ({ item, deleteProduct, toggleProduct }) => {
    return (
        <CustomCard
            link="#"
            image="https://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
            containerClass="list-item"
            footer={
                <ListItemFooter item={item} deleteProduct={deleteProduct} />
            }
        >
            <div>
                <div className="list-item-header">
                    <Typography variant="subtitle1" component="h2">
                        {item.product}
                    </Typography>
                    <Typography component="p">{item.quantity}</Typography>
                    <Checkbox
                        onClick={() => toggleProduct(item.id)}
                        checked={item.checked}
                    />
                </div>
                <Typography component="p">{item.unity}</Typography>
                <Typography component="p">R$ {item.price}</Typography>
            </div>
        </CustomCard>
    );
};

export default Item;
