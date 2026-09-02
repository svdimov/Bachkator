const API_URL = "http://127.0.0.1:8000/api";

export async function createContactRequest(data: {
  name: string;
  phone: string;
  email: string | null;
  service: string | null;
  message: string | null;
  lang: string;
}) {
  const response = await fetch(`${API_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    console.error("Contact API error:", errorData);
    throw new Error("Грешка при изпращането");
  }

  return response.json();
}