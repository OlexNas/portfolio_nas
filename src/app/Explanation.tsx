"use client";

// import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css"



export default function Explanation() {
    const pathname = usePathname();
  
    return (
      <section className={styles.explanation}>
        {pathname === "/auth/register" && (
          <p>
            <span className={styles.explanationIndentedLine}>
              This registration form leverages modern technologies to create a seamless, secure user experience.<br />
              We use <strong>React Hook Form</strong> to efficiently manage form state, ensuring that each input is registered and tracked with minimal re-renders.<br />
              For validation, we integrate <strong>Yup</strong> to define a comprehensive schema.<br />
              This schema enforces that all fields meet specific criteria: the username must be provided, the email must be in a valid format, and the password must be at least eight characters long and include at least one lowercase letter, one number, and one special character.<br />
              Inline error messages are displayed to the right of each field, offering immediate, clear feedback when the input doesn't meet the required standards.<br />
              Additionally, the submit button is automatically disabled while the form is processing to prevent duplicate submissions.<br />
              Together, these features ensure that our form is not only user-friendly and responsive, but also robust in validating inputs and maintaining high security standards.
            </span>
          </p>
        )}

        {pathname === "/auth/login" && (
            <p>
                This login form uses the same modern technologies as our registration form. We use{" "}
                <strong>React Hook Form</strong> for efficient form state management and{" "}
                <strong>Yup</strong> for schema-based validation. Please enter your credentials to access your account.
            </p>
        )}
      </section>
    );
  }