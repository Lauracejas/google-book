  
import React, { Component } from 'react';
// import API from "../../utils/API";

class ResultListItem extends Component {

    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }



    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)
        this.getStyle();
    }

    render () { 
        console.log(this.props.bookState[1].volumeInfo)
        return (
            
            this.props.bookState.map((book) => (
                <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={book.volumeInfo.imageLinks.thumbnail} style={{maxWidth: "100px"}} alt="book"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{book.volumeInfo.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {book.volumeInfo.authors}</p>
                        <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                        <button onClick={this.onClickFunc} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
            ))
        )
    }
    
}

export default ResultListItem;