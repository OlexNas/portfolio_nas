"use client";

import Head from 'next/head';
import styles from '../authForm.module.css';
import Link from 'next/link';


export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here (e.g., call your Flask API)
    console.log('Login form submitted');
  };

  return (
    <>
      <Head>
        <title>Login - Authentication System</title>
        <meta name="description" content="Login to your account" />
      </Head>
      <main className={styles.main}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </main>
    </>
  );
}
