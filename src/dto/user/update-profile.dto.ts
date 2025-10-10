import type { BaseResponse } from "../../types/common.response";
import type { Profile } from "../../types/user.types";

export interface UpdateProfileRequestDto {
  name?: string;
  birth_date?: string;
  pin?: string;
  avatar_media_id?: number;
  voice_media_id?: string;
}

export type UpdateProfileResponseDto = BaseResponse<Profile>;
