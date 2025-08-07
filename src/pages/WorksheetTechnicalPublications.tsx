import React from 'react';
import WorksheetHeader from '@/components/WorksheetHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WorksheetTechnicalPublications = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Lembar Kerja Siswa / Student Worksheet</h1>
          <p className="text-muted-foreground">Modul 2.4: Penggunaan Publikasi Teknis</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>
      
      <WorksheetHeader />

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tugas 1: Analisis Halaman Manual / Task 1: Manual Page Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Perhatikan contoh kutipan dari jadwal perawatan pompa di bawah ini dan jawab pertanyaannya.</p>
            <p className="mb-4 italic text-muted-foreground">Look at the sample excerpt from a pump maintenance schedule below and answer the questions.</p>
            <div className="my-4 p-4 border rounded-lg bg-muted">
              <h4 className="font-bold">Pump Model X-123 Maintenance Schedule</h4>
              <table className="w-full text-left mt-2">
                <thead><tr><th className="border p-1">Interval</th><th className="border p-1">Task</th><th className="border p-1">Remarks</th></tr></thead>
                <tbody>
                  <tr><td className="border p-1">Daily</td><td className="border p-1">Check for leaks</td><td className="border p-1">Visual inspection</td></tr>
                  <tr><td className="border p-1">500 RH*</td><td className="border p-1">Check bearing grease</td><td className="border p-1">Add if necessary</td></tr>
                  <tr><td className="border p-1">2000 RH*</td><td className="border p-1">Replace mechanical seal</td><td className="border p-1">Use part no. 55-ABC</td></tr>
                </tbody>
              </table>
              <p className="text-xs mt-2">*RH = Running Hours (Jam Kerja)</p>
            </div>
            <ol className="list-decimal list-inside space-y-4">
              <li>Kapan Anda harus mengganti mechanical seal? _________________________</li>
              <li>Apa yang harus Anda lakukan setiap hari? _________________________</li>
              <li>Apa nomor suku cadang untuk mechanical seal? _________________________</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 2: Menjodohkan Kode dengan Tujuannya / Task 2: Matching Codes to Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Jodohkan kode internasional di Kolom A dengan tujuan utamanya di Kolom B.</p>
            <p className="mb-4 italic text-muted-foreground">Match the international code in Column A with its main purpose in Column B.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Kolom A (Code)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>SOLAS</li>
                  <li>MARPOL</li>
                  <li>ISM Code</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kolom B (Purpose)</h4>
                <ul className="list-decimal list-inside space-y-2">
                  <li>To prevent pollution from ships.</li>
                  <li>To provide a framework for safe management and operation of ships.</li>
                  <li>To set minimum safety standards for ship construction and equipment.</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <p>Jawaban / Answers:</p>
              <p>SOLAS: __________</p>
              <p>MARPOL: __________</p>
              <p>ISM Code: __________</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorksheetTechnicalPublications;