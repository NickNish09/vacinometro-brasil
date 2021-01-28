import { baseUrl } from "./index";

export const getCases = async () => {
  const response = await fetch(`${baseUrl}districts`);
  return response.json();
};
