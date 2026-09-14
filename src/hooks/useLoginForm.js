import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(email, password) {
  const errors = {};
  const cleanEmail = email.trim();

  if (!cleanEmail) errors.email = "Please enter your email address.";
  else if (!emailPattern.test(cleanEmail)) errors.email = "Enter a valid email address.";
  if (!password) errors.password = "Please enter your password.";
  else if (password.length < 8) errors.password = "Password must be at least 8 characters.";

  return errors;
}

export function useLoginForm() {
  const [email, setEmail] = useState("daniel21fisher@gmail.com");
  const [password, setPassword] = useState("password");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const nextErrors = validate(email, password);
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length) return;

    setIsLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 850));
    setIsLoading(false);
    setStatus("Login details validated. Connect your authentication service to continue.");
  };

  const handleGoogleLogin = () => {
    setStatus("Google sign-in is ready to connect to your authentication service.");
  };

  const handleSignUp = () => {
    setStatus("Sign-up is ready to connect to your registration page.");
  };

  return {
    email,
    password,
    errors,
    isLoading,
    status,
    setEmail,
    setPassword,
    handleLogin,
    handleGoogleLogin,
    handleSignUp,
  };
}