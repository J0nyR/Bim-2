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
            <div><p><strong>Separator:</strong> Mesin yang memisahkan zat berdasarkan massa jenis menggunakan gaya sentrifugal.</p><p className="text-muted-foreground"><em>A machine that separates substances of different densities using centrifugal force.</em></p></div>
            <div><p><strong>Compressor:</strong> Mesin yang menaikkan tekanan udara atau gas.</p><p className="text-muted-foreground"><em>A machine that increases the pressure of air or gas.</em></p></div>
            <div><p><strong>Heat Exchanger:</strong> Alat untuk mentransfer panas antara dua fluida tanpa mencampurnya.</p><p className="text-muted-foreground"><em>A device to transfer heat between two fluids without mixing them.</em></p></div>
            <div><p><strong>Distillation:</strong> Proses pemurnian cairan dengan pemanasan dan pendinginan (penyulingan).</p><p className="text-muted-foreground"><em>The process of purifying a liquid by heating and cooling.</em></p></div>
            <div><p><strong>Refrigerant:</strong> Zat yang digunakan dalam siklus pendinginan untuk menyerap dan melepaskan panas.</p><p className="text-muted-foreground"><em>A substance used in a refrigeration cycle to absorb and release heat.</em></p></div>
            <div><p><strong>Gravity Disc:</strong> Cincin di dalam purifier yang menentukan posisi antarmuka air-oli.</p><p className="text-muted-foreground"><em>A ring inside a purifier that determines the position of the water-oil interface.</em></p></div>
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
            <p>Pompa sangat penting untuk memindahkan berbagai jenis cairan di sekitar kapal untuk berbagai sistem. / Pumps are essential for moving various types of liquids around the ship for numerous systems.</p>
            
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-lg">A. Pompa Sentrifugal / Centrifugal Pump</h4>
                <p className="text-muted-foreground mb-2">Prinsip kerjanya menggunakan impeler (impeller) yang berputar cepat untuk melemparkan fluida ke luar karena gaya sentrifugal. Fluida kemudian dikumpulkan di dalam rumah pompa (casing) dan diarahkan ke saluran keluar (discharge).</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Karakteristik:</strong> Ideal untuk memindahkan volume cairan yang besar pada tekanan yang relatif rendah. Alirannya lancar dan tidak berdenyut.</li>
                  <li><strong>Aplikasi Umum:</strong> Pompa Pendingin Air Laut (Sea Water Cooling Pumps), Pompa Ballast (Ballast Pumps), Pompa Pemadam Kebakaran (Fire Pumps).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">B. Pompa Perpindahan Positif / Positive Displacement Pump</h4>
                <p className="text-muted-foreground mb-2">Prinsip kerjanya adalah "menjebak" sejumlah volume fluida dan "memaksanya" pindah dari sisi isap (suction) ke sisi keluar (discharge). Alirannya hampir konstan terlepas dari tekanan.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Karakteristik:</strong> Mampu menghasilkan tekanan tinggi, cocok untuk cairan kental (viscous), dan seringkali dapat menghisap sendiri (self-priming).</li>
                  <li><strong>Sub-jenis & Aplikasi Umum:</strong>
                    <ul className="list-circle list-inside ml-6">
                      <li><strong>Pompa Roda Gigi (Gear Pump):</strong> Digunakan untuk oli pelumas dan transfer bahan bakar.</li>
                      <li><strong>Pompa Ulir (Screw Pump):</strong> Digunakan untuk transfer bahan bakar dan oli pelumas, menghasilkan aliran yang sangat halus.</li>
                      <li><strong>Pompa Piston (Piston Pump):</strong> Digunakan untuk aplikasi tekanan sangat tinggi seperti sistem hidrolik.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">2. Kompresor Udara / Air Compressor</h3>
            <p>Menghasilkan udara bertekanan tinggi yang disimpan dalam tabung udara (air receivers) untuk berbagai keperluan.</p>
            <p className="text-muted-foreground mb-2"><em>Produces high-pressure air stored in air receivers for various purposes.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Udara Start (Starting Air):</strong> Tekanan sangat tinggi (sekitar 30 bar) untuk menyalakan mesin diesel utama dan generator.</li>
              <li><strong>Udara Servis/Kerja (Service/Working Air):</strong> Tekanan lebih rendah (sekitar 7-10 bar) untuk peralatan pneumatik, pembersihan, dll.</li>
              <li><strong>Udara Kontrol (Control Air):</strong> Udara yang sangat kering dan bersih untuk sistem kontrol otomatis.</li>
            </ul>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">3. Pemisah Sentrifugal (Purifier & Clarifier) / Centrifugal Separator</h3>
            <p>Mesin ini menggunakan gaya sentrifugal (ribuan kali gaya gravitasi) untuk memisahkan zat dengan massa jenis berbeda. Tujuan utamanya adalah membersihkan bahan bakar dan oli pelumas dari kontaminan berbahaya seperti air dan lumpur (sludge).</p>
            <p className="text-muted-foreground mb-2"><em>This machine uses centrifugal force (thousands of times gravity) to separate substances of different densities. Its main purpose is to clean fuel and lubricating oil from harmful contaminants like water and sludge.</em></p>
            
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Komponen Utama / Main Components</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Bowl:</strong> Komponen berputar berkecepatan tinggi tempat pemisahan terjadi.</li>
                  <li><strong>Disc Stack:</strong> Tumpukan piringan berbentuk kerucut di dalam bowl untuk memperluas area permukaan dan meningkatkan efisiensi pemisahan.</li>
                  <li><strong>Motor & Gear:</strong> Menggerakkan bowl pada kecepatan tinggi (misalnya 6.000 - 10.000 RPM).</li>
                  <li><strong>Gravity Disc (atau Dam Ring):</strong> Komponen kunci yang digunakan dalam mode purifier untuk mengatur posisi antarmuka (interface) antara oli dan air.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Persamaan & Perbedaan / Similarities & Differences</h4>
                <p className="text-muted-foreground mb-2">Mesin yang sama dapat diatur sebagai Purifier atau Clarifier.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Persamaan:</strong> Keduanya menggunakan prinsip sentrifugal, memiliki konstruksi dasar yang sama, dan bertujuan untuk membersihkan cairan.</li>
                  <li><strong>Perbedaan (Mode Operasi):</strong>
                    <ul className="list-circle list-inside ml-6">
                      <li><strong>Mode Purifier:</strong> Dikonfigurasi untuk memisahkan <strong>dua cairan</strong> yang tidak dapat bercampur (misalnya, oli dan air) dan sejumlah kecil padatan. Memiliki <strong>dua saluran keluar cairan</strong> (satu untuk oli bersih, satu untuk air) dan satu saluran keluar padatan. Menggunakan <strong>gravity disc</strong>.</li>
                      <li><strong>Mode Clarifier:</strong> Dikonfigurasi untuk memisahkan sejumlah kecil <strong>padatan</strong> dari <strong>satu cairan</strong>. Hanya memiliki <strong>satu saluran keluar cairan</strong> dan satu saluran keluar padatan. Tidak menggunakan gravity disc.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
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
            <p>Mentransfer panas dari satu fluida ke fluida lain tanpa mencampurnya. Di kamar mesin, ini biasanya digunakan untuk mendinginkan atau memanaskan fluida. / Transfers heat from one fluid to another without mixing them. In the engine room, this is usually used to cool or heat a fluid.</p>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-lg">A. Konsep Dasar Perpindahan Panas / Basic Concepts of Heat Transfer</h4>
                 <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Pendinginan (Cooling):</strong> Proses yang paling umum, membuang panas dari fluida kerja. Contoh: mendinginkan oli pelumas.</li>
                  <li><strong>Pemanasan (Heating):</strong> Menambahkan panas ke fluida untuk mengubah propertinya. Contoh: memanaskan bahan bakar berat (HFO) agar viskositasnya turun.</li>
                  <li><strong>Penguapan (Evaporation):</strong> Mengubah cairan menjadi gas dengan menambahkan panas. Contoh: evaporator pada sistem AC atau generator air tawar.</li>
                  <li><strong>Pengkondensasian (Condensation):</strong> Mengubah gas menjadi cairan dengan membuang panas. Contoh: kondensor pada sistem AC atau generator air tawar.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">B. Jenis-jenis Penukar Panas / Types of Heat Exchangers</h4>
                <p className="text-muted-foreground mb-2">Dua jenis yang paling umum di kapal adalah:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Jenis Pelat (Plate Type):</strong> Terdiri dari tumpukan pelat logam tipis bergelombang. Sangat efisien, kompak, dan mudah dibersihkan, tetapi rentan terhadap kebocoran paking (gasket).</li>
                  <li><strong>Jenis Shell & Tube:</strong> Terdiri dari sebuah bejana (shell) dengan sekelompok pipa (tube bundle) di dalamnya. Sangat kuat, andal untuk tekanan tinggi, tetapi lebih besar dan kurang efisien dibandingkan jenis pelat.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">C. Alat/Mesin Penukar Panas di Kapal / Heat Exchanger Equipment on Ships</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Pendingin Oli Pelumas (Lube Oil Cooler):</strong> Mendinginkan oli pelumas panas dari mesin.</li>
                  <li><strong>Pendingin Air Tawar Jaket (Jacket Water Cooler):</strong> Pendingin utama untuk sistem pendingin mesin, biasanya menggunakan air laut sebagai media pendingin.</li>
                  <li><strong>Pemanas Bahan Bakar (Fuel Oil Heater):</strong> Memanaskan HFO menggunakan uap atau oli termal agar mudah dipompa dan disemprotkan.</li>
                  <li><strong>Kondensor (Condenser):</strong> Mendinginkan uap (misalnya uap refrigerant di sistem AC) menjadi cairan.</li>
                  <li><strong>Evaporator / Generator Air Tawar:</strong> Menggunakan panas untuk menguapkan air laut.</li>
                </ul>
              </div>
            </div>
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