import { ProfileType } from "enum/profile-type";

export interface User {
  userId: number;
  email: string;
  passwordHash: string;
  address: string;
  latitude: number;
  longitude: number;
  createdAt: string;
}

export interface Profile {
  profileId: number;
  userId: number;
  profileType: ProfileType;
  name: string;
  birthDate?: string;
  gender?: string;
  avatarMediaId?: bigint;
  pinHash?: string;
  voiceMediaId?: bigint;
  createdAt: string;
  avatarUrl: string;
}
