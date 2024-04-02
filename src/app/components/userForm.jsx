"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage("");
      const response = await axios.post(
        "/api/Users",
        { formData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.message !== "User Created") setErrorMessage("User not created userForm.jsx 35:102");
      else {
        router.refresh();
        router.push("/");
      }
    } catch (err) {
      console.log("error while posting user from client side", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/2">
        <h1>Create User</h1>
        <div>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            className="m-2 bg-slate-400 rounded-lg"
            required={true}
            value={formData.name}
            type={"text"}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            className="m-2 bg-slate-400 rounded-lg"
            required={true}
            value={formData.email}
            type={"email"}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            onChange={handleChange}
            className="m-2 bg-slate-400 rounded-lg"
            required={true}
            value={formData.password}
            type={"password"}
          />
        </div>
        <button
          type={"submit"}
          value="Create User"
          className="bg-blue-600 hover:bg-blue-300"
        >
          Create User
        </button>
      </form>

      <p className="text-red-600">{errorMessage}</p>
    </>
  );
};

export default UserForm
