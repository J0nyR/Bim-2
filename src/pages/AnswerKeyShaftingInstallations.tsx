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
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Thrust Block:</strong> Bantalan yang menyalurkan daya dorong ke badan kapal. / A bearing that transfers thrust to the ship's hull.</li>
            <li><strong>Stern Tube:</strong> Tabung yang melingkupi poros saat menembus badan kapal. / A tube housing the shaft where it passes through the hull.</li>
            <li><strong>Alignment:</strong> Kelurusan poros untuk mencegah getaran. / The straightness of the shafting to prevent vibration.</li>
            <li><strong>Controllable Pitch Propeller (CPP):</strong> Baling-baling yang sudut daunnya bisa diubah. / A propeller whose blade angle can be changed.</li>
            <li><strong>Plummer Block:</strong> Bantalan untuk menopang poros antara. / A bearing that supports the intermediate shaft.</li>
            <li><strong>Cavitation:</strong> Pembentukan gelembung uap yang merusak pada bilah baling-baling. / The formation of damaging vapor bubbles on propeller blades.</li>
            <li><strong>Gearbox:</strong> Perangkat untuk mengurangi putaran mesin ke putaran baling-baling. / A device to reduce engine speed to propeller speed.</li>
          </ol>
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
            <li>
              <strong>Jawaban / Answer:</strong> Perbedaan antara jarak teoretis yang seharusnya ditempuh baling-baling dalam satu putaran (pitch) dan jarak aktual yang ditempuh kapal. / The difference between the theoretical distance a propeller should advance in one revolution (its pitch) and the actual distance the ship advances.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> Mesin putaran menengah berputar terlalu cepat untuk efisiensi baling-baling. Gearbox digunakan untuk mengurangi putaran tinggi mesin ke putaran rendah yang lebih efisien untuk baling-baling. Mesin putaran lambat sudah berputar pada kecepatan yang efisien untuk baling-baling. / Medium-speed engines rotate too fast for efficient propeller operation. A gearbox is used to reduce the high engine RPM to a lower, more efficient RPM for the propeller. Slow-speed engines already operate at an efficient propeller speed.
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
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Skenario 1 / Scenario 1</h3>
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
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Skenario 2 / Scenario 2</h3>
            <p>
              <strong>Perhatian / Concern:</strong> Ini adalah masalah serius karena perapat (seal) seharusnya mencegah kebocoran oli. Kebocoran ini berarti ada potensi oli pelumas keluar ke laut (polusi) dan air laut masuk ke dalam sistem pelumasan tabung buritan, yang dapat menyebabkan kerusakan parah pada bantalan. / This is a serious concern because the seal is failing. This leak means potential oil pollution overboard and potential seawater ingress into the stern tube lubrication system, which can cause catastrophic bearing damage.
            </p>
            <p className="mt-4">
              <strong>Tindakan / Actions:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Segera laporkan kepada perwira senior (Second Engineer/Chief Engineer). / Immediately report to the senior officer (2nd/Chief Engineer).</li>
                <li>Pantau suhu bantalan tabung buritan dengan ketat. / Closely monitor the stern tube bearing temperature.</li>
                <li>Periksa level oli di tangki header tabung buritan dan tambah jika perlu. / Check the oil level in the stern tube header tank and top up as necessary.</li>
                <li>Rencanakan perbaikan atau penggantian perapat pada kesempatan dok kering berikutnya. / Plan for seal repair or replacement at the next dry dock opportunity.</li>
              </ul>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnswerKeyShaftingInstallations;