import React from "react";
import '../assets/css/webflow-style.css';
import { NavLink } from "react-router-dom";

const Head = () => {
    return (
        <div data-w-id="b84bea37-6b04-b2db-bd77-d956c229bf1a" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="header-section w-nav">
            <div className="container-default w-container">
                <div className="header-block">
                <div className="header-brand-block">
                    <a href="/" aria-current="page" className="header-brand w-nav-brand w--current"><img loading="lazy" src="./src/assets/images/logo-header.webp"
                    alt="" className="header-brand-logo" />
                    </a>
                </div>

                <nav role="navigation" className="header-nav-menu w-nav-menu">
                    <div className="header-nav-block">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? "header-nav-link w-nav-link w--current"
                                        : "header-nav-link w-nav-link"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/features"
                                className={({ isActive }) =>
                                    isActive
                                        ? "header-nav-link w-nav-link w--current"
                                        : "header-nav-link w-nav-link"
                                }
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="/aboutus"
                                className={({ isActive }) =>
                                    isActive
                                        ? "header-nav-link w-nav-link w--current"
                                        : "header-nav-link w-nav-link"
                                }
                            >
                                About Us
                            </NavLink>

                            <div className="header-button-block mobile"><a data-w-id="235bf604-13eb-1138-b26e-76044066e416"
                                href="/contactus" className="secondary-button w-inline-block">
                                <div className="button-wrapper">
                                    <div className="button-text">Contact Us</div>
                                    <div className="button-hover"></div>
                                </div>
                                <div className="stroke-wrapper">
                                    <div className="stroke"></div>
                                </div>
                                </a>
                            </div>
                    </div>
                </nav>
                <div className="header-button-block desktop">
                    <a data-w-id="235bf604-13eb-1138-b26e-76044066e416"
                        href="/contactus" className="secondary-button w-inline-block">
                        <div className="button-wrapper">
                            <div className="button-text">Contact Us</div>
                            <div className="button-hover"></div>
                        </div>
                        <div className="stroke-wrapper">
                            <div className="stroke"></div>
                        </div>
                    </a>
                </div>
                <div className="header-menu-button w-nav-button">
                    <div className="header-menu-button-block">
                        <div className="top"></div>
                        <div className="middle"></div>
                        <div className="bottom"></div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default Head;        