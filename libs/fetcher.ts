const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetcher<T = any>(
  endpoint: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, init);

  if (!res.ok) {
    const message = `Fetch error: ${res.status} ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
}
