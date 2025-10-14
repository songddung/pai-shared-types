import { ProfileType } from "../../enum/profile-type";

export interface SelectProfileResponseData {
  userId: number;
  profileId: number;
  profileType: ProfileType;
  accessToken: string;
  refreshToken: string;
}
