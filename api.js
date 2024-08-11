export const getRequest = async (endpoint) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};

export const postRequest = async (endpoint, payload) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
  });

  if (!response.ok) {
      throw new Error('Network response was not ok');
  }

  return response.json();
};