import React from 'react';
import WorksheetHeader from '@/components/WorksheetHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WorksheetElectricalElectronic = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Lembar Kerja Siswa / Student Worksheet</h1>
          <p className="text-muted-foreground">Modul 2.3: Sistem Elektrikal & Elektronik</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>
      
      <WorksheetHeader />

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tugas 1: Menjodohkan Istilah / Task 1: Matching Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Jodohkan istilah kelistrikan di Kolom A dengan definisi yang paling tepat di Kolom B.</p>
            <p className="mb-4 italic text-muted-foreground">Match the electrical term in Column A with its best definition in Column B.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Kolom A (Term)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Generator</li>
                  <li>Circuit Breaker</li>
                  <li>Transformer</li>
                  <li>Main Switchboard</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kolom B (Definition)</h4>
                <ul className="list-decimal list-inside space-y-2">
                  <li>Changes voltage from high to low or vice versa.</li>
                  <li>The central distribution panel for electricity.</li>
                  <li>Converts mechanical energy into electrical energy.</li>
                  <li>A safety device that stops current flow during a fault.</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <p>Jawaban / Answers:</p>
              <p>Generator: __________</p>
              <p>Circuit Breaker: __________</p>
              <p>Transformer: __________</p>
              <p>Main Switchboard: __________</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 2: Identifikasi Sistem / Task 2: System Identification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Tentukan apakah komponen atau sistem berikut termasuk dalam kategori Elektrikal (Power) atau Elektronik (Control).</p>
            <p className="mb-4 italic text-muted-foreground">Determine if the following components or systems belong to the Electrical (Power) or Electronic (Control) category.</p>
            <ul className="list-disc list-inside space-y-4">
              <li>A 440V motor for a pump: _________________________</li>
              <li>A temperature sensor for the main engine: _________________________</li>
              <li>The Main Switchboard: _________________________</li>
              <li>A Programmable Logic Controller (PLC): _________________________</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 3: Pertanyaan Singkat / Task 3: Short Question</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Jelaskan dengan singkat mengapa kapal wajib memiliki Emergency Generator yang terpisah dari generator utama.</p>
            <p className="mb-4 italic text-muted-foreground">Briefly explain why a ship is required to have an Emergency Generator that is separate from the main generators.</p>
            <div className="mt-2 border-t pt-2">
              <p>______________________________________________________________________</p>
              <p>______________________________________________________________________</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorksheetElectricalElectronic;