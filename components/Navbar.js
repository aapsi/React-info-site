import React from "react"
import myimg from "./src/images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src= {myimg} className="nav--icon" alt="react"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>    
    )
}