import React from 'react';
import WorksheetHeader from '@/components/WorksheetHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WorksheetFluidPumpingSeparation = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Lembar Kerja Siswa / Student Worksheet</h1>
          <p className="text-muted-foreground">Modul 2.2: Sistem Fluida, Perpompaan & Separasi</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>
      
      <WorksheetHeader />

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tugas 1: Melengkapi Kalimat / Task 1: Sentence Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Lengkapi kalimat berikut dengan istilah yang tepat (viscosity, density, flash point).</p>
            <p className="mb-4 italic text-muted-foreground">Complete the following sentences with the correct term (viscosity, density, flash point).</p>
            <ol className="list-decimal list-inside space-y-4">
              <li>The resistance of an oil to flow is called its __________.</li>
              <li>The __________ is a critical safety parameter to prevent fire hazards.</li>
              <li>A purifier separates water from oil because they have different __________.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 2: Klasifikasi Pompa / Task 2: Pump Classification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Tentukan apakah aplikasi berikut biasanya menggunakan pompa Sentrifugal (Centrifugal) atau Positive Displacement.</p>
            <p className="mb-4 italic text-muted-foreground">Determine if the following applications typically use a Centrifugal or a Positive Displacement pump.</p>
            <ul className="list-disc list-inside space-y-4">
              <li>Main sea water cooling system: _________________________</li>
              <li>Fuel oil injection: _________________________</li>
              <li>Transferring large volumes of ballast water: _________________________</li>
              <li>Lube oil circulation for the main engine: _________________________</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 3: Pertanyaan Singkat / Task 3: Short Question</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Jelaskan dengan singkat mengapa kapal harus dilengkapi dengan Oily-Water Separator (OWS) sesuai peraturan internasional.</p>
            <p className="mb-4 italic text-muted-foreground">Briefly explain why ships must be equipped with an Oily-Water Separator (OWS) according to international regulations.</p>
            <div className="mt-2 border-t pt-2">
              <p>______________________________________________________________________</p>
              <p>______________________________________________________________________</p>
              <p>______________________________________________________________________</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorksheetFluidPumpingSeparation;