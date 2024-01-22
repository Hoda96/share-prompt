import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/Provider";
import "@/styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

export default RootLayout;
