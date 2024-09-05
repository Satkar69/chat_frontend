import { endpoints } from "../config";

export const getUser = async (userId, token) => {
  const res = await fetch(`${endpoints.getUser}${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok || data.error) {
    throw new Error(data.error || "faiiled to get the user");
  }

  return data;
};
