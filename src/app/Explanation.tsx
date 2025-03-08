"use client";

// import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css"
import { useAuth } from "@/context/AuthContext";



export default function Explanation() {
    const pathname = usePathname();
    const { isAuthenticated } = useAuth();
  
    return (
      <section className={styles.explanation}>
        {pathname === "/auth/register" && (
          <p>
            <span className={styles.explanationIndentedLine}>
              This registration form leverages modern technologies to create a seamless, secure user experience.<br />
              We use <strong>React Hook Form</strong> to efficiently manage form state, ensuring that each input is registered and tracked with minimal re-renders.<br />
              For validation, we integrate <strong>Yup</strong> to define a comprehensive schema.<br />
              This schema enforces that all fields meet specific criteria: the username must be provided, the email must be in a valid format, and the password must be at least eight characters long and include at least one lowercase letter, one number, and one special character.<br />
              Inline error messages are displayed to the right of each field, offering immediate, clear feedback when the input does not meet the required standards.<br />
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
        { pathname === "/auth" &&(

             isAuthenticated === true ? (
                <section className={styles.authExplanation}>
                <h2>How Authentication Works</h2>
                <p>
                  <strong>Backend:</strong> Our Flask API handles user registration
                  and login. Upon login, it validates your credentials, generates a JWT,
                  and securely stores it in an HTTP-only cookie.
                </p>
                <p>
                  <strong>Frontend:</strong> Our Next.js app uses React Hook Form and
                  Yup for efficient form management and validation. Global authentication
                  state is managed via React Context, enabling smooth navigation and
                  route protection.
                </p>
                <p>
                  <strong>Security:</strong> CORS and secure cookie settings are in place
                  to protect your data. The system leverages modern best practices to minimize
                  vulnerabilities.
                </p>
              </section>
            ) : (
                <p>
                    First you need to register! :)
                </p>
            )

          )}
        
        
      </section>
    );
  }