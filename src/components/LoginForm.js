import React from "react";
import { Formik } from "formik";
import { TextField, Button, Box } from "@material-ui/core";
import { Card } from "reactstrap";

const LoginForm = ({ setToken }) => {
    return (
        <div className="container">
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={async (values, actions) => {
                    const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            username: values.username,
                            password: values.password,
                        }),
                    };
                    const response = await fetch(
                        "http://192.168.0.100:3500/login",
                        requestOptions
                    );
                    const data = await response.json();
                    setToken(data.token);
                    localStorage.setItem("token", data.token);
                }}
            >
                {(props) => (
                    <Card body className="text-center">
                        <div>
                            <h1>Login:</h1>
                        </div>
                        <Box>
                            <form onSubmit={props.handleSubmit}>
                                <div>
                                    <TextField
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.name}
                                        name="username"
                                        placeholder="Username"
                                    />
                                    {props.errors.name && (
                                        <div id="feedback">
                                            {props.errors.name}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <TextField
                                        type="password"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.name}
                                        name="password"
                                        placeholder="Password"
                                    />
                                    {props.errors.name && (
                                        <div id="feedback">
                                            {props.errors.name}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <br />
                                    <br />
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        color="primary"
                                        size="large"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Box>
                    </Card>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
