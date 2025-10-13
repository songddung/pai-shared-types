export interface CreateQuizRequestDto {
  question: string;
  answer: string;
  hint?: string;
  reward?: string;
  publishDate?: string;
}