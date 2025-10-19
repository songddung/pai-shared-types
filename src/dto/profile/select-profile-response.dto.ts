import { ProfileType } from "../../enum/profile-type";

export interface SelectProfileResponseData {
  userId: string;
  profileId: string;
  profileType: ProfileType;
  accessToken: string;
  refreshToken: string;
}
