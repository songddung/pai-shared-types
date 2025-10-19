import { OwnerType } from "enum/owner-type";

export interface UploadMediaRequestDto {
  ownerType: OwnerType;
  ownerId: string;
}
