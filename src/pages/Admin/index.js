import React, { useState, useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import AdminPage from "../../components/AdminPage";

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
                <AdminPage logOut={logOut} />
            </div>
        )
    );
};

export default Admin;
