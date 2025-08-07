import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { teachingModules } from "@/data/modules";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  // Find the active module based on the current path
  const activeModule = teachingModules.find(module => pathname.includes(module.id));
  const moduleTitle = activeModule ? activeModule.title : "Module";

  const navItems = activeModule ? [
      { href: `/lesson-plan-${activeModule.id}`, label: "Lesson Plan" },
      { href: `/teaching-material-${activeModule.id}`, label: "Teaching Material" },
      { href: `/worksheet-${activeModule.id}`, label: "Worksheet" },
      { href: `/answer-key-${activeModule.id}`, label: "Answer Key" },
      { href: `/rubric-${activeModule.id}`, label: "Assessment Rubric" },
  ] : [];

  return (
    <aside className="hidden md:flex md:flex-col w-64 flex-shrink-0 border-r bg-card p-4">
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold tracking-tight px-4">{moduleTitle}</h2>
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="justify-start"
            >
              <Link to={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <hr />
        <Button asChild variant="outline" className="justify-start">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;