export interface AnswerQuizResponseData {
  /** 제출 대상 퀴즈 ID */
  quizId: number;

  /** 정답 여부 (true: 정답, false: 오답) */
  isSolved: boolean;

  /** 정답 시에만 반환되는 보상 (오답이면 undefined) */
  reward?: string;
}
