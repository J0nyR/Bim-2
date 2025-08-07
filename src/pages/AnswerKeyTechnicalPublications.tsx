import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const AnswerKeyTechnicalPublications = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Kunci Jawaban / Answer Key</h1>
          <p className="text-muted-foreground">Modul 2.4: Penggunaan Publikasi Teknis</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tugas 1: Analisis Halaman Manual / Task 1: Manual Page Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Kapan Anda harus mengganti mechanical seal?</strong> Setiap 2000 jam kerja (2000 Running Hours).</li>
              <li><strong>Apa yang harus Anda lakukan setiap hari?</strong> Periksa kebocoran (Check for leaks).</li>
              <li><strong>Apa nomor suku cadang untuk mechanical seal?</strong> 55-ABC.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 2: Menjodohkan Kode dengan Tujuannya / Task 2: Matching Codes to Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>SOLAS:</strong> 3. To set minimum safety standards for ship construction and equipment.</li>
              <li><strong>MARPOL:</strong> 1. To prevent pollution from ships.</li>
              <li><strong>ISM Code:</strong> 2. To provide a framework for safe management and operation of ships.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnswerKeyTechnicalPublications;