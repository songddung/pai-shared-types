import { ProfileType } from "enum/profile-type";

export interface CreateProfileResponseData {
  profileId: string;
  userId: string;
  profileType: ProfileType;
  name: string;
  accessToken: string;
  refreshToken: string;
}
