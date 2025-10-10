import type { BaseResponse } from "../../types/common.response";
export interface RefreshTokenRequestDto {
    refresh_token: string;
}
export interface RefreshTokenResponseData {
    access_token: string;
    refresh_token: string;
}
export type RefreshTokenResponseDto = BaseResponse<RefreshTokenResponseData>;
//# sourceMappingURL=refresh-token.dto.d.ts.map