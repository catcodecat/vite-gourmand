const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

async function request(path, options = {}) {
  const token = localStorage.getItem('vg_token')
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) }
  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch(`${API_URL}${path}`, { ...options, headers })
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Erreur API' }))
    throw new Error(error.message || 'Erreur API')
  }
  if (response.status === 204) return null
  return response.json()
}

export const api = {
  getMenus: (params = {}) => request(`/menus?${new URLSearchParams(params)}`),
  getReviews: () => request('/reviews'),
  getOrders: () => request('/orders'),
  getUsers: () => request('/admin/users'),
  getAnalytics: () => request('/admin/analytics'),
  login: (credentials) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (payload) => request('/auth/register', { method: 'POST', body: JSON.stringify(payload) }),
  createOrder: (payload) => request('/orders', { method: 'POST', body: JSON.stringify(payload) }),
  updateOrderStatus: (reference, status) => request(`/orders/${reference}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  validateReview: (id, validated = true) => request(`/reviews/${id}/status`, { method: 'PATCH', body: JSON.stringify({ validated }) }),
  createEmployee: (payload) => request('/admin/employees', { method: 'POST', body: JSON.stringify(payload) }),
  toggleUserStatus: (id) => request(`/admin/users/${id}/toggle-status`, { method: 'PATCH' }),
  sendContact: (payload) => request('/contact', { method: 'POST', body: JSON.stringify(payload) })
}
