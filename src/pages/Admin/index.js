import { findByLabelText } from "@testing-library/react";
import React from "react";

const Admin = () => {
    const loginData = () => {
        return "balle";
    };
    console.log(JSON.stringify(loginData));

    const login = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
        };
        const response = await fetch(
            "http://127.0.0.1:3500/api/v1/sign_in",
            requestOptions
        );
        const data = await response.json();
        console.log(data);
    };
    return <div>Hello from admin ballefaen!</div>;
};

export default Admin;
