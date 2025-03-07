"use client";

import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../authForm.module.css";

// Define the validation schema using Yup
const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])/,
        "Password must contain at least one lowercase letter, one number, and one special character"
      ),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("Register form submitted", data);
    // Call your API endpoint to process the registration here
  };

  return (
    <>
      <Head>
        <title>Register - Authentication System</title>
        <meta name="description" content="Register for a new account" />
      </Head>
      <main className={styles.main}>
        <h1>Register</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <div className={styles.inputContainer}>
            <input type="text" id="username" {...register("username")} />
            {errors.username && (
              <p className={styles.error}>{errors.username.message}</p>
            )}
          </div>

          <label htmlFor="email">Email</label>
          <div className={styles.inputContainer}>
            <input type="email" id="email" {...register("email")} />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <label htmlFor="password">Password</label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
            />
            <button
              type="button"
              className={styles.toggleButton}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </form>
      </main>
    </>
  );
}
