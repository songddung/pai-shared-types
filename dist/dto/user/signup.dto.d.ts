import type { BaseResponse } from "../../types/common.response";
export interface SignupRequestDto {
    email: string;
    password: string;
    address: string;
}
export type SignupResponseDto = BaseResponse<null>;
//# sourceMappingURL=signup.dto.d.ts.map