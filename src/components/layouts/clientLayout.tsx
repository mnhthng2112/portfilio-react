import React from "react";
import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import { Outlet } from "react-router-dom";


const ClientLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet/>
            <Footer />
        </React.Fragment>
    );
};

export default ClientLayout;