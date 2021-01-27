import React, { useState, useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import { Button } from "@material-ui/core";

const Admin = () => {
    const localToken = localStorage.getItem("token");
    const [token, setToken] = useState(localToken);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const logOut = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if (token) setIsLoggedIn(true);
    }, [token]);

    if (!token)
        return (
            <div>
                <LoginForm setToken={setToken} />
            </div>
        );

    return (
        isLoggedIn && (
            <div>
                <Button onClick={logOut}>Logg ut</Button>
            </div>
        )
    );
};

export default Admin;
