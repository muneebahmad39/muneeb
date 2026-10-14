import { useState } from "react";

function App() {
  const [score, setScore] = useState(60);
  const [isPass, setIsPass] = useState(true);

  const message =
    score >= 50
      ? isPass
        ? "Congratulations!"
        : "Almost there"
      : "Try again";

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
import { useState } from "react";

function App() {
  const [age, setAge] = useState(17);
  const [hasID, setHasID] = useState(false);
  const [isStudent, setIsStudent] = useState(true);

  const message =
    age >= 18
      ? hasID
        ? "You can enter"
        : "Bring your ID"
      : isStudent
        ? "Student discount available"
        : "Not allowed";

  return (
    <div>
      <h2>{message}</h2>
    </div>        
  );
}

export default App;
import { useState } from "react";

function App() {
  const [age, setAge] = useState(17);
  const [hasID, setHasID] = useState(false);
  const [isStudent, setIsStudent] = useState(true);

  const message =
    age >= 18
      ? hasID
        ? "You can enter"
        : "Bring your ID"
      : isStudent
        ? "Student discount available"
        : "Not allowed";

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default App;