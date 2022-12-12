import React, {useState} from "react";
import {Navigate} from "react-router-dom";

import Info from './Info'

function NavBar() {
    const [show, setShow] = React.useState(true)

    return (
        <div className="container">
            <button onClick={() => setShow(true)}>Show</button>
            <button onClick={() => setShow(false)}>Hide</button>
            { show? <h1>Hello</h1> : <h1>goodbye</h1>}

            <button>About</button>
            <button>Apprenticeship</button>
            <button>Bootcamp</button>
            <button>Projects</button>
        </div>
    );
}

export default NavBar