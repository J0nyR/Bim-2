import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';
import ChapterElectricalElectronic from '@/components/chapters/ChapterElectricalElectronic';

const TeachingMaterialElectricalElectronic = () => {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">Materi Ajar</h1>
                <h2 className="text-xl md:text-2xl font-semibold">Modul 2.3: Sistem Elektrikal & Elektronik</h2>
                <p className="text-lg text-muted-foreground">Module 2.3: Electrical & Electronic Systems</p>
            </div>
            <Button asChild variant="outline">
                <Link to="/grammar-reference" target="_blank" rel="noopener noreferrer">
                    <BookText className="mr-2 h-4 w-4" />
                    Buka Referensi Tata Bahasa
                </Link>
            </Button>
        </div>
      </header>
      <ChapterElectricalElectronic />
    </div>
  );
};

export default TeachingMaterialElectricalElectronic;