import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teachingModules } from "@/data/modules";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
          Selamat Datang di Aplikasi Perangkat Ajar Anda
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Welcome to Your Teaching Material Application
        </p>
      </div>

      <Card className="w-full max-w-2xl bg-card text-card-foreground shadow-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Pilih Modul Pembelajaran / Select Learning Module</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          {teachingModules.map((module) => (
            <Button
              key={module.id}
              asChild
              className="w-full py-3 text-lg h-auto"
              variant={module.status === 'coming-soon' ? 'secondary' : 'default'}
              disabled={module.status === 'coming-soon'}
            >
              <Link to={module.entryPath}>
                <div className="flex flex-col items-center text-center">
                  <span>{module.title}</span>
                  <span className="text-sm font-normal text-primary-foreground/80 dark:text-secondary-foreground/80">
                    {module.englishTitle} {module.status === 'coming-soon' && '(Segera Hadir / Coming Soon)'}
                  </span>
                </div>
              </Link>
            </Button>
          ))}
        </CardContent>
      </Card>

      <MadeWithDyad />
    </div>
  );
};

export default Index;