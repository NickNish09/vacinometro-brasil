export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://vacinometro.com/api/"
    : "http://localhost:3000/api/";
