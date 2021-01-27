import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import AddSkill from "./AddSkill";
import AddLatest from "./AddLatest";

const AdminPage = ({ logOut }) => {
    const [addSkill, setAddSkill] = useState(true);
    const [addLatest, setAddLatest] = useState(false);

    const skillPage = () => {
        setAddSkill(true);
        setAddLatest(false);
    };

    const latestPage = () => {
        setAddLatest(true);
        setAddSkill(false);
    };
    return (
        <div>
            <AdminNavBar
                logOut={logOut}
                skillPage={skillPage}
                latestPage={latestPage}
            />
            {addSkill && <AddSkill />}
            {addLatest && <AddLatest />}
        </div>
    );
};

export default AdminPage;
