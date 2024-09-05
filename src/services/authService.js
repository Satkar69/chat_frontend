import { endpoints } from "../config";

export const signupUser = async (userData) => {
  const res = await fetch(endpoints.signup, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await res.json();

  if (!res.ok || data.error) {
    throw new Error(data.error || "Signup Failed");
  }

  return data.token;
};
