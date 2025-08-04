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
  // Marine Engines
  {
    id: 1,
    question: "Apa keuntungan utama dari turbin gas laut dibandingkan dengan mesin diesel?",
    question_en: "What is the main advantage of a marine gas turbine compared to a diesel engine?",
    options: {
      A: { text: "Efisiensi bahan bakar yang lebih tinggi", text_en: "Higher fuel efficiency" },
      B: { text: "Rasio daya terhadap berat yang sangat tinggi", text_en: "Very high power-to-weight ratio" },
      C: { text: "Biaya perawatan yang lebih rendah", text_en: "Lower maintenance cost" },
      D: { text: "Dapat menggunakan bahan bakar berkualitas rendah", text_en: "Ability to use low-quality fuel" },
    },
    answer: "B",
    topic: "Marine Engines",
  },
  {
    id: 2,
    question: "Dalam mesin diesel 4-tak, satu siklus tenaga (power cycle) selesai dalam berapa putaran poros engkol?",
    question_en: "In a 4-stroke diesel engine, one power cycle is completed in how many crankshaft revolutions?",
    options: {
      A: { text: "Satu putaran", text_en: "One revolution" },
      B: { text: "Dua putaran", text_en: "Two revolutions" },
      C: { text: "Tiga putaran", text_en: "Three revolutions" },
      D: { text: "Empat putaran", text_en: "Four revolutions" },
    },
    answer: "B",
    topic: "Marine Engines",
  },
  {
    id: 3,
    question: "Komponen apa yang mengubah gerakan linear piston menjadi gerakan rotasi?",
    question_en: "Which component converts the linear motion of the piston into rotational motion?",
    options: {
      A: { text: "Cylinder Head", text_en: "Cylinder Head" },
      B: { text: "Piston Rod", text_en: "Piston Rod" },
      C: { text: "Crankshaft", text_en: "Crankshaft" },
      D: { text: "Camshaft", text_en: "Camshaft" },
    },
    answer: "C",
    topic: "Marine Engines",
  },
  {
    id: 4,
    question: "Kelemahan utama dari sistem propulsi turbin uap adalah...",
    question_en: "A major disadvantage of a steam turbine propulsion system is...",
    options: {
      A: { text: "Getaran yang tinggi", text_en: "High vibration" },
      B: { text: "Waktu start-up yang lama dan efisiensi rendah pada beban parsial", text_en: "Long start-up time and low efficiency at partial loads" },
      C: { text: "Tidak dapat menghasilkan daya tinggi", text_en: "Inability to produce high power" },
      D: { text: "Perawatan yang sangat sederhana", text_en: "Very simple maintenance" },
    },
    answer: "B",
    topic: "Marine Engines",
  },
  {
    id: 5,
    question: "Mesin diesel 2-tak paling umum digunakan pada kapal jenis apa?",
    question_en: "Two-stroke diesel engines are most commonly used on what type of vessel?",
    options: {
      A: { text: "Kapal pesiar cepat dan kapal perang", text_en: "Fast yachts and naval ships" },
      B: { text: "Kapal kontainer besar dan tanker minyak", text_en: "Large container ships and oil tankers" },
      C: { text: "Kapal tunda pelabuhan", text_en: "Harbor tugboats" },
      D: { text: "Feri penumpang kecil", text_en: "Small passenger ferries" },
    },
    answer: "B",
    topic: "Marine Engines",
  },
  // Marine Boiler
  {
    id: 6,
    question: "Apa perbedaan mendasar antara ketel uap pipa api (fire-tube) dan pipa air (water-tube)?",
    question_en: "What is the fundamental difference between a fire-tube and a water-tube boiler?",
    options: {
      A: { text: "Pipa api untuk tekanan tinggi, pipa air untuk tekanan rendah", text_en: "Fire-tube is for high pressure, water-tube is for low pressure" },
      B: { text: "Pada pipa api, gas panas di dalam pipa; pada pipa air, air di dalam pipa", text_en: "In a fire-tube, hot gas is in the tubes; in a water-tube, water is in the tubes" },
      C: { text: "Pipa api menggunakan bahan bakar gas, pipa air menggunakan bahan bakar cair", text_en: "Fire-tube uses gas fuel, water-tube uses liquid fuel" },
      D: { text: "Pipa api tidak memiliki steam drum", text_en: "Fire-tube boilers do not have a steam drum" },
    },
    answer: "B",
    topic: "Marine Boiler",
  },
  {
    id: 7,
    question: "Fungsi utama dari katup keselamatan (safety valve) pada boiler adalah...",
    question_en: "The main function of a safety valve on a boiler is to...",
    options: {
      A: { text: "Mengatur level air di dalam drum", text_en: "Regulate the water level in the drum" },
      B: { text: "Melepaskan tekanan uap berlebih secara otomatis", text_en: "Automatically release excess steam pressure" },
      C: { text: "Mengontrol aliran uap ke mesin", text_en: "Control the steam flow to the engine" },
      D: { text: "Membuang endapan dari dasar boiler", text_en: "Discharge sludge from the bottom of the boiler" },
    },
    answer: "B",
    topic: "Marine Boiler",
  },
  {
    id: 8,
    question: "Mengapa ketel uap pipa air (water-tube boiler) lebih disukai untuk aplikasi tekanan tinggi?",
    question_en: "Why is a water-tube boiler preferred for high-pressure applications?",
    options: {
      A: { text: "Karena lebih murah untuk dibuat", text_en: "Because it is cheaper to build" },
      B: { text: "Karena perawatannya lebih mudah", text_en: "Because its maintenance is easier" },
      C: { text: "Karena pipa berdiameter kecil dapat menahan tekanan lebih tinggi daripada shell besar", text_en: "Because small-diameter tubes can withstand higher pressure than a large shell" },
      D: { text: "Karena dapat menggunakan bahan bakar apa saja", text_en: "Because it can use any type of fuel" },
    },
    answer: "C",
    topic: "Marine Boiler",
  },
  {
    id: 9,
    question: "Prosedur 'blowdown' pada boiler bertujuan untuk...",
    question_en: "The 'blowdown' procedure on a boiler is intended to...",
    options: {
      A: { text: "Menaikkan tekanan uap dengan cepat", text_en: "Quickly raise the steam pressure" },
      B: { text: "Membuang kotoran dan endapan terlarut dari air boiler", text_en: "Remove impurities and dissolved solids from the boiler water" },
      C: { text: "Mendinginkan boiler setelah dimatikan", text_en: "Cool down the boiler after shutdown" },
      D: { text: "Menguji fungsi katup keselamatan", text_en: "Test the function of the safety valves" },
    },
    answer: "B",
    topic: "Marine Boiler",
  },
  {
    id: 10,
    question: "Apa bahaya utama dari kondisi level air yang terlalu rendah (low water level) pada boiler yang sedang beroperasi?",
    question_en: "What is the main danger of a low water level condition in an operating boiler?",
    options: {
      A: { text: "Tekanan uap akan turun", text_en: "The steam pressure will drop" },
      B: { text: "Air akan terbawa ke dalam sistem uap (carryover)", text_en: "Water will be carried over into the steam system" },
      C: { text: "Pemanasan berlebih (overheating) pada pelat atau pipa, yang dapat menyebabkan ledakan", text_en: "Overheating of plates or tubes, which can lead to an explosion" },
      D: { text: "Efisiensi bahan bakar akan menurun", text_en: "Fuel efficiency will decrease" },
    },
    answer: "C",
    topic: "Marine Boiler",
  },
  // Shafting & Propeller
  {
    id: 11,
    question: "Komponen yang mentransfer daya dorong (thrust) dari poros baling-baling ke badan kapal adalah...",
    question_en: "The component that transfers the thrust from the propeller shaft to the ship's hull is the...",
    options: {
      A: { text: "Plummer block", text_en: "Plummer block" },
      B: { text: "Stern tube", text_en: "Stern tube" },
      C: { text: "Thrust block", text_en: "Thrust block" },
      D: { text: "Intermediate shaft", text_en: "Intermediate shaft" },
    },
    answer: "C",
    topic: "Shafting & Propeller",
  },
  {
    id: 12,
    question: "Keuntungan utama dari Controllable Pitch Propeller (CPP) adalah...",
    question_en: "The main advantage of a Controllable Pitch Propeller (CPP) is...",
    options: {
      A: { text: "Lebih kuat dan lebih murah daripada FPP", text_en: "It is stronger and cheaper than an FPP" },
      B: { text: "Memungkinkan perubahan kecepatan dan arah tanpa mengubah putaran mesin", text_en: "It allows for speed and direction changes without changing engine rotation" },
      C: { text: "Tidak memerlukan tabung buritan (stern tube)", text_en: "It does not require a stern tube" },
      D: { text: "Lebih efisien pada kecepatan jelajah konstan", text_en: "It is more efficient at a constant cruising speed" },
    },
    answer: "B",
    topic: "Shafting & Propeller",
  },
  {
    id: 13,
    question: "Fungsi utama dari tabung buritan (stern tube) adalah...",
    question_en: "The main function of the stern tube is to...",
    options: {
      A: { text: "Menghasilkan daya dorong tambahan", text_en: "Generate additional thrust" },
      B: { text: "Menopang poros baling-baling dan mencegah air laut masuk", text_en: "Support the propeller shaft and prevent seawater entry" },
      C: { text: "Mendinginkan poros baling-baling", text_en: "Cool the propeller shaft" },
      D: { text: "Menghubungkan poros ke gearbox", text_en: "Connect the shaft to the gearbox" },
    },
    answer: "B",
    topic: "Shafting & Propeller",
  },
  {
    id: 14,
    question: "Getaran berlebih di area buritan kapal seringkali merupakan gejala dari...",
    question_en: "Excessive vibration in the aft area of a ship is often a symptom of...",
    options: {
      A: { text: "Bahan bakar berkualitas buruk", text_en: "Poor quality fuel" },
      B: { text: "Kelurusan poros yang buruk (poor alignment) atau baling-baling rusak", text_en: "Poor shaft alignment or a damaged propeller" },
      C: { text: "Tekanan oli pelumas yang rendah", text_en: "Low lube oil pressure" },
      D: { text: "Sistem pendingin yang tidak efisien", text_en: "An inefficient cooling system" },
    },
    answer: "B",
    topic: "Shafting & Propeller",
  },
  {
    id: 15,
    question: "Bantalan yang digunakan untuk menopang poros antara (intermediate shaft) di sepanjang terowongan poros disebut...",
    question_en: "The bearings used to support the intermediate shaft along the shaft tunnel are called...",
    options: {
      A: { text: "Thrust bearings", text_en: "Thrust bearings" },
      B: { text: "Stern tube bearings", text_en: "Stern tube bearings" },
      C: { text: "Main bearings", text_en: "Main bearings" },
      D: { text: "Plummer blocks", text_en: "Plummer blocks" },
    },
    answer: "D",
    topic: "Shafting & Propeller",
  },
  // Other Auxiliaries
  {
    id: 16,
    question: "Tujuan utama dari pemisah sentrifugal (centrifugal separator/purifier) untuk bahan bakar adalah...",
    question_en: "The main purpose of a centrifugal separator/purifier for fuel oil is to...",
    options: {
      A: { text: "Menaikkan suhu bahan bakar", text_en: "Increase the fuel's temperature" },
      B: { text: "Menurunkan viskositas bahan bakar", text_en: "Decrease the fuel's viscosity" },
      C: { text: "Memisahkan air dan lumpur (sludge) dari bahan bakar", text_en: "Separate water and sludge from the fuel" },
      D: { text: "Mengukur laju aliran bahan bakar", text_en: "Measure the fuel flow rate" },
    },
    answer: "C",
    topic: "Other Auxiliaries",
  },
  {
    id: 17,
    question: "Bagaimana Fresh Water Generator (FWG) tipe distilasi vakum menghasilkan air tawar?",
    question_en: "How does a vacuum distillation type Fresh Water Generator (FWG) produce fresh water?",
    options: {
      A: { text: "Dengan menyaring garam menggunakan filter membran", text_en: "By filtering salt using membrane filters" },
      B: { text: "Dengan merebus air laut pada tekanan atmosfer", text_en: "By boiling sea water at atmospheric pressure" },
      C: { text: "Dengan merebus air laut pada suhu rendah dalam kondisi vakum", text_en: "By boiling sea water at a low temperature under vacuum" },
      D: { text: "Dengan menambahkan bahan kimia untuk memisahkan garam", text_en: "By adding chemicals to separate the salt" },
    },
    answer: "C",
    topic: "Other Auxiliaries",
  },
  {
    id: 18,
    question: "Manakah dari berikut ini yang BUKAN merupakan syarat untuk sinkronisasi generator?",
    question_en: "Which of the following is NOT a condition for synchronizing a generator?",
    options: {
      A: { text: "Tegangan Sama (Same Voltage)", text_en: "Same Voltage" },
      B: { text: "Frekuensi Sama (Same Frequency)", text_en: "Same Frequency" },
      C: { text: "Beban Sama (Same Load)", text_en: "Same Load" },
      D: { text: "Sudut Fasa Sama (Same Phase Angle)", text_en: "Same Phase Angle" },
    },
    answer: "C",
    topic: "Other Auxiliaries",
  },
  {
    id: 19,
    question: "Pompa jenis apa yang paling cocok untuk memindahkan cairan kental (viscous) seperti oli pelumas pada tekanan tinggi?",
    question_en: "Which type of pump is most suitable for moving viscous fluids like lube oil at high pressure?",
    options: {
      A: { text: "Pompa Sentrifugal (Centrifugal Pump)", text_en: "Centrifugal Pump" },
      B: { text: "Pompa Roda Gigi (Gear Pump)", text_en: "Gear Pump" },
      C: { text: "Pompa Ejektor (Ejector Pump)", text_en: "Ejector Pump" },
      D: { text: "Pompa Propeller (Propeller Pump)", text_en: "Propeller Pump" },
    },
    answer: "B",
    topic: "Other Auxiliaries",
  },
  {
    id: 20,
    question: "Dalam siklus refrigerasi, komponen apa yang menyerap panas dari ruangan yang didinginkan?",
    question_en: "In a refrigeration cycle, which component absorbs heat from the space being cooled?",
    options: {
      A: { text: "Kompresor (Compressor)", text_en: "Compressor" },
      B: { text: "Kondensor (Condenser)", text_en: "Condenser" },
      C: { text: "Katup Ekspansi (Expansion Valve)", text_en: "Expansion Valve" },
      D: { text: "Evaporator", text_en: "Evaporator" },
    },
    answer: "D",
    topic: "Other Auxiliaries",
  },
];