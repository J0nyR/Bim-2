import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teachingModules } from "@/data/modules";
import { Book, ClipboardCheck } from "lucide-react";

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

      <div className="w-full max-w-2xl space-y-8">
        <Card className="bg-card text-card-foreground shadow-lg">
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

        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">Tinjauan & Penilaian Akhir / Overview & Final Assessment</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild variant="outline" className="py-3 text-lg h-auto">
              <Link to="/syllabus">
                <Book className="mr-2 h-5 w-5" />
                Lihat Silabus
              </Link>
            </Button>
            <Button asChild className="py-3 text-lg h-auto">
              <Link to="/summative-test">
                <ClipboardCheck className="mr-2 h-5 w-5" />
                Mulai Ujian Sumatif
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <MadeWithDyad />
    </div>
  );
};

export default Index;