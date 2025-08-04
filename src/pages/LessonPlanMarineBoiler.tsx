import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LessonPlanMarineBoiler = () => {
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
          <p><strong>Sub-topic:</strong> 1.2) Marine boiler</p>
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
              <li>KI-3: Memahami, menerapkan, menganalisis, dan mengevaluasi pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup kerja Teknika Kapal Niaga.</li>
              <li>KI-4: Melaksanakan tugas spesifik dengan menggunakan alat, informasi, dan prosedur kerja yang lazim dilakukan serta memecahkan masalah sesuai dengan bidang kerja Teknika Kapal Niaga.</li>
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
            <li>3.1.1 Menjelaskan definisi, fungsi, dan jenis-jenis ketel uap kapal (pipa api & pipa air). / Explain the definition, function, and types of marine boilers (fire-tube & water-tube).</li>
            <li>3.1.2 Mengidentifikasi komponen utama dan perlengkapan keselamatan (safety fittings) pada ketel uap. / Identify the main components and safety fittings on a boiler.</li>
            <li>4.1.1 Menggunakan kosakata teknis terkait ketel uap dalam konteks kalimat. / Use technical vocabulary related to marine boilers in sentence context.</li>
            <li>4.1.2 Berpartisipasi dalam percakapan dasar tentang operasi dan pemeliharaan ketel uap. / Participate in basic conversations about boiler operation and maintenance.</li>
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
            <p>Siswa dapat menyebutkan fungsi dasar ketel uap ("membuat uap untuk mesin bantu"). / Students can state the basic function of a boiler ("to make steam for auxiliary machinery").</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Multi-structural:</h3>
            <p>Siswa dapat mengidentifikasi beberapa komponen utama (misalnya, drum, tungku, pipa-pipa) dan menyebutkan dua jenis utama ketel uap. / Students can identify several main components (e.g., drum, furnace, tubes) and name the two main types of boilers.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Relational:</h3>
            <p>Siswa dapat membandingkan dan mengkontraskan ketel uap pipa api dan pipa air (misalnya, perbedaan tekanan, kapasitas, dan aplikasi). / Students can compare and contrast fire-tube and water-tube boilers (e.g., differences in pressure, capacity, and application).</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Extended Abstract:</h3>
            <p>Siswa dapat menganalisis skenario sederhana (misalnya, "Apa yang terjadi jika level air di dalam drum terlalu rendah?") dan menjelaskan pentingnya perlengkapan keselamatan. / Students can analyze a simple scenario (e.g., "What happens if the water level in the drum is too low?") and explain the importance of safety fittings.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Materi Pembelajaran / Learning Material</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Pengantar Ketel Uap Kapal / Introduction to Marine Boilers</li>
            <li>Jenis-jenis Ketel Uap (Pipa Api vs. Pipa Air) / Types of Boilers (Fire-tube vs. Water-tube)</li>
            <li>Komponen Utama dan Perlengkapan (Main Components and Mountings)</li>
            <li>Operasi Ketel Uap dan Prosedur Keselamatan / Boiler Operation and Safety Procedures</li>
          </ul>
          <p className="mt-4">
            <Link to="/teaching-material-marine-boiler" className="text-blue-500 hover:underline">
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
          <p>Deep Learning: Diskusi, Studi Kasus, Analisis Diagram, Simulasi Sederhana. / Deep Learning: Discussion, Case Studies, Diagram Analysis, Simple Simulations.</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Media/Alat/Sumber Belajar / Media/Tools/Learning Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Papan tulis, Proyektor / Whiteboard, Projector</li>
            <li>Diagram Ketel Uap, Video Animasi Operasi / Boiler Diagrams, Animated Operation Videos</li>
            <li>Buku Teks IMO Model Course 7.04, SOLAS, STCW Amandemen Manila 2010 / IMO Model Course 7.04 Textbook, SOLAS, STCW Manila Amendments 2010</li>
            <li>Internet</li>
          </ul>
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
              <Link to="/worksheet-marine-boiler" className="text-blue-500 hover:underline">
                Lembar Kerja Siswa (Pengetahuan & Keterampilan) / Student Worksheet (Knowledge & Skills)
              </Link>
            </li>
            <li>
              <Link to="/rubric-marine-boiler" className="text-blue-500 hover:underline">
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

export default LessonPlanMarineBoiler;