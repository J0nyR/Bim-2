import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, ClipboardList, Key, FileText, GanttChartSquare } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const isMarineEngineModule = pathname.includes("-marine-engines");
  const isNavigationModule = pathname.includes("-navigation");

  let navItems: { href: string; label: string; icon: React.ElementType }[] = [];
  let moduleTitle = "Module";

  if (isMarineEngineModule) {
    moduleTitle = "Marine Engines Module";
    navItems = [
      { href: "/lesson-plan-marine-engines", label: "Lesson Plan", icon: GanttChartSquare },
      { href: "/teaching-material-marine-engines", label: "Teaching Material", icon: BookOpen },
      { href: "/worksheet-marine-engines", label: "Worksheet", icon: ClipboardList },
      { href: "/answer-key-marine-engines", label: "Answer Key", icon: Key },
      { href: "/rubric-marine-engines", label: "Assessment Rubric", icon: FileText },
    ];
  } else if (isNavigationModule) {
    moduleTitle = "Navigation Module";
    navItems = [
      { href: "/lesson-plan-navigation", label: "Lesson Plan", icon: GanttChartSquare },
      { href: "/teaching-material-navigation", label: "Teaching Material", icon: BookOpen },
      { href: "/worksheet-navigation", label: "Worksheet", icon: ClipboardList },
      { href: "/answer-key-navigation", label: "Answer Key", icon: Key },
      { href: "/rubric-navigation", label: "Assessment Rubric", icon: FileText },
    ];
  }

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
                <item.icon className="mr-2 h-4 w-4" />
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