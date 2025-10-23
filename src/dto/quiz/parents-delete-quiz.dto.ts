/**
 * DELETE /api/quiz/:quizId (부모용 삭제)
 * - 예정(SCHEDULED) 상태에서만 삭제 가능
 * - 작성자 본인만 삭제 가능
 */

// ----------------------------------------------------Request
export interface DeleteQuizPathParam {
  quizId: string; // BigInt
}

// ----------------------------------------------------Response
export interface DeleteQuizResponseData {
  quizId: string; // BigInt
}