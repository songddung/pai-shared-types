import { OwnerType } from "enum/owner-type";

export interface GetMediaResponseData {
  mediaId: number;
  ownerType: OwnerType;
  ownerId: number;
  cdnUrl: string;
  fileName: string;
  mimeType: string;
  s3Key: string;
  createdAt: string;
}
