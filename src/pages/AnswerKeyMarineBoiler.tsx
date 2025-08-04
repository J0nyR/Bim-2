import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AnswerKeyMarineBoiler = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Kunci Jawaban - Ketel Uap Kapal / Answer Key - Marine Boiler
      </h1>

      {/* Section 1: Vocabulary */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 1: Kosakata / Section 1: Vocabulary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-decimal list-inside space-y-2">
            <li><strong>Furnace:</strong> Ruang tempat pembakaran bahan bakar. / The chamber where fuel is burned.</li>
            <li><strong>Safety Valve:</strong> Katup yang melepaskan tekanan berlebih secara otomatis. / A valve that automatically releases excess pressure.</li>
            <li><strong>Gauge Glass:</strong> Gelas untuk melihat level air di dalam boiler. / A glass to see the water level inside the boiler.</li>
            <li><strong>Water Tubes:</strong> Pipa yang berisi air dan dipanaskan dari luar. / Tubes that contain water and are heated from the outside.</li>
            <li><strong>Blowdown:</strong> Proses membuang kotoran dari dalam boiler. / The process of removing impurities from inside the boiler.</li>
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
              <strong>Jawaban / Answer:</strong> Pada ketel uap pipa api, gas panas berada di dalam pipa dan air di luar. Pada ketel uap pipa air, air berada di dalam pipa dan gas panas di luar. / In a fire-tube boiler, hot gas is inside the tubes and water is outside. In a water-tube boiler, water is inside the tubes and hot gas is outside.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> Ketel uap pipa air menggunakan banyak pipa berdiameter kecil yang dapat menahan tekanan jauh lebih tinggi daripada satu bejana besar (shell) pada ketel uap pipa api. / A water-tube boiler uses many small-diameter tubes which can withstand much higher pressure than the single large shell of a fire-tube boiler.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> 
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Safety Valve:</strong> Melepaskan tekanan berlebih untuk mencegah ledakan. / Releases excess pressure to prevent an explosion.</li>
                <li><strong>Gauge Glass:</strong> Menunjukkan level air untuk mencegah kondisi air rendah (pemanasan berlebih) atau air tinggi (terbawa uap). / Shows the water level to prevent low-water (overheating) or high-water (carryover) conditions.</li>
                <li><strong>Pressure Gauge:</strong> Menunjukkan tekanan kerja boiler. / Indicates the working pressure of the boiler.</li>
              </ul>
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
            <strong>Bahaya / Danger:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><strong>Jika level air terlalu rendah (Low Water Level):</strong> Bahaya terbesar adalah pemanasan berlebih (overheating) pada permukaan pemanas yang tidak lagi terendam air, yang dapat menyebabkan kerusakan parah atau bahkan ledakan boiler. / The greatest danger is overheating of the heating surfaces no longer covered by water, which can lead to severe damage or even a boiler explosion.</li>
              <li><strong>Jika level air terlalu tinggi (High Water Level):</strong> Air dapat terbawa bersama uap (priming/carryover) ke sistem perpipaan dan mesin, menyebabkan kerusakan serius pada turbin atau mesin lainnya. / Water can be carried over with the steam (priming/carryover) into the piping and machinery, causing serious damage to turbines or other engines.</li>
            </ul>
          </p>
          <p className="mt-4">
            <strong>Tindakan Pertama / First Action:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Segera matikan pembakar (burner) untuk menghentikan pemanasan. / Immediately shut off the burner to stop the heating.</li>
              <li>Verifikasi level air sebenarnya dengan melakukan "blow-through" pada gelas penduga untuk memastikan tidak ada penyumbatan. / Verify the true water level by "blowing through" the gauge glass to ensure there are no blockages.</li>
              <li>Jangan menambahkan air umpan sampai level air yang sebenarnya telah dipastikan. / Do not add feed water until the true water level has been confirmed.</li>
            </ul>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnswerKeyMarineBoiler;