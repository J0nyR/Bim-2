import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormativeQuiz from '@/components/FormativeQuiz';
import { formativeQuestions } from '@/data/formativeQuestions';

const ChapterFluidPumpingSeparation = () => {
  const moduleQuestions = formativeQuestions.filter(q => q.topic === 'Fluid, Pumping & Separation Systems');

  return (
    <div className="space-y-8">
      
      {/* Section 1: Fluid Flow and Characteristics */}
      <Card>
        <CardHeader>
          <CardTitle>1.7 Fluid Flow and Characteristics</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Understanding the properties of fluids like lubricating oil, fuel oil, and cooling water is essential for engine room operations. Key characteristics include viscosity, density, flash point, and pour point.
            <br />
            <em>Memahami sifat-sifat fluida seperti minyak pelumas, bahan bakar, dan air pendingin sangat penting untuk operasi kamar mesin. Karakteristik utamanya meliputi viskositas, densitas, titik nyala, dan titik tuang.</em>
          </p>
          
          <h4>Key Fluid Properties / Properti Fluida Utama:</h4>
          <ul>
            <li><strong>Viscosity:</strong> A measure of a fluid's resistance to flow. It is the most important property of lubricating oil, as it determines the oil film strength.<br /><em>Viskositas: Ukuran ketahanan fluida terhadap aliran. Ini adalah properti terpenting dari minyak pelumas, karena menentukan kekuatan lapisan film oli.</em></li>
            <li><strong>Density:</strong> The mass of the fluid per unit volume. It is important for fuel oil calculations and purifier operation.<br /><em>Densitas: Massa fluida per satuan volume. Penting untuk perhitungan bahan bakar dan operasi pemurni (purifier).</em></li>
            <li><strong>Flash Point:</strong> The lowest temperature at which a fluid's vapor will ignite with a spark. This is a critical safety parameter for fuel and lubricating oils.<br /><em>Titik Nyala: Suhu terendah di mana uap dari fluida akan menyala dengan percikan api. Ini adalah parameter keselamatan kritis untuk bahan bakar dan minyak pelumas.</em></li>
          </ul>

          <h4>Example Sentence:</h4>
          <p className="italic bg-muted p-2 rounded">"The engineer checked the <strong>viscosity</strong> of the lube oil to ensure it was within the manufacturer's specifications."<br/>"Masinis memeriksa <strong>viskositas</strong> minyak pelumas untuk memastikan nilainya sesuai dengan spesifikasi pabrikan."</p>
        </CardContent>
      </Card>

      {/* Section 2: Pumps and Piping Systems */}
      <Card>
        <CardHeader>
          <CardTitle>2.1 Pumps and Piping Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Pumps are used to transfer fluids from one location to another. Piping systems are the networks of pipes, valves, and fittings that carry these fluids. There are two main categories of pumps: centrifugal and positive displacement.
            <br />
            <em>Pompa digunakan untuk memindahkan fluida dari satu lokasi ke lokasi lain. Sistem perpipaan adalah jaringan pipa, katup, dan fiting yang membawa fluida ini. Ada dua kategori utama pompa: sentrifugal dan positive displacement.</em>
          </p>

          <h4>Pump Types / Jenis Pompa:</h4>
          <ul>
            <li><strong>Centrifugal Pumps:</strong> Use a rotating impeller to create flow. They are used for high-volume, low-pressure applications like main sea water cooling.<br /><em>Pompa Sentrifugal: Menggunakan impeler yang berputar untuk menciptakan aliran. Digunakan untuk aplikasi volume tinggi, tekanan rendah seperti pendingin air laut utama.</em></li>
            <li><strong>Positive Displacement Pumps:</strong> Trap a fixed amount of fluid and force it into the discharge pipe. Examples include gear, screw, and piston pumps. They are used for high-pressure or viscous fluid applications, like fuel oil supply.<br /><em>Pompa Positive Displacement: Menjebak sejumlah fluida dan memaksanya masuk ke pipa keluar. Contohnya termasuk pompa roda gigi, ulir, dan torak. Digunakan untuk aplikasi tekanan tinggi atau fluida kental, seperti suplai bahan bakar.</em></li>
          </ul>

          <h4>Example Sentence:</h4>
          <p className="italic bg-muted p-2 rounded">"A <strong>centrifugal pump</strong> is used for the main sea water cooling system, while a <strong>gear pump</strong> is used for lube oil circulation."<br/>"Pompa <strong>sentrifugal</strong> digunakan untuk sistem pendingin air laut utama, sedangkan pompa <strong>roda gigi</strong> digunakan untuk sirkulasi minyak pelumas."</p>
        </CardContent>
      </Card>

      {/* Section 3: Oily-Water Separators */}
      <Card>
        <CardHeader>
          <CardTitle>2.2 Oily-Water Separators (OWS)</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            An Oily-Water Separator (OWS) is a piece of pollution prevention equipment required by the MARPOL convention. Its purpose is to separate oil and other contaminants from bilge water before it is discharged into the sea.
            <br />
            <em>Oily-Water Separator (OWS) adalah peralatan pencegahan polusi yang diwajibkan oleh konvensi MARPOL. Tujuannya adalah untuk memisahkan minyak dan kontaminan lain dari air got (bilge water) sebelum dibuang ke laut.</em>
          </p>

          <h4>Operating Principle / Prinsip Kerja:</h4>
          <p>
            Most OWS units use gravity and coalescing filters. Because oil is less dense than water, it will naturally separate and rise to the top. The OWS provides a space for this to happen and uses filters to capture smaller oil droplets. The system includes an Oil Content Monitor (OCM) that measures the oil content of the discharge water and will automatically stop the discharge if it exceeds the legal limit (typically 15 ppm).
            <br />
            <em>Sebagian besar unit OWS menggunakan gravitasi dan filter koalesen. Karena minyak kurang padat daripada air, ia akan secara alami terpisah dan naik ke atas. OWS menyediakan ruang agar hal ini terjadi dan menggunakan filter untuk menangkap tetesan minyak yang lebih kecil. Sistem ini mencakup Oil Content Monitor (OCM) yang mengukur kandungan minyak dari air yang dibuang dan akan secara otomatis menghentikan pembuangan jika melebihi batas legal (biasanya 15 ppm).</em>
          </p>

          <h4>Example Sentence:</h4>
          <p className="italic bg-muted p-2 rounded">"It is illegal to discharge bilge water without using the <strong>Oily-Water Separator</strong>."<br/>"Adalah ilegal untuk membuang air got tanpa menggunakan <strong>Oily-Water Separator</strong>."</p>
        </CardContent>
      </Card>

      <FormativeQuiz questions={moduleQuestions} />
    </div>
  );
};

export default ChapterFluidPumpingSeparation;