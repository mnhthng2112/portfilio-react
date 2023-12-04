import React from "react";
import Header from "../elements/header/Header";
import Footer from "../elements/footer/Footer";
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