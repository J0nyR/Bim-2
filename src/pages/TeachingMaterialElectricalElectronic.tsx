import React from 'react';
import ChapterElectricalElectronic from '@/components/chapters/ChapterElectricalElectronic';

const TeachingMaterialElectricalElectronic = () => {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Materi Ajar</h1>
        <h2 className="text-xl md:text-2xl font-semibold">Modul 2.3: Sistem Elektrikal & Elektronik</h2>
        <p className="text-lg text-muted-foreground">Module 2.3: Electrical & Electronic Systems</p>
      </header>
      <ChapterElectricalElectronic />
    </div>
  );
};

export default TeachingMaterialElectricalElectronic;