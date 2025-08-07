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
  // Konten akan ditambahkan seiring dengan pembuatan modul Teknika 2
];