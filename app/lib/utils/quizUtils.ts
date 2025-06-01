
import { QuizAnswers } from "../../types/quiz";

// Calculate user profile type based on answers
export const calculateProfileType = (answers: QuizAnswers): string => {
  // This is a simplified calculation - in a real app this would be more complex
  const problemReaction = answers.problem_reaction?.answer || '';
  
  if (problemReaction === 'reinvent') {
    return 'Visionario'; // Leadership
  } else if (problemReaction === 'plan') {
    return 'Administrador'; // Product/Admin
  } else {
    return 'Operador'; // Operations
  }
};

// Map profile type to personality category
export const mapProfileToCategory = (profileType: string): string => {
  switch (profileType) {
    case 'Visionario':
      return 'Leadership';
    case 'Administrador':
      return 'Product';
    case 'Operador':
      return 'Operations';
    default:
      return 'Leadership';
  }
};
