export interface RefreshTokenRequestDto {
  refreshToken: string;
  deviceId: string;
}

export interface RefreshTokenResponseData {
  accessToken: string;
  refreshToken: string;
}
