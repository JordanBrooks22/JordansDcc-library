import React, { Component } from "react";
import TitleBar from "./TitleBar/titleBar";
import BookViewer from "./BookViewer/bookViewer";

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "All the Light We Cannot See", author: "Anthony Doerr"},
            {title: "The First and Last Freedom", author: "Jiddu Krishnamurti"},
            
        ];
        this.state = {
            bookNumber: 0
        }
    }

    addNewBook(book){
        this.books.push(book);
        this.setState({
            bookNumber: this.books.length - 1
        });
    }

    goToNextBook(){
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    gotoPreviousBook(){
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0)
        tempBookNumber = this.books.length -1;
        this.setState({
            bookNumber: tempBookNumber
        });
    }
 
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={() => this.goToNextBook()} previousBook={() => this.goToPreviousBook()}/>
                <div className='row rowspacer'>
                    <div className='col-md-4'>
                        <button onClick={() => this.goToPreviousBook()}>Previous Book</button>
                    </div>
                    <div className='col-md-4'>
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className='col-md-4'>
                        <button onClick={() => this.goToNextBook()}>Next Book</button>
                    </div>
                </div>
               
            </div>
        );
    }

}

export default App;