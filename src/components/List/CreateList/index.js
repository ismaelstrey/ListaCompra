import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ListActions } from "../../../store/actions/list";
import Item from "../Item";
import Form from "./Form";
import "./CreateList.css";

class CreateList extends Component {
    addProduct = (product, list) => {
        this.props.addProduct(product, list);
    };
    render() {
        return (
            <div className="page-container">
                <Form addProduct={this.addProduct} />
                <div className="list-items-container">
                    {this.props.list.items.map((item) => (
                        <Item
                            item={item}
                            toggleProduct={this.props.toggleProduct}
                            deleteProduct={this.props.deleteProduct}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({ list: state.list });
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(ListActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
