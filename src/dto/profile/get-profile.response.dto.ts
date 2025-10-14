import { ProfileType } from "../../enum/profile-type";

export interface ProfileDto {
  profileId: number;
  profileType: ProfileType;
  name: string;
  birthDate: string;
  gender: string;
  avatarMediaId?: number;
  voiceMediaId?: number;
  createdAt: string;
}

export interface GetParentProfilesResponseData {
  profiles: ProfileDto[];
}

export interface GetChildProfilesResponseData {
  profiles: ProfileDto[];
}
