// src/app/layout.tsx
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
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Navigation/>
          {/* Future links to API integration or portfolio sections */}
        </header>
        <main>{children}</main>
        <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
          < Explanation/>
          © {new Date().getFullYear()} My Portfolio API
        </footer>
      </body>
    </html>
  );
}
