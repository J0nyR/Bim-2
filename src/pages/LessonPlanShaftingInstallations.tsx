import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LessonPlanShaftingInstallations = () => {
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
          <p><strong>Sub-topic:</strong> 1.3) Shafting installations and propeller</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Indikator Pencapaian Kompetensi (IPK) / Competency Achievement Indicators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>3.1.1 Menjelaskan fungsi sistem poros dan baling-baling. / Explain the function of the shafting system and propeller.</li>
            <li>3.1.2 Mengidentifikasi komponen utama instalasi poros (poros antara, poros pendorong, bantalan, tabung buritan) dan jenis-jenis baling-baling. / Identify the main components of a shafting installation (intermediate shaft, propeller shaft, bearings, stern tube) and types of propellers.</li>
            <li>4.1.1 Menggunakan kosakata teknis terkait dalam konteks kalimat. / Use related technical vocabulary in sentence context.</li>
            <li>4.1.2 Berpartisipasi dalam percakapan dasar tentang kelurusan poros (alignment) dan inspeksi baling-baling. / Participate in basic conversations about shaft alignment and propeller inspection.</li>
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
            <p>Siswa dapat menyatakan fungsi dasar baling-baling ("mendorong kapal"). / Students can state the basic function of a propeller ("it pushes the ship").</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Multi-structural:</h3>
            <p>Siswa dapat mengidentifikasi beberapa komponen seperti baling-baling, poros, dan bantalan. / Students can identify several components like the propeller, shaft, and bearings.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Relational:</h3>
            <p>Siswa dapat menjelaskan bagaimana putaran mesin ditransmisikan melalui sistem poros ke baling-baling untuk menghasilkan daya dorong. / Students can explain how the engine's rotation is transmitted through the shafting system to the propeller to generate thrust.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Extended Abstract:</h3>
            <p>Siswa dapat menganalisis skenario sederhana (misalnya, "Apa konsekuensi dari kelurusan poros yang buruk?") dan menjelaskan pentingnya prosedur perawatan. / Students can analyze a simple scenario (e.g., "What are the consequences of poor shaft alignment?") and explain the importance of maintenance procedures.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Langkah-langkah Pembelajaran / Learning Activities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Pertemuan 1 / Meeting 1</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Pendahuluan (15 Menit) / Introduction (15 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>Guru membuka pelajaran dan bertanya, "How does the power from the engine make the ship move?"</li>
                  <li>Guru memperkenalkan tujuan pembelajaran tentang sistem poros dan baling-baling.</li>
                </ul>
              </li>
              <li>
                <strong>Kegiatan Inti (65 Menit) / Core Activities (65 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li><strong>Mengamati:</strong> Siswa mempelajari materi ajar digital, fokus pada fungsi dan komponen utama sistem poros (Thrust Block, Plummer Block, Stern Tube).</li>
                  <li><strong>Menanya:</strong> Diskusi kelas tentang fungsi setiap komponen, terutama bagaimana thrust block mentransfer daya dorong ke kapal.</li>
                  <li><strong>Mengeksplorasi:</strong> Siswa mengerjakan Bagian 1 (Kosakata) dan Bagian 2 (Pemahaman Konsep) pada Lembar Kerja.</li>
                </ul>
              </li>
              <li>
                <strong>Penutup (10 Menit) / Closing (10 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>Guru dan siswa menyimpulkan alur transmisi daya dari mesin ke badan kapal.</li>
                  <li>Pratinjau untuk pertemuan berikutnya: jenis-jenis baling-baling dan masalah umum.</li>
                </ul>
              </li>
            </ol>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Pertemuan 2 / Meeting 2</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Pendahuluan (10 Menit) / Introduction (10 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>Guru mereview komponen sistem poros.</li>
                  <li>Apersepsi: Menampilkan gambar FPP dan CPP, lalu bertanya, "What is the difference you can see?"</li>
                </ul>
              </li>
              <li>
                <strong>Kegiatan Inti (70 Menit) / Core Activities (70 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li><strong>Mengamati:</strong> Siswa mempelajari perbedaan antara FPP dan CPP pada materi ajar.</li>
                  <li><strong>Mengasosiasi:</strong> Dalam kelompok, siswa mendiskusikan keuntungan CPP untuk manuver dan mengerjakan Bagian 3 (Analisis Skenario) tentang getaran.</li>
                  <li><strong>Mengomunikasikan:</strong> Kelompok mempresentasikan kemungkinan penyebab getaran dan tindakan yang harus diambil. Siswa berlatih percakapan tentang inspeksi di terowongan poros.</li>
                </ul>
              </li>
              <li>
                <strong>Penutup (10 Menit) / Closing (10 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>Siswa mengerjakan kuis formatif interaktif.</li>
                  <li>Guru menekankan pentingnya alignment dan menutup pelajaran.</li>
                </ul>
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Materi Pembelajaran / Learning Material</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Sistem Transmisi Daya Kapal / Ship Power Transmission System</li>
            <li>Komponen Instalasi Poros / Shafting Installation Components</li>
            <li>Tabung Buritan dan Perapat / Stern Tube and Seals</li>
            <li>Jenis-jenis Baling-Baling (Fixed Pitch vs. Controllable Pitch) / Propeller Types</li>
            <li>Perawatan dan Inspeksi / Maintenance and Inspection</li>
          </ul>
          <p className="mt-4">
            <Link to="/teaching-material-shafting-installations" className="text-blue-500 hover:underline">
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
              <Link to="/worksheet-shafting-installations" className="text-blue-500 hover:underline">
                Lembar Kerja Siswa (Pengetahuan & Keterampilan) / Student Worksheet (Knowledge & Skills)
              </Link>
            </li>
            <li>
              <Link to="/rubric-shafting-installations" className="text-blue-500 hover:underline">
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

export default LessonPlanShaftingInstallations;