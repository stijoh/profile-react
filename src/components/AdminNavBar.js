import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
} from "reactstrap";

const AdminNavBar = ({ logOut, latestPage, skillPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/admin">Portfolio Admin</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#" onClick={skillPage}>
                                Add skill
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={latestPage}>
                                Add latest
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Button onClick={logOut}>Logout</Button>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default AdminNavBar;
