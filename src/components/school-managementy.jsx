import { useState, useEffect } from "react";
import "./App.css";

const initialStudents = [
  {
    id: 1,
    name: "Ali Ahmed",
    roll: "101",
    className: "10th",
    email: "ali@gmail.com",
  },
  {
    id: 2,
    name: "Ahmed Khan",
    roll: "102",
    className: "9th",
    email: "ahmed@gmail.com",
  },
  {
    id: 3,
    name: "Sara Malik",
    roll: "103",
    className: "10th",
    email: "sara@gmail.com",
  },
];

function App() {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("students");
      return saved === null ? initialStudents : JSON.parse(saved);
    } catch {
      return initialStudents;
    }
  });

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    roll: "",
    className: "9th",
    email: "",
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const filteredStudents = students.filter((student) => {
  const studentData =
    student.name +
    " " +
    student.roll +
    " " +
    student.className +
    " " +
    (student.phone || "");

  return studentData
    .toLowerCase()
    .includes(search.toLowerCase());
});

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function openAddForm() {
    setEditId(null);
    setForm({
      name: "",
      roll: "",
      className: "9th",
      email: "",
    });
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const duplicateRoll = students.some(
      (student) =>
        student.roll.trim() === form.roll.trim() &&
        student.id !== editId
    );

    if (duplicateRoll) {
      alert("This roll number already exists!");
      return;
    }

    if (editId !== null) {
      setStudents((prev) =>
        prev.map((student) =>
          student.id === editId
            ? { ...form, id: editId }
            : student
        )
      );
    } else {
      setStudents((prev) => [
        ...prev,
        {
          ...form,
          id: Date.now(),
        },
      ]);
    }

    setShowForm(false);
    setEditId(null);
  }

  function handleEdit(student) {
    setEditId(student.id);
    setForm({
      name: student.name,
      roll: student.roll,
      className: student.className,
      email: student.email,
    });
    setShowForm(true);
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmed) {
      setStudents((prev) =>
        prev.filter((student) => student.id !== id)
      );
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">EduManage</h2>

        <p className="menu-label">MAIN MENU</p>

        <div className="menu active">▦ Dashboard</div>
        <div className="menu">♙ Students</div>
        <div className="menu">▤ Classes</div>
        <div className="menu">⚙️ Settings</div>

        <div className="sidebar-bottom">
          <div className="avatar">A</div>
          <div>
            <strong>Admin User</strong>
            <p>Administrator</p>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1>School Dashboard</h1>
            <p>Manage your school in one place.</p>
          </div>

          <div className="admin-badge">Admin Panel</div>
        </header>

        <section className="stats">
          <div className="stat-card">
            <span>Total Students</span>
            <h2>{students.length}</h2>
            <p>Registered students</p>
          </div>

          <div className="stat-card">
            <span>Total Classes</span>
            <h2>
              {new Set(students.map((s) => s.className)).size}
            </h2>
            <p>Classes represented</p>
          </div>

          <div className="stat-card">
            <span>Search Results</span>
            <h2>{filteredStudents.length}</h2>
            <p>Matching students</p>
          </div>
        </section>

        <section className="student-section">
          <div className="section-header">
            <div>
              <h2>Student Management</h2>
              <p>Add, edit, search and manage students.</p>
            </div>

            <button className="add-btn" onClick={openAddForm}>
              + Add Student
            </button>
          </div>

          <input
            className="search-input"
            type="text"
            placeholder="Search by name, roll number, class or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {showForm && (
            <form className="student-form" onSubmit={handleSubmit}>
              <h3>
                {editId !== null ? "Edit Student" : "Add New Student"}
              </h3>

              <div className="form-grid">
                <input
                  name="name"
                  placeholder="Student Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <input
                  name="roll"
                  placeholder="Roll Number"
                  value={form.roll}
                  onChange={handleChange}
                  required
                />

                <select
                  name="className"
                  value={form.className}
                  onChange={handleChange}
                >
                  <option value="9th">9th Class</option>
                  <option value="10th">10th Class</option>
                  <option value="11th">11th Class</option>
                  <option value="12th">12th Class</option>
                </select>

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="add-btn">
                  {editId !== null ? "Update Student" : "Save Student"}
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Roll No.</th>
                  <th>Class</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="student-name">
                        <div className="student-avatar">
                          {student.name.charAt(0).toUpperCase()}
                        </div>
                        <strong>{student.name}</strong>
                      </div>
                    </td>

                    <td>{student.roll}</td>

                    <td>
                      <span className="class-badge">
                        {student.className}
                      </span>
                    </td>

                    <td>{student.email}</td>

                    <td>
                      <div className="actions">
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(student)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(student.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredStudents.length === 0 && (
                  <tr>
                    <td colSpan="5" className="empty">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="footer-text">
            Showing {filteredStudents.length} of {students.length} students
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;