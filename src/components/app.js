import React, { Component } from "react";
import TitleBar from "./TitleBar/titleBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.book = [
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "All the Light We Cannot See", author: "Anthony Doerr"},
            {title: "The First and Last Freedom", author: "Jiddu Krishnamurti"},
            
        ];
        this.state = {
            bookNumber: 0
        }
    }
 
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
            </div>
        );
    }

}

export default App;