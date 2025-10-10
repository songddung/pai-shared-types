import type { BaseResponse } from "../../types/common.response";

export interface SelectProfileRequestDto {
  profile_id: number;
}

export interface SelectProfileResponseData {
  access_token: string;
  refresh_token: string;
  profile_id: number;
}

export type SelectProfileResponseDto = BaseResponse<SelectProfileResponseData>;
