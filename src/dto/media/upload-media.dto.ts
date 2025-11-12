export interface UploadMediaRequestDto {
  mediaId: string;
}

export interface UploadMediaResponseData {
  mediaId: string;
  cdnUrl: string;
  fileName: string;
  mimeType: string;
  fileSize: String;
  createdAt: string;
}
