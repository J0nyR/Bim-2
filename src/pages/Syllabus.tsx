import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Syllabus = () => {
  return (
    <div className="relative">
        <div className="absolute top-6 right-6 z-50 hide-on-print">
            <ThemeToggle />
        </div>
        <div className="container mx-auto p-6 space-y-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-center text-primary">
                Silabus Mata Pelajaran
                </h1>
                <Button asChild variant="outline">
                <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Kembali ke Home
                </Link>
                </Button>
            </div>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl font-semibold">Identitas Mata Pelajaran</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                <p><strong>Mata Pelajaran:</strong> Bahasa Inggris Maritim</p>
                <p><strong>Program Studi:</strong> Teknika Kapal Niaga</p>
                <p><strong>Kelas:</strong> X (Sepuluh)</p>
                <p><strong>Fungsi Kompetensi:</strong> Marine Engineering at the Operational Level</p>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl font-semibold">Deskripsi Mata Pelajaran</CardTitle>
                </CardHeader>
                <CardContent>
                <p>Mata pelajaran ini membekali taruna dengan pengetahuan dan keterampilan berbahasa Inggris yang esensial untuk berkomunikasi secara efektif di lingkungan kamar mesin. Fokus utama adalah pada pemahaman terminologi teknis, prosedur operasional, dan dokumentasi permesinan kapal sesuai dengan standar IMO Model Course 7.04.</p>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl font-semibold">Tujuan Pembelajaran Umum</CardTitle>
                </CardHeader>
                <CardContent>
                <p>Setelah menyelesaikan kursus ini, taruna diharapkan mampu:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Mengidentifikasi dan menjelaskan fungsi berbagai jenis mesin utama dan mesin bantu di atas kapal.</li>
                    <li>Menggunakan kosakata teknis permesinan dalam Bahasa Inggris secara akurat.</li>
                    <li>Memahami dan mengikuti instruksi lisan dan tulisan terkait operasi dan pemeliharaan mesin.</li>
                    <li>Berpartisipasi dalam komunikasi rutin di kamar mesin menggunakan frasa standar.</li>
                </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl font-semibold">Modul Pembelajaran</CardTitle>
                </CardHeader>
                <CardContent>
                <p>Kursus ini dibagi menjadi beberapa sub-topik utama:</p>
                <ul className="list-decimal list-inside space-y-1 mt-2">
                    <li><strong>Marine diesel engines, marine steam turbine and marine gas turbine:</strong> Mempelajari prinsip kerja, komponen, serta kelebihan dan kekurangan dari setiap jenis mesin penggerak utama.</li>
                    <li><strong>Marine boiler:</strong> Memahami jenis, komponen, perlengkapan keselamatan, dan operasi dasar ketel uap kapal.</li>
                    <li><strong>Shafting installations and propeller:</strong> Mempelajari sistem transmisi daya dari mesin ke baling-baling, termasuk komponen poros dan jenis-jenis baling-baling.</li>
                    <li><strong>Other auxiliaries:</strong> Mencakup berbagai mesin bantu vital seperti pompa, kompresor, pemurni, generator air tawar, penukar panas, sistem refrigerasi, dan pembangkit listrik.</li>
                </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl font-semibold">Strategi Penilaian</CardTitle>
                </CardHeader>
                <CardContent>
                <p>Penilaian dilakukan melalui dua metode utama:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                    <strong>Penilaian Formatif (Per Modul):</strong>
                    <ul className="list-circle list-inside ml-6">
                        <li>Lembar Kerja Siswa (Worksheet) untuk menguji pemahaman konsep.</li>
                        <li>Partisipasi aktif dalam diskusi dan analisis skenario.</li>
                        <li>Penilaian berbasis Rubrik SOLO untuk mengukur kedalaman pemahaman.</li>
                    </ul>
                    </li>
                    <li>
                    <strong>Penilaian Sumatif (Akhir Periode):</strong>
                    <ul className="list-circle list-inside ml-6">
                        <li>Ujian akhir yang mencakup seluruh materi dari semua modul untuk mengukur pencapaian kompetensi secara keseluruhan.</li>
                        <li>
                        <Link to="/summative-test" className="text-blue-500 hover:underline">
                            Klik di sini untuk memulai Ujian Sumatif
                        </Link>
                        </li>
                    </ul>
                    </li>
                </ul>
                </CardContent>
            </Card>
        </div>
    </div>
  );
};

export default Syllabus;