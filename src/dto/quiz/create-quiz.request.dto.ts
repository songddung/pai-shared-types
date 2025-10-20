export interface CreateQuizRequestDto {
  question: string;
  answer: string;
  hint?: string | null;
  reward?: string | null;
  publishDate: string | null;
}