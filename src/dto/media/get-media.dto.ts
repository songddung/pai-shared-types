import { OwnerType } from "enum/owner-type";

export interface GetMediaRequestDto {
  ownerType: OwnerType;
  ownerIds: string[]; // 단일 또는 다수 owner ID
}

export interface GetMediaResponseData {
  mediaId: string;
  ownerType: OwnerType;
  ownerId: string;
  cdnUrl: string;
  fileName: string;
  mimeType: string;
  s3Key: string;
  createdAt: string;
}
