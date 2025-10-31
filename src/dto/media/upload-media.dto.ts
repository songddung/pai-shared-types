import { OwnerType } from "enum/owner-type";

export interface UploadMediaRequestDto {
  ownerType: OwnerType;
  ownerId: string;
}

export interface UploadMediaResponseData {
  mediaId: string;
  cdnUrl: string;
  fileName: string;
  mimeType: string;
  fileSize: String;
  createdAt: string;
}
