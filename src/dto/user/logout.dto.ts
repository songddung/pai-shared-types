import type { BaseResponse } from "../../types/common.response";

export interface LogoutRequestDto {
  Authorization: string; // refresh_token
}

export type LogoutResponseDto = BaseResponse<null>;
