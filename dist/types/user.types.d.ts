export interface User {
    user_id: bigint;
    email: string;
    password_hash: string;
    address: string;
    latitude: number;
    longitude: number;
    created_at: string;
}
export type ProfileType = "PARENT" | "CHILD";
export interface Profile {
    profile_id: bigint;
    user_id: bigint;
    profile_type: ProfileType;
    name: string;
    birth_date?: string;
    gender?: string;
    avatar_media_id?: bigint;
    pin_hash?: string;
    voice_media_id?: string;
    created_at: string;
}
//# sourceMappingURL=user.types.d.ts.map