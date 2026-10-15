import { useState } from "react";

function MyCard() {
    const [names, setNames] = useState([
        {
            name: "ali",
            course: "js",
            isActive: true
        },
        {
            name: "taha",
            course: "react",
            isActive: false
        },
        {
            name: "rafey",
            course: "node",
            isActive: true
        }   

    ])
    return (

        <div className="card">
            {names.map(
                (n) => {
                    return <h1>{n.course}</h1>
                }
            )}
        </div>
    )
}

export default MyCard;