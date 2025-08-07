import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormativeQuiz from '@/components/FormativeQuiz';
import { formativeQuestions } from '@/data/formativeQuestions';

const ChapterElectricalElectronic = () => {
  const moduleQuestions = formativeQuestions.filter(q => q.topic === 'Electrical & Electronic Systems');

  return (
    <div className="space-y-8">
      
      {/* Section 1: Electrical Systems */}
      <Card>
        <CardHeader>
          <CardTitle>3.1 Electrical Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            The electrical system on a ship is like its nervous system, providing power for everything from propulsion support to navigation lights and crew accommodation. It is generated, distributed, and controlled through a network of machines and panels.
            <br />
            <em>Sistem kelistrikan di kapal ibarat sistem saraf, menyediakan daya untuk segala hal mulai dari pendukung propulsi hingga lampu navigasi dan akomodasi kru. Listrik ini dihasilkan, didistribusikan, dan dikendalikan melalui jaringan mesin dan panel.</em>
          </p>
          
          <h4>Key Components / Komponen Utama:</h4>
          <ul>
            <li><strong>Generators (Alternators):</strong> Driven by diesel engines (gensets), these machines convert mechanical energy into electrical energy, typically as 3-phase Alternating Current (AC). Ships have multiple generators for redundancy and load management.<br /><em>Generator (Alternator): Digerakkan oleh mesin diesel (genset), mesin ini mengubah energi mekanik menjadi energi listrik, biasanya dalam bentuk Arus Bolak-balik (AC) 3-fasa. Kapal memiliki beberapa generator untuk redundansi dan manajemen beban.</em></li>
            <li><strong>Main Switchboard (MSB):</strong> The central distribution point for all electrical power on the ship. It houses circuit breakers, bus bars, and monitoring equipment.<br /><em>Papan Hubung Utama (Main Switchboard - MSB): Titik distribusi pusat untuk semua daya listrik di kapal. Di dalamnya terdapat pemutus sirkuit (circuit breaker), bus bar, dan peralatan pemantauan.</em></li>
            <li><strong>Transformers:</strong> Used to step down high voltage from the generator (e.g., 440V) to lower voltages for lighting and small appliances (e.g., 220V or 110V).<br /><em>Transformator: Digunakan untuk menurunkan tegangan tinggi dari generator (misalnya, 440V) ke tegangan yang lebih rendah untuk penerangan dan peralatan kecil (misalnya, 220V atau 110V).</em></li>
            <li><strong>Emergency Generator & Switchboard:</strong> A separate, self-contained generator and switchboard that provides power to essential services (emergency lighting, steering gear, navigation equipment) during a blackout.<br /><em>Generator & Papan Hubung Darurat: Generator dan papan hubung terpisah yang mandiri untuk menyediakan daya ke layanan penting (lampu darurat, sistem kemudi, peralatan navigasi) saat terjadi mati listrik total (blackout).</em></li>
          </ul>

          <h4>Example Sentence:</h4>
          <p className="italic bg-muted p-2 rounded">"The engineer must parallel two <strong>generators</strong> before starting the bow thruster to handle the high electrical load."<br/>"Masinis harus memparalelkan dua <strong>generator</strong> sebelum menyalakan bow thruster untuk menangani beban listrik yang tinggi."</p>
        </CardContent>
      </Card>

      {/* Section 2: Electronic Systems */}
      <Card>
        <CardHeader>
          <CardTitle>3.2 Electronic Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Electronic systems involve low-voltage circuits and components that are used for control, communication, and data processing. While electrical systems provide the power, electronic systems provide the "intelligence".
            <br />
            <em>Sistem elektronik melibatkan sirkuit dan komponen tegangan rendah yang digunakan untuk kontrol, komunikasi, dan pemrosesan data. Jika sistem kelistrikan menyediakan tenaga, sistem elektronik menyediakan "kecerdasan".</em>
          </p>

          <h4>Key Components / Komponen Utama:</h4>
          <ul>
            <li><strong>Sensors and Transducers:</strong> Devices that convert a physical parameter (like pressure, temperature, or speed) into an electrical signal.<br /><em>Sensor dan Transduser: Perangkat yang mengubah parameter fisik (seperti tekanan, suhu, atau kecepatan) menjadi sinyal listrik.</em></li>
            <li><strong>Printed Circuit Boards (PCBs):</strong> Boards that mechanically support and electrically connect electronic components using conductive tracks.<br /><em>Papan Sirkuit Cetak (PCB): Papan yang menopang secara mekanis dan menghubungkan komponen elektronik secara elektrik menggunakan jalur konduktif.</em></li>
            <li><strong>Programmable Logic Controllers (PLCs):</strong> Industrial computers adapted for the control of manufacturing processes or, in this case, shipboard machinery. They are the core of many automated systems.<br /><em>Programmable Logic Controller (PLC): Komputer industri yang diadaptasi untuk mengontrol proses manufaktur atau, dalam hal ini, permesinan di atas kapal. PLC adalah inti dari banyak sistem otomatis.</em></li>
          </ul>

          <h4>Example Sentence:</h4>
          <p className="italic bg-muted p-2 rounded">"A faulty pressure <strong>sensor</strong> sent an incorrect reading to the PLC, triggering a false alarm."<br/>"Sebuah <strong>sensor</strong> tekanan yang rusak mengirimkan pembacaan yang salah ke PLC, memicu alarm palsu."</p>
        </CardContent>
      </Card>

      <FormativeQuiz questions={moduleQuestions} />
    </div>
  );
};

export default ChapterElectricalElectronic;