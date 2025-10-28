/**
 * POST /api/quiz
 */

// ----------------------------------------------------Request
export interface CreateQuizRequestDto {
  question: string;
  answer: string;
  hint: string | null; 
  reward: string | null;
  publishDate: string | null;
}

// ----------------------------------------------------Response
export interface CreateQuizResponseData {
  quizId: string;  // BigInt
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  publishDate: string;
  isEditable: boolean;
}