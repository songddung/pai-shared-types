import type { BaseResponse } from "../../types/common.response";
export interface ChildProfileSummary {
    profile_id: number;
    name: string;
    avatar_media_id?: number;
}
export type GetChildProfilesResponseDto = BaseResponse<ChildProfileSummary[]>;
//# sourceMappingURL=get-child-profiles.dto.d.ts.map