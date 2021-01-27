import React, { useState, useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import AdminNavBar from "../../components/AdminNavBar";
import AddSkill from "../../components/AddSkill";
import AddLatest from "../../components/AddLatest";

const Admin = () => {
    const localToken = localStorage.getItem("token");
    const [token, setToken] = useState(localToken);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [addSkill, setAddSkill] = useState(true);
    const [addLatest, setAddLatest] = useState(false);

    const logOut = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    const skillPage = () => {
        setAddSkill(true);
        setAddLatest(false);
    };

    const latestPage = () => {
        setAddLatest(true);
        setAddSkill(false);
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
                <AdminNavBar
                    logOut={logOut}
                    skillPage={skillPage}
                    latestPage={latestPage}
                />
                {addSkill && <AddSkill />}
                {addLatest && <AddLatest />}
            </div>
        )
    );
};

export default Admin;
