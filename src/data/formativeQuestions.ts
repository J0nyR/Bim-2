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
];