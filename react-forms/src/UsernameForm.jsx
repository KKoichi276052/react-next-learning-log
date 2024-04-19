import { useState } from "react";
function UsernameForm() {
  const [username, setUsername] = useState("timmy");
  const updateUsername = (evt) => {
    // almost simultaneously it updates state and UI
    setUsername(evt.target.value);
  };

  return (
    <div>
      {/* cannot user for in React */}
      <label htmlFor="username">Enter a username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;
