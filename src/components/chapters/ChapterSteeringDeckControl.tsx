import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormativeQuiz from '@/components/FormativeQuiz';
import { formativeQuestions } from '@/data/formativeQuestions';

const ChapterSteeringDeckControl = () => {
  const moduleQuestions = formativeQuestions.filter(q => q.topic === 'Steering, Deck & Control Systems');

  return (
    <div className="space-y-8">
      
      {/* Section 1: Steering Gear */}
      <Card>
        <CardHeader>
          <CardTitle>1.5 Steering Gear</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            The steering gear is a critical system responsible for controlling the direction of the ship. It translates the commands from the bridge (wheelhouse) into the physical movement of the rudder. The ability to steer effectively is fundamental to the safe navigation of the vessel.
            <br />
            <em>Sistem kemudi (steering gear) adalah sistem kritis yang bertanggung jawab untuk mengontrol arah kapal. Sistem ini menerjemahkan perintah dari anjungan menjadi gerakan fisik pada daun kemudi. Kemampuan untuk mengemudi secara efektif sangat fundamental untuk navigasi kapal yang aman.</em>
          </p>
          
          <h4>Key Components / Komponen Utama:</h4>
          <ul>
            <li><strong>Rudder Actuator:</strong> The hydraulic or electric machinery that provides the force to move the rudder stock. (e.g., Ram-type, Rotary Vane).<br /><em>Aktuator Kemudi: Mesin hidrolik atau elektrik yang memberikan tenaga untuk menggerakkan batang kemudi (rudder stock). (Contoh: Tipe Ram, Rotary Vane).</em></li>
            <li><strong>Power Unit:</strong> The electric motors and hydraulic pumps that generate the required power for the actuator.<br /><em>Unit Daya: Motor listrik dan pompa hidrolik yang menghasilkan daya yang dibutuhkan untuk aktuator.</em></li>
            <li><strong>Control System:</strong> Receives signals from the bridge's steering console (helm) and directs the power unit to move the rudder to the desired angle.<br /><em>Sistem Kontrol: Menerima sinyal dari konsol kemudi di anjungan (helm) dan mengarahkan unit daya untuk menggerakkan daun kemudi ke sudut yang diinginkan.</em></li>
            <li><strong>Rudder Stock & Rudder:</strong> The rudder stock connects the actuator to the rudder blade, which is the surface that deflects water to turn the ship.<br /><em>Batang Kemudi & Daun Kemudi: Batang kemudi menghubungkan aktuator ke daun kemudi, yaitu permukaan yang membelokkan air untuk memutar kapal.</em></li>
          </ul>

          <h4>Example Sentence:</h4>
          <p className="italic bg-muted p-2 rounded">"The <strong>steering gear</strong> must be inspected and tested before departure to ensure its reliability."<br/>"Sistem kemudi harus diperiksa dan diuji sebelum keberangkatan untuk memastikan keandalannya."</p>
        </CardContent>
      </Card>

      {/* Section 2: Deck Machinery */}
      <Card>
        <CardHeader>
          <CardTitle>1.8 Deck Machinery</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Deck machinery refers to the various machines located on the deck of a ship used for anchoring, mooring, and cargo handling operations. These machines are essential for the ship's operations when in port or at anchor.
            <br />
            <em>Mesin geladak (deck machinery) mengacu pada berbagai mesin yang terletak di geladak kapal yang digunakan untuk operasi penjangkaran, penambatan, dan penanganan kargo. Mesin-mesin ini sangat penting untuk operasi kapal saat di pelabuhan atau berlabuh.</em>
          </p>

          <h4>Common Types / Jenis Umum:</h4>
          <ul>
            <li><strong>Anchor Windlass:</strong> Used for dropping and heaving up the ship's anchor.<br /><em>Derek Jangkar (Anchor Windlass): Digunakan untuk menurunkan dan mengangkat jangkar kapal.</em></li>
            <li><strong>Mooring Winches:</strong> Used to handle mooring lines to secure the ship to a pier or another vessel.<br /><em>Derek Tambat (Mooring Winches): Digunakan untuk menangani tali tambat untuk mengamankan kapal ke dermaga atau kapal lain.</em></li>
            <li><strong>Cranes and Derricks:</strong> Used for lifting and moving cargo or ship's stores.<br /><em>Kran dan Derek: Digunakan untuk mengangkat dan memindahkan kargo atau perbekalan kapal.</em></li>
          </ul>

          <h4>Example Sentence:</h4>
          <p className="italic bg-muted p-2 rounded">"The <strong>mooring winches</strong> are used to tighten the ropes and keep the vessel alongside the quay."<br/>"Derek tambat digunakan untuk mengencangkan tali dan menjaga kapal tetap di samping dermaga."</p>
        </CardContent>
      </Card>

      {/* Section 3: Automatic Control Systems */}
      <Card>
        <CardHeader>
          <CardTitle>1.6 Automatic Control Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Automatic control systems are used throughout the engine room to monitor and regulate various processes without constant human intervention. This improves efficiency, safety, and reliability. A basic control loop consists of a sensor, a controller, and a final control element.
            <br />
            <em>Sistem kontrol otomatis digunakan di seluruh kamar mesin untuk memantau dan mengatur berbagai proses tanpa intervensi manusia secara terus-menerus. Ini meningkatkan efisiensi, keamanan, dan keandalan. Sebuah loop kontrol dasar terdiri dari sensor, controller, dan elemen kontrol akhir.</em>
          </p>

          <h4>Control Loop Elements / Elemen Loop Kontrol:</h4>
          <ol>
            <li><strong>Sensor:</strong> Measures a process variable (e.g., temperature, pressure, level) and sends a signal to the controller.<br /><em>Sensor: Mengukur variabel proses (misalnya, suhu, tekanan, level) dan mengirimkan sinyal ke controller.</em></li>
            <li><strong>Controller:</strong> Compares the measured value from the sensor to a desired value (set point) and calculates the necessary correction.<br /><em>Controller: Membandingkan nilai terukur dari sensor dengan nilai yang diinginkan (set point) dan menghitung koreksi yang diperlukan.</em></li>
            <li><strong>Final Control Element:</strong> An actuator (e.g., a valve, a pump motor) that receives the signal from the controller and makes a physical change to the process.<br /><em>Elemen Kontrol Akhir: Sebuah aktuator (misalnya, katup, motor pompa) yang menerima sinyal dari controller dan melakukan perubahan fisik pada proses.</em></li>
          </ol>

          <h4>Example Sentence:</h4>
          <p className="italic bg-muted p-2 rounded">"The <strong>automatic control system</strong> for the main engine's cooling water maintains a constant temperature."<br/>"Sistem kontrol otomatis untuk air pendingin mesin induk mempertahankan suhu yang konstan."</p>
        </CardContent>
      </Card>

      <FormativeQuiz questions={moduleQuestions} />
    </div>
  );
};

export default ChapterSteeringDeckControl;