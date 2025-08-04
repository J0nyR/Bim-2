import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AnswerKeyOtherAuxiliaries = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Kunci Jawaban - Mesin Bantu Lainnya / Answer Key - Other Auxiliaries
      </h1>

      {/* Section 1: Vocabulary */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 1: Kosakata / Section 1: Vocabulary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-decimal list-inside space-y-2">
            <li><strong>Impeller:</strong> Roda berputar di dalam pompa sentrifugal yang mendorong fluida. / The rotating part of a centrifugal pump that moves the fluid.</li>
            <li><strong>Refrigerant:</strong> Zat yang digunakan dalam siklus pendinginan untuk menyerap dan melepaskan panas. / A substance used in a refrigeration cycle to absorb and release heat.</li>
            <li><strong>Distillation:</strong> Proses pemurnian cairan dengan pemanasan dan pendinginan. / The process of purifying a liquid by heating and cooling.</li>
            <li><strong>Separator:</strong> Mesin yang memisahkan zat berdasarkan massa jenis menggunakan gaya sentrifugal. / A machine that separates substances of different densities using centrifugal force.</li>
            <li><strong>Synchronize:</strong> Menghubungkan generator ke switchboard utama dengan mencocokkan tegangan, frekuensi, dan fasa. / To connect a generator to the main switchboard by matching voltage, frequency, and phase.</li>
          </ul>
        </CardContent>
      </Card>

      <Separator />

      {/* Section 2: Concept Comprehension */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 2: Pemahaman Konsep / Section 2: Concept Comprehension</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Jawaban / Answer:</strong> Mode <strong>Purifier</strong> memisahkan dua cairan (misalnya, oli dan air) dan memiliki dua saluran keluar cairan. Mode <strong>Clarifier</strong> memisahkan padatan dari satu cairan dan hanya memiliki satu saluran keluar cairan. / <strong>Purifier</strong> mode separates two liquids (e.g., oil and water) and has two liquid outlets. <strong>Clarifier</strong> mode separates solids from a single liquid and has only one liquid outlet.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> Vakum memungkinkan air laut mendidih pada suhu rendah (sekitar 40-60°C), sehingga dapat menggunakan panas buangan dari mesin sebagai sumber energi, yang membuatnya lebih efisien. / Vacuum allows seawater to boil at a low temperature (around 40-60°C), enabling the use of waste heat from the engine as an energy source, which makes it more efficient.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> 1) Tegangan Sama, 2) Frekuensi Sama, 3) Urutan Fasa Sama, dan 4) Sudut Fasa Sama. / 1) Same Voltage, 2) Same Frequency, 3) Same Phase Sequence, and 4) Same Phase Angle.
            </li>
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
          <p>
            <strong>Kemungkinan Penyebab / Possible Causes:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Kekurangan refrigerant (refrigerant shortage).</li>
              <li>Katup ekspansi (expansion valve) tersumbat atau rusak.</li>
              <li>Kondensor (condenser) kotor sehingga tidak bisa membuang panas dengan baik.</li>
              <li>Evaporator membeku (icing up) sehingga menghalangi penyerapan panas.</li>
            </ul>
          </p>
          <p className="mt-4">
            <strong>Yang Harus Diperiksa Terlebih Dahulu / What to Check First:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Periksa level refrigerant di gelas penduga (sight glass).</li>
              <li>Periksa embun beku (frosting) pada katup ekspansi dan evaporator.</li>
              <li>Periksa tekanan di sisi isap (suction) dan keluar (discharge) kompresor.</li>
              <li>Pastikan aliran air laut pendingin ke kondensor lancar dan suhu keluar-masuknya normal.</li>
            </ul>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnswerKeyOtherAuxiliaries;