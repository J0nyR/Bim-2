import React from 'react';
import ChapterTechnicalPublications from '@/components/chapters/ChapterTechnicalPublications';

const TeachingMaterialTechnicalPublications = () => {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Materi Ajar</h1>
        <h2 className="text-xl md:text-2xl font-semibold">Modul 2.4: Penggunaan Publikasi Teknis</h2>
        <p className="text-lg text-muted-foreground">Module 2.4: Using Technical Publications</p>
      </header>
      <ChapterTechnicalPublications />
    </div>
  );
};

export default TeachingMaterialTechnicalPublications;