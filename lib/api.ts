// Replace this with your actual Render URL
const API_BASE = "https://the-kelvin-ikpeni-dev-bootcamp.onrender.com/api";

export async function getCourses() {
  const response = await fetch(`${API_BASE}/courses`);
  if (!response.ok) throw new Error("Failed to fetch courses");
  return response.json();
}
