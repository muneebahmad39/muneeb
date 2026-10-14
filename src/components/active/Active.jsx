function Active({ name, course, isActive }) {
  return (
    <div className="container">

      <h2>{name}</h2>
      <p>{course}</p>

      <p>
        {isActive ? "🟢 Active" : "⚪ Inactive"}
      </p>
    </div>
  );
}

export default Active;