import React from 'react';
import NavBar from "./ui/NavBar/NavBar.jsx";
import {Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
}

export default Layout;
