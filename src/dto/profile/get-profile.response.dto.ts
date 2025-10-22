import { ProfileType } from "../../enum/profile-type";

export interface ProfileDto {
  profileId: number;
  profileType: ProfileType;
  name: string;
  birthDate: string;
  gender: string;
  avatarMediaId?: string;
  voiceMediaId?: number;
  createdAt: string;
}

export interface GetProfilesResponseData {
  profiles: ProfileDto[];
}
