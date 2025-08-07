import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const LessonPlanFluidPumpingSeparation = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Rencana Pelaksanaan Pembelajaran (RPP)</h1>
        <h2 className="text-xl md:text-2xl font-semibold">Modul 2.2: Sistem Fluida, Perpompaan & Separasi</h2>
        <p className="text-lg text-muted-foreground">Module 2.2: Fluid, Pumping & Separation Systems</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Tujuan Pembelajaran / Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menjelaskan properti dasar fluida (viskositas, densitas, titik nyala).<br/><em>Students will be able to explain basic fluid properties (viscosity, density, flash point).</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu membedakan antara pompa sentrifugal dan positive displacement serta memberikan contoh penggunaannya.<br/><em>Students will be able to differentiate between centrifugal and positive displacement pumps and provide usage examples.</em></span></p>
          <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Siswa mampu menjelaskan tujuan dan prinsip kerja dasar dari Oily-Water Separator (OWS).<br/><em>Students will be able to explain the purpose and basic working principle of an Oily-Water Separator (OWS).</em></span></p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Materi Pembelajaran / Learning Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Materi Ajar Digital: Modul 2.2</li>
              <li>Tabel Properti Fluida</li>
              <li>Animasi: Cara Kerja Pompa Sentrifugal vs. Pompa Roda Gigi</li>
              <li>Diagram Sistem OWS</li>
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
              <li>Studi Kasus: "Memilih Pompa yang Tepat"</li>
              <li>Analisis Diagram</li>
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
                <li>Apersepsi: Menanyakan mengapa oli lebih kental daripada air dan bagaimana cara memindahkannya.</li>
                <li>Menyampaikan tujuan pembelajaran modul 2.2.</li>
              </ul>
            </li>
            <li>
              <strong>Kegiatan Inti (60 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Guru menjelaskan "Fluid Characteristics" dan pentingnya setiap properti.</li>
                <li>Siswa membandingkan dua jenis pompa utama menggunakan animasi dan diagram.</li>
                <li>Diskusi kelas tentang pentingnya OWS untuk perlindungan lingkungan laut.</li>
                <li>Siswa mengerjakan Lembar Kerja (Worksheet) modul 2.2.</li>
              </ul>
            </li>
            <li>
              <strong>Penutup (15 menit):</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Siswa mengerjakan Kuis Formatif untuk modul 2.2.</li>
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

export default LessonPlanFluidPumpingSeparation;