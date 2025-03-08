"use client";

import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import styles from "../authForm.module.css";
import { useAuth } from "@/context/AuthContext";

// Define the validation schema using Yup
const schema = yup
  .object({
    email: yup.string().email("Invalid email address").required("Email is required"),
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

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { login } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      setErrorMessage("");
      await login(data);
      router.push("/auth");
    } catch (error: unknown) {
      let message = "Login failed. Please try again.";
      if (error instanceof Error) {
        message = error.message;
      }
      console.error("Login error:", message);
      setErrorMessage(message);
    }
  };
  
  return (
    <>
      <Head>
        <title>Login - Authentication System</title>
        <meta name="description" content="Login to your account" />
      </Head>
      <main className={styles.main}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <div className={styles.inputContainer}>
            <input type="email" id="email" {...register("email")} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
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
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Login"}
          </button>
        </form>
      </main>
    </>
  );
}
