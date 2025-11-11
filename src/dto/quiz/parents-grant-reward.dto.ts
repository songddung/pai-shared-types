/**
 * PATCH /api/quiz/:quizId/:childProfileId/reward
 */

// ----------------------------------------------------Request
export interface ParentsGrantRewardPathParam {
    quizId: string;
    childProfileId: number;
}

export interface ParentsGrantRewardRequestDto {
    grant: boolean;
}

// ----------------------------------------------------Response
export interface ParentsGrantRewardResponseData {
    quizId: string;
    childProfileId: number;
    isSolved: boolean;
    rewardGranted: boolean;
}