import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    CardContent,
    CardActionArea,
    Card,
    Divider,
    CardActions,
    CardMedia,
} from "@material-ui/core";

import "./CustomCard.css";
const CustomCard = ({ children, footer, containerClass, link, image }) => {
    return (
        <div className={containerClass}>
            <Link to={link}>
                <Card className="card">
                    <CardActionArea className="card-action-area">
                        {image && (
                            <CardMedia
                                component="img"
                                className="card-img"
                                height="100"
                                image={image}
                                title="Image"
                            />
                        )}

                        <CardContent className="card-content">
                            <div>{children}</div>
                        </CardContent>
                    </CardActionArea>
                    {footer && (
                        <div>
                            <Divider />
                            <CardActions className="card-footer">
                                {footer}
                            </CardActions>
                        </div>
                    )}
                </Card>
            </Link>
        </div>
    );
};
CustomCard.propTypes = {
    containerClass: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    footer: PropTypes.element,
    link: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export default CustomCard;
