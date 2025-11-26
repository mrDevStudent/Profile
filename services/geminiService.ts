import { User } from "../types";
import { USERS } from "../constants";

// Mocking the Chat interface for static usage
export interface MockChat {
  sendMessage: (params: { message: string }) => Promise<{ text: string }>;
}

export const generateUserBio = async (user: User): Promise<string> => {
  // Static fallback since we are in static mode
  return `${user.name} is a ${user.role} dedicated to the Team Nexus project.`;
};

export const createChatSession = async (): Promise<MockChat> => {
  // Return a mock object that mimics the AI behavior locally
  return {
    sendMessage: async ({ message }: { message: string }) => {
      // Simulate a small network delay for realism
      await new Promise(resolve => setTimeout(resolve, 800));

      const lowerMsg = message.toLowerCase();

      // Check for specific team members in the message
      const foundUser = USERS.find(u => 
        lowerMsg.includes(u.name.toLowerCase().split(',')[0].trim()) || // Check last name (e.g., "duro")
        lowerMsg.includes(u.name.toLowerCase().split(',')[1].trim().split(' ')[0]) // Check first name (e.g., "kaith")
      );

      if (foundUser) {
        return { 
          text: `Here is some info about ${foundUser.name}: ${foundUser.description} Role: ${foundUser.role}.` 
        };
      }

      // General responses
      if (lowerMsg.includes('team') || lowerMsg.includes('everyone') || lowerMsg.includes('members')) {
        return {
          text: "Our team consists of Duro (Senior Dev), Enguerra (UI), Marco (Frontend), Tenorio (Backend), and Ombrog (System Admin). Ask me about any of them!"
        };
      }

      if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        return { text: "Hello! I'm the Team Nexus virtual assistant. You can ask me about our team members or their roles." };
      }

      if (lowerMsg.includes('dashboard') || lowerMsg.includes('nexus')) {
        return { text: "This dashboard tracks our team's profiles. You can select a member from the sidebar to view their details." };
      }

      // Default fallback response
      return { 
        text: "I can help you with information about the Team Nexus members. Try asking 'Who is the designer?' or 'Tell me about Duro'." 
      };
    }
  };
};