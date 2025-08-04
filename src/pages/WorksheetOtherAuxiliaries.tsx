import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';

const WorksheetOtherAuxiliaries = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Lembar Kerja Siswa / Student Worksheet
      </h1>
      <p className="text-center text-muted-foreground">Topik: Mesin Bantu Lainnya / Other Auxiliaries</p>

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
                <li>Impeller</li>
                <li>Refrigerant</li>
                <li>Distillation</li>
                <li>Separator</li>
                <li>Synchronize</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kolom B / Column B</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Zat yang digunakan dalam siklus pendinginan untuk menyerap dan melepaskan panas. / A substance used in a refrigeration cycle to absorb and release heat.</li>
                <li>Proses pemurnian cairan dengan pemanasan dan pendinginan. / The process of purifying a liquid by heating and cooling.</li>
                <li>Menghubungkan generator ke switchboard utama dengan mencocokkan tegangan, frekuensi, dan fasa. / To connect a generator to the main switchboard by matching voltage, frequency, and phase.</li>
                <li>Roda berputar di dalam pompa sentrifugal yang mendorong fluida. / The rotating part of a centrifugal pump that moves the fluid.</li>
                <li>Mesin yang memisahkan zat berdasarkan massa jenis menggunakan gaya sentrifugal. / A machine that separates substances of different densities using centrifugal force.</li>
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
            <li>Jelaskan perbedaan utama antara mode operasi Purifier dan Clarifier pada sebuah pemisah sentrifugal. / What is the main difference between Purifier and Clarifier operating modes on a centrifugal separator?</li>
            <li>Mengapa kondisi vakum sangat penting dalam pengoperasian Fresh Water Generator (FWG)? / Why is a vacuum condition essential in the operation of a Fresh Water Generator (FWG)?</li>
            <li>Sebutkan empat kondisi yang harus terpenuhi sebelum menyinkronkan (paralleling) sebuah generator ke switchboard utama. / Name the four conditions that must be met before synchronizing (paralleling) a generator to the main switchboard.</li>
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
            Suhu di dalam ruang freezer provisi tiba-tiba mulai naik, meskipun kompresor sistem pendingin tampaknya berjalan.
            <br />
            <em className="text-muted-foreground">The temperature inside the provision freezer room suddenly starts to rise, although the refrigeration system's compressor seems to be running.</em>
          </p>
          <p>Apa kemungkinan penyebab masalah ini, dan komponen apa saja dari siklus refrigerasi yang harus diperiksa terlebih dahulu? / What are the possible causes of this problem, and which components of the refrigeration cycle should be checked first?</p>
        </CardContent>
      </Card>

      <div className="text-center mt-8 space-x-4">
        <Button asChild>
            <Link to="/answer-key-other-auxiliaries">Lihat Kunci Jawaban / View Answer Key</Link>
        </Button>
      </div>
    </div>
  );
};

export default WorksheetOtherAuxiliaries;