import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { useState } from "react";

function App() {
  const intialvalues = { username: "", email: "", password: "" };
  const [formvalues, setFormvalues] = useState(intialvalues);
  return (
    <div className="App">
      <form>
        <h1>Login Form</h1>
        <div className="username">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            placeholder="username"
            value={formvalues.username}
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
            value={formvalues.email}
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="username"
            value={formvalues.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
