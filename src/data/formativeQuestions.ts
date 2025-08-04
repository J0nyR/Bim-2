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
  // Marine Engines
  {
    id: 'me-q1',
    topic: 'marine-engines',
    question: "Manakah jenis mesin yang menyelesaikan satu siklus tenaga dalam satu putaran poros engkol, membuatnya lebih bertenaga untuk ukurannya?",
    question_en: "Which engine type completes a power cycle in one crankshaft revolution, making it more powerful for its size?",
    options: {
      A: { text: "Mesin 4-Tak (Four-Stroke)", text_en: "Four-Stroke Engine" },
      B: { text: "Mesin 2-Tak (Two-Stroke)", text_en: "Two-Stroke Engine" },
      C: { text: "Turbin Uap (Steam Turbine)", text_en: "Steam Turbine" },
    },
    answer: 'B',
    explanation: "Mesin 2-tak lebih sederhana dan menghasilkan tenaga setiap putaran, sehingga memiliki kepadatan daya yang lebih tinggi.",
    explanation_en: "A 2-stroke engine is simpler and produces power every revolution, giving it a higher power density."
  },
  {
    id: 'me-q2',
    topic: 'marine-engines',
    question: "Sistem propulsi mana yang dikenal karena operasinya yang sangat halus, minim getaran, dan sering digunakan pada kapal tanker LNG yang besar?",
    question_en: "Which propulsion system is known for its very smooth, low-vibration operation and is often used on large LNG carriers?",
    options: {
      A: { text: "Turbin Gas (Gas Turbine)", text_en: "Gas Turbine" },
      B: { text: "Mesin Diesel (Diesel Engine)", text_en: "Diesel Engine" },
      C: { text: "Turbin Uap (Steam Turbine)", text_en: "Steam Turbine" },
    },
    answer: 'C',
    explanation: "Turbin uap berputar dengan sangat halus, yang ideal untuk kapal besar yang sensitif terhadap getaran dan membutuhkan daya tinggi yang konstan.",
    explanation_en: "Steam turbines rotate very smoothly, which is ideal for large vessels sensitive to vibration and requiring constant high power."
  },
  {
    id: 'me-q3',
    topic: 'marine-engines',
    question: "Apa kelemahan utama dari turbin gas yang membuatnya kurang ideal untuk kapal dagang yang berlayar dengan kecepatan bervariasi?",
    question_en: "What is a major disadvantage of gas turbines that makes them less ideal for merchant ships sailing at variable speeds?",
    options: {
      A: { text: "Efisiensi bahan bakar yang rendah pada beban parsial", text_en: "Low fuel efficiency at partial loads" },
      B: { text: "Getaran yang sangat tinggi", text_en: "Very high vibration" },
      C: { text: "Waktu start-up yang sangat lama", text_en: "Very long start-up time" },
    },
    answer: 'A',
    explanation: "Turbin gas paling efisien pada output daya puncaknya. Efisiensinya turun drastis pada kecepatan yang lebih rendah atau beban parsial.",
    explanation_en: "Gas turbines are most efficient at their peak power output. Their efficiency drops significantly at lower speeds or partial loads."
  },
];