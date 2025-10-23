export interface SignupRequestDto {
  email: string;
  password: string;
  address: string;
}

export interface SignupResponseData {
  userId: number;
  accessToken: string;
  refreshToken: string;
}
