import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div>
            {/* Storing if statement in the button*/}
            {/* Example: if (goToPrevPage == true) {allow function to run} else{none}*/}
            {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
            {goToNextPage && <button onClick={goToNextPage}>Next</button>}
        </div>
    )
}
