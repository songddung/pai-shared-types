import { ProfileType } from "enum/profile-type";

export interface SelectProfileRequestDto {
  profileId: string;
  deviceId: string;
  pin?: string | null;
}

export interface SelectProfileResponseData {
  userId: number;
  profileId: string;
  profileType: ProfileType;
  accessToken: string;
  refreshToken: string;
}
