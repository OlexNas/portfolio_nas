// src/app/auth/page.tsx
import Head from 'next/head';
import Link from 'next/link';
import styles from './auth.module.css';

export default function AuthLanding() {
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
        <p>
          Welcome to the authentication system. Please choose an option below to either register for a new account or log in to an existing one.
        </p>
        <div className={styles.options}>
          <Link href="/auth/register" className={styles.optionCard}>
            <h3>Register</h3>
          </Link>
          <Link href="/auth/login" className={styles.optionCard}>
            <h3>Login</h3>
          </Link>
        </div>
      </main>
    </>
  );
}
