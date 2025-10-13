import { ProfileType } from "enum/profile-type";

export interface CreateProfileRequestDto {
  profileTpye: ProfileType;
  name: string;
  birthDate: string;
  gender: string;
  avatarMediaId?: number;
  pin?: string;
  voiceMediaId?: number;
}
