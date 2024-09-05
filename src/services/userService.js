import { endpoints } from "../config";

export const getUser = async (userId, token) => {
  const res = await fetch(`${endpoints.getUser}${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok || data.error) {
    throw new Error(data.error || "faiiled to get the user");
  }
  return data;
};
