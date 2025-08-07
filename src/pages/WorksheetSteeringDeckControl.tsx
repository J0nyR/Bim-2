import React from 'react';
import WorksheetHeader from '@/components/WorksheetHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WorksheetSteeringDeckControl = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Lembar Kerja Siswa / Student Worksheet</h1>
          <p className="text-muted-foreground">Modul 2.1: Sistem Kemudi, Geladak & Kontrol</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>
      
      <WorksheetHeader />

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tugas 1: Identifikasi Komponen / Task 1: Component Identification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Perhatikan diagram sistem kemudi hidrolik sederhana di bawah ini. Tuliskan nama komponen yang ditunjuk oleh nomor pada tempat yang disediakan.</p>
            <p className="mb-4 italic text-muted-foreground">Look at the simple hydraulic steering gear diagram below. Write the name of the component indicated by the number in the space provided.</p>
            <div className="my-4 p-4 border rounded-lg text-center bg-muted">
              <p>[Diagram of a simple steering gear system with numbers pointing to: 1. Helm/Wheel, 2. Hydraulic Pump, 3. Hydraulic Cylinder/Ram, 4. Rudder Stock, 5. Rudder]</p>
              <p className="italic text-sm">(Imagine a diagram here)</p>
            </div>
            <ol className="list-decimal list-inside space-y-4">
              <li>_________________________</li>
              <li>_________________________</li>
              <li>_________________________</li>
              <li>_________________________</li>
              <li>_________________________</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 2: Menjodohkan / Task 2: Matching</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Jodohkan istilah mesin geladak di Kolom A dengan deskripsi fungsinya di Kolom B.</p>
            <p className="mb-4 italic text-muted-foreground">Match the deck machinery term in Column A with its functional description in Column B.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Kolom A (Term)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Anchor Windlass</li>
                  <li>Mooring Winch</li>
                  <li>Crane</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kolom B (Function)</h4>
                <ul className="list-decimal list-inside space-y-2">
                  <li>Used to lift cargo and stores.</li>
                  <li>Used to handle ropes to secure the ship to the pier.</li>
                  <li>Used to drop and heave up the anchor.</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <p>Jawaban / Answers:</p>
              <p>Anchor Windlass: __________</p>
              <p>Mooring Winch: __________</p>
              <p>Crane: __________</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 3: Melengkapi Kalimat / Task 3: Sentence Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Lengkapi kalimat berikut menggunakan kata-kata dari kotak di bawah ini.</p>
            <p className="mb-4 italic text-muted-foreground">Complete the following sentences using words from the box below.</p>
            <div className="p-2 border rounded-md bg-muted text-center mb-6">
              <p className="font-mono">sensor | controller | rudder | actuator</p>
            </div>
            <ol className="list-decimal list-inside space-y-4">
              <li>The steering gear provides force to move the __________.</li>
              <li>In a control loop, the __________ measures the process variable like temperature.</li>
              <li>The __________ compares the set point with the measured value.</li>
              <li>A valve that opens or closes based on a signal is an example of an __________.</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorksheetSteeringDeckControl;