export interface PruneOldInterestsRequestDto {
  minDaysSinceUpdate?: number; // 마지막 업데이트 이후 경과일 (기본값: 90일)
  maxScore?: number; // 이 점수 이하인 관심사 삭제 (기본값: 1.0)
}

export interface PruneOldInterestsResponseData {
  deletedCount: number;
  deletedKeywords: string[];
}
