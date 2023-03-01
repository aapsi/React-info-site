import React from "react"
import myimg from "./images/react-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src= {myimg} className="nav--icon" alt="react-logo"/>
            <h3 calssName="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>    
    )
}