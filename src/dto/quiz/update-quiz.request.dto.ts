/**
 * PATCH /api/quiz/:quizId (부모용 수정)
 * - 예정(SCHEDULED) 상태에서만 수정 가능
 * - 전달된 필드만 부분 수정
 * - hint/reward 를 null 로 보내면 해당 필드를 제거(= DB null) 처리
 * - publishDate 는 'yyyy-MM-dd' 형식
 */
export interface UpdateQuizRequestDto {
  question?: string; // 질문(옵션: 보내면 교체)
  answer?: string; // 정답(옵션: 보내면 교체)
  hint?: string | null; // 힌트(옵션: string | null) — null이면 제거 
  reward?: string | null; // 보상(옵션: string | null) — null이면 제거 
  publishDate?: string; // 출제될 날짜(옵션: 'yyyy-MM-dd') 
}

/** Path parameter 모델 (선택: 컨트롤러 편의용) */
export interface UpdateQuizPathParam {
  quizId: number | string; // 컨트롤러에서 number로 파싱
}
