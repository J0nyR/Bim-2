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
          <p><strong>Sub-topic:</strong> 1.4) Other auxiliaries, including pumps, air compressor, purifier, fresh water generator, heat exchanger, refrigeration, air-conditioning and ventilation systems.</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Indikator Pencapaian Kompetensi (IPK) / Competency Achievement Indicators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>3.1.1 Menjelaskan fungsi dasar dari pompa-pompa, kompresor udara, pemurni, generator air tawar, penukar panas, sistem refrigerasi, dan sistem AC & ventilasi. / Explain the basic functions of pumps, air compressors, purifiers, fresh water generators, heat exchangers, refrigeration, and AC & ventilation systems.</li>
            <li>3.1.2 Mengidentifikasi komponen dasar dari mesin-mesin bantu tersebut. / Identify the basic components of this auxiliary machinery.</li>
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
            <p>Siswa dapat menyatakan fungsi satu mesin bantu (misalnya, "Pompa memindahkan cairan" atau "Kompresor menghasilkan udara bertekanan"). / Students can state the function of one auxiliary machine (e.g., "A pump moves liquid" or "A compressor produces compressed air").</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Multi-structural:</h3>
            <p>Siswa dapat menyebutkan beberapa jenis mesin bantu dan fungsi dasarnya (misalnya, pemurni untuk membersihkan oli, generator air tawar untuk membuat air minum). / Students can name several types of auxiliary machinery and their basic functions (e.g., purifier to clean oil, fresh water generator to make drinking water).</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Relational:</h3>
            <p>Siswa dapat menjelaskan hubungan antara mesin bantu (misalnya, bagaimana penukar panas menggunakan air laut untuk mendinginkan air tawar di sistem pendingin mesin). / Students can explain the relationship between auxiliaries (e.g., how a heat exchanger uses sea water to cool fresh water in an engine cooling system).</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Extended Abstract:</h3>
            <p>Siswa dapat menganalisis skenario sederhana (misalnya, "Apa yang terjadi jika pemurni bahan bakar berhenti berfungsi?") dan memprediksi dampaknya pada mesin utama. / Students can analyze a simple scenario (e.g., "What happens if the fuel oil purifier stops working?") and predict the impact on the main engine.</p>
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
                  <li>Guru membuka pelajaran dan bertanya, "Besides the main engine, what other machines do you think are running in the engine room?"</li>
                  <li>Guru memperkenalkan tujuan pembelajaran tentang berbagai mesin bantu.</li>
                </ul>
              </li>
              <li>
                <strong>Kegiatan Inti (65 Menit) / Core Activities (65 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li><strong>Mengamati:</strong> Siswa mempelajari materi ajar digital tentang Pompa, Kompresor Udara, dan Pemisah Sentrifugal (Purifier).</li>
                  <li><strong>Menanya:</strong> Diskusi kelas tentang perbedaan pompa sentrifugal vs. positive displacement, dan purifier vs. clarifier.</li>
                  <li><strong>Mengeksplorasi:</strong> Siswa mengerjakan Bagian 1 (Kosakata) pada Lembar Kerja.</li>
                </ul>
              </li>
              <li>
                <strong>Penutup (10 Menit) / Closing (10 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>Guru dan siswa menyimpulkan fungsi dari tiga mesin bantu pertama.</li>
                  <li>Pratinjau untuk pertemuan berikutnya: sistem pendingin, pemanas, dan pembangkit listrik.</li>
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
                  <li>Guru mereview singkat materi pertemuan sebelumnya.</li>
                  <li>Apersepsi: Guru bertanya, "How do we get fresh water and electricity on a ship in the middle of the ocean?"</li>
                </ul>
              </li>
              <li>
                <strong>Kegiatan Inti (70 Menit) / Core Activities (70 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li><strong>Mengamati:</strong> Siswa mempelajari materi ajar tentang FWG, Heat Exchanger, Sistem Refrigerasi, dan Generator.</li>
                  <li><strong>Mengasosiasi:</strong> Dalam kelompok, siswa mengerjakan Bagian 2 (Pemahaman Konsep) dan Bagian 3 (Analisis Skenario) pada Lembar Kerja.</li>
                  <li><strong>Mengomunikasikan:</strong> Kelompok mempresentasikan analisis mereka tentang skenario masalah refrigerasi. Siswa berlatih contoh percakapan yang mencakup beberapa mesin bantu.</li>
                </ul>
              </li>
              <li>
                <strong>Penutup (10 Menit) / Closing (10 Minutes)</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>Siswa mengerjakan kuis formatif interaktif.</li>
                  <li>Guru menutup pelajaran dan memberikan arahan untuk persiapan ujian sumatif.</li>
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
            <li>Pompa-pompa / Pumps</li>
            <li>Kompresor Udara / Air Compressor</li>
            <li>Pemurni / Purifier</li>
            <li>Generator Air Tawar / Fresh Water Generator</li>
            <li>Penukar Panas / Heat Exchanger</li>
            <li>Sistem Pendingin (Refrigerasi) / Refrigeration System</li>
            <li>Sistem Pendingin Udara (AC) & Ventilasi / Air-Conditioning & Ventilation Systems</li>
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