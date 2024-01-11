import "@/styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
