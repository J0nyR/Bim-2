import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import WorksheetHeader from '@/components/WorksheetHeader';

const WorksheetShaftingInstallations = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">
          Lembar Kerja Siswa / Student Worksheet
        </h1>
        <p className="text-muted-foreground mt-2">Topik: Shafting Installations and Propeller</p>
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
                <li>Thrust Block</li>
                <li>Stern Tube</li>
                <li>Alignment</li>
                <li>Controllable Pitch Propeller (CPP)</li>
                <li>Plummer Block</li>
                <li>Cavitation</li>
                <li>Gearbox</li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kolom B / Column B</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Kelurusan poros untuk mencegah getaran. / The straightness of the shafting to prevent vibration.</li>
                <li>Bantalan untuk menopang poros antara. / A bearing that supports the intermediate shaft.</li>
                <li>Baling-baling yang sudut daunnya bisa diubah. / A propeller whose blade angle can be changed.</li>
                <li>Bantalan yang menyalurkan daya dorong ke badan kapal. / A bearing that transfers thrust to the ship's hull.</li>
                <li>Tabung yang melingkupi poros saat menembus badan kapal. / A tube housing the shaft where it passes through the hull.</li>
                <li>Perangkat untuk mengurangi putaran mesin ke putaran baling-baling. / A device to reduce engine speed to propeller speed.</li>
                <li>Pembentukan gelembung uap yang merusak pada bilah baling-baling. / The formation of damaging vapor bubbles on propeller blades.</li>
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
            <li>Apa dua fungsi utama dari sistem poros kapal? / What are the two main functions of a ship's shafting system?</li>
            <li>Mengapa tabung buritan (stern tube) merupakan komponen yang kritis? Apa yang dicegahnya? / Why is the stern tube a critical component? What does it prevent?</li>
            <li>Apa keuntungan utama dari Baling-Baling yang Dapat Diatur Pitch-nya (CPP) dibandingkan dengan Baling-Baling Pitch Tetap (FPP)? / What is the main advantage of a Controllable Pitch Propeller (CPP) compared to a Fixed Pitch Propeller (FPP)?</li>
            <li>Jelaskan secara singkat apa itu 'propeller slip'. / Briefly explain what 'propeller slip' is.</li>
            <li>Mengapa mesin diesel putaran menengah (medium-speed) memerlukan gearbox, sedangkan mesin putaran lambat (slow-speed) tidak? / Why does a medium-speed diesel engine require a gearbox, while a slow-speed engine does not?</li>
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
              Sebuah kapal mengalami getaran yang tidak biasa di bagian buritan, terutama saat berlayar dengan kecepatan tinggi. Parameter mesin utama semuanya normal.
              <br />
              <em className="text-muted-foreground">A ship is experiencing unusual vibrations in the aft section, especially at high speeds. The main engine parameters are all normal.</em>
            </p>
            <p>Apa kemungkinan penyebab getaran ini yang terkait dengan sistem poros atau baling-baling? Apa yang harus diperiksa? / What could be a possible cause of this vibration related to the shafting or propeller? What should be checked?</p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Skenario 2 / Scenario 2</h3>
            <p className="italic mb-2">
              Saat melakukan inspeksi di terowongan poros, seorang masinis melihat ada sedikit tetesan oli dari perapat depan tabung buritan (stern tube forward seal).
              <br />
              <em className="text-muted-foreground">During an inspection in the shaft tunnel, an engineer notices a slight oil drip from the stern tube forward seal.</em>
            </p>
            <p>Mengapa ini menjadi perhatian serius dan tindakan apa yang harus segera dilaporkan dan direncanakan? / Why is this a serious concern and what actions should be reported and planned immediately?</p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-8 space-x-4 hide-on-print">
        <Button asChild>
            <Link to="/answer-key-shafting-installations">Lihat Kunci Jawaban / View Answer Key</Link>
        </Button>
      </div>
    </div>
  );
};

export default WorksheetShaftingInstallations;