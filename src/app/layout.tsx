import { AuthProvider } from "../context/AuthContext";
import Navigation from "./Navigation";
import Explanation from "./Explanation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthProvider>
          <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
            <Navigation />
          </header>
          <main>{children}</main>
          <footer
            style={{
              padding: "1rem",
              borderTop: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            <Explanation />
            © {new Date().getFullYear()} My Portfolio API
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
