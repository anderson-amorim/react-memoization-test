import React, { useState, useMemo, useCallback } from "react";
import "./App.css";
import MemoComponent from "./MemoComponent";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, seAuth] = useState("");
  const obj = useMemo(() => ({ id: 1, value: "123" }), []);
  return (
    <div className="App">
      <MemoComponent obj={obj} onLoad= />
      <label htmlFor="username">Username: </label>
      <input name="usename" onChange={evt => setUsername(evt.target.value)} />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        name="password"
        type="password"
        onChange={evt => setPassword(evt.target.value)}
      />
      <br />
      <label htmlFor="2fauth">2F Auth: </label>
      <input name="2fauth" onChange={evt => seAuth(evt.target.value)} />
      <br />
    </div>
  );
};

export default App;
