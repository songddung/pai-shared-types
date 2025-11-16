export interface GetMediaRequestDto {
  mediaIds: String;
}

export interface GetMediaResponseData {
  mediaId: string;
  cdnUrl: string;
  fileName: string;
  mimeType: string;
  s3Key: string;
  createdAt: string;
}
