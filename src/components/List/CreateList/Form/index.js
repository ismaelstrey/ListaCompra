import React, { Component } from "react";
import { MenuItem, TextField, InputAdornment, Button } from "@material-ui/core";

class Form extends Component {
    state = {
        list: "",
        product: "",
        quantity: "",
        unit: "",
        price: "",
        showErrors: false,
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = () => {
        const { list, product, quantity, unit, price } = this.state;
        if (!list || !product || !quantity || !unit) {
            this.setState({ showErrors: true });
        } else {
            this.props.addProduct({ product, quantity, unit, price }, list);
            this.setState({
                list: "",
                product: "",
                quantity: "",
                unit: "",
                price: "",
                showErrors: false,
            });
        }
    };
    render() {
        const units = ["Kg", "Lt", "Un"];
        return (
            <form className="form-container">
                <div className="form-row">
                    {" "}
                    <TextField
                        label="Lista"
                        name="list"
                        className=""
                        value={this.state.list}
                        onChange={this.handleChange}
                        margin="normal"
                        required
                        error={!this.state.list && this.state.showErrors}
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={this.handleSubmit}
                    >
                        Adicionar
                    </Button>
                </div>
                <div className="form-row">
                    {" "}
                    <TextField
                        label="Produto"
                        name="product"
                        className=""
                        value={this.state.product}
                        onChange={this.handleChange}
                        margin="normal"
                        required
                        error={!this.state.product && this.state.showErrors}
                    />
                    <TextField
                        label="Quantidade"
                        name="quantity"
                        className=""
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        margin="normal"
                        required
                        error={!this.state.quantity && this.state.showErrors}
                    />
                    <TextField
                        select
                        label="Unidade"
                        name="unit"
                        className=""
                        value={this.state.unit}
                        onChange={this.handleChange}
                        margin="normal"
                        required
                        error={!this.state.unit && this.state.showErrors}
                    >
                        {units.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Preço"
                        name="price"
                        className=""
                        value={this.state.price}
                        onChange={this.handleChange}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    R$
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </form>
        );
    }
}

export default Form;
