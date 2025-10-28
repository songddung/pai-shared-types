/**
 * PATCH /api/quiz/:quizId (부모용 수정)
 * - 예정(SCHEDULED) 상태에서만 수정 가능
 * - 전달된 필드만 부분 수정
 * - hint/reward 를 null 로 보내면 해당 필드를 제거(= DB null) 처리
 * - publishDate 는 'yyyy-MM-dd' 형식
 */

// ----------------------------------------------------Request
export interface UpdateQuizPathParam {
  quizId: string;  // BigInt
}

export interface UpdateQuizRequestDto {
  question?: string; 
  answer?: string; 
  hint?: string | null; 
  reward?: string | null;
  publishDate?: string; // 출제될 날짜(옵션: 'yyyy-MM-dd') 
}

// ----------------------------------------------------Response
export interface UpdateQuizResponseData {
  quizId: string; // BigInt
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  publishDate: string;
  isEditable: boolean;
}
