import { ProfileType } from "../../enum/profile-type";

export interface UpdateProfileResponseData {
  profileId: number;
  userId: number;
  profileType: ProfileType;
  name: string;
  birthDate: string;
  gender: string;
  avatarMediaId?: number;
  voiceMediaId?: number;
}
