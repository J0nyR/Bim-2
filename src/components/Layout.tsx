import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import AppFooter from "./AppFooter"; // Import AppFooter

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 relative flex flex-col"> {/* Added flex flex-col here */}
        <div className="absolute top-4 right-4 z-50 hide-on-print">
          <ThemeToggle />
        </div>
        <Outlet />
        <AppFooter /> {/* Add the footer here */}
      </main>
    </div>
  );
};

export default Layout;