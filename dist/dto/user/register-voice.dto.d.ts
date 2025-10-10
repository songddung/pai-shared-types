import type { BaseResponse } from "../../types/common.response";
export interface RegisterVoiceRequestDto {
    profile_id: number;
    audio_file: File;
}
export interface RegisterVoiceResponseData {
    voice_id: string;
}
export type RegisterVoiceResponseDto = BaseResponse<RegisterVoiceResponseData>;
//# sourceMappingURL=register-voice.dto.d.ts.map