import React from "react";
import LoginForm from "../../components/LoginForm";

const Admin = () => {
    if (!localStorage.getItem("token")) {
        return (
            <div>
                <LoginForm />
            </div>
        );
    }
    {
        return <div>kuksaft</div>;
    }
};

export default Admin;
