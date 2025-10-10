import type { BaseResponse } from "../../types/common.response";
export interface LoginRequestDto {
    email: string;
    password: string;
}
export interface LoginResponseData {
    user_id: number;
    access_token: string;
    refresh_token: string;
}
/** ✅ BaseResponse<T> 사용 */
export type LoginResponseDto = BaseResponse<LoginResponseData>;
//# sourceMappingURL=login.dto.d.ts.map