import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const LessonPlanElectricalElectronic = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Rencana Pelaksanaan Pembelajaran (RPP)</h1>
        <h2 className="text-xl md:text-2xl font-semibold">Modul 2.3: Sistem Elektrikal & Elektronik</h2>
        <p className="text-lg text-muted-foreground">Module 2.3: Electrical & Electronic Systems</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Tujuan Pembelajaran / Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menjelaskan fungsi generator, switchboard, dan transformator dalam sistem kelistrikan kapal.<br/><em>Students will be able to explain the function of generators, switchboards, and transformers in a ship's electrical system.</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menjelaskan tujuan dari generator darurat.<br/><em>Students will be able to explain the purpose of an emergency generator.</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu membedakan antara sistem elektrikal (power) dan elektronik (control).<br/><em>Students will be able to differentiate between electrical (power) and electronic (control) systems.</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu mengidentifikasi peran sensor dan PLC dalam sistem modern.<br/><em>Students will be able to identify the role of sensors and PLCs in modern systems.</em></span></p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Materi Pembelajaran / Learning Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Materi Ajar Digital: Modul 2.3</li>
              <li>Diagram One-Line Sistem Kelistrikan Kapal</li>
              <li>Video: Prosedur Paralel Generator</li>
              <li>Contoh Fisik: PCB, Sensor Suhu/Tekanan</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Metode Pembelajaran / Teaching Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Presentasi & Diskusi</li>
              <li>Analisis Diagram</li>
              <li>Studi Kasus: "Investigasi Blackout"</li>
              <li>Latihan Interaktif</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Langkah-langkah Pembelajaran / Learning Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Pendahuluan (15 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Apersepsi: Menanyakan dari mana semua lampu dan mesin di kapal mendapatkan tenaga.</li>
                <li>Menyampaikan tujuan pembelajaran modul 2.3.</li>
              </ul>
            </li>
            <li>
              <strong>Kegiatan Inti (60 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Guru menjelaskan alur daya dari generator ke konsumen menggunakan diagram one-line.</li>
                <li>Diskusi tentang pentingnya keselamatan kelistrikan dan fungsi circuit breaker.</li>
                <li>Guru membedakan antara komponen elektronik (kontrol) dan elektrikal (daya).</li>
                <li>Siswa mengerjakan Lembar Kerja (Worksheet) modul 2.3.</li>
              </ul>
            </li>
            <li>
              <strong>Penutup (15 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Siswa mengerjakan Kuis Formatif untuk modul 2.3.</li>
                <li>Guru memberikan umpan balik dan merangkum poin-poin kunci.</li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Penilaian / Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li><strong>Penilaian Formatif:</strong> Skor dari pengerjaan Lembar Kerja dan Kuis Formatif Interaktif.</li>
            <li><strong>Penilaian Sikap:</strong> Partisipasi dalam diskusi dan studi kasus.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlanElectricalElectronic;