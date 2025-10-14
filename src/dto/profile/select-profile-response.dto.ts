import { ProfileType } from "../../enum/profile-type";

export interface SelectProfileResponseData {
  userId: number;
  profileId: number;
  profileType: ProfileType;
  name: string;
  accessToken: string;
  refreshToken: string;
}
