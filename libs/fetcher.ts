const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetcher<T = any>(
  endpoint: string,
  init?: RequestInit,
): Promise<T> {
  let token: string | undefined = undefined;
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/(^| )token=([^;]+)/);
    token = match ? match[2] : undefined;
  }

  const headers = {
    ...(init?.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...init,
    headers,
  });

  if (!res.ok) {
    const message = `Fetch error: ${res.status} ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
}
