// process.env.API_LOCAL_URL for local

const apiUrl = process.env.API_BASE_URL;

export const endpoints = {
  login: `${apiUrl}/auth/login`,
  signup: `${apiUrl}/auth/signup`,
  getUser: `${apiUrl}/chatUsers/user/`,
  getChatUsers: `${apiUrl}/chatUsers`,
  sendMessage: `${apiUrl}/messages/send-message/`,
  getMessages: `${apiUrl}/messages/get-messages/`,
};
