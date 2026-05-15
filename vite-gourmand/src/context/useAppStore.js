import { create } from 'zustand'
import menus from '../data/menus.json'
import orders from '../data/orders.json'
import reviews from '../data/reviews.json'
import users from '../data/users.json'
import { api } from '../services/api'

const storedUser = JSON.parse(localStorage.getItem('vg_user') || 'null')

export const useAppStore = create((set) => ({
  darkMode: false,
  user: storedUser || users[0],
  token: localStorage.getItem('vg_token'),
  menus,
  orders,
  reviews,
  users: [],
  analytics: null,
  toast: null,
  loadInitialData: async () => {
    try {
      const [apiMenus, apiReviews] = await Promise.all([api.getMenus(), api.getReviews()])
      set({ menus: apiMenus, reviews: apiReviews })
      if (localStorage.getItem('vg_token')) {
        const [apiOrders, privateReviews] = await Promise.all([
          api.getOrders().catch(() => orders),
          api.getReviews().catch(() => apiReviews)
        ])
        set({ orders: apiOrders, reviews: privateReviews })
      }
    } catch {
      set({ toast: { type: 'info', message: 'API indisponible, donnees locales affichees' } })
    }
  },
  loadAdminData: async () => {
    const [apiUsers, analytics] = await Promise.all([api.getUsers(), api.getAnalytics()])
    set({ users: apiUsers, analytics })
  },
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  login: async (email, password) => {
    const { user, token } = await api.login({ email, password })
    localStorage.setItem('vg_token', token)
    localStorage.setItem('vg_user', JSON.stringify(user))
    const [apiOrders, apiReviews] = await Promise.all([api.getOrders().catch(() => []), api.getReviews().catch(() => reviews)])
    set({ user, token, orders: apiOrders, reviews: apiReviews, toast: { type: 'success', message: `Bienvenue ${user.name}` } })
    return user
  },
  register: async (payload) => {
    const { user, token } = await api.register(payload)
    localStorage.setItem('vg_token', token)
    localStorage.setItem('vg_user', JSON.stringify(user))
    set({ user, token, toast: { type: 'success', message: 'Compte cree avec succes' } })
    return user
  },
  updateOrderStatus: async (id, status) => {
    const updated = await api.updateOrderStatus(id, status)
    set((state) => ({ orders: state.orders.map((order) => (order.id === id ? updated : order)), toast: { type: 'success', message: 'Statut de commande mis a jour' } }))
  },
  addOrder: async (order) => {
    const created = await api.createOrder(order)
    set((state) => ({ orders: [created, ...state.orders], toast: { type: 'success', message: 'Commande confirmee' } }))
  },
  validateReview: async (id) => {
    await api.validateReview(id, true)
    set((state) => ({ reviews: state.reviews.map((review) => (review.id === id ? { ...review, validated: true } : review)), toast: { type: 'success', message: 'Avis valide' } }))
  },
  toggleUserStatus: async (id) => {
    const updated = await api.toggleUserStatus(id)
    set((state) => ({ users: state.users.map((item) => (item.id === id ? updated : item)), toast: { type: 'info', message: 'Statut du compte modifie' } }))
  },
  createEmployee: async (employee) => {
    const created = await api.createEmployee(employee)
    set((state) => ({ users: [created, ...state.users], toast: { type: 'success', message: 'Employe cree' } }))
  },
  sendContact: async (message) => api.sendContact(message),
  clearToast: () => set({ toast: null })
}))
