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
  // Marine Engines (10 questions)
  {
    id: 'me-q1',
    topic: 'marine-engines',
    question: "Manakah jenis mesin yang menyelesaikan satu siklus tenaga dalam satu putaran poros engkol?",
    question_en: "Which engine type completes a power cycle in one crankshaft revolution?",
    options: {
      A: { text: "Mesin 4-Tak (Four-Stroke)", text_en: "Four-Stroke Engine" },
      B: { text: "Mesin 2-Tak (Two-Stroke)", text_en: "Two-Stroke Engine" },
      C: { text: "Turbin Uap (Steam Turbine)", text_en: "Steam Turbine" },
    },
    answer: 'B',
    explanation: "Mesin 2-tak menghasilkan tenaga setiap putaran, memberikannya kepadatan daya yang lebih tinggi dibandingkan mesin 4-tak.",
    explanation_en: "A 2-stroke engine produces power every revolution, giving it a higher power density compared to a 4-stroke engine."
  },
  {
    id: 'me-q2',
    topic: 'marine-engines',
    question: "Sistem propulsi mana yang dikenal karena operasinya yang sangat halus dan minim getaran?",
    question_en: "Which propulsion system is known for its very smooth and low-vibration operation?",
    options: {
      A: { text: "Turbin Gas (Gas Turbine)", text_en: "Gas Turbine" },
      B: { text: "Mesin Diesel (Diesel Engine)", text_en: "Diesel Engine" },
      C: { text: "Turbin Uap (Steam Turbine)", text_en: "Steam Turbine" },
    },
    answer: 'C',
    explanation: "Turbin uap berputar dengan sangat halus, yang ideal untuk kapal besar yang sensitif terhadap getaran.",
    explanation_en: "Steam turbines rotate very smoothly, which is ideal for large vessels sensitive to vibration."
  },
  {
    id: 'me-q3',
    topic: 'marine-engines',
    question: "Apa kelemahan utama dari turbin gas pada kapal dagang?",
    question_en: "What is a major disadvantage of gas turbines on merchant ships?",
    options: {
      A: { text: "Efisiensi bahan bakar yang rendah pada beban parsial", text_en: "Low fuel efficiency at partial loads" },
      B: { text: "Getaran yang sangat tinggi", text_en: "Very high vibration" },
      C: { text: "Waktu start-up yang sangat lama", text_en: "Very long start-up time" },
    },
    answer: 'A',
    explanation: "Efisiensi turbin gas turun drastis pada kecepatan yang lebih rendah atau beban parsial, tidak seperti mesin diesel.",
    explanation_en: "The efficiency of gas turbines drops significantly at lower speeds or partial loads, unlike diesel engines."
  },
  {
    id: 'me-q4',
    topic: 'marine-engines',
    question: "Apa fungsi utama dari 'turbocharger' pada mesin diesel laut?",
    question_en: "What is the primary function of a 'turbocharger' on a marine diesel engine?",
    options: {
      A: { text: "Mendinginkan mesin", text_en: "To cool the engine" },
      B: { text: "Meningkatkan output daya dengan memasok lebih banyak udara ke silinder", text_en: "To increase power output by supplying more air to the cylinders" },
      C: { text: "Mengurangi kebisingan mesin", text_en: "To reduce engine noise" },
    },
    answer: 'B',
    explanation: "Turbocharger menggunakan gas buang untuk memutar turbin yang mengompres udara masuk, memungkinkan lebih banyak bahan bakar dibakar dan meningkatkan daya.",
    explanation_en: "A turbocharger uses exhaust gas to spin a turbine that compresses intake air, allowing more fuel to be burned and increasing power."
  },
  {
    id: 'me-q5',
    topic: 'marine-engines',
    question: "Urutan langkah yang benar untuk mesin 4-tak adalah...",
    question_en: "The correct sequence of strokes for a 4-stroke engine is...",
    options: {
      A: { text: "Power, Compression, Intake, Exhaust", text_en: "Power, Compression, Intake, Exhaust" },
      B: { text: "Intake, Power, Compression, Exhaust", text_en: "Intake, Power, Compression, Exhaust" },
      C: { text: "Intake, Compression, Power, Exhaust", text_en: "Intake, Compression, Power, Exhaust" },
    },
    answer: 'C',
    explanation: "Siklus 4-tak terdiri dari langkah isap, kompresi, tenaga, dan buang.",
    explanation_en: "The 4-stroke cycle consists of intake, compression, power, and exhaust strokes."
  },
  {
    id: 'me-q6',
    topic: 'marine-engines',
    question: "Komponen apa yang bertanggung jawab untuk menyemprotkan bahan bakar ke ruang bakar?",
    question_en: "Which component is responsible for spraying fuel into the combustion chamber?",
    options: {
      A: { text: "Fuel Pump", text_en: "Fuel Pump" },
      B: { text: "Fuel Injector", text_en: "Fuel Injector" },
      C: { text: "Carburetor", text_en: "Carburetor" },
    },
    answer: 'B',
    explanation: "Fuel injector mengatomisasi bahan bakar di bawah tekanan tinggi untuk pembakaran yang efisien.",
    explanation_en: "The fuel injector atomizes fuel under high pressure for efficient combustion."
  },
  {
    id: 'me-q7',
    topic: 'marine-engines',
    question: "Jenis mesin apa yang paling umum untuk penggerak utama kapal kargo besar?",
    question_en: "What is the most common type of engine for main propulsion on large cargo ships?",
    options: {
      A: { text: "Mesin diesel 2-tak putaran lambat", text_en: "Slow-speed 2-stroke diesel engine" },
      B: { text: "Mesin diesel 4-tak putaran tinggi", text_en: "High-speed 4-stroke diesel engine" },
      C: { text: "Turbin Gas", text_en: "Gas Turbine" },
    },
    answer: 'A',
    explanation: "Mesin 2-tak putaran lambat sangat efisien dan dapat langsung menggerakkan baling-baling besar tanpa gearbox.",
    explanation_en: "Slow-speed 2-stroke engines are very efficient and can directly drive large propellers without a gearbox."
  },
  {
    id: 'me-q8',
    topic: 'marine-engines',
    question: "Apa fungsi dari 'camshaft'?",
    question_en: "What is the function of the 'camshaft'?",
    options: {
      A: { text: "Mengubah gerak rotasi menjadi linear", text_en: "To convert rotational motion to linear" },
      B: { text: "Membuka dan menutup katup isap dan buang pada waktu yang tepat", text_en: "To open and close the intake and exhaust valves at the correct time" },
      C: { text: "Memompa oli pelumas ke seluruh mesin", text_en: "To pump lubricating oil throughout the engine" },
    },
    answer: 'B',
    explanation: "Tonjolan (cams) pada camshaft menekan mekanisme katup sesuai dengan timing mesin.",
    explanation_en: "The lobes (cams) on the camshaft actuate the valve mechanism according to the engine's timing."
  },
  {
    id: 'me-q9',
    topic: 'marine-engines',
    question: "Mengapa turbin gas memerlukan udara dan bahan bakar yang sangat bersih?",
    question_en: "Why do gas turbines require very clean air and fuel?",
    options: {
      A: { text: "Karena bilah turbin presisi berkecepatan tinggi rentan terhadap kerusakan", text_en: "Because their high-speed, precision turbine blades are susceptible to damage" },
      B: { text: "Untuk mengurangi emisi", text_en: "To reduce emissions" },
      C: { text: "Agar tidak terlalu berisik", text_en: "To keep them from being too noisy" },
    },
    answer: 'A',
    explanation: "Kontaminan sekecil apa pun dapat menyebabkan kerusakan serius pada bilah turbin yang berputar sangat cepat.",
    explanation_en: "Even small contaminants can cause serious damage to the fast-spinning turbine blades."
  },
  {
    id: 'me-q10',
    topic: 'marine-engines',
    question: "Apa tujuan dari 'condenser' dalam siklus turbin uap?",
    question_en: "What is the purpose of a 'condenser' in a steam turbine cycle?",
    options: {
      A: { text: "Menaikkan tekanan uap", text_en: "To increase steam pressure" },
      B: { text: "Memanaskan air umpan", text_en: "To heat the feed water" },
      C: { text: "Mengubah uap sisa menjadi air untuk digunakan kembali", text_en: "To turn exhaust steam back into water for reuse" },
    },
    answer: 'C',
    explanation: "Kondensor menciptakan vakum di sisi keluar turbin, meningkatkan efisiensi, dan menghemat air dengan mendaur ulangnya.",
    explanation_en: "The condenser creates a vacuum at the turbine outlet, increasing efficiency, and conserves water by recycling it."
  },

  // Marine Boiler (10 questions)
  {
    id: 'mb-q1',
    topic: 'marine-boiler',
    question: "Fungsi utama dari 'gauge glass' pada boiler adalah...",
    question_en: "The primary function of a 'gauge glass' on a boiler is...",
    options: {
      A: { text: "Untuk menunjukkan tekanan uap", text_en: "To show the steam pressure" },
      B: { text: "Untuk menunjukkan level air di dalam boiler", text_en: "To visually indicate the water level inside the boiler" },
      C: { text: "Untuk memeriksa suhu air", text_en: "To check the water temperature" },
    },
    answer: 'B',
    explanation: "Gauge glass adalah indikator visual yang paling penting untuk memastikan operasi boiler yang aman.",
    explanation_en: "The gauge glass is the most critical visual indicator for ensuring safe boiler operation."
  },
  {
    id: 'mb-q2',
    topic: 'marine-boiler',
    question: "Pada boiler 'fire-tube', apa yang mengalir di dalam pipa?",
    question_en: "In a 'fire-tube' boiler, what flows through the tubes?",
    options: {
      A: { text: "Air", text_en: "Water" },
      B: { text: "Uap", text_en: "Steam" },
      C: { text: "Gas panas dari pembakaran", text_en: "Hot gases from combustion" },
    },
    answer: 'C',
    explanation: "Pada boiler fire-tube, api/gas panas ada di dalam pipa, dan air ada di luar mengelilingi pipa tersebut.",
    explanation_en: "In a fire-tube boiler, the fire/hot gas is inside the tubes, and the water is outside surrounding them."
  },
  {
    id: 'mb-q3',
    topic: 'marine-boiler',
    question: "Jenis boiler mana yang mampu menghasilkan uap bertekanan sangat tinggi?",
    question_en: "Which type of boiler is capable of producing very high-pressure steam?",
    options: {
      A: { text: "Boiler Pipa Air (Water-tube boiler)", text_en: "Water-tube boiler" },
      B: { text: "Boiler Pipa Api (Fire-tube boiler)", text_en: "Fire-tube boiler" },
      C: { text: "Boiler Listrik (Electric boiler)", text_en: "Electric boiler" },
    },
    answer: 'A',
    explanation: "Desain boiler pipa air, dengan banyak pipa kecil, secara inheren lebih kuat dan cocok untuk tekanan tinggi.",
    explanation_en: "The design of a water-tube boiler, with many small tubes, is inherently stronger and suitable for high pressures."
  },
  {
    id: 'mb-q4',
    topic: 'marine-boiler',
    question: "Apa tujuan dari 'safety valve'?",
    question_en: "What is the purpose of a 'safety valve'?",
    options: {
      A: { text: "Melepaskan tekanan berlebih secara otomatis untuk mencegah ledakan", text_en: "To automatically release excess pressure to prevent an explosion" },
      B: { text: "Mengatur aliran uap", text_en: "To regulate steam flow" },
      C: { text: "Membuang air dari boiler", text_en: "To drain water from the boiler" },
    },
    answer: 'A',
    explanation: "Katup keselamatan adalah perangkat keamanan terpenting pada bejana bertekanan seperti boiler.",
    explanation_en: "The safety valve is the most important safety device on a pressure vessel like a boiler."
  },
  {
    id: 'mb-q5',
    topic: 'marine-boiler',
    question: "Prosedur 'blowdown' dilakukan untuk...",
    question_en: "The 'blowdown' procedure is performed to...",
    options: {
      A: { text: "Menaikkan tekanan uap", text_en: "Raise the steam pressure" },
      B: { text: "Membuang lumpur dan padatan terlarut dari air boiler", text_en: "Remove sludge and dissolved solids from the boiler water" },
      C: { text: "Mendinginkan boiler", text_en: "Cool down the boiler" },
    },
    answer: 'B',
    explanation: "Blowdown mengontrol konsentrasi kotoran di dalam air boiler untuk mencegah korosi dan pembentukan kerak.",
    explanation_en: "Blowdown controls the concentration of impurities in the boiler water to prevent corrosion and scale formation."
  },
  {
    id: 'mb-q6',
    topic: 'marine-boiler',
    question: "Apa bahaya dari kondisi 'level air tinggi' di boiler?",
    question_en: "What is the danger of a 'high water level' condition in a boiler?",
    options: {
      A: { text: "Boiler akan meledak", text_en: "The boiler will explode" },
      B: { text: "Air dapat terbawa uap (carryover) dan merusak mesin", text_en: "Water can be carried over with the steam and damage machinery" },
      C: { text: "Bahan bakar akan terbuang", text_en: "Fuel will be wasted" },
    },
    answer: 'B',
    explanation: "Tetesan air yang terbawa uap dapat menyebabkan kerusakan serius pada bilah turbin atau komponen mesin lainnya.",
    explanation_en: "Water droplets carried over with the steam can cause serious damage to turbine blades or other engine components."
  },
  {
    id: 'mb-q7',
    topic: 'marine-boiler',
    question: "Di mana pembakaran bahan bakar terjadi di dalam boiler?",
    question_en: "Where does the fuel combustion take place inside a boiler?",
    options: {
      A: { text: "Steam Drum", text_en: "Steam Drum" },
      B: { text: "Furnace", text_en: "Furnace" },
      C: { text: "Condenser", text_en: "Condenser" },
    },
    answer: 'B',
    explanation: "Tungku (furnace) adalah ruang yang dirancang untuk pembakaran bahan bakar yang aman dan efisien.",
    explanation_en: "The furnace is the chamber designed for safe and efficient fuel combustion."
  },
  {
    id: 'mb-q8',
    topic: 'marine-boiler',
    question: "Apa itu 'steam drum'?",
    question_en: "What is a 'steam drum'?",
    options: {
      A: { text: "Tempat menyimpan uap cadangan", text_en: "A place to store reserve steam" },
      B: { text: "Bejana atas pada boiler pipa air tempat uap dipisahkan dari air", text_en: "The upper vessel in a water-tube boiler where steam separates from water" },
      C: { text: "Pipa utama yang menyalurkan uap", text_en: "The main pipe that delivers steam" },
    },
    answer: 'B',
    explanation: "Steam drum memastikan bahwa hanya uap kering yang dikirim dari boiler.",
    explanation_en: "The steam drum ensures that only dry steam is delivered from the boiler."
  },
  {
    id: 'mb-q9',
    topic: 'marine-boiler',
    question: "Mengapa kualitas air umpan yang baik sangat penting untuk boiler pipa air?",
    question_en: "Why is good quality feedwater crucial for water-tube boilers?",
    options: {
      A: { text: "Untuk mencegah kerak di dalam pipa kecil yang dapat menyebabkan overheating", text_en: "To prevent scale in the small tubes which can cause overheating" },
      B: { text: "Agar uap terlihat lebih bersih", text_en: "To make the steam look cleaner" },
      C: { text: "Untuk mengurangi berat boiler", text_en: "To reduce the boiler's weight" },
    },
    answer: 'A',
    explanation: "Kerak bertindak sebagai isolator, mencegah pendinginan yang tepat pada logam pipa, yang dapat menyebabkan kegagalan.",
    explanation_en: "Scale acts as an insulator, preventing proper cooling of the tube metal, which can lead to failure."
  },
  {
    id: 'mb-q10',
    topic: 'marine-boiler',
    question: "Apa fungsi dari 'main steam stop valve'?",
    question_en: "What is the function of the 'main steam stop valve'?",
    options: {
      A: { text: "Untuk melepaskan tekanan berlebih", text_en: "To release excess pressure" },
      B: { text: "Untuk mengisolasi boiler dari seluruh sistem uap kapal", text_en: "To isolate the boiler from the ship's entire steam system" },
      C: { text: "Untuk mengontrol level air", text_en: "To control the water level" },
    },
    answer: 'B',
    explanation: "Katup ini memungkinkan boiler dimatikan untuk pemeliharaan tanpa mempengaruhi sistem uap lainnya.",
    explanation_en: "This valve allows the boiler to be shut down for maintenance without affecting other steam systems."
  },

  // Shafting & Propeller (10 questions)
  {
    id: 'sp-q1',
    topic: 'shafting-installations',
    question: "Komponen apa yang mentransfer daya dorong dari baling-baling ke badan kapal?",
    question_en: "What component transfers the thrust from the propeller to the ship's hull?",
    options: {
      A: { text: "Plummer Block", text_en: "Plummer Block" },
      B: { text: "Thrust Block", text_en: "Thrust Block" },
      C: { text: "Gearbox", text_en: "Gearbox" },
    },
    answer: 'B',
    explanation: "Thrust block menyerap gaya dorong aksial dari poros dan mentransfernya ke struktur kapal.",
    explanation_en: "The thrust block absorbs the axial thrust force from the shaft and transfers it to the ship's structure."
  },
  {
    id: 'sp-q2',
    topic: 'shafting-installations',
    question: "Keuntungan utama dari 'Controllable Pitch Propeller' (CPP) adalah...",
    question_en: "The main advantage of a 'Controllable Pitch Propeller' (CPP) is...",
    options: {
      A: { text: "Kemampuan mengubah kecepatan/arah kapal tanpa mengubah putaran mesin", text_en: "The ability to change ship speed/direction without changing engine RPM" },
      B: { text: "Lebih murah dan lebih kuat dari baling-baling biasa", text_en: "It is cheaper and stronger than a regular propeller" },
      C: { text: "Tidak memerlukan pelumasan", text_en: "It requires no lubrication" },
    },
    answer: 'A',
    explanation: "CPP memberikan kemampuan manuver yang superior karena pitch bilah dapat diubah secara hidrolik.",
    explanation_en: "A CPP provides superior maneuverability because the blade pitch can be changed hydraulically."
  },
  {
    id: 'sp-q3',
    topic: 'shafting-installations',
    question: "Apa tujuan dari 'stern tube'?",
    question_en: "What is the purpose of the 'stern tube'?",
    options: {
      A: { text: "Untuk mendinginkan poros", text_en: "To cool the shaft" },
      B: { text: "Untuk menyediakan jalur kedap air bagi poros untuk melewati lambung kapal", text_en: "To provide a watertight passage for the shaft through the hull" },
      C: { text: "Untuk meningkatkan daya dorong", text_en: "To increase thrust" },
    },
    answer: 'B',
    explanation: "Stern tube berisi bantalan dan perapat untuk menopang poros dan mencegah kebocoran.",
    explanation_en: "The stern tube contains bearings and seals to support the shaft and prevent leakage."
  },
  {
    id: 'sp-q4',
    topic: 'shafting-installations',
    question: "Apa fungsi dari 'plummer block'?",
    question_en: "What is the function of a 'plummer block'?",
    options: {
      A: { text: "Menyerap daya dorong", text_en: "To absorb thrust" },
      B: { text: "Menopang berat poros antara (intermediate shaft)", text_en: "To support the weight of the intermediate shaft" },
      C: { text: "Menghubungkan poros ke mesin", text_en: "To connect the shaft to the engine" },
    },
    answer: 'B',
    explanation: "Plummer block adalah bantalan yang menjaga agar poros panjang tetap lurus dan ditopang di sepanjang terowongan poros.",
    explanation_en: "Plummer blocks are bearings that keep the long shafting straight and supported along the shaft tunnel."
  },
  {
    id: 'sp-q5',
    topic: 'shafting-installations',
    question: "Kelurusan poros (shaft alignment) yang buruk dapat menyebabkan...",
    question_en: "Poor shaft alignment can cause...",
    options: {
      A: { text: "Peningkatan efisiensi bahan bakar", text_en: "Increased fuel efficiency" },
      B: { text: "Getaran berlebih dan keausan bantalan prematur", text_en: "Excessive vibration and premature bearing wear" },
      C: { text: "Operasi yang lebih senyap", text_en: "Quieter operation" },
    },
    answer: 'B',
    explanation: "Jika poros tidak lurus, ia akan 'melentur' saat berputar, menyebabkan getaran dan memberikan beban tidak merata pada bantalan.",
    explanation_en: "If the shaft is not straight, it will 'whip' as it rotates, causing vibration and putting uneven load on the bearings."
  },
  {
    id: 'sp-q6',
    topic: 'shafting-installations',
    question: "Untuk memundurkan kapal dengan 'Fixed Pitch Propeller' (FPP), apa yang harus terjadi?",
    question_en: "To reverse a ship with a 'Fixed Pitch Propeller' (FPP), what must happen?",
    options: {
      A: { text: "Arah putaran mesin harus dibalik", text_en: "The engine's direction of rotation must be reversed" },
      B: { text: "Pitch baling-baling diubah", text_en: "The propeller pitch is changed" },
      C: { text: "Gearbox khusus digunakan", text_en: "A special gearbox is used" },
    },
    answer: 'A',
    explanation: "Dengan FPP, satu-satunya cara untuk menghasilkan daya dorong mundur adalah dengan memutar seluruh mesin dan poros ke arah yang berlawanan.",
    explanation_en: "With an FPP, the only way to generate reverse thrust is to spin the entire engine and shafting in the opposite direction."
  },
  {
    id: 'sp-q7',
    topic: 'shafting-installations',
    question: "Poros terakhir dalam rangkaian yang terhubung dengan baling-baling disebut...",
    question_en: "The final shaft in the line that connects to the propeller is called the...",
    options: {
      A: { text: "Thrust Shaft", text_en: "Thrust Shaft" },
      B: { text: "Intermediate Shaft", text_en: "Intermediate Shaft" },
      C: { text: "Propeller Shaft (or Tail Shaft)", text_en: "Propeller Shaft (or Tail Shaft)" },
    },
    answer: 'C',
    explanation: "Poros baling-baling (propeller/tail shaft) adalah bagian yang melewati stern tube dan keluar dari kapal.",
    explanation_en: "The propeller (or tail) shaft is the part that passes through the stern tube and exits the ship."
  },
  {
    id: 'sp-q8',
    topic: 'shafting-installations',
    question: "Apa fungsi dari perapat (seals) di dalam stern tube?",
    question_en: "What is the function of the seals inside the stern tube?",
    options: {
      A: { text: "Mencegah air laut masuk dan oli keluar", text_en: "To prevent seawater from getting in and oil from getting out" },
      B: { text: "Mengurangi gesekan", text_en: "To reduce friction" },
      C: { text: "Menopang berat baling-baling", text_en: "To support the propeller's weight" },
    },
    answer: 'A',
    explanation: "Perapat menciptakan penghalang kedap air antara laut dan bagian dalam kapal.",
    explanation_en: "The seals create a watertight barrier between the sea and the ship's interior."
  },
  {
    id: 'sp-q9',
    topic: 'shafting-installations',
    question: "Istilah 'pitch' pada baling-baling mengacu pada...",
    question_en: "The term 'pitch' on a propeller refers to...",
    options: {
      A: { text: "Jumlah bilah", text_en: "The number of blades" },
      B: { text: "Diameter baling-baling", text_en: "The diameter of the propeller" },
      C: { text: "Jarak teoretis yang akan ditempuh baling-baling dalam satu putaran", text_en: "The theoretical distance the propeller would advance in one revolution" },
    },
    answer: 'C',
    explanation: "Pitch adalah seperti 'ulir' pada sekrup; pitch yang lebih tinggi berarti pergerakan maju yang lebih besar per putaran.",
    explanation_en: "Pitch is like the 'thread' on a screw; a higher pitch means more forward movement per revolution."
  },
  {
    id: 'sp-q10',
    topic: 'shafting-installations',
    question: "Inspeksi apa yang sering dilakukan oleh penyelam pada baling-baling saat kapal berada di air?",
    question_en: "What inspection is often done by divers on a propeller while the ship is in the water?",
    options: {
      A: { text: "Pemeriksaan keretakan dan pembersihan dari pertumbuhan laut", text_en: "Checking for cracks and cleaning of marine growth" },
      B: { text: "Mengukur kelurusan poros", text_en: "Measuring the shaft alignment" },
      C: { text: "Mengganti bantalan", text_en: "Replacing the bearings" },
    },
    answer: 'A',
    explanation: "Penyelam dapat membersihkan teritip (barnacles) dan memeriksa kerusakan fisik pada bilah baling-baling, yang dapat mempengaruhi efisiensi.",
    explanation_en: "Divers can clean barnacles and check for physical damage to the propeller blades, which can affect efficiency."
  },

  // Other Auxiliaries (10 questions)
  {
    id: 'oa-q1',
    topic: 'other-auxiliaries',
    question: "Jenis pompa apa yang paling cocok untuk memindahkan volume air yang besar pada tekanan rendah?",
    question_en: "Which pump type is best suited for moving large volumes of water at low pressure?",
    options: {
      A: { text: "Pompa Roda Gigi (Gear Pump)", text_en: "Gear Pump" },
      B: { text: "Pompa Sentrifugal (Centrifugal Pump)", text_en: "Centrifugal Pump" },
      C: { text: "Pompa Piston (Piston Pump)", text_en: "Piston Pump" },
    },
    answer: 'B',
    explanation: "Pompa sentrifugal ideal untuk aplikasi aliran tinggi, tekanan rendah seperti pompa pendingin air laut dan pompa ballast.",
    explanation_en: "Centrifugal pumps are ideal for high-flow, low-pressure applications like sea water cooling and ballast pumps."
  },
  {
    id: 'oa-q2',
    topic: 'other-auxiliaries',
    question: "Apa tujuan utama dari kompresor udara di kapal?",
    question_en: "What is the primary purpose of an air compressor on a ship?",
    options: {
      A: { text: "Menyediakan udara bertekanan tinggi untuk menyalakan mesin utama", text_en: "To provide high-pressure air for starting the main engine" },
      B: { text: "Untuk sistem ventilasi", text_en: "For the ventilation system" },
      C: { text: "Untuk sistem pemadam kebakaran", text_en: "For the fire-fighting system" },
    },
    answer: 'A',
    explanation: "Udara bertekanan tinggi (sekitar 30 bar) diperlukan untuk memutar mesin diesel besar dari keadaan diam.",
    explanation_en: "High-pressure air (around 30 bar) is required to turn over large diesel engines from a standstill."
  },
  {
    id: 'oa-q3',
    topic: 'other-auxiliaries',
    question: "Purifier digunakan untuk menghilangkan apa dari bahan bakar dan oli pelumas?",
    question_en: "A purifier is used to remove what from fuel and lube oil?",
    options: {
      A: { text: "Udara dan gas", text_en: "Air and gases" },
      B: { text: "Panas", text_en: "Heat" },
      C: { text: "Air dan kotoran padat (lumpur)", text_en: "Water and solid impurities (sludge)" },
    },
    answer: 'C',
    explanation: "Pemisah sentrifugal (purifier) sangat penting untuk memastikan oli dan bahan bakar bersih untuk melindungi mesin.",
    explanation_en: "Centrifugal separators (purifiers) are essential for ensuring clean oil and fuel to protect machinery."
  },
  {
    id: 'oa-q4',
    topic: 'other-auxiliaries',
    question: "Bagaimana cara kerja 'plate heat exchanger'?",
    question_en: "How does a 'plate heat exchanger' work?",
    options: {
      A: { text: "Dengan mencampurkan dua cairan secara langsung", text_en: "By mixing two fluids directly" },
      B: { text: "Dengan mentransfer panas melalui serangkaian pelat logam tipis", text_en: "By transferring heat through a series of thin metal plates" },
      C: { text: "Dengan menggunakan pembakaran untuk memanaskan cairan", text_en: "By using combustion to heat a fluid" },
    },
    answer: 'B',
    explanation: "Fluida panas dan dingin mengalir di sisi berlawanan dari pelat, memungkinkan perpindahan panas yang sangat efisien.",
    explanation_en: "The hot and cold fluids flow on opposite sides of the plates, allowing for very efficient heat transfer."
  },
  {
    id: 'oa-q5',
    topic: 'other-auxiliaries',
    question: "Fresh Water Generator menggunakan panas sisa dan prinsip apa untuk membuat air tawar?",
    question_en: "A Fresh Water Generator uses waste heat and what principle to make fresh water?",
    options: {
      A: { text: "Reverse Osmosis", text_en: "Reverse Osmosis" },
      B: { text: "Distilasi Vakum Suhu Rendah", text_en: "Low-Temperature Vacuum Distillation" },
      C: { text: "Filtrasi Karbon", text_en: "Carbon Filtration" },
    },
    answer: 'B',
    explanation: "Dengan menciptakan vakum, air laut dapat direbus pada suhu rendah (misalnya 70°C) menggunakan panas dari air pendingin mesin.",
    explanation_en: "By creating a vacuum, seawater can be boiled at a low temperature (e.g., 70°C) using heat from the engine's cooling water."
  },
  {
    id: 'oa-q6',
    topic: 'other-auxiliaries',
    question: "Dalam sistem pendingin, komponen apa yang memampatkan gas refrigeran?",
    question_en: "In a refrigeration system, which component compresses the refrigerant gas?",
    options: {
      A: { text: "Condenser", text_en: "Condenser" },
      B: { text: "Evaporator", text_en: "Evaporator" },
      C: { text: "Compressor", text_en: "Compressor" },
    },
    answer: 'C',
    explanation: "Kompresor adalah 'jantung' dari sistem, yang menaikkan tekanan dan suhu refrigeran sehingga dapat melepaskan panas di kondensor.",
    explanation_en: "The compressor is the 'heart' of the system, raising the pressure and temperature of the refrigerant so it can release heat in the condenser."
  },
  {
    id: 'oa-q7',
    topic: 'other-auxiliaries',
    question: "Apa perbedaan antara pengaturan 'purifier' dan 'clarifier'?",
    question_en: "What is the difference between a 'purifier' and 'clarifier' setup?",
    options: {
      A: { text: "Purifier untuk oli, clarifier untuk air", text_en: "A purifier is for oil, a clarifier is for water" },
      B: { text: "Purifier memisahkan dua cairan, clarifier memisahkan padatan dari satu cairan", text_en: "A purifier separates two liquids, a clarifier separates solids from one liquid" },
      C: { text: "Tidak ada perbedaan, istilahnya bisa saling menggantikan", text_en: "There is no difference, the terms are interchangeable" },
    },
    answer: 'B',
    explanation: "Pengaturan purifier memiliki dua saluran keluar cairan (untuk oli dan air), sedangkan clarifier hanya memiliki satu.",
    explanation_en: "A purifier setup has two liquid outlets (for oil and water), while a clarifier only has one."
  },
  {
    id: 'oa-q8',
    topic: 'other-auxiliaries',
    question: "Apa fungsi dari 'gravity disc' dalam purifier?",
    question_en: "What is the function of a 'gravity disc' in a purifier?",
    options: {
      A: { text: "Untuk mengatur kecepatan putaran bowl", text_en: "To regulate the rotational speed of the bowl" },
      B: { text: "Untuk menentukan antarmuka antara oli dan air", text_en: "To establish the interface between the oil and water" },
      C: { text: "Untuk membuang lumpur", text_en: "To discharge the sludge" },
    },
    answer: 'B',
    explanation: "Ukuran gravity disc yang benar sangat penting untuk memastikan pemisahan yang efisien tanpa kehilangan oli.",
    explanation_en: "The correct size of gravity disc is critical to ensure efficient separation without losing oil."
  },
  {
    id: 'oa-q9',
    topic: 'other-auxiliaries',
    question: "Sebelum menghubungkan generator secara paralel, apa saja yang harus cocok?",
    question_en: "Before connecting a generator in parallel, which parameters must match?",
    options: {
      A: { text: "Tegangan, Frekuensi, dan Sudut Fasa", text_en: "Voltage, Frequency, and Phase Angle" },
      B: { text: "Tegangan, Arus, dan Daya", text_en: "Voltage, Current, and Power" },
      C: { text: "Hanya Tegangan dan Frekuensi", text_en: "Only Voltage and Frequency" },
    },
    answer: 'A',
    explanation: "Mencocokkan ketiga parameter ini (ditambah urutan fasa) sangat penting untuk mencegah kerusakan parah pada generator dan sistem kelistrikan.",
    explanation_en: "Matching these three parameters (plus phase sequence) is crucial to prevent severe damage to the generator and electrical system."
  },
  {
    id: 'oa-q10',
    topic: 'other-auxiliaries',
    question: "Di dalam sistem AC, komponen apa yang menyerap panas dari udara ruangan?",
    question_en: "In an AC system, which component absorbs heat from the room's air?",
    options: {
      A: { text: "Compressor", text_en: "Compressor" },
      B: { text: "Condenser", text_en: "Condenser" },
      C: { text: "Evaporator", text_en: "Evaporator" },
    },
    answer: 'C',
    explanation: "Evaporator adalah penukar panas di dalam ruangan yang didinginkan. Refrigeran cair mendidih di dalamnya, menyerap panas dari udara yang melewatinya.",
    explanation_en: "The evaporator is the heat exchanger inside the cooled space. Liquid refrigerant boils inside it, absorbing heat from the air passing over it."
  }
];