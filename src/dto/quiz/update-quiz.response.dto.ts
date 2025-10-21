/**
 * PATCH /api/quiz/:quizId Response
 * - 수정된 퀴즈 정보를 반환
 */
export interface UpdateQuizResponseData {
  quizId: number;
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  publishDate: string;
  isEditable: boolean;
}
