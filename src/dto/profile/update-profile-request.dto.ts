export interface UpdateProfileRequestDto {
  name?: string;
  birthDate?: string; // YYYY-MM-DD
  gender?: string;
  avatarMediaId?: number;
  voiceMediaId?: number;
  pin?: string; // 부모 프로필의 경우 PIN 변경 시
}
