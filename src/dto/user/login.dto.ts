export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseData {
  userId: number;
  accessToken: string;
  refreshToken: string;
}
