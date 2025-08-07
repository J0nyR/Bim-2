export interface Question {
  id: number;
  question: string;
  question_en: string;
  options: {
    [key: string]: {
      text: string;
      text_en: string;
    };
  };
  answer: string;
  topic: string;
}

export const summativeQuestions: Question[] = [
  // Steering, Deck & Control Systems
  {
    id: 1,
    question: "Sistem yang menerjemahkan perintah dari anjungan menjadi gerakan fisik pada daun kemudi disebut...",
    question_en: "The system that translates commands from the bridge into physical movement of the rudder is called...",
    options: {
      a: { text: "Mesin Induk", text_en: "Main Engine" },
      b: { text: "Steering Gear", text_en: "Steering Gear" },
      c: { text: "Mooring Winch", text_en: "Mooring Winch" },
      d: { text: "Generator", text_en: "Generator" },
    },
    answer: "b",
    topic: "Steering, Deck & Control Systems",
  },
  {
    id: 2,
    question: "Dalam loop kontrol otomatis, komponen yang membandingkan nilai terukur dengan set point adalah...",
    question_en: "In an automatic control loop, the component that compares the measured value with the set point is the...",
    options: {
      a: { text: "Sensor", text_en: "Sensor" },
      b: { text: "Actuator", text_en: "Actuator" },
      c: { text: "Controller", text_en: "Controller" },
      d: { text: "Transducer", text_en: "Transducer" },
    },
    answer: "c",
    topic: "Steering, Deck & Control Systems",
  },
  // Fluid, Pumping & Separation Systems
  {
    id: 3,
    question: "Suhu terendah di mana uap dari suatu cairan akan menyala dengan adanya percikan api disebut...",
    question_en: "The lowest temperature at which a fluid's vapor will ignite with a spark is called...",
    options: {
      a: { text: "Pour Point", text_en: "Pour Point" },
      b: { text: "Flash Point", text_en: "Flash Point" },
      c: { text: "Viscosity Index", text_en: "Viscosity Index" },
      d: { text: "Density", text_en: "Density" },
    },
    answer: "b",
    topic: "Fluid, Pumping & Separation Systems",
  },
  {
    id: 4,
    question: "Pompa yang ideal untuk aplikasi tekanan tinggi atau memompa cairan kental seperti minyak pelumas adalah...",
    question_en: "The ideal pump for high-pressure applications or for pumping viscous fluids like lube oil is a...",
    options: {
      a: { text: "Pompa Sentrifugal", text_en: "Centrifugal Pump" },
      b: { text: "Pompa Positive Displacement", text_en: "Positive Displacement Pump" },
      c: { text: "Pompa Ejektor", text_en: "Ejector Pump" },
      d: { text: "Pompa Vakum", text_en: "Vacuum Pump" },
    },
    answer: "b",
    topic: "Fluid, Pumping & Separation Systems",
  },
  {
    id: 5,
    question: "Menurut peraturan MARPOL, batas kandungan minyak dalam air got yang boleh dibuang ke laut adalah...",
    question_en: "According to MARPOL regulations, the oil content limit for bilge water that can be discharged into the sea is...",
    options: {
      a: { text: "100 ppm", text_en: "100 ppm" },
      b: { text: "50 ppm", text_en: "50 ppm" },
      c: { text: "15 ppm", text_en: "15 ppm" },
      d: { text: "0 ppm", text_en: "0 ppm" },
    },
    answer: "c",
    topic: "Fluid, Pumping & Separation Systems",
  },
  // Electrical & Electronic Systems
  {
    id: 6,
    question: "Panel distribusi pusat untuk semua daya listrik di kapal disebut...",
    question_en: "The central distribution panel for all electrical power on the ship is called the...",
    options: {
      a: { text: "Emergency Switchboard", text_en: "Emergency Switchboard" },
      b: { text: "Transformer", text_en: "Transformer" },
      c: { text: "Main Switchboard (MSB)", text_en: "Main Switchboard (MSB)" },
      d: { text: "Distribution Board", text_en: "Distribution Board" },
    },
    answer: "c",
    topic: "Electrical & Electronic Systems",
  },
  {
    id: 7,
    question: "Apa tujuan utama dari Emergency Generator?",
    question_en: "What is the main purpose of the Emergency Generator?",
    options: {
      a: { text: "Untuk menambah daya saat beban puncak", text_en: "To add power during peak load" },
      b: { text: "Untuk menyuplai daya ke peralatan vital saat terjadi blackout", text_en: "To supply power to vital equipment during a blackout" },
      c: { text: "Untuk mengisi baterai", text_en: "To charge batteries" },
      d: { text: "Untuk digunakan saat di pelabuhan", text_en: "To be used when in port" },
    },
    answer: "b",
    topic: "Electrical & Electronic Systems",
  },
  {
    id: 8,
    question: "Manakah dari berikut ini yang merupakan contoh sistem elektronik (kontrol), bukan elektrikal (daya)?",
    question_en: "Which of the following is an example of an electronic (control) system, not an electrical (power) system?",
    options: {
      a: { text: "Motor 440V untuk pompa", text_en: "A 440V motor for a pump" },
      b: { text: "Lampu navigasi", text_en: "Navigation lights" },
      c: { text: "Programmable Logic Controller (PLC)", text_en: "Programmable Logic Controller (PLC)" },
      d: { text: "Generator 6.6kV", text_en: "A 6.6kV generator" },
    },
    answer: "c",
    topic: "Electrical & Electronic Systems",
  },
  // Using Technical Publications
  {
    id: 9,
    question: "Konvensi internasional yang menetapkan standar minimum untuk keselamatan konstruksi dan peralatan kapal adalah...",
    question_en: "The international convention that sets minimum safety standards for ship construction and equipment is...",
    options: {
      a: { text: "MARPOL", text_en: "MARPOL" },
      b: { text: "STCW", text_en: "STCW" },
      c: { text: "ISM Code", text_en: "ISM Code" },
      d: { text: "SOLAS", text_en: "SOLAS" },
    },
    answer: "d",
    topic: "Using Technical Publications",
  },
  {
    id: 10,
    question: "Di dalam manual instruksi mesin, informasi tentang interval penggantian suku cadang dapat ditemukan di bagian...",
    question_en: "In an engine instruction manual, information about parts replacement intervals can be found in the...",
    options: {
      a: { text: "Maintenance Schedule", text_en: "Maintenance Schedule" },
      b: { text: "Troubleshooting Guide", text_en: "Troubleshooting Guide" },
      c: { text: "Parts List", text_en: "Parts List" },
      d: { text: "Technical Specifications", text_en: "Technical Specifications" },
    },
    answer: "a",
    topic: "Using Technical Publications",
  },
  {
    id: 11,
    question: "Kode internasional yang bertujuan untuk menyediakan kerangka kerja untuk pengoperasian kapal yang aman dan manajemen keselamatan adalah...",
    question_en: "The international code that aims to provide a framework for the safe operation of ships and for safety management is the...",
    options: {
      a: { text: "LSA Code", text_en: "LSA Code" },
      b: { text: "ISM Code", text_en: "ISM Code" },
      c: { text: "FSS Code", text_en: "FSS Code" },
      d: { text: "MARPOL", text_en: "MARPOL" },
    },
    answer: "b",
    topic: "Using Technical Publications",
  },
  {
    id: 12,
    question: "SOPEP adalah manual yang berisi prosedur untuk...",
    question_en: "The SOPEP is a manual containing procedures for...",
    options: {
      a: { text: "Menangani keadaan darurat kebakaran", text_en: "Handling fire emergencies" },
      b: { text: "Menangani tumpahan minyak", text_en: "Dealing with an oil spill" },
      c: { text: "Meninggalkan kapal (abandon ship)", text_en: "Abandoning ship" },
      d: { text: "Memasuki ruang tertutup", text_en: "Entering enclosed spaces" },
    },
    answer: "b",
    topic: "Using Technical Publications",
  },
];