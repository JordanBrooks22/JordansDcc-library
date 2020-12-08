import React from 'react';

function BookViewer(props){
    return(
        <div className="row row-spacer">
        <div className="col">
            <button onClick={() => this.gotoPreviousBook()}>Previous Book</button>
            {/*Button here to move to previous book viewed*/}
            </div>
            <div className="col">
                <h1>{this.books[this.state.bookNumber].title}</h1>
                <h4>{this.books[this.state.bookNumber].author}</h4>
            </div>
            <div className="col">
            <button onClick={() => this.goToNextBook()}>Next Book</button>
                
            {/*Button here to move to previous book viewed*/}
            </div>
    </div>
    )
}

export default BookViewer;