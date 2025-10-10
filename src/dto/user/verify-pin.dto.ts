import type { BaseResponse } from "../../types/common.response";

export interface VerifyPinRequestDto {
  pin: string;
}

export interface VerifyPinResponseData {
  verified: boolean;
}

export type VerifyPinResponseDto = BaseResponse<VerifyPinResponseData>;
