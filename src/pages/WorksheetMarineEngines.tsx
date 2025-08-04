import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import WorksheetHeader from '@/components/WorksheetHeader';

const WorksheetMarineEngines = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">
          Lembar Kerja Siswa / Student Worksheet
        </h1>
        <p className="text-muted-foreground mt-2">Topik: Marine Diesel Engines, Steam Turbines, and Gas Turbines</p>
      </div>

      <WorksheetHeader />

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
              <ol className="list-decimal list-inside space-y-2">
                <li>Crankshaft</li>
                <li>Boiler</li>
                <li>Compressor</li>
                <li>Condenser</li>
                <li>Piston</li>
                <li>Turbocharger</li>
                <li>Camshaft</li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kolom B / Column B</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>A device that increases the pressure of a gas.</li>
                <li>A component that moves up and down inside the cylinder.</li>
                <li>A device that generates steam by heating water.</li>
                <li>A shaft that converts the linear motion of the piston into rotational motion.</li>
                <li>A heat exchanger that converts steam into water.</li>
                <li>A shaft that controls the opening and closing of valves.</li>
                <li>A device that uses exhaust gas to force more air into the engine.</li>
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
            <li>Apa keuntungan utama mesin diesel 4-tak dibandingkan dengan 2-tak? / What is the main advantage of a 4-stroke diesel engine compared to a 2-stroke?</li>
            <li>Mengapa turbin uap sering digunakan pada kapal yang sangat besar seperti kapal tanker? / Why are steam turbines often used on very large vessels like tankers?</li>
            <li>Sebutkan satu kelemahan utama dari turbin gas laut. / Name one major disadvantage of a marine gas turbine.</li>
            <li>Jelaskan secara singkat empat langkah (four strokes) dalam siklus mesin 4-tak. / Briefly explain the four strokes in a 4-stroke engine cycle.</li>
            <li>Apa tujuan dari 'intercooler' pada mesin diesel yang dilengkapi turbocharger? / What is the purpose of an 'intercooler' on a turbocharged diesel engine?</li>
          </ol>
        </CardContent>
      </Card>

      <Separator />

      {/* Section 3: Scenario Analysis */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 3: Analisis Skenario / Section 3: Scenario Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Skenario 1 / Scenario 1</h3>
            <p className="italic mb-2">
              Sebuah kapal feri cepat membutuhkan sistem propulsi yang dapat dinyalakan dengan cepat dan memiliki rasio daya terhadap berat yang tinggi. Manajer teknis sedang mempertimbangkan antara mesin diesel putaran tinggi dan turbin gas.
              <br />
              <em className="text-muted-foreground">A fast ferry requires a propulsion system that can be started quickly and has a high power-to-weight ratio. The technical manager is considering between a high-speed diesel engine and a gas turbine.</em>
            </p>
            <p>Berdasarkan karakteristik yang telah Anda pelajari, sistem propulsi mana yang akan Anda rekomendasikan dan mengapa? / Based on the characteristics you have learned, which propulsion system would you recommend and why?</p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Skenario 2 / Scenario 2</h3>
            <p className="italic mb-2">
              Saat berlayar, seorang masinis mengamati bahwa mesin utama tiba-tiba kehilangan tenaga dan mengeluarkan asap hitam tebal dari cerobong.
              <br />
              <em className="text-muted-foreground">During a voyage, an engineer observes that the main engine suddenly loses power and emits thick black smoke from the funnel.</em>
            </p>
            <p>Kerusakan pada komponen apa yang paling mungkin menjadi penyebab masalah ini, dan mengapa hal itu menyebabkan asap hitam? / A failure in which major component is the most likely cause of this problem, and why does it lead to black smoke?</p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-8 space-x-4 hide-on-print">
        <Button asChild>
            <Link to="/answer-key-marine-engines">Lihat Kunci Jawaban / View Answer Key</Link>
        </Button>
      </div>
    </div>
  );
};

export default WorksheetMarineEngines;