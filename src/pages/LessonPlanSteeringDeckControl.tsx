import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const LessonPlanSteeringDeckControl = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Rencana Pelaksanaan Pembelajaran (RPP)</h1>
        <h2 className="text-xl md:text-2xl font-semibold">Modul 2.1: Sistem Kemudi, Geladak & Kontrol</h2>
        <p className="text-lg text-muted-foreground">Module 2.1: Steering, Deck & Control Systems</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Tujuan Pembelajaran / Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu mengidentifikasi dan menjelaskan fungsi komponen utama sistem kemudi (steering gear).<br/><em>Students will be able to identify and explain the function of the main components of the steering gear system.</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menyebutkan jenis-jenis mesin geladak (deck machinery) dan fungsi dasarnya.<br/><em>Students will be able to name types of deck machinery and their basic functions.</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menjelaskan prinsip dasar loop kontrol otomatis (sensor, controller, final control element).<br/><em>Students will be able to explain the basic principle of an automatic control loop (sensor, controller, final control element).</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menggunakan kosakata teknis terkait dalam kalimat sederhana.<br/><em>Students will be able to use related technical vocabulary in simple sentences.</em></span></p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Materi Pembelajaran / Learning Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Materi Ajar Digital: Modul 2.1</li>
              <li>Diagram Sistem Kemudi (Ram-type & Rotary Vane)</li>
              <li>Video: Operasi Anchor Windlass & Mooring Winch</li>
              <li>Diagram Loop Kontrol Sederhana</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Metode Pembelajaran / Teaching Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Presentasi & Diskusi (Presentation & Discussion)</li>
              <li>Analisis Diagram (Diagram Analysis)</li>
              <li>Pembelajaran Berbasis Video (Video-based Learning)</li>
              <li>Latihan Interaktif (Interactive Exercise)</li>
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
                <li>Apersepsi: Menanyakan kepada siswa bagaimana sebuah kapal besar bisa berbelok.</li>
                <li>Menyampaikan tujuan pembelajaran modul 2.1.</li>
              </ul>
            </li>
            <li>
              <strong>Kegiatan Inti (60 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Guru menjelaskan materi "Steering Gear" menggunakan materi ajar digital dan diagram.</li>
                <li>Siswa menonton video tentang "Deck Machinery" dan mendiskusikan fungsinya.</li>
                <li>Guru menjelaskan konsep "Automatic Control Systems" dengan analogi termostat AC.</li>
                <li>Siswa mengerjakan Lembar Kerja (Worksheet) secara individu atau berkelompok.</li>
              </ul>
            </li>
            <li>
              <strong>Penutup (15 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Siswa mengerjakan Kuis Formatif untuk mengukur pemahaman.</li>
                <li>Guru memberikan umpan balik dan merangkum poin-poin kunci.</li>
                <li>Menyampaikan topik untuk pertemuan berikutnya.</li>
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
            <li><strong>Penilaian Sikap:</strong> Keaktifan dalam diskusi dan kerja kelompok.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlanSteeringDeckControl;