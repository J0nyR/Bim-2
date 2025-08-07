import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const AnswerKeySteeringDeckControl = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Kunci Jawaban / Answer Key</h1>
          <p className="text-muted-foreground">Modul 2.1: Sistem Kemudi, Geladak & Kontrol</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tugas 1: Identifikasi Komponen / Task 1: Component Identification</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Helm / Wheel (Roda Kemudi)</li>
              <li>Hydraulic Pump (Pompa Hidrolik)</li>
              <li>Hydraulic Cylinder / Ram (Silinder / Ram Hidrolik)</li>
              <li>Rudder Stock (Batang Kemudi)</li>
              <li>Rudder (Daun Kemudi)</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 2: Menjodohkan / Task 2: Matching</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Anchor Windlass:</strong> 3. Used to drop and heave up the anchor.</li>
              <li><strong>Mooring Winch:</strong> 2. Used to handle ropes to secure the ship to the pier.</li>
              <li><strong>Crane:</strong> 1. Used to lift cargo and stores.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas 3: Melengkapi Kalimat / Task 3: Sentence Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>The steering gear provides force to move the <strong>rudder</strong>.</li>
              <li>In a control loop, the <strong>sensor</strong> measures the process variable like temperature.</li>
              <li>The <strong>controller</strong> compares the set point with the measured value.</li>
              <li>A valve that opens or closes based on a signal is an example of an <strong>actuator</strong>.</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnswerKeySteeringDeckControl;