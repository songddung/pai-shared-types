/**
 * DELETE /api/quiz/:quizId (부모용 삭제)
 * - 예정(SCHEDULED) 상태에서만 삭제 가능
 * - 작성자 본인만 삭제 가능
 */
export interface DeleteQuizPathParam {
  quizId: number | string; // 컨트롤러에서 number로 파싱
}

/** 성공 시 최소 응답 데이터 */
export interface DeleteQuizResponseData {
  quizId: number;
}