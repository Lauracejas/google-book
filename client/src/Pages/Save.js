import React, { Component } from "react";
import Navbar from "../Components/nav/navBar";
import { Container } from "../Components/Grid/Grid";
import API from '../utils/API';
import SavedList from "../Components/SavedList/SavedList";

class Save extends Component { 
    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }
    render() {<div className="jumbotron">
                <h1 className="display-4 text-center myText">Google Books Search</h1>
                <br></br>
                <h2 className="text-center myText">Search for and save books of interest.</h2>
            </div>
        return (
            <div>
            <Navbar />
            <Container fluid>
            <div className="jumbotron">
                <h1 className="display-4 text-center myText">Google Books Search</h1>
                <br></br>
                <h2 className="text-center myText">Search for and save books of interest.</h2>
            </div>
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default Save;