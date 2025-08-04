import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TeachingMaterialOtherAuxiliaries = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Materi Pembelajaran / Teaching Material
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Topik: Mesin Bantu Lainnya / Other Auxiliaries</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Materi ini mencakup penjelasan tentang berbagai mesin bantu penting di kamar mesin, termasuk pompa, kompresor udara, pemurni, generator air tawar, penukar panas, dan sistem pendukung lainnya.
          </p>
          <p className="text-lg">
            This material covers various essential auxiliary machinery in the engine room, including pumps, air compressors, purifiers, fresh water generators, heat exchangers, and other support systems.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Glosarium & Kosakata / Glossary & Vocabulary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><p><strong>Pump:</strong> Pompa, alat untuk memindahkan fluida.</p><p className="text-muted-foreground"><em>A device used to move fluids.</em></p></div>
            <div><p><strong>Impeller:</strong> Roda berputar di dalam pompa sentrifugal yang mendorong fluida.</p><p className="text-muted-foreground"><em>The rotating part of a centrifugal pump that moves the fluid.</em></p></div>
            <div><p><strong>Purifier:</strong> Alat untuk memisahkan kotoran dari cairan (mis. oli) menggunakan gaya sentrifugal.</p><p className="text-muted-foreground"><em>A device that separates impurities from liquids (e.g., oil) using centrifugal force.</em></p></div>
            <div><p><strong>Compressor:</strong> Mesin yang menaikkan tekanan udara atau gas.</p><p className="text-muted-foreground"><em>A machine that increases the pressure of air or gas.</em></p></div>
            <div><p><strong>Heat Exchanger:</strong> Alat untuk mentransfer panas antara dua fluida tanpa mencampurnya.</p><p className="text-muted-foreground"><em>A device to transfer heat between two fluids without mixing them.</em></p></div>
            <div><p><strong>Distillation:</strong> Proses pemurnian cairan dengan pemanasan dan pendinginan (penyulingan).</p><p className="text-muted-foreground"><em>The process of purifying a liquid by heating and cooling.</em></p></div>
            <div><p><strong>Refrigerant:</strong> Zat yang digunakan dalam siklus pendinginan untuk menyerap dan melepaskan panas.</p><p className="text-muted-foreground"><em>A substance used in a refrigeration cycle to absorb and release heat.</em></p></div>
            <div><p><strong>Ventilation:</strong> Proses memasok udara segar ke suatu ruangan.</p><p className="text-muted-foreground"><em>The process of supplying fresh air to a space.</em></p></div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Penjelasan Konsep / Concept Explanation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div>
            <h3 className="text-xl font-medium mb-2">1. Pompa-pompa / Pumps</h3>
            <p>Pompa sangat penting untuk memindahkan berbagai jenis cairan di sekitar kapal, seperti air laut untuk pendinginan, air tawar, bahan bakar, dan oli pelumas.</p>
            <p className="text-muted-foreground mb-2"><em>Pumps are essential for moving all types of liquids around the ship, such as sea water for cooling, fresh water, fuel, and lubricating oil.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Pompa Sentrifugal (Centrifugal Pump):</strong> Menggunakan impeler yang berputar untuk menciptakan aliran. Umum untuk volume besar, tekanan rendah (mis. pompa pendingin air laut).</li>
              <li className="text-muted-foreground"><em>Uses a rotating impeller to create flow. Common for high volume, low pressure (e.g., sea water cooling pumps).</em></li>
              <li><strong>Pompa Perpindahan Positif (Positive Displacement Pump):</strong> Memindahkan volume fluida yang tetap setiap putaran (mis. pompa roda gigi/gear pump, pompa ulir/screw pump). Digunakan untuk cairan kental seperti oli dan bahan bakar.</li>
              <li className="text-muted-foreground"><em>Moves a fixed volume of fluid per rotation (e.g., gear pump, screw pump). Used for viscous fluids like oil and fuel.</em></li>
            </ul>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">2. Kompresor Udara / Air Compressor</h3>
            <p>Menghasilkan udara bertekanan tinggi yang disimpan dalam tabung udara (air receivers) untuk berbagai keperluan.</p>
            <p className="text-muted-foreground mb-2"><em>Produces high-pressure air stored in air receivers for various purposes.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Udara Start (Starting Air):</strong> Tekanan sangat tinggi (sekitar 30 bar) untuk menyalakan mesin diesel utama dan generator.</li>
              <li className="text-muted-foreground"><em>Very high pressure (around 30 bar) to start the main diesel engine and generators.</em></li>
              <li><strong>Udara Servis/Kerja (Service/Working Air):</strong> Tekanan lebih rendah (sekitar 7-10 bar) untuk peralatan pneumatik, pembersihan, dll.</li>
              <li className="text-muted-foreground"><em>Lower pressure (around 7-10 bar) for pneumatic tools, cleaning, etc.</em></li>
              <li><strong>Udara Kontrol (Control Air):</strong> Udara yang sangat kering dan bersih untuk sistem kontrol otomatis.</li>
              <li className="text-muted-foreground"><em>Very dry and clean air for automated control systems.</em></li>
            </ul>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">3. Pemurni / Purifier</h3>
            <p>Menggunakan gaya sentrifugal untuk memisahkan kotoran (air, lumpur/sludge, partikel padat) dari bahan bakar dan oli pelumas. Ini sangat penting untuk melindungi mesin dari kerusakan.</p>
            <p className="text-muted-foreground mb-2"><em>Uses centrifugal force to separate impurities (water, sludge, solid particles) from fuel and lubricating oil. This is critical to protect the engine from damage.</em></p>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">4. Generator Air Tawar / Fresh Water Generator (FWG)</h3>
            <p>Membuat air tawar dari air laut. Sebagian besar FWG di kapal menggunakan metode distilasi vakum suhu rendah.</p>
            <p className="text-muted-foreground mb-2"><em>Produces fresh water from sea water. Most shipboard FWGs use low-temperature vacuum distillation.</em></p>
            <p>Panas dari air pendingin jaket mesin utama (sekitar 70-80°C) digunakan untuk menguapkan air laut di dalam ruang vakum (di mana air mendidih pada suhu rendah). Uapnya kemudian didinginkan oleh air laut dingin untuk mengembun menjadi air tawar murni.</p>
            <p className="text-muted-foreground"><em>Heat from the main engine's jacket cooling water (around 70-80°C) is used to boil sea water in a vacuum chamber (where water boils at a low temperature). The vapor is then cooled by cold sea water to condense into pure fresh water.</em></p>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">5. Penukar Panas / Heat Exchanger</h3>
            <p>Mentransfer panas dari satu fluida ke fluida lain. Di kamar mesin, ini biasanya berarti mendinginkan sesuatu.</p>
            <p className="text-muted-foreground mb-2"><em>Transfers heat from one fluid to another. In the engine room, this usually means cooling something.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Jenis Pelat (Plate Type):</strong> Terdiri dari banyak pelat tipis yang disusun. Sangat efisien dan kompak.</li>
              <li className="text-muted-foreground"><em>Consists of many thin plates stacked together. Very efficient and compact.</em></li>
              <li><strong>Jenis Shell & Tube:</strong> Satu fluida mengalir di dalam banyak pipa kecil, sementara fluida lain mengalir di luar pipa di dalam sebuah cangkang (shell).</li>
              <li className="text-muted-foreground"><em>One fluid flows inside many small tubes, while the other flows outside the tubes within a shell.</em></li>
              <li><strong>Contoh / Examples:</strong> Pendingin oli pelumas (Lube Oil Cooler), Pendingin air tawar jaket (Jacket Water Cooler).</li>
            </ul>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">6. Sistem Pendingin (Refrigerasi) / Refrigeration System</h3>
            <p>Digunakan untuk mendinginkan ruang penyimpanan makanan (provision rooms) untuk menjaga kesegaran makanan. Sistem ini bekerja dengan siklus kompresi uap menggunakan zat pendingin (refrigerant).</p>
            <p className="text-muted-foreground mb-2"><em>Used to cool provision rooms to preserve food. The system works on a vapor compression cycle using a refrigerant.</em></p>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">7. Sistem AC & Ventilasi / Air-Conditioning & Ventilation Systems</h3>
            <p><strong>Ventilasi (Ventilation):</strong> Penting untuk memasok udara segar ke kamar mesin untuk pembakaran mesin dan untuk menghilangkan panas. Juga untuk ruang akomodasi dan kargo.</p>
            <p className="text-muted-foreground mb-2"><em><strong>Ventilation:</strong> Crucial for supplying fresh air to the engine room for engine combustion and for removing heat. Also for accommodation and cargo spaces.</em></p>
            <p><strong>AC (Air-Conditioning):</strong> Mendinginkan, mengeringkan (dehumidify), dan menyaring udara untuk kenyamanan kru di ruang akomodasi dan ruang kontrol.</p>
            <p className="text-muted-foreground"><em><strong>AC (Air-Conditioning):</strong> Cools, dehumidifies, and filters air for crew comfort in accommodation and control rooms.</em></p>
          </div>

        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Contoh Percakapan / Conversation Example</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-semibold">Skenario: Second Engineer dan Oiler sedang melakukan pengecekan rutin di kamar mesin.</p>
          <p className="font-semibold text-muted-foreground"><em>Scenario: The Second Engineer and an Oiler are on a routine check in the engine room.</em></p>

          <div className="space-y-2">
            <p><strong>Second Engineer:</strong> "Oiler, how's the main sea water pump running? Check the pressure and for any leaks."</p>
            <p className="text-muted-foreground"><em>"Oiler, bagaimana kondisi pompa air laut utama? Periksa tekanan dan apakah ada kebocoran."</em></p>
            <p><strong>Oiler:</strong> "The pump pressure is steady at 2.5 bar, sir. No leaks from the casing or seal."</p>
            <p className="text-muted-foreground"><em>"Tekanan pompa stabil di 2,5 bar, Pak. Tidak ada kebocoran dari casing atau perapat."</em></p>
            <p><strong>Second Engineer:</strong> "Good. Now let's check the lube oil purifier. Is it discharging sludge correctly?"</p>
            <p className="text-muted-foreground"><em>"Bagus. Sekarang kita periksa pemurni oli lumas. Apakah pembuangan lumpurnya benar?"</em></p>
            <p><strong>Oiler:</strong> "Yes, sir. It de-sludged about 10 minutes ago, everything looks normal. The temperature from the lube oil cooler is also stable."</p>
            <p className="text-muted-foreground"><em>"Ya, Pak. Proses de-sludge berjalan 10 menit yang lalu, semua terlihat normal. Suhu dari pendingin oli lumas juga stabil."</em></p>
            <p><strong>Second Engineer:</strong> "Excellent. Lastly, check the pressure on the main air receiver. We need to ensure we have enough pressure to start the main engine if needed."</p>
            <p className="text-muted-foreground"><em>"Bagus sekali. Terakhir, periksa tekanan di tabung udara utama. Kita harus pastikan tekanannya cukup untuk menyalakan mesin utama jika diperlukan."</em></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeachingMaterialOtherAuxiliaries;