import React from "react";
import { Link } from "react-router-dom";
import  * as image from "../../../assets/images/assets";

const Header = () => {
    const navLink = [
        {
            navName: "home"
        },
        {
            navName: "about"
        },
        {
            navName: "portfolio"
        },
        {
            navName: "favorites"
        },
        {
            navName: "contact"
        },
        {
            navName: "settings"
        }
    ]
    return (
        <React.Fragment>
            <nav>
                <div className="container flex items-center justify-between m-auto">
                    <img src={image.LogoPortfolio} className="w-[250px] h-[100px]" alt="" />
                    <div className="flex">
                        {navLink.map((item, index) => (
                            <div className="nav-item" key={index}>
                                <Link to="/" className="nav-link">{item.navName}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Header;