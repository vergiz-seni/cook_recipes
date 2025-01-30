import React from 'react';
import NavBar from "./ui/NavBar/NavBar.jsx";
import {Outlet} from "react-router-dom";

function Layout({logoutHandler, user}) {
    return (
        <>
            <NavBar logoutHandler={logoutHandler} user={user}/>
            <Outlet/>
        </>
    );
}

export default Layout;
