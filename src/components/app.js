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
                <div className='row rowspacer'>
                    <div className='col'>
                        {/*Button here to move to previous book viewed*/}
                    </div>
                    <div className='col'>
                        {/*Display Book with Cover here*/}
                    </div>
                    <div className='col'>
                        {*/Button here to move to the previous book viewed*/}
                    </div>
                </div>
               
            </div>
        );
    }

}

export default App;