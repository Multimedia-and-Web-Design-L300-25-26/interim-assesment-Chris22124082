const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const defaultOptions = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiRequest = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...(options.headers || {}),
    },
  });

  const contentType = response.headers.get('content-type') || '';
  const data = contentType.includes('application/json') ? await response.json() : null;

  if (!response.ok) {
    throw new Error(data?.message || 'Request failed.');
  }

  return data;
};

export default API_BASE_URL;
