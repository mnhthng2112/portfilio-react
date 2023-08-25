import React from "react";
import "./header.css";
import  * as image from "../../../assets/images/assets";

const Header = () => {
    return (
        <React.Fragment>
            <nav>
                <div className="container flex items-center justify-between m-auto">
                    <img src={image.LogoPortfolio} className="w-[250px] h-[100px]" alt="" />
                    <div className="flex">
                        <div className="nav-item">
                            <a href="" className="nav-link">home</a>
                        </div>
                        <div className="nav-item">
                            <a href="" className="nav-link">about</a>
                        </div>
                        <div className="nav-item">
                            <a href="" className="nav-link">portfolio</a>
                        </div>
                        <div className="nav-item">
                            <a href="" className="nav-link">favorites</a>
                        </div>
                        <div className="nav-item">
                            <a href="" className="nav-link">contact</a>
                        </div>
                        <div className="nav-item">
                            <a href="" className="nav-link">settings</a>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Header;