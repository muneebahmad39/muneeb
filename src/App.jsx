// import React, { useState } from 'react';

// 



  // Naye student ki form state
//   const [newName, setNewName] = useState('');
//   const [newRollNo, setNewRollNo] = useState('');
//   const [newGrade, setNewGrade] = useState('');

//   // Search state
//   const [searchTerm, setSearchTerm] = useState('');

//   // 1. CREATE FUNCTION
//   const handleAddStudent = (e) => {
//     e.preventDefault();

//     if (
//       !newName.trim() ||
//       !newRollNo.trim() ||
//       !newGrade.trim()
//     ) {
//       alert('Bhai, saari fields lazmi bharein!');
//       return;
//     }

//     const newStudent = {
//       id: Date.now(),
//       name: newName,
//       rollNo: newRollNo,
//       grade: newGrade,
//     };

//     setStudents([...students, newStudent]);

//     // Form clear karna
//     setNewName('');
//     setNewRollNo('');
//     setNewGrade('');
//   };

//   // 2. DELETE FUNCTION
//   const handleDeleteStudent = (id) => {
//     const updatedStudents = students.filter(
//       (student) => student.id !== id
//     );

//     setStudents(updatedStudents);
//   };

//   // 3. FILTER FUNCTION
//   const filteredStudents = students.filter((student) =>
//     student.rollNo.toLowerCase().includes(
//       searchTerm.toLowerCase()
//     )
//   );

//   // 4. RETURN (JSX)
//   return (
//     <div>
//       <h1>Students Management System</h1>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by Roll No"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Add Student Form */}
//       <h2>Naya Student Add Karein</h2>

//       <form onSubmit={handleAddStudent}>
//         <input
//           type="text"
//           placeholder="Student Name"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Roll No"
//           value={newRollNo}
//           onChange={(e) => setNewRollNo(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Grade"
//           value={newGrade}
//           onChange={(e) => setNewGrade(e.target.value)}
//         />

//         <button type="submit">Add Student</button>
//       </form>

//       {/* Students List */}
//       <h2>Students Ki List</h2>

//       {filteredStudents.map((student) => (
//         <div key={student.id}>
//           <p>
//             Name: {student.name} | Roll No: {student.rollNo} |
//             Grade: {student.grade}
//           </p>

//           <button
//             onClick={() => handleDeleteStudent(student.id)}
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StudentsManager;










// import { useState } from "react";
// import "./App.css"
// import Tr from "./components/TR"
// function App() {
//   const [players, setPlayer] = useState([
//     {
//       name: "Sahibzada farhan",
//       score: 10,
//       balls: 11
//     },
//     {
//       name: "maaz sadaqat",
//       score: 25,
//       balls: 18
//     }
//   ])
//   return (
//     <div className="flex">
//       <table border={1}>
//         <tr>
//           <th></th>
//           <th>Player name</th>
//           <th> Balls</th>
//           <th>Score</th>
//         </tr>
//         {players.map((p, i) => {
//           return <Tr  ={p} index={i} />
//         })
//         }
//       </table>


















//       {/* {
//         players.map((p) => {
//           return <h1>{p}</h1>
//         })
//       } */}
//     </div>
//   )
// }
// export default App;





// // import "./App.css"
// // import Active from "./components/active/Active";

// // function App() {
// //   return (
// //     <div className="flex">

// //       <Active
// //         name="Ali"
// //         course="JS"
// //         isActive={true}
// //       />

// //       <Active
// //         name="Sara"
// //         course="JavaScript"
// //         isActive={false}
// //       />

// //       <Active
// //         name="Ahmed"
// //         course="HTML/CSS"
// //         isActive={true}
// //       />
// //     </div>
// //   );
// // }

// // export default App;
// // import "app.css"
// // import Active from "./components/active/Active";
// // function App() {
// //   return (
// //     <div className="flex">

// //       <Active
// //         name="ali"
// //         course="js"
// //         is Active={true}
// //       ></Active>
// //       <Active
// //         name="taha"
// //         course="react"
// //         not Active={false}
// //       ></Active>
// //       <Active
// //         name="rafey"
// //         course="html/css"
// //         is Active={true}
// //       ></Active>
// //     </div>
// //   )
// // }
// // export default App;




















// import { useState } from "react";
// import PlayerRow from "./components/PlayerRow";
// import "./App.css";

// function App() {
//   const [show, setShow] = useState(true);

//   const [players] = useState([
//     { name: "Babar Azam", runs: 72, balls: 60 },
//     { name: "Muhammad Rizwan", runs: 45, balls: 38 },
//     { name: "Fakhar Zaman", runs: 18, balls: 20 },
//     { name: "Saim Ayub", runs: 56, balls: 42 }
//   ]);

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>🏏 Cricket Players Scoreboard</h1>

//         <button onClick={() => setShow(!show)}>
//           {show ? "Hide Scoreboard" : "Show Scoreboard"}
//         </button>
//       </div>

//       {show && (
//         <table>
//           <thead>
//             <tr>
//               <th>Sr. No.</th>
//               <th>Player Name</th>
//               <th>Runs</th>
//               <th>Balls</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {players.map((player, index) => (
//               <PlayerRow
//                 key={index}
//                 player={player}
//                 index={index}
//               />
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default App;


































import StudentsManager from './StudentsManager';

function App() {
  return <StudentsManager />;
}

export default App;