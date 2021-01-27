import React from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";

const LoginForm = ({ setToken, token }) => {
    return (
        <div>
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
                                <div id="feedback">{props.errors.name}</div>
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
                                <div id="feedback">{props.errors.name}</div>
                            )}
                        </div>
                        <div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
