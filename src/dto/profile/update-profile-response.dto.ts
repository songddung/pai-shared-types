import { ProfileType } from "../../enum/profile-type";

export interface UpdateProfileResponseData {
  profileId: string;
  userId: string;
  profileType: ProfileType;
  name: string;
  birthDate: string;
  gender: string;
  avatarMediaId?: string;
  voiceMediaId?: string;
}
