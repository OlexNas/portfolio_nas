"use client";

import Head from 'next/head';
import Link from 'next/link';
import styles from './auth.module.css';
import { useAuth } from '../../context/AuthContext'; // Adjust path as needed

export default function AuthLanding() {
  const { isAuthenticated } = useAuth();
  

  return (
    <>
      <Head>
        <title>Authentication System</title>
        <meta
          name="description"
          content="Register or login to access your account."
        />
      </Head>
      <main className={styles.main}>
        <h1>Authentication System</h1>
        {isAuthenticated && <p>You are authenticated.</p>}
       { !isAuthenticated && ( <p>
          Welcome to the authentication system. Please choose an option below to either register for a new account or log in to an existing one.
        </p>)}
        
        { !isAuthenticated ? (
          <div className={styles.options}>
          <Link href="/auth/register" className={styles.optionCard}>
            <h3>Register</h3>
          </Link>
          <Link href="/auth/login" className={styles.optionCard}>
            <h3>Login</h3>
          </Link>
        </div>
        ) : (
          <div className={styles.options}>
            <Link href="/" className={styles.optionCard}>
              <h3>Lets discover other projects :)</h3>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
