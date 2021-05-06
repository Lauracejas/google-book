import React, { Component } from "react";
import Navbar from "../Components/nav/navBar";
import { Container } from "../Components/Grid/Grid";
import "./style.css"

class Home extends Component { 
    render() {
        return (
            <div>
             <Navbar />
             <Container fluid>
             <div className="jumbotron">
                <h1 className="display-4 text-center myText">Google Books Search</h1>
                <br></br>
                <h2 className="text-center myText">Search for and save books of interest.</h2>
            </div>
             </Container>

            </div>
        )
    }
}

export default Home;