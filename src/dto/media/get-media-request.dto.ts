import { OwnerType } from "enum/owner-type";

export interface GetMediaRequestDto {
  ownerType: OwnerType;
  ownerIds: number[]; // 단일 또는 다수 owner ID
}
