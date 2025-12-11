export interface Option {
  id: number;
  option_text: string;
  // Backend'den gelen is_correct alanını almayacağız,
  // çünkü cevap kontrolü backend'de yapılmalı.
}

export interface Question {
  id: number;
  question_text: string;
  image_path?: string | null;
  hint?: string | null;
  options: Option[];
  correctOptionId: number;
}

export interface QuizQuestionsResponse {
  quizId: number;
  questions: Question[];
}
