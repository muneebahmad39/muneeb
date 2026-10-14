// import { useState } from "react";

// function Students() {
//     const [search, setSearch] = useState("")
//     const [std, setStd] = useState([
//         { name: "ali", rollNomber: "01", about: "• In many popular languages like Python and Java, strings cannot be changed after they are created. Any modification actually creates a brand-new string in memory." },
//         { name: "awais", rollNomber: "02", about: "Under the hood, a string is just a sequential collection of individual characters. This is why you can usually access specific letters using indexing," },
//         { name: "asif", rollNomber: "02", about: " Like arrays, string indexing almost always starts at 0 instead of 1. The first letter is at index 0, the second is at index 1, and the last letter is at index " },
//     ])
//     return (<div>
//         <h1> studnts {search}</h1>
//         <input type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder="search" />
//         {std.filter((f) => f.name.includes(search)  || f.about.includes(search)).map((s) => {
//             return <div>
//                    <h1> name: {s.name} , Roll #: {s.rollNomber}</h1>
//                    <div>{s.about}</div>
//                 </div>
//         })}
//     </div>)
// }
// export default Students;



// import { useState } from "react";
// function Students() {
//     const [search, setsearch] = Usestate("")
//     const [std, setstd] = Usestate([
//         { name: "ali", rollNomber: "01", about: "• tpday is a very important for indian cricket team." },
//         { name: "awais", rollNomber: "02", about: "it is a very famoys words catches win matches This is why you can usually access specific letters using indexing," },
//         { name: "asif", rollNomber: "02", about: " pakistan squad anoues today at 7 30 pm it not a good job  . The first letter is at index 0, the second is at index 1, and the last letter is at index" },
//     ])

//     return (
//         <div>
//             <h1>students{search}</h1>
//             <input type="text" onChange={(e) => { setsearch(e.target.value) }} placeholder="search" />
//             {std.filter((f) => f.name.includes(search) || f.about.includes(search)).map((s) => {
//                 return <div>
//                     <h1>name: {s.name} , Roll #: {s.rollNomber }</h1>
//                     <div>{s.about}</div>
//                 </div>
//             })}

//         </div>
//     )

// }
// export default Students;
import { useState } from "react";


function Students() {
    const [search, setSearch] = useState("")
    const [name, setName] = useState("")
    const [rollN, setRollN] = useState("")
    const [about, setAbout] = useState("")

    const [std, setStd] = useState([
        { name: "ali", rollNomber: "01", about: "• In many popular languages like Python and Java, strings cannot be changed after they are created. Any modification actually creates a brand-new string in memory." },
        { name: "awais", rollNomber: "02", about: "Under the hood, a string is just a sequential collection of individual characters. This is why you can usually access specific letters using indexing," },
        { name: "asif", rollNomber: "03", about: " Like arrays, string indexing almost always starts at 0 instead of 1. The first letter is at index 0, the second is at index 1, and the last letter is at index " },
    ])

    const saveStudent = () => {
        const newStudent = {
            name: name,
            rollNomber: rollN,
            about: about
        }
        setStd([...std, newStudent])
        resetStudent()
    }


    const deleteStudent = (r) => {
        const filteredStudent = std.filter((f) => f.rollNomber !== r)
        setStd(filteredStudent)
    }

const resetStudent = () => {
       setName("")
        setRollN("")
        setAbout("")
}

    return (<div>
        <h1> studnts {search}</h1>
        <div className="student-form">
            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="name" /> <br />
            <input value={rollN} onChange={(e) => { setRollN(e.target.value) }} type="text" placeholder="Roll Number" /> <br />
            <textarea value={about} onChange={(e) => { setAbout(e.target.value) }} placeholder="About "></textarea> <br />
            <button onClick={saveStudent}>save student</button>
            <button onClick={resetStudent}>reset</button>
        </div>



        <input type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder="search" />
        {std.filter((f) => f.name.includes(search) || f.about.includes(search)).map((s) => {
            return <div>                 <h1> name: {s.name} , Roll #: {s.rollNomber}</h1>
                <div>{s.about}</div>
                <button onClick={() => { deleteStudent(s.rollNomber) }}  >delete</button>
            </div>
        })}
    </div>)
}
export default Students;
