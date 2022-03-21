import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <a href="/" className="home-link">
          Back to <b>homepage</b>..
        </a>
      </nav>
      {children}
    </div>
  );
}
export default Layout;
