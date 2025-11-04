export interface InterestItem {
  keyword: string;
  rawScore: number;
  lastUpdated: string;
}

export interface GetTopInterestsResponseData {
  interests: InterestItem;
}
