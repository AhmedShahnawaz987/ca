import React from 'react'
import "./Duedate.css";
import due from "./Due.js"
function Duedate() {
    console.log(due);

    return (
        <div className="dueDate">
            <h4>Upcoming Due Dates</h4>
            <div className="dueDate__grid">
                {due.map((result,index)=>(
                    <div className="dueDate__gridInner">
                        <div className="dueDate__gridInner1">
                    <div className="dueDate__name">{result.name}</div>
                    <div className="dueDate__date">{result.date}</div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Duedate
