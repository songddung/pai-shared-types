import type { BaseResponse } from "../../types/common.response";
export interface UpdatePinRequestDto {
    old_pin: string;
    new_pin: string;
}
export type UpdatePinResponseDto = BaseResponse<null>;
//# sourceMappingURL=update-pin.dto.d.ts.map