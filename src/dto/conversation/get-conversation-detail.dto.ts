
// GET /api/conversations/:conversationId

// ----------------------------------------------------Response
export interface ConversationDetailQuestionDto {
  order: number; 
  questionText: string; 
  answerText: string; 
  imageMediaId: string | null; 
  keyword: string | null; 
}

export interface GetConversationDetailResponseData {
  conversationId: string; 
  childProfileId: number; 
  startDate: string; 
  title: string | null; 
  firstMediaId: string | null; 
  items: ConversationDetailQuestionDto[]; 
}
