export interface UpdateProfileRequestDto {
  name?: string;
  birthDate?: string; // YYYY-MM-DD
  gender?: string;
  avatarMediaId?: string;
  voiceMediaId?: string;
  pin?: string; // 부모 프로필의 경우 PIN 변경 시
}
