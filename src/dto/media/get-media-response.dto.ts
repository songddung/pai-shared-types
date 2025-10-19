import { OwnerType } from "enum/owner-type";

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
