import React, { useState } from "react";

function App() {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");

  function fname(event) {
    setFname(event.target.value);
    console.log(event.target.value);
  }
  function lname(event) {
    setLname(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstname} {lastname}
      </h1>
      <form>
        <input
          onChange={fname}
          value={firstname}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={lname}
          value={lastname}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
