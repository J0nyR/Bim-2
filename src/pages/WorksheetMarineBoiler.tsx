import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';

const WorksheetMarineBoiler = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Lembar Kerja Siswa / Student Worksheet
      </h1>
      <p className="text-center text-muted-foreground">Topik: Marine Boiler (Ketel Uap Kapal)</p>

      {/* Section 1: Vocabulary */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 1: Kosakata / Section 1: Vocabulary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Jodohkan istilah di Kolom A dengan definisi yang benar di Kolom B. / Match the term in Column A with the correct definition in Column B.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Kolom A / Column A</h3>
              <ul className="list-decimal list-inside space-y-2">
                <li>Furnace</li>
                <li>Safety Valve</li>
                <li>Gauge Glass</li>
                <li>Water Tubes</li>
                <li>Blowdown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kolom B / Column B</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Pipa yang berisi air dan dipanaskan dari luar. / Tubes that contain water and are heated from the outside.</li>
                <li>Proses membuang kotoran dari dalam boiler. / The process of removing impurities from inside the boiler.</li>
                <li>Ruang tempat pembakaran bahan bakar. / The chamber where fuel is burned.</li>
                <li>Katup yang melepaskan tekanan berlebih secara otomatis. / A valve that automatically releases excess pressure.</li>
                <li>Gelas untuk melihat level air di dalam boiler. / A glass to see the water level inside the boiler.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Section 2: Concept Comprehension */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 2: Pemahaman Konsep / Section 2: Concept Comprehension</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Jawablah pertanyaan-pertanyaan berikut dengan singkat dan jelas. / Answer the following questions briefly and clearly.</p>
          <ol className="list-decimal list-inside space-y-3">
            <li>Apa perbedaan mendasar antara ketel uap pipa api (fire-tube) dan pipa air (water-tube)? / What is the fundamental difference between a fire-tube and a water-tube boiler?</li>
            <li>Mengapa ketel uap pipa air lebih cocok untuk menghasilkan uap bertekanan tinggi? / Why is a water-tube boiler more suitable for generating high-pressure steam?</li>
            <li>Sebutkan tiga perlengkapan keselamatan (safety fittings) penting pada ketel uap dan jelaskan fungsinya secara singkat. / Name three essential safety fittings on a boiler and briefly state their function.</li>
          </ol>
        </CardContent>
      </Card>

      <Separator />

      {/* Section 3: Scenario Analysis */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 3: Analisis Skenario / Section 3: Scenario Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Baca skenario berikut dan jawab pertanyaannya. / Read the following scenario and answer the question.</p>
          <p className="italic mb-4">
            Seorang perwira mesin melihat bahwa level air di gelas penduga (gauge glass) pada boiler bantu yang sedang beroperasi tidak lagi terlihat. Level air bisa jadi terlalu tinggi atau terlalu rendah.
            <br />
            <em className="text-muted-foreground">An engineering officer notices that the water level in the gauge glass of an operating auxiliary boiler is no longer visible. The water level could be either too high or too low.</em>
          </p>
          <p>Apa bahaya yang mungkin terjadi dalam situasi ini, dan apa tindakan keselamatan pertama yang harus diambil? / What is the potential danger in this situation, and what is the first safety action that should be taken?</p>
        </CardContent>
      </Card>

      <div className="text-center mt-8 space-x-4">
        <Button asChild>
            <Link to="/answer-key-marine-boiler">Lihat Kunci Jawaban / View Answer Key</Link>
        </Button>
      </div>
    </div>
  );
};

export default WorksheetMarineBoiler;