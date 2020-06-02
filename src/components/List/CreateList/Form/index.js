import React from "react";
import { MenuItem, TextField, InputAdornment, Button } from "@material-ui/core";

const Form = ({ units }) => {
    return (
        <form className="form-container">
            <div className="form-row">
                {" "}
                <TextField
                    label="Lista"
                    name="list"
                    className=""
                    value={""}
                    onChange={() => {}}
                    margin="normal"
                    required
                />
                <Button variant="outlined" color="secondary">
                    Adicionar
                </Button>
            </div>
            <div className="form-row">
                {" "}
                <TextField
                    label="Produto"
                    name="produto"
                    className=""
                    value={""}
                    onChange={() => {}}
                    margin="normal"
                    required
                />
                <TextField
                    label="Quantidade"
                    name="quantity"
                    className=""
                    value={""}
                    onChange={() => {}}
                    margin="normal"
                    required
                />
                <TextField
                    select
                    label="Unidade"
                    name="unity"
                    className=""
                    value={""}
                    onChange={() => {}}
                    margin="normal"
                    required
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
                    value={""}
                    onChange={() => {}}
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">R$</InputAdornment>
                        ),
                    }}
                />
            </div>
        </form>
    );
};

export default Form;
