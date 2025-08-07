import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, BookOpen, Menu } from 'lucide-react';
import { teachingModules } from '@/data/modules';
import { ThemeToggle } from '@/components/ThemeToggle';
import AppFooter from '@/components/AppFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Import chapter components
import ChapterSteeringDeckControl from '@/components/chapters/ChapterSteeringDeckControl';
import ChapterFluidPumpingSeparation from '@/components/chapters/ChapterFluidPumpingSeparation';
import ChapterElectricalElectronic from '@/components/chapters/ChapterElectricalElectronic';
import ChapterTechnicalPublications from '@/components/chapters/ChapterTechnicalPublications';

type ChapterId = typeof teachingModules[number]['id'];

const ChapterContent = ({ activeChapter }: { activeChapter: ChapterId }) => {
  switch (activeChapter) {
    case 'steering-deck-control':
      return <ChapterSteeringDeckControl />;
    case 'fluid-pumping-separation':
      return <ChapterFluidPumpingSeparation />;
    case 'electrical-electronic':
      return <ChapterElectricalElectronic />;
    case 'technical-publications':
      return <ChapterTechnicalPublications />;
    default:
      return (
        <Card>
          <CardHeader>
            <CardTitle>Konten Belum Tersedia</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Materi pembelajaran untuk modul ini akan segera ditambahkan.</p>
          </CardContent>
        </Card>
      );
  }
};

const StudentHandbook = () => {
  const [activeChapter, setActiveChapter] = useState<ChapterId>(teachingModules[0].id);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const activeModule = teachingModules.find(m => m.id === activeChapter);

  const handleChapterSelect = (chapterId: ChapterId) => {
    setActiveChapter(chapterId);
    setIsSheetOpen(false); // Close sheet on selection
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar / Table of Contents */}
      <aside className="hidden md:flex flex-col w-72 flex-shrink-0 border-r bg-card p-4 hide-on-print">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold tracking-tight px-4 flex items-center">
            <BookOpen className="mr-3 h-6 w-6" />
            Buku Saku
          </h2>
          <nav className="flex flex-col space-y-1">
            {teachingModules.map((module) => (
              <Button
                key={module.id}
                variant={activeChapter === module.id ? "secondary" : "ghost"}
                className="justify-start h-auto py-3"
                onClick={() => handleChapterSelect(module.id as ChapterId)}
                disabled={module.status === 'coming-soon'}
              >
                <div className="flex flex-col items-start text-left">
                  <span>{module.title}</span>
                  <span className="text-xs font-normal text-muted-foreground">{module.englishTitle}</span>
                </div>
              </Button>
            ))}
          </nav>
          <hr />
          <Button asChild variant="outline" className="justify-start">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Home
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto relative flex flex-col">
        <header className="sticky top-0 -mx-6 -mt-6 md:mx-0 md:mt-0 mb-8 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:justify-end">
            <div className="md:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Buka Daftar Isi</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col">
                        <nav className="grid gap-2 text-lg font-medium">
                            <h2 className="text-2xl font-bold tracking-tight px-4 flex items-center mb-4">
                                <BookOpen className="mr-3 h-6 w-6" />
                                Daftar Isi
                            </h2>
                            {teachingModules.map((module) => (
                                <Button
                                    key={module.id}
                                    variant={activeChapter === module.id ? "secondary" : "ghost"}
                                    className="justify-start h-auto py-3"
                                    onClick={() => handleChapterSelect(module.id as ChapterId)}
                                    disabled={module.status === 'coming-soon'}
                                >
                                    <div className="flex flex-col items-start text-left">
                                        <span>{module.title}</span>
                                        <span className="text-xs font-normal text-muted-foreground">{module.englishTitle}</span>
                                    </div>
                                </Button>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
            </div>
        </header>
        
        <div className="container mx-auto flex-1 px-0">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary">{activeModule?.title}</h1>
            <p className="text-xl text-muted-foreground">{activeModule?.englishTitle}</p>
          </div>
          <ChapterContent activeChapter={activeChapter} />
        </div>
        <AppFooter />
      </main>
    </div>
  );
};

export default StudentHandbook;