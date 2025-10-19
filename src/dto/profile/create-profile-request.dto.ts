import { ProfileType } from "enum/profile-type";

export interface CreateProfileRequestDto {
  profileType: ProfileType;
  name: string;
  birthDate: string;
  gender: string;
  avatarMediaId?: string;
  pin?: string;
  voiceMediaId?: string;
}
