import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const AnswerKeyFluidPumpingSeparation = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Kunci Jawaban / Answer Key</h1>
          <p className="text-muted-foreground">Modul 2.2: Sistem Fluida, Perpompaan & Separasi</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tugas 1: Melengkapi Kalimat / Task 1: Sentence Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>The resistance of an oil to flow is called its <strong>viscosity</strong>.</li>
              <li>The <strong>flash point</strong> is a critical safety parameter to prevent fire hazards.</li>
              <li>A purifier separates water from oil because they have different <strong>density</strong>.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 2: Klasifikasi Pompa / Task 2: Pump Classification</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Main sea water cooling system: <strong>Centrifugal</strong></li>
              <li>Fuel oil injection: <strong>Positive Displacement</strong></li>
              <li>Transferring large volumes of ballast water: <strong>Centrifugal</strong></li>
              <li>Lube oil circulation for the main engine: <strong>Positive Displacement</strong></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 3: Pertanyaan Singkat / Task 3: Short Question</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Kapal harus dilengkapi OWS untuk mencegah polusi laut. Peraturan MARPOL melarang pembuangan air got (bilge water) yang mengandung minyak di atas batas tertentu (15 ppm) ke laut. OWS memastikan bahwa air yang dibuang mematuhi peraturan ini.</p>
            <p className="italic text-muted-foreground">Ships must be equipped with an OWS to prevent marine pollution. The MARPOL regulation prohibits the discharge of oily bilge water with an oil content above a certain limit (15 ppm) into the sea. The OWS ensures that the discharged water complies with this regulation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnswerKeyFluidPumpingSeparation;