import React, { useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import AddSkill from "./AddSkill";
import AddLatest from "./AddLatest";

const AdminPage = ({ logOut, page, setPage }) => {
    const updatePage = (newpage) => setPage(newpage);

    useEffect(() => {}, [updatePage]);

    return (
        <div>
            <AdminNavBar logOut={logOut} updatePage={updatePage} />
            {page === "AddSkill" && <AddSkill />}
            {page === "AddLatest" && <AddLatest />}
        </div>
    );
};

export default AdminPage;
