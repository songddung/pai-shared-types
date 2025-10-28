/**
 * GET /api/quiz/children/today
 */

// ----------------------------------------------------Request
export interface ChildrenTodayQueryParam {
  limit?: number; // 페이지 크기(기본 20, 최대 50)
  cursor?: string; // Base64("quizId") (예: "IjEyMyI=")
}

// ----------------------------------------------------Response
export interface ChildrenTodayItemDto {
  quizId: string;  // BigInt
  question: string;
  hint: string | null;
  reward: string | null;
  authorParentProfileId: number;  // Int
  authorParentName: string;
  authorParentAvatarMediaId: string | null;  // BigInt
  isSolved: boolean; // 아이 본인이 풀었는지
}

export interface ChildrenTodayResponseData {
  items: ChildrenTodayItemDto[];
  nextCursor: string | null; // 다음 페이지 커서(Base64)
  hasNext: boolean;
}

/**
  <핵심 차이>
  옵셔널(prop?: T)
  - “이 키 자체가 없어도 된다”는 뜻.
  - 타입은 사실상 prop: T | undefined와 같아요.
  - JSON 응답/요청에서 그 필드를 아예 생략할 수 있습니다.
  
  널러블(prop: T | null)
  - “이 키는 항상 존재하지만 값으로 null도 올 수 있다”는 뜻.
  - 키는 항상 포함되고, 값이 null일 수 있어요.
  - 둘 다 허용(prop?: T | null)
  - 키가 없을 수도 있고, 있다면 값이 T 또는 null.
 */