const apiUrl = "https://chat-backend-blue-tau.vercel.app";

export const endpoints = {
  login: `${apiUrl}/auth/login`,
  signup: `${apiUrl}/auth/signup`,
  getUser: `${apiUrl}/chatUsers/user/`,
  getChatUsers: `${apiUrl}/chatUsers`,
  sendMessage: `${apiUrl}/messages/send-message/`,
  getMessages: `${apiUrl}/messages/get-messages/`,
};
