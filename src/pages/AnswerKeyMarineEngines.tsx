import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';

const AnswerKeyMarineEngines = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Kunci Jawaban / Answer Key
      </h1>

      {/* Section 1: Vocabulary */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 1: Kosakata / Section 1: Vocabulary</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Crankshaft:</strong> A shaft that converts the linear motion of the piston into rotational motion.</li>
            <li><strong>Boiler:</strong> A device that generates steam by heating water.</li>
            <li><strong>Compressor:</strong> A device that increases the pressure of a gas.</li>
            <li><strong>Condenser:</strong> A heat exchanger that converts steam into water.</li>
            <li><strong>Piston:</strong> A component that moves up and down inside the cylinder.</li>
            <li><strong>Turbocharger:</strong> A device that uses exhaust gas to force more air into the engine.</li>
            <li><strong>Camshaft:</strong> A shaft that controls the opening and closing of valves.</li>
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
              <strong>Jawaban / Answer:</strong> Keuntungan utama mesin 4-tak adalah efisiensi bahan bakar yang lebih baik dan emisi yang lebih rendah. / The main advantages of a 4-stroke engine are better fuel efficiency and lower emissions.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> Turbin uap menghasilkan daya yang sangat tinggi dan beroperasi dengan getaran yang minim, yang cocok untuk kapal besar. Mereka juga dapat menggunakan bahan bakar berkualitas lebih rendah. / Steam turbines produce very high power and operate with minimal vibration, which is suitable for large vessels. They can also use lower-quality fuels.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> Kelemahan utama turbin gas adalah efisiensi bahan bakar yang lebih rendah (terutama pada beban parsial) dan biaya bahan bakar yang lebih tinggi. / A major disadvantage of a gas turbine is its lower fuel efficiency (especially at partial loads) and higher fuel cost.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> 1) Intake (Isap), 2) Compression (Kompresi), 3) Power (Tenaga), 4) Exhaust (Buang). / 1) Intake, 2) Compression, 3) Power, 4) Exhaust.
            </li>
            <li>
              <strong>Jawaban / Answer:</strong> Untuk mendinginkan udara yang telah dikompresi oleh turbocharger. Udara yang lebih dingin lebih padat, sehingga lebih banyak oksigen dapat masuk ke silinder, meningkatkan efisiensi pembakaran. / To cool the air after it has been compressed by the turbocharger. Cooler air is denser, allowing more oxygen to enter the cylinder, improving combustion efficiency.
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
              <strong>Rekomendasi / Recommendation:</strong> Turbin gas akan menjadi rekomendasi yang lebih baik untuk skenario ini. / A gas turbine would be the better recommendation for this scenario.
            </p>
            <p>
              <strong>Alasan / Reasoning:</strong> Turbin gas memiliki rasio daya terhadap berat yang sangat tinggi dan waktu start-up yang sangat cepat, yang sesuai dengan kebutuhan feri cepat. Meskipun mesin diesel juga cepat, turbin gas lebih unggul dalam hal kepadatan daya dan kecepatan respons. / Gas turbines have a very high power-to-weight ratio and an extremely fast start-up time, which matches the requirements of a fast ferry. While diesel engines are also fast, gas turbines are superior in power density and response speed.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Skenario 2 / Scenario 2</h3>
            <p>
              <strong>Kemungkinan Penyebab / Possible Cause:</strong> Kerusakan pada turbocharger. / A failure of the turbocharger.
            </p>
            <p>
              <strong>Alasan / Reasoning:</strong> Jika turbocharger gagal, jumlah udara yang masuk ke silinder akan berkurang drastis. Namun, sistem bahan bakar mungkin masih menyemprotkan jumlah bahan bakar yang sama. Kurangnya udara menyebabkan pembakaran tidak sempurna, yang menghasilkan asap hitam (bahan bakar yang tidak terbakar) dan kehilangan tenaga. / If the turbocharger fails, the amount of air being forced into the cylinders is drastically reduced. However, the fuel system may still be injecting the same amount of fuel. This lack of air leads to incomplete combustion, which produces black smoke (unburnt fuel) and a loss of power.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Separator />

      {/* Section 4: Grammar Practice Answers */}
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Bagian 4: Kunci Jawaban Tata Bahasa / Section 4: Grammar Practice Answer Key</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">A. Simple Present Tense</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>A four-stroke engine <strong>requires</strong> two crankshaft revolutions per power cycle.</li>
              <li>The piston rings <strong>seal</strong> the combustion chamber.</li>
              <li>A gas turbine <strong>offers</strong> a high power-to-weight ratio.</li>
            </ol>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">B. Passive Voice</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>The air <strong>is compressed</strong> by the turbocharger.</li>
              <li>High-pressure steam <strong>is generated</strong> by the boiler.</li>
              <li>Fuel <strong>is sprayed</strong> into the cylinders by the fuel injectors.</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnswerKeyMarineEngines;