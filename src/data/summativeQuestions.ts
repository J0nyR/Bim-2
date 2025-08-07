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
    // Konten akan ditambahkan seiring dengan pembuatan modul Teknika 2
];