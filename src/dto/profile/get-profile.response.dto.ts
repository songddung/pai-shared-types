import { ProfileType } from "../../enum/profile-type";

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

export interface GetParentProfilesResponseData {
  profiles: ProfileDto[];
}

export interface GetChildProfilesResponseData {
  profiles: ProfileDto[];
}
