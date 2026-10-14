import { useState } from "react";

function Userform(){

  const [userName, setUserName] = useState("ali");

  return (
    <div>

      <input onChange={(e) => {
        setUserName(e.target.value);
      }} type="text" placeholder="username" />

      <button onClick={() => {
        setUserName("asif");
      }}>asif name</button>

      <button onClick={() => {
        setUserName("");
      }}>reset</button>

      <h1>this is your form value {userName}</h1>

    </div>
  );
}

export default Userform