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
];