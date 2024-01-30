import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"

const Navbar =()=>{
    return (
        <>
            <div className="header">
                <Link id="squad" to="/"><h1>Squad51 ❤️</h1></Link>
                <div id="head">
                <Link id="contacts" to="/contacts"><h3>Contacts</h3></Link>
                <Link id="about" to="/about"><h3>About</h3></Link>

                </div>
                
            </div>
        
        </>
    )
}

export default Navbar;