import type { BaseResponse } from "../../types/common.response";

export interface ParentProfileSummary {
  profile_id: number;
  name: string;
  avatar_media_id?: number;
}

export type GetParentProfilesResponseDto = BaseResponse<ParentProfileSummary[]>;
