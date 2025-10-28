import { ProfileType } from "enum/profile-type";

export interface UpdateProfileRequestDto {
  name?: string;
  birthDate?: string; // YYYY-MM-DD
  gender?: string;
  avatarMediaId?: string;
  voiceMediaId?: string;
  pin?: string | null; // 부모 프로필의 경우 PIN 변경 시
}

export interface UpdateProfileResponseData {
  profileId: string;
  userId: number;
  profileType: ProfileType;
  name: string;
  birthDate: string;
  gender: string;
  avatarMediaId?: string;
  voiceMediaId?: string;
}
