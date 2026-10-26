import React, { useState } from 'react';

const StudentsManager = () => {

  // Initial 3 students ki list
  const [students, setStudents] = useState([
    { id: 1, name: 'Ali Khan', rollNo: 'R-101', grade: 'A',numbers:"1189" },
    { id: 2, name: 'Ayesha Ahmed', rollNo: 'R-102', grade: 'B',numbers:"993"},
    { id: 3, name: 'Bilal Raza', rollNo: 'R-103', grade: 'A+',numbers:"1000"},
  ]);

  // Naye student ki form state
  const [newName, setNewName] = useState('sssssj');
  const [newRollNo, setNewRollNo] = useState('');
  const [newGrade, setNewGrade] = useState('');
  const [newnumbers, setnumbers] = useState('');

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // 1. CREATE FUNCTION
  const handleAddStudent = (e) => {
    e.preventDefault();

    if (
      !newName.trim() ||
      !newRollNo.trim() ||
      !newGrade.trim()||
      !newnumbers.trim()
    ) {
      alert('Bhai, saari fields lazmi bharein!');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: newName,
      rollNo: newRollNo,
      grade: newGrade,
      number: newnumbers,

    };

    setStudents([...students, newStudent]);

    // Form clear karna
    setNewName('');
    setNewRollNo('');
    setNewGrade('');
    setNewNumbers('');
  };

  // 2. DELETE FUNCTION
  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter(
    (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  // 3. FILTER FUNCTION
  const filteredStudents = students.filter((student) =>
    student.rollNo.toLowerCase().includes(
      searchTerm.toLowerCase()
    )
  );

  // 4. RETURN (JSX)
  return (
    <div>
      <h1>Students Management System</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Roll No"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add Student Form */}
      <h2>Naya Student Add Karein</h2>

      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Roll No"
          value={newRollNo}
          onChange={(e) => setNewRollNo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Grade"
          value={newGrade}
          onChange={(e) => setNewGrade(e.target.value)}
        />
        <input
          type="text"
          placeholder="numbers"
          value={newnumbers}
          onChange={(e) => setNewNumbers(e.target.value)}
        />


        <button type="submit">Add Student</button>
      </form>

      {/* Students List */}
      <h2>Students Ki List</h2>

      {filteredStudents.map((student) => (
        <div key={student.id}>
          <p>
            Name: {student.name} | Roll No: {student.rollNo} |
            Grade: {student.grade}|Numbers:{ student.numbers}

            
          </p>

          <button
            onClick={() => handleDeleteStudent(student.id)}
          >
            Delete
          </button>
          <button >Edit</button>
        </div>
      ))}
    </div>
  );
};

export default StudentsManager;