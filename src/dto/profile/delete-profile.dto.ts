export interface DeleteProfileRequestDto {
  profileId: string;
}

export interface DeleteProfileResponseData {
  profileId: string;
  deletedAt: string;
}
