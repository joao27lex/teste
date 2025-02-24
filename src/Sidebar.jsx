import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="bg-dark" style={{minWidth: "175px"}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white">
                <h2 className="text-center text-white mb-4">Menu</h2>
                <ul className="nav nav-pills flex-column mb-auto w-100">
                    <li className="nav-item w-100 mb-2">
                        <Link to="/" className="nav-link text-white">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item w-100 mb-2">
                        <Link to="/about" className="nav-link text-white">
                            About
                        </Link>
                    </li>
                    <li className="nav-item w-100 mb-2">
                        <Link to="/projects" className="nav-link text-white">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item w-100 mb-2">
                        <Link to="/contact" className="nav-link text-white">
                            Contact
                        </Link>
                    </li>
                </ul>
                <hr className="text-white w-100" />
            </div>
        </div>
    );
}

export default Sidebar;
