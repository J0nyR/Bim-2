import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormativeQuiz from '@/components/FormativeQuiz';
import { formativeQuestions } from '@/data/formativeQuestions';
import { Book, Wrench, Droplets, ShieldCheck, Flame, LifeBuoy, Gavel, HardHat } from 'lucide-react';

const ChapterTechnicalPublications = () => {
  const moduleQuestions = formativeQuestions.filter(q => q.topic === 'Using Technical Publications');

  return (
    <div className="space-y-8">
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><Book className="mr-3" /> Introduction to Technical Publications</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            As a marine engineer, you must be able to read and understand various technical publications. These documents are essential for safe and efficient operation, maintenance, and repair of shipboard machinery and systems. They include instruction manuals from manufacturers and regulatory documents from international bodies.
            <br />
            <em>Sebagai seorang masinis, Anda harus mampu membaca dan memahami berbagai publikasi teknis. Dokumen-dokumen ini sangat penting untuk pengoperasian, perawatan, dan perbaikan mesin dan sistem di atas kapal yang aman dan efisien. Ini termasuk manual instruksi dari pabrikan dan dokumen peraturan dari badan internasional.</em>
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center"><Wrench className="mr-2" /> 4. Fabrication and Repair</CardTitle></CardHeader>
          <CardContent>
            <p>Instruction manuals for hand tools, machine tools (lathes, drills), and measuring instruments (calipers, micrometers) provide critical information on safe operation, calibration, and maintenance. Always consult the manual before using a new tool.</p>
            <p className="italic text-sm text-muted-foreground">Manual instruksi untuk perkakas tangan, perkakas mesin (bubut, bor), dan alat ukur (jangka sorong, mikrometer) memberikan informasi penting tentang pengoperasian yang aman, kalibrasi, dan perawatan. Selalu baca manual sebelum menggunakan alat baru.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="flex items-center"><Droplets className="mr-2" /> 5. Pollution Prevention</CardTitle></CardHeader>
          <CardContent>
            <p>The primary document is the MARPOL convention. You will use publications like the Oil Record Book instruction manual and the Shipboard Oil Pollution Emergency Plan (SOPEP) to ensure compliance with anti-pollution regulations.</p>
            <p className="italic text-sm text-muted-foreground">Dokumen utamanya adalah konvensi MARPOL. Anda akan menggunakan publikasi seperti manual instruksi Buku Catatan Minyak (Oil Record Book) dan Rencana Darurat Pencemaran Minyak di Kapal (SOPEP) untuk memastikan kepatuhan terhadap peraturan anti-polusi.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="flex items-center"><ShieldCheck className="mr-2" /> 6. Seaworthiness</CardTitle></CardHeader>
          <CardContent>
            <p>The SOLAS (Safety of Life at Sea) convention is the key publication. It dictates the requirements for ship construction, equipment, and operation to ensure the vessel is fit for its voyage. This includes everything from structural integrity to navigation equipment.</p>
            <p className="italic text-sm text-muted-foreground">Konvensi SOLAS (Keselamatan Jiwa di Laut) adalah publikasi kuncinya. Ini menentukan persyaratan untuk konstruksi, peralatan, dan operasi kapal untuk memastikan kapal layak laut. Ini mencakup segalanya mulai dari integritas struktural hingga peralatan navigasi.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="flex items-center"><Flame className="mr-2" /> 7. Fire Fighting</CardTitle></CardHeader>
          <CardContent>
            <p>The Fire Safety Systems (FSS) Code, under SOLAS, provides detailed specifications for fire fighting equipment. You will also use maintenance manuals for fire extinguishers, fixed fire-fighting systems (like CO2 or foam), and fire detection systems.</p>
            <p className="italic text-sm text-muted-foreground">Kode Sistem Keselamatan Kebakaran (FSS Code), di bawah SOLAS, memberikan spesifikasi detail untuk peralatan pemadam kebakaran. Anda juga akan menggunakan manual perawatan untuk alat pemadam api, sistem pemadam tetap (seperti CO2 atau busa), dan sistem deteksi kebakaran.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="flex items-center"><LifeBuoy className="mr-2" /> 8. Life-Saving Appliances</CardTitle></CardHeader>
          <CardContent>
            <p>The Life-Saving Appliance (LSA) Code, also under SOLAS, details the requirements for lifeboats, life-rafts, lifejackets, immersion suits, etc. Maintenance and inspection checklists are crucial publications in this category.</p>
            <p className="italic text-sm text-muted-foreground">Kode Peralatan Keselamatan Jiwa (LSA Code), juga di bawah SOLAS, merinci persyaratan untuk sekoci, rakit penolong, jaket pelampung, baju cebur, dll. Daftar periksa perawatan dan inspeksi adalah publikasi penting dalam kategori ini.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="flex items-center"><Gavel className="mr-2" /> 9. Legislative Requirements</CardTitle></CardHeader>
          <CardContent>
            <p>This involves using publications from the ship's flag state (e.g., government notices) and classification societies (e.g., rules and regulations). These documents ensure the ship is compliant with all national and international laws.</p>
            <p className="italic text-sm text-muted-foreground">Ini melibatkan penggunaan publikasi dari negara bendera kapal (misalnya, pemberitahuan pemerintah) dan badan klasifikasi (misalnya, aturan dan regulasi). Dokumen-dokumen ini memastikan kapal mematuhi semua hukum nasional dan internasional.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="flex items-center"><HardHat className="mr-2" /> 10. Personnel and Ship Safety</CardTitle></CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            The International Safety Management (ISM) Code is the most important publication here. It requires every ship to have a Safety Management System (SMS). The SMS manual contains procedures for all key shipboard operations, risk assessments, and emergency drills. You will use this manual daily.
            <br />
            <em>Kode Manajemen Keselamatan Internasional (ISM Code) adalah publikasi terpenting di sini. Kode ini mewajibkan setiap kapal memiliki Sistem Manajemen Keselamatan (SMS). Manual SMS berisi prosedur untuk semua operasi kunci di atas kapal, penilaian risiko, dan latihan darurat. Anda akan menggunakan manual ini setiap hari.</em>
          </p>
        </CardContent>
      </Card>

      <FormativeQuiz questions={moduleQuestions} />
    </div>
  );
};

export default ChapterTechnicalPublications;