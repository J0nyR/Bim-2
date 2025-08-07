import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const AnswerKeyElectricalElectronic = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Kunci Jawaban / Answer Key</h1>
          <p className="text-muted-foreground">Modul 2.3: Sistem Elektrikal & Elektronik</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tugas 1: Menjodohkan Istilah / Task 1: Matching Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Generator:</strong> 3. Converts mechanical energy into electrical energy.</li>
              <li><strong>Circuit Breaker:</strong> 4. A safety device that stops current flow during a fault.</li>
              <li><strong>Transformer:</strong> 1. Changes voltage from high to low or vice versa.</li>
              <li><strong>Main Switchboard:</strong> 2. The central distribution panel for electricity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 2: Identifikasi Sistem / Task 2: System Identification</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>A 440V motor for a pump: <strong>Elektrikal (Power)</strong></li>
              <li>A temperature sensor for the main engine: <strong>Elektronik (Control)</strong></li>
              <li>The Main Switchboard: <strong>Elektrikal (Power)</strong></li>
              <li>A Programmable Logic Controller (PLC): <strong>Elektronik (Control)</strong></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 3: Pertanyaan Singkat / Task 3: Short Question</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Emergency generator wajib ada untuk keselamatan. Jika terjadi blackout (mati listrik total) pada generator utama, generator darurat akan menyala secara otomatis untuk memberikan daya pada peralatan vital seperti lampu darurat, sistem kemudi, alat navigasi, dan pompa pemadam kebakaran, sehingga kru dapat mengendalikan situasi darurat dengan aman.</p>
            <p className="italic text-muted-foreground">The emergency generator is mandatory for safety. In case of a main generator blackout, the emergency generator starts automatically to supply power to vital equipment like emergency lights, steering gear, navigation aids, and fire pumps, allowing the crew to manage the emergency situation safely.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnswerKeyElectricalElectronic;