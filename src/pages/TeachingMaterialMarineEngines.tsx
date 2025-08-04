import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeachingMaterialMarineEngines = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary-foreground mb-8">
        Materi Pembelajaran / Teaching Material
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Topik: Marine Diesel Engines, Marine Steam Turbine and Marine Gas Turbine</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Konten materi pembelajaran untuk topik ini akan segera ditambahkan di sini. Ini akan mencakup glosarium, penjelasan konsep, dan contoh percakapan.
          </p>
          <p className="text-lg">
            Teaching material content for this topic will be added here soon. It will include a glossary, concept explanations, and conversation examples.
          </p>
          <Link to="/lesson-plan-marine-engines" className="text-blue-500 hover:underline mt-4 block">
            Kembali ke Rencana Pelaksanaan Pembelajaran / Back to Lesson Plan
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeachingMaterialMarineEngines;