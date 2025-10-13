import { ProfileType } from "enum/profile-type";

export interface CreateProfileResponseData {
  profileId: number;
  userId: number;
  profileType: ProfileType;
  name: string;
  accessToken: string;
  refreshToken: string;
}
