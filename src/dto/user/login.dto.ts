export interface LoginRequestDto {
  email: string;
  password: string;
  deviceId: string;
}

export interface LoginResponseData {
  userId: number;
  accessToken: string;
  refreshToken: string;
}
