const API_BASE = "https://the-kelvin-ikpeni-dev-bootcamp.onrender.com/api";

export async function getCourses() {
  try {
    const response = await fetch(`${API_BASE}/courses`);
    if (!response.ok) throw new Error("Failed to fetch courses");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
