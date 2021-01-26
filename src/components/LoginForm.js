import React from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";

const LoginForm = ({ setToken, token }) => {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values, actions) => {
                    const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            user: {
                                email: values.email,
                                password: values.password,
                            },
                        }),
                    };
                    const response = await fetch(
                        "http://192.168.0.100:3500/api/v1/sign_in",
                        requestOptions
                    );
                    const data = await response.json();
                    console.log(data);
                    setToken(data.data.user.authentication_token);
                    localStorage.setItem(
                        "token",
                        data.data.user.authentication_token
                    );
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
                                name="email"
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
