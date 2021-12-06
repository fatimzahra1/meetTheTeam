import { render } from "@testing-library/react";
import React from "react";
import reactDom from "react-dom";
import Navbar from "../headerUsers"



it('renders without crashing', ()=>{
    const div = document.createElement("div");
    reactDom.render(<Navbar></Navbar>, div );
})
 