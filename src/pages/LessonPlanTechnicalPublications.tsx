import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const LessonPlanTechnicalPublications = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Rencana Pelaksanaan Pembelajaran (RPP)</h1>
        <h2 className="text-xl md:text-2xl font-semibold">Modul 2.4: Penggunaan Publikasi Teknis</h2>
        <p className="text-lg text-muted-foreground">Module 2.4: Using Technical Publications</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Tujuan Pembelajaran / Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu mengidentifikasi jenis-jenis publikasi teknis yang digunakan di atas kapal.<br/><em>Students will be able to identify the types of technical publications used on board.</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menemukan informasi spesifik (misalnya, jadwal perawatan, prosedur keselamatan) dalam contoh manual.<br/><em>Students will be able to locate specific information (e.g., maintenance schedules, safety procedures) in sample manuals.</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menjelaskan tujuan dari kode internasional utama seperti SOLAS, MARPOL, dan ISM Code.<br/><em>Students will be able to explain the purpose of major international codes like SOLAS, MARPOL, and the ISM Code.</em></span></p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Materi Pembelajaran / Learning Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Materi Ajar Digital: Modul 2.4</li>
              <li>Contoh halaman dari manual instruksi mesin</li>
              <li>Contoh Safety Data Sheet (SDS)</li>
              <li>Struktur dasar dari SOLAS dan MARPOL</li>
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
              <li>Latihan Pencarian Informasi (Information Scavenger Hunt)</li>
              <li>Studi Kasus: "Menggunakan Manual untuk Troubleshooting"</li>
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
                <li>Apersepsi: Menanyakan "Jika sebuah alarm berbunyi, di mana Anda akan mencari tahu artinya?"</li>
                <li>Menyampaikan tujuan pembelajaran modul 2.4.</li>
              </ul>
            </li>
            <li>
              <strong>Kegiatan Inti (60 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Guru memperkenalkan berbagai jenis publikasi dan hierarkinya (dari manual pabrikan hingga peraturan internasional).</li>
                <li>Siswa diberikan contoh halaman manual dan diminta menemukan informasi spesifik (latihan "scavenger hunt").</li>
                <li>Diskusi kelompok tentang mengapa mengikuti prosedur dalam manual itu penting untuk keselamatan.</li>
                <li>Siswa mengerjakan Lembar Kerja (Worksheet) modul 2.4.</li>
              </ul>
            </li>
            <li>
              <strong>Penutup (15 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Siswa mengerjakan Kuis Formatif untuk modul 2.4.</li>
                <li>Guru memberikan umpan balik dan menekankan pentingnya literasi teknis.</li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlanTechnicalPublications;