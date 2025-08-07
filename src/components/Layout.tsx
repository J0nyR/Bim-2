import { Link, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import AppFooter from "./AppFooter";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, BookOpen } from "lucide-react";
import { teachingModules } from "@/data/modules";

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;

  const activeModule = teachingModules.find(module => pathname.includes(module.id));
  const moduleTitle = activeModule ? activeModule.title : "Modul";

  const navItems = activeModule ? [
      { href: `/lesson-plan-${activeModule.id}`, label: "Lesson Plan" },
      { href: `/teaching-material-${activeModule.id}`, label: "Teaching Material" },
      { href: `/worksheet-${activeModule.id}`, label: "Worksheet" },
      { href: `/answer-key-${activeModule.id}`, label: "Answer Key" },
      { href: `/rubric-${activeModule.id}`, label: "Assessment Rubric" },
  ] : [];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 relative flex flex-col">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Buka Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link to="#" className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <BookOpen className="h-6 w-6" />
                    <span>{moduleTitle}</span>
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`-mx-2 flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === item.href ? 'bg-muted text-foreground' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <AppFooter />
      </main>
    </div>
  );
};

export default Layout;