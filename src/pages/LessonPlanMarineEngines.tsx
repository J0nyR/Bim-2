import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LessonPlanMarineEngines = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary-foreground mb-8">
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
          <p><strong>Sub-topic:</strong> 1.1) Marine diesel engines, marine steam turbine and marine gas turbine</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Kompetensi Inti (KI) & Kompetensi Dasar (KD) / Core & Basic Competencies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Kompetensi Inti (KI) / Core Competencies:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>KI-3: Memahami, menerapkan, menganalisis, dan mengevaluasi pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup kerja Teknika Kapal Niaga pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional.</li>
              <li>KI-4: Melaksanakan tugas spesifik dengan menggunakan alat, informasi, dan prosedur kerja yang lazim dilakukan serta memecahkan masalah sesuai dengan bidang kerja Teknika Kapal Niaga. Menampilkan kinerja di bawah bimbingan dengan mutu dan kuantitas yang terukur sesuai standar kompetensi kerja. Menunjukkan keterampilan menalar, mengolah, dan menyaji secara efektif, kreatif, produktif, kritis, mandiri, kolaboratif, komunikatif, dan solutif dalam ranah abstrak terkait dengan pengembangan dari yang dipelajarinya di sekolah, serta mampu melaksanakan tugas spesifik di bawah pengawasan langsung. Menunjukkan keterampilan mempersepsi, kesiapan, meniru, membiasakan, gerak mahir, menjadikan gerak alami dalam ranah konkret terkait dengan pengembangan dari yang dipelajarinya di sekolah, serta mampu melaksanakan tugas spesifik di bawah pengawasan langsung.</li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Kompetensi Dasar (KD) / Basic Competencies:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>3.1 Menerapkan penggunaan bahasa Inggris maritim untuk komunikasi di kamar mesin. / Apply the use of maritime English for communication in the engine room.</li>
              <li>4.1 Melakukan komunikasi menggunakan bahasa Inggris maritim terkait tugas-tugas permesinan kapal. / Perform communication using maritime English related to ship engineering duties.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Indikator Pencapaian Kompetensi (IPK) / Competency Achievement Indicators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>3.1.1 Menjelaskan definisi dan fungsi mesin diesel laut, turbin uap laut, dan turbin gas laut. / Explain the definition and function of marine diesel engines, marine steam turbines, and marine gas turbines.</li>
            <li>3.1.2 Mengidentifikasi komponen utama masing-masing jenis mesin. / Identify the main components of each type of engine.</li>
            <li>4.1.1 Menggunakan kosakata teknis terkait dalam konteks kalimat. / Use related technical vocabulary in sentence context.</li>
            <li>4.1.2 Berpartisipasi dalam percakapan dasar tentang operasi mesin. / Participate in basic conversations about engine operation.</li>
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
            <p>Siswa dapat menyebutkan satu atau dua fakta dasar tentang mesin kapal (misalnya, "Mesin diesel menghasilkan tenaga dari pembakaran bahan bakar"). / Students can state one or two basic facts about ship engines (e.g., "Diesel engines generate power from fuel combustion").</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Multi-structural:</h3>
            <p>Siswa dapat mengidentifikasi beberapa komponen utama (misalnya, silinder, piston, poros engkol) dan fungsi dasar dari setiap jenis mesin (misalnya, turbin uap menggunakan uap untuk memutar turbin). / Students can identify several main components (e.g., cylinder, piston, crankshaft) and basic functions of each engine type (e.g., steam turbines use steam to rotate the turbine).</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Relational:</h3>
            <p>Siswa dapat membandingkan dan mengkontraskan karakteristik utama antara mesin diesel, turbin uap, dan turbin gas (misalnya, perbedaan efisiensi, ukuran, atau jenis bahan bakar yang digunakan). / Students can compare and contrast the main characteristics between diesel engines, steam turbines, and gas turbines (e.g., differences in efficiency, size, or type of fuel used).</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Extended Abstract:</h3>
            <p>Siswa dapat menganalisis skenario operasional sederhana (misalnya, "Apa yang terjadi jika tekanan uap pada turbin uap turun?") dan mengusulkan tindakan berdasarkan pemahaman tentang jenis mesin. / Students can analyze simple operational scenarios (e.g., "What happens if steam pressure in a steam turbine drops?") and propose actions based on their understanding of engine types.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Materi Pembelajaran / Learning Material</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Pengantar Sistem Propulsi Kapal / Introduction to Marine Propulsion Systems</li>
            <li>Mesin Diesel Laut / Marine Diesel Engines</li>
            <li>Turbin Uap Laut / Marine Steam Turbines</li>
            <li>Turbin Gas Laut / Marine Gas Turbines</li>
            <li>Perbandingan Sistem Propulsi / Comparison of Propulsion Systems</li>
          </ul>
          <p className="mt-4">
            <Link to="/teaching-material-marine-engines" className="text-blue-500 hover:underline">
              Lihat Materi Pembelajaran untuk Topik Ini / View Teaching Material for This Topic
            </Link>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Metode Pembelajaran / Teaching Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Deep Learning: Diskusi, Studi Kasus, Simulasi Sederhana, Proyek Mini. / Deep Learning: Discussion, Case Studies, Simple Simulations, Mini Projects.</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Media/Alat/Sumber Belajar / Media/Tools/Learning Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Papan tulis, Proyektor / Whiteboard, Projector</li>
            <li>Gambar/Diagram Mesin, Video / Engine Images/Diagrams, Videos</li>
            <li>Buku Teks IMO Model Course 7.04, SOLAS, STCW Amandemen Manila 2010 / IMO Model Course 7.04 Textbook, SOLAS, STCW Manila Amendments 2010</li>
            <li>Internet</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Penilaian / Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Pengetahuan (Tes Tertulis) / Knowledge (Written Test)</li>
            <li>Keterampilan (Percakapan, Lembar Kerja) / Skills (Conversation, Worksheet)</li>
            <li>Sikap (Observasi) / Attitude (Observation)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlanMarineEngines;