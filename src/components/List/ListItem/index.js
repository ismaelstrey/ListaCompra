import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListItem.css";

const ListItem = ({ icon, message, quanty }) => {
    return (
        <div>
            <div className="list-card__item">
                <FontAwesomeIcon icon={icon} size="sm" />
                <p>
                    {quanty} Item(s) {message}
                </p>
            </div>
        </div>
    );
};

ListItem.propTypes = {
    icon: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    quanty: PropTypes.number,
};

export default ListItem;
