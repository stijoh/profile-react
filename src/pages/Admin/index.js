import React, { useState, useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import { Button } from "@material-ui/core";

const Admin = () => {
    const localToken = localStorage.getItem("token");
    const [token, setToken] = useState(localToken);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (token) setIsLoggedIn(true);
    }, [token]);

    if (!token)
        return (
            <div>
                <LoginForm setToken={setToken} token={token} />
            </div>
        );

    return (
        isLoggedIn && (
            <div>
                <Button onClick={() => setToken(null)}>Logg ut</Button>
            </div>
        )
    );
};

export default Admin;
