import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AnswerKeyShaftingInstallations = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Kunci Jawaban - Instalasi Poros & Baling-baling
      </h1>

      {/* Section 1: Vocabulary */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 1: Kosakata / Section 1: Vocabulary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-decimal list-inside space-y-2">
            <li><strong>Thrust Block:</strong> Bantalan yang menyalurkan daya dorong ke badan kapal. / A bearing that transfers thrust to the ship's hull.</li>
            <li><strong>Stern Tube:</strong> Tabung yang melingkupi poros saat menembus badan kapal. / A tube housing the shaft where it passes through the hull.</li>
            <li><strong>Alignment:</strong> Kelurusan poros untuk mencegah getaran. / The straightness of the shafting to prevent vibration.</li>
            <li><strong>Controllable Pitch Propeller (CPP):</strong> Baling-baling yang sudut daunnya bisa diubah. / A propeller whose blade angle can be changed.</li>
            <li><strong>Plummer Block:</strong> Bantalan untuk menopang poros antara. / A bearing that supports the intermediate shaft.</li>
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
              <strong>Jawaban / Answer:</strong> 1) Mentransmisikan torsi (gaya putar) dari mesin ke baling-baling. 2) Mentransmisikan daya dorong (thrust) dari baling-baling ke badan kapal. / 1) To transmit torque from the engine to the propeller. 2) To transmit thrust from the propeller to the ship's hull.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> Tabung buritan menopang poros baling-baling dan menggunakan perapat (seals) untuk mencegah air laut masuk ke dalam kamar mesin. / The stern tube supports the propeller shaft and uses seals to prevent seawater from entering the engine room.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> Keuntungan utamanya adalah kemampuan untuk mengubah kecepatan dan arah kapal (maju/mundur) tanpa mengubah kecepatan atau arah putaran mesin, sehingga memberikan kemampuan manuver yang lebih baik. / Its main advantage is the ability to change the ship's speed and direction (ahead/astern) without changing the engine's speed or direction of rotation, providing better maneuverability.
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
              <li>Kelurusan poros yang buruk (poor shaft alignment).</li>
              <li>Baling-baling rusak (misalnya, daun bengkok) atau kotor (teritip, jaring). / A damaged (e.g., bent blade) or fouled (barnacles, nets) propeller.</li>
              <li>Bantalan tabung buritan (stern tube bearing) yang aus. / A worn stern tube bearing.</li>
            </ul>
          </p>
          <p className="mt-4">
            <strong>Yang Harus Diperiksa / What to Check:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Suhu bantalan-bantalan poros (plummer blocks dan stern tube). / Temperature of the shaft bearings (plummer blocks and stern tube).</li>
              <li>Lakukan inspeksi oleh penyelam untuk memeriksa kondisi baling-baling. / Arrange a diver inspection to check the propeller's condition.</li>
              <li>Saat di dok kering (dry dock), periksa kelurusan poros dan kelonggaran (clearance) bantalan. / During dry dock, check shaft alignment and bearing clearances.</li>
            </ul>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnswerKeyShaftingInstallations;