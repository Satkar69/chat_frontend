const apiUrl = process.env.API_BASE_URL || "http://localhost:5000/api";

export const endpoints = {
  login: `${apiUrl}/auth/login`,
  signup: `${apiUrl}/auth/signup`,
  getUser: `${apiUrl}/chatUsers/user/`,
  getChatUsers: `${apiUrl}/chatUsers`,
};
