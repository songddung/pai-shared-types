import { ProfileType } from "enum/profile-type";

export interface GetProfileRequestDto {
  profileType: ProfileType;
}

export interface ProfileDto {
  profileId: string;
  profileType: ProfileType;
  name: string;
  birthDate: string;
  gender: string;
  avatarMediaId?: string;
  voiceMediaId?: string;
  createdAt: string;
}

export interface GetProfilesResponseData {
  profiles: ProfileDto[];
}
