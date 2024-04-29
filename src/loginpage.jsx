import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
  style={{
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    minWidth: "40vw"
  }}
>
  <div
    style={{
      maxWidth: "400px",
      width: "100%",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#fff", // Changed background color to white
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "24px",
      }}
    >
      Sign in to your account
    </h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid yellow",
            backgroundColor: "yellow",
          }}
          required
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid yellow",
            backgroundColor: "yellow",
          }}
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me" style={{ marginLeft: "5px" }}>
            Remember me
          </label>
        </div>
        <a
          href="#"
          style={{
            fontSize: "14px",
            color: "#007bff",
            textDecoration: "none",
          }}
        >
          Forgot your password?
        </a>
      </div>
      <Link to="/table">
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "orange",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
      </Link>
    </form>
  </div>
</div>

    </div>
  );
};

export default LoginPage;
