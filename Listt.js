import React from 'react'
export default function Listt() {
    const college=[{id:1, stuName:"Yaseen", age:18},
                   {id:2, stuName:"Ridha", age:18},
                   {id:3, stuName:"Raffiya", age:18},]

    const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)
    return (
        <div>
            <center>
            <h1>List of Students</h1>
            {display}
            </center>
            </div>
    )
}