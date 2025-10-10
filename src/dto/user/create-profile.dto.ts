import type { BaseResponse } from "../../types/common.response";
import type { Profile } from "../../types/user.types";

export interface CreateProfileRequestDto {
  user_id: number;
  profile_type: "PARENT" | "CHILD";
  name: string;
  birth_date?: string;
  gender?: string;
  avatar_media_id?: bigint;
  pin?: string;
  voice_media_id?: string;
}

export type CreateProfileResponseDto = BaseResponse<Profile>;
