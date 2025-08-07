export interface FormativeQuestion {
  id: string;
  topic: string;
  question: string;
  question_en: string;
  options: {
    [key: string]: {
      text: string;
      text_en: string;
    };
  };
  answer: string;
  explanation: string;
  explanation_en: string;
}

export const formativeQuestions: FormativeQuestion[] = [
  {
    id: 'fq-sdc-1',
    topic: 'Steering, Deck & Control Systems',
    question: 'Apa fungsi utama dari steering gear?',
    question_en: 'What is the main function of the steering gear?',
    options: {
      a: { text: 'Untuk menggerakkan kapal maju', text_en: 'To move the ship forward' },
      b: { text: 'Untuk mengontrol arah kapal dengan menggerakkan daun kemudi', text_en: 'To control the ship\'s direction by moving the rudder' },
      c: { text: 'Untuk mengangkat jangkar', text_en: 'To lift the anchor' },
      d: { text: 'Untuk menghasilkan listrik', text_en: 'To generate electricity' },
    },
    answer: 'b',
    explanation: 'Steering gear adalah sistem yang mengubah input dari anjungan menjadi gerakan mekanis pada daun kemudi untuk mengarahkan kapal.',
    explanation_en: 'The steering gear is the system that converts input from the bridge into mechanical movement of the rudder to steer the ship.',
  },
  {
    id: 'fq-sdc-2',
    topic: 'Steering, Deck & Control Systems',
    question: 'Manakah dari berikut ini yang merupakan jenis deck machinery?',
    question_en: 'Which of the following is a type of deck machinery?',
    options: {
      a: { text: 'Mesin Induk', text_en: 'Main Engine' },
      b: { text: 'Generator', text_en: 'Generator' },
      c: { text: 'Anchor Windlass', text_en: 'Anchor Windlass' },
      d: { text: 'Purifier', text_en: 'Purifier' },
    },
    answer: 'c',
    explanation: 'Anchor windlass adalah mesin di geladak yang digunakan untuk menurunkan dan menaikkan jangkar. Mesin Induk, Generator, dan Purifier berada di kamar mesin.',
    explanation_en: 'An anchor windlass is a machine on deck used for lowering and raising the anchor. The Main Engine, Generator, and Purifier are located in the engine room.',
  },
  {
    id: 'fq-sdc-3',
    topic: 'Steering, Deck & Control Systems',
    question: 'Dalam sistem kontrol otomatis, apa fungsi dari sensor?',
    question_en: 'In an automatic control system, what is the function of a sensor?',
    options: {
      a: { text: 'Untuk melakukan tindakan korektif', text_en: 'To take corrective action' },
      b: { text: 'Untuk membandingkan set point dengan nilai terukur', text_en: 'To compare the set point with the measured value' },
      c: { text: 'Untuk mengukur variabel proses (misalnya, suhu, tekanan)', text_en: 'To measure a process variable (e.g., temperature, pressure)' },
      d: { text: 'Untuk menampilkan hasil pengukuran', text_en: 'To display the measurement result' },
    },
    answer: 'c',
    explanation: 'Sensor adalah elemen yang mendeteksi atau mengukur variabel fisik dari suatu proses dan mengubahnya menjadi sinyal yang dapat dibaca oleh controller.',
    explanation_en: 'A sensor is the element that detects or measures a physical variable of a process and converts it into a signal that can be read by the controller.',
  },
  {
    id: 'fq-fps-1',
    topic: 'Fluid, Pumping & Separation Systems',
    question: 'Apa tujuan utama dari Oily-Water Separator (OWS)?',
    question_en: 'What is the main purpose of an Oily-Water Separator (OWS)?',
    options: {
      a: { text: 'Untuk memurnikan bahan bakar dari air', text_en: 'To purify fuel oil from water' },
      b: { text: 'Untuk memisahkan minyak dari air got (bilge water) sebelum dibuang ke laut', text_en: 'To separate oil from bilge water before discharging it overboard' },
      c: { text: 'Untuk mendinginkan minyak pelumas', text_en: 'To cool down lubricating oil' },
      d: { text: 'Untuk menghasilkan air tawar dari air laut', text_en: 'To produce fresh water from sea water' },
    },
    answer: 'b',
    explanation: 'OWS adalah perangkat pencegahan polusi yang memastikan air got yang dibuang ke laut memiliki kandungan minyak di bawah batas yang diizinkan oleh peraturan MARPOL.',
    explanation_en: 'The OWS is a pollution prevention device that ensures bilge water discharged overboard has an oil content below the limit allowed by MARPOL regulations.',
  },
  {
    id: 'fq-fps-2',
    topic: 'Fluid, Pumping & Separation Systems',
    question: 'Manakah jenis pompa yang paling umum digunakan untuk memindahkan volume besar air laut untuk pendinginan?',
    question_en: 'Which pump type is most commonly used for transferring large volumes of sea water for cooling?',
    options: {
      a: { text: 'Pompa Roda Gigi (Gear Pump)', text_en: 'Gear Pump' },
      b: { text: 'Pompa Ulir (Screw Pump)', text_en: 'Screw Pump' },
      c: { text: 'Pompa Sentrifugal (Centrifugal Pump)', text_en: 'Centrifugal Pump' },
      d: { text: 'Pompa Torak (Piston Pump)', text_en: 'Piston Pump' },
    },
    answer: 'c',
    explanation: 'Pompa sentrifugal ideal untuk laju aliran tinggi dan tekanan rendah, yang merupakan karakteristik dari sistem pendingin air laut utama di kapal.',
    explanation_en: 'Centrifugal pumps are ideal for high flow rates and low pressure, which is characteristic of a ship\'s main sea water cooling system.',
  },
  {
    id: 'fq-fps-3',
    topic: 'Fluid, Pumping & Separation Systems',
    question: 'Viskositas (viscosity) pada minyak pelumas mengacu pada...',
    question_en: 'Viscosity in lubricating oil refers to its...',
    options: {
      a: { text: 'Titik nyala (flash point)', text_en: 'Flash point' },
      b: { text: 'Kemampuan untuk menahan aliran', text_en: 'Resistance to flow' },
      c: { text: 'Tingkat keasaman (acidity level)', text_en: 'Acidity level' },
      d: { text: 'Warnanya (its color)', text_en: 'Its color' },
    },
    answer: 'b',
    explanation: 'Viskositas adalah ukuran kekentalan fluida atau ketahanannya terhadap deformasi. Viskositas yang tepat sangat penting untuk pelumasan yang efektif.',
    explanation_en: 'Viscosity is a measure of a fluid\'s thickness or its resistance to deformation. Proper viscosity is crucial for effective lubrication.',
  },
  {
    id: 'fq-ee-1',
    topic: 'Electrical & Electronic Systems',
    question: 'Apa fungsi utama dari generator di kapal?',
    question_en: 'What is the main function of a generator on a ship?',
    options: {
      a: { text: 'Untuk menggerakkan baling-baling', text_en: 'To drive the propeller' },
      b: { text: 'Untuk mengubah energi mekanik menjadi energi listrik', text_en: 'To convert mechanical energy into electrical energy' },
      c: { text: 'Untuk menyimpan energi listrik', text_en: 'To store electrical energy' },
      d: { text: 'Untuk mendinginkan mesin', text_en: 'To cool the engine' },
    },
    answer: 'b',
    explanation: 'Generator (sering disebut alternator di kapal) digerakkan oleh mesin diesel (genset) untuk menghasilkan listrik yang dibutuhkan untuk semua peralatan di kapal.',
    explanation_en: 'A generator (often called an alternator on ships) is driven by a diesel engine (genset) to produce the electricity needed for all equipment on board.',
  },
  {
    id: 'fq-ee-2',
    topic: 'Electrical & Electronic Systems',
    question: 'Apa tujuan dari sebuah circuit breaker di dalam switchboard?',
    question_en: 'What is the purpose of a circuit breaker in a switchboard?',
    options: {
      a: { text: 'Untuk menaikkan tegangan listrik', text_en: 'To increase the voltage' },
      b: { text: 'Untuk melindungi sirkuit dari arus berlebih (overcurrent)', text_en: 'To protect a circuit from overcurrent' },
      c: { text: 'Untuk mengubah AC menjadi DC', text_en: 'To convert AC to DC' },
      d: { text: 'Untuk mengukur konsumsi daya', text_en: 'To measure power consumption' },
    },
    answer: 'b',
    explanation: 'Circuit breaker adalah perangkat keselamatan yang secara otomatis memutus aliran listrik jika terjadi kelebihan beban atau korsleting, untuk mencegah kerusakan peralatan dan kebakaran.',
    explanation_en: 'A circuit breaker is a safety device that automatically interrupts electrical flow in case of an overload or short circuit, to prevent equipment damage and fire.',
  },
  {
    id: 'fq-ee-3',
    topic: 'Electrical & Electronic Systems',
    question: 'Manakah pernyataan yang benar tentang arus AC dan DC?',
    question_en: 'Which statement is correct about AC and DC currents?',
    options: {
      a: { text: 'AC mengalir dalam satu arah, DC bolak-balik', text_en: 'AC flows in one direction, DC alternates' },
      b: { text: 'AC digunakan untuk baterai, DC untuk generator', text_en: 'AC is for batteries, DC is for generators' },
      c: { text: 'AC (Alternating Current) arahnya bolak-balik, DC (Direct Current) mengalir dalam satu arah', text_en: 'AC (Alternating Current) alternates direction, DC (Direct Current) flows in one direction' },
      d: { text: 'AC dan DC adalah sama', text_en: 'AC and DC are the same' },
    },
    answer: 'c',
    explanation: 'AC (Arus Bolak-balik) adalah jenis arus yang arahnya berubah secara periodik, yang dihasilkan oleh generator. DC (Arus Searah) mengalir secara konsisten dalam satu arah, seperti dari baterai.',
    explanation_en: 'AC (Alternating Current) is the type of current that periodically reverses direction, which is produced by generators. DC (Direct Current) flows consistently in one direction, such as from a battery.',
  },
  {
    id: 'fq-tp-1',
    topic: 'Using Technical Publications',
    question: 'Di dalam manual instruksi mesin, di bagian manakah Anda akan mencari interval penggantian filter oli?',
    question_en: 'In an engine instruction manual, in which section would you look for the oil filter replacement interval?',
    options: {
      a: { text: 'Daftar Suku Cadang (Parts List)', text_en: 'Parts List' },
      b: { text: 'Jadwal Perawatan (Maintenance Schedule)', text_en: 'Maintenance Schedule' },
      c: { text: 'Prosedur Pengoperasian (Operating Procedures)', text_en: 'Operating Procedures' },
      d: { text: 'Diagram Kelistrikan (Wiring Diagram)', text_en: 'Wiring Diagram' },
    },
    answer: 'b',
    explanation: 'Jadwal Perawatan (Maintenance Schedule) berisi daftar semua tugas perawatan rutin dan interval waktu atau jam kerja kapan tugas tersebut harus dilakukan.',
    explanation_en: 'The Maintenance Schedule contains a list of all routine maintenance tasks and the time or running-hour intervals at which they should be performed.',
  },
  {
    id: 'fq-tp-2',
    topic: 'Using Technical Publications',
    question: 'Kode internasional manakah yang mengatur persyaratan untuk peralatan keselamatan jiwa (life-saving appliances)?',
    question_en: 'Which international code governs the requirements for life-saving appliances?',
    options: {
      a: { text: 'MARPOL', text_en: 'MARPOL' },
      b: { text: 'ISM Code', text_en: 'ISM Code' },
      c: { text: 'LSA Code', text_en: 'LSA Code' },
      d: { text: 'FSS Code', text_en: 'FSS Code' },
    },
    answer: 'c',
    explanation: 'LSA (Life-Saving Appliance) Code adalah bagian dari SOLAS yang memberikan spesifikasi teknis detail untuk semua jenis peralatan keselamatan jiwa, dari sekoci hingga jaket pelampung.',
    explanation_en: 'The LSA (Life-Saving Appliance) Code is part of SOLAS and provides detailed technical specifications for all types of life-saving equipment, from lifeboats to lifejackets.',
  },
  {
    id: 'fq-tp-3',
    topic: 'Using Technical Publications',
    question: 'Apa tujuan utama dari Safety Data Sheet (SDS) untuk suatu bahan kimia?',
    question_en: 'What is the main purpose of a Safety Data Sheet (SDS) for a chemical?',
    options: {
      a: { text: 'Untuk memberikan harga produk', text_en: 'To provide the price of the product' },
      b: { text: 'Untuk mengiklankan produk', text_en: 'To advertise the product' },
      c: { text: 'Untuk memberikan informasi tentang bahaya dan penanganan yang aman', text_en: 'To provide information on hazards and safe handling' },
      d: { text: 'Untuk menjelaskan cara memproduksinya', text_en: 'To explain how to manufacture it' },
    },
    answer: 'c',
    explanation: 'SDS (sebelumnya MSDS) adalah dokumen penting yang merinci bahaya kesehatan dan fisik dari suatu bahan kimia dan memberikan instruksi untuk penanganan, penyimpanan, dan pertolongan pertama yang aman.',
    explanation_en: 'An SDS (formerly MSDS) is a crucial document that details the health and physical hazards of a chemical and provides instructions for safe handling, storage, and first aid.',
  },
];