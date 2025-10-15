/**
 * POST /api/quiz/children/:quizId/answer 응답
 * - 정답이면 isSolved=true 저장, 오답이면 DB 변화 없음
 * - 날짜 지남(오늘 아님) 등은 컨트롤러/유스케이스에서 400/403 처리
 */
export interface AnswerQuizResponseData {
  /** 제출 대상 퀴즈 ID */
  quizId: number;

  /** 채점 결과 */
  isCorrect: boolean;

  /** 저장된 해결 여부(정답이면 true) */
  isSolved: boolean;

  /** 정답 시 노출(오답이면 미포함/nullable) */
  reward?: string;
}
