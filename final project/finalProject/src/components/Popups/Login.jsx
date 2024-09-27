import { useState, useEffect } from "react";
import styleLogin from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  const emailRegex = /^[A-Za-z]\w+@\w+\.\w+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }

    setError("");  
    setSuccess("Welcome back!");

   
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className={styleLogin.container}>
      <h1 className={styleLogin.header}>Login</h1>
      <form onSubmit={handleSubmit} className={styleLogin.form}>
        <label className={styleLogin.label}>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styleLogin.input}
          />
        </label>
        <br />
        <label className={styleLogin.label}>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styleLogin.input}
          />
        </label>
        <br />
        <button type="submit" className={styleLogin.button}>
          Login
        </button>
        {error && <div className={styleLogin.error}>{error}</div>}
        {success && <div className={styleLogin.success}>{success}</div>}
      </form>
    </div>
  );
}

