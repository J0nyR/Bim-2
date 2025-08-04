import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LessonPlanOtherAuxiliaries = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Rencana Pelaksanaan Pembelajaran (RPP) / Lesson Plan
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Identitas Mata Pelajaran / Subject Identity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>Mata Pelajaran / Subject:</strong> Bahasa Inggris Maritim / Maritime English</p>
          <p><strong>Kelas / Class:</strong> X (Sepuluh)</p>
          <p><strong>Program Studi / Study Program:</strong> Teknika Kapal Niaga / Marine Engineering</p>
          <p><strong>Alokasi Waktu / Time Allocation:</strong> 4 x 45 menit (2 Pertemuan) / 4 x 45 minutes (2 Meetings)</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Topik / Topic</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>Function:</strong> 1. Marine Engineering at Operational Level</p>
          <p><strong>Topic:</strong> 1.2.1 The English language to enable the officer to perform engineering duties and to use engineering publications</p>
          <p><strong>Sub-topic:</strong> 1.4) Other auxiliaries, including various pumps, air compressors, purifiers, and steering gear</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Indikator Pencapaian Kompetensi (IPK) / Competency Achievement Indicators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>3.1.1 Menjelaskan fungsi dasar dari berbagai mesin bantu: pompa, pemurni, kompresor udara, dan mesin kemudi. / Explain the basic functions of various auxiliary machinery: pumps, purifiers, air compressors, and steering gear.</li>
            <li>3.1.2 Mengidentifikasi jenis-jenis utama dan komponen dasar dari mesin-mesin bantu tersebut. / Identify the main types and basic components of this auxiliary machinery.</li>
            <li>4.1.1 Menggunakan kosakata teknis terkait dalam konteks kalimat. / Use related technical vocabulary in sentence context.</li>
            <li>4.1.2 Berpartisipasi dalam percakapan dasar tentang pengoperasian dan pemantauan mesin bantu. / Participate in basic conversations about the operation and monitoring of auxiliary machinery.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Tujuan Pembelajaran / Learning Objectives (Menggunakan Taksonomi SOLO)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Uni-structural:</h3>
            <p>Siswa dapat menyatakan fungsi satu mesin bantu (misalnya, "Pompa memindahkan cairan"). / Students can state the function of one auxiliary machine (e.g., "A pump moves liquid").</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Multi-structural:</h3>
            <p>Siswa dapat menyebutkan beberapa jenis mesin bantu dan fungsi dasarnya (misalnya, kompresor untuk udara start, pemurni untuk membersihkan oli). / Students can name several types of auxiliary machinery and their basic functions (e.g., compressor for starting air, purifier to clean oil).</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Relational:</h3>
            <p>Siswa dapat menjelaskan hubungan antara mesin bantu yang berbeda (misalnya, bagaimana kompresor mengisi tabung udara, yang kemudian digunakan untuk menyalakan mesin utama). / Students can explain the relationship between different auxiliaries (e.g., how a compressor fills an air receiver, which is then used to start the main engine).</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Extended Abstract:</h3>
            <p>Siswa dapat menganalisis skenario sederhana (misalnya, "Apa yang terjadi jika pompa bahan bakar berhenti?") dan memprediksi dampaknya pada sistem lain. / Students can analyze a simple scenario (e.g., "What happens if a fuel oil pump stops?") and predict the impact on other systems.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Materi Pembelajaran / Learning Material</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Pompa (Sentrifugal, Roda Gigi, Sekrup) / Pumps (Centrifugal, Gear, Screw)</li>
            <li>Pemurni (Pemisah Oli dan Bahan Bakar) / Purifiers (Oil and Fuel Separators)</li>
            <li>Kompresor Udara (Untuk Start, Servis, Kontrol) / Air Compressors (For Starting, Service, Control)</li>
            <li>Mesin Kemudi (Hidrolik) / Steering Gear (Hydraulic)</li>
          </ul>
          <p className="mt-4">
            <Link to="/teaching-material-other-auxiliaries" className="text-blue-500 hover:underline">
              Lihat Materi Pembelajaran untuk Topik Ini / View Teaching Material for This Topic
            </Link>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Penilaian / Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Penilaian akan mencakup tiga aspek: Pengetahuan, Keterampilan, dan Sikap. / Assessment will cover three aspects: Knowledge, Skills, and Attitude.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link to="/worksheet-other-auxiliaries" className="text-blue-500 hover:underline">
                Lembar Kerja Siswa (Pengetahuan & Keterampilan) / Student Worksheet (Knowledge & Skills)
              </Link>
            </li>
            <li>
              <Link to="/rubric-other-auxiliaries" className="text-blue-500 hover:underline">
                Rubrik Penilaian (Keterampilan & Sikap) / Assessment Rubric (Skills & Attitude)
              </Link>
            </li>
            <li>Observasi di kelas untuk partisipasi dan sikap. / In-class observation for participation and attitude.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlanOtherAuxiliaries;