import React from 'react';
import NavBar from "./ui/NavBar/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Loader from "../HOCs/Loader.jsx";

function Layout({logoutHandler, user}) {
    return (
        <>
            <Loader isLoading={user.status === 'logging'}>
            <NavBar logoutHandler={logoutHandler} user={user}/>
            <Outlet/>
            </Loader>
        </>
    );
}

export default Layout;
