"use client";

import { useState } from "react";
import { authClient } from "../../../lib/auth-client";
import RegistrationForm from "./component/Register";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.signUp.email({
      name: formData.name, // required
      email: formData.email, // required
      password: formData.password, // required
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <RegistrationForm />
    </div>
  );
}
