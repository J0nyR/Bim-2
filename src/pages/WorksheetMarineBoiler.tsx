import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import WorksheetHeader from '@/components/WorksheetHeader';

const WorksheetMarineBoiler = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">
          Lembar Kerja Siswa / Student Worksheet
        </h1>
        <p className="text-muted-foreground mt-2">Topik: Marine Boiler (Ketel Uap Kapal)</p>
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
                <li>Furnace</li>
                <li>Safety Valve</li>
                <li>Gauge Glass</li>
                <li>Water Tubes</li>
                <li>Blowdown</li>
                <li>Steam Drum</li>
                <li>Superheater</li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kolom B / Column B</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Pipa yang berisi air dan dipanaskan dari luar. / Tubes that contain water and are heated from the outside.</li>
                <li>Proses membuang kotoran dari dalam boiler. / The process of removing impurities from inside the boiler.</li>
                <li>Ruang tempat pembakaran bahan bakar. / The chamber where fuel is burned.</li>
                <li>Katup yang melepaskan tekanan berlebih secara otomatis. / A valve that automatically releases excess pressure.</li>
                <li>Gelas untuk melihat level air di dalam boiler. / A glass to see the water level inside the boiler.</li>
                <li>Komponen untuk memanaskan uap di atas suhu jenuhnya. / A component to heat steam above its saturation temperature.</li>
                <li>Bejana atas tempat uap dipisahkan dari air. / The upper vessel where steam is separated from water.</li>
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
            <li>Apa bahaya dari kondisi 'level air tinggi' (high water level) di dalam boiler? / What is the danger of a 'high water level' condition in a boiler?</li>
            <li>Mengapa kualitas air umpan (feedwater) yang baik sangat penting untuk boiler, terutama boiler pipa air? / Why is good quality feedwater so important for a boiler, especially a water-tube boiler?</li>
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
              Seorang perwira mesin melihat bahwa level air di gelas penduga (gauge glass) pada boiler bantu yang sedang beroperasi tidak lagi terlihat. Level air bisa jadi terlalu tinggi atau terlalu rendah.
              <br />
              <em className="text-muted-foreground">An engineering officer notices that the water level in the gauge glass of an operating auxiliary boiler is no longer visible. The water level could be either too high or too low.</em>
            </p>
            <p>Apa bahaya yang mungkin terjadi dalam situasi ini, dan apa tindakan keselamatan pertama yang harus diambil? / What is the potential danger in this situation, and what is the first safety action that should be taken?</p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Skenario 2 / Scenario 2</h3>
            <p className="italic mb-2">
              Setelah beberapa minggu beroperasi, boiler utama pada kapal turbin uap mulai mengalami kesulitan untuk mencapai tekanan kerja penuh, dan suhu gas buang lebih tinggi dari biasanya.
              <br />
              <em className="text-muted-foreground">After several weeks of operation, the main boiler on a steam turbine ship starts to have difficulty reaching its full working pressure, and the exhaust gas temperature is higher than normal.</em>
            </p>
            <p>Apa kemungkinan penyebab masalah ini, dan prosedur perawatan apa yang harus segera dilakukan? / What is a likely cause of this problem, and what maintenance procedure should be carried out soon?</p>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Section 4: Grammar Practice */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 4: Latihan Tata Bahasa / Section 4: Grammar Practice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">A. Modal Verbs (must / should)</h3>
            <p className="mb-2">Pilih kata kerja modal yang paling tepat untuk melengkapi kalimat. / Choose the most appropriate modal verb to complete the sentences.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>You (must / should) always check the water level before lighting up a boiler.</li>
              <li>The pressure gauge (must / should) be calibrated annually.</li>
              <li>Engineers (must / should) perform a blowdown to control water quality.</li>
            </ol>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">B. Prepositions of Place (in / on / inside / outside)</h3>
            <p className="mb-2">Isi bagian yang kosong dengan preposisi yang benar. / Fill in the blanks with the correct preposition.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>The pressure gauge is located ______ the steam drum.</li>
              <li>In a water-tube boiler, the hot gas is ______ the tubes.</li>
              <li>The furnace is located ______ the boiler shell.</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-8 space-x-4 hide-on-print">
        <Button asChild>
            <Link to="/answer-key-marine-boiler">Lihat Kunci Jawaban / View Answer Key</Link>
        </Button>
      </div>
    </div>
  );
};

export default WorksheetMarineBoiler;