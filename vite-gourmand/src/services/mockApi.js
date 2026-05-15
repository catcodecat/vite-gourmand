import menus from '../data/menus.json'
import orders from '../data/orders.json'
import reviews from '../data/reviews.json'
import users from '../data/users.json'

const wait = (delay = 350) => new Promise((resolve) => setTimeout(resolve, delay))

// Petit service front-end qui simule une API sans aucun back-end réel.
export const mockApi = {
  async getMenus() {
    await wait()
    return menus
  },
  async getMenuById(id) {
    await wait()
    return menus.find((menu) => menu.id === id)
  },
  async getOrders() {
    await wait()
    return orders
  },
  async getReviews() {
    await wait()
    return reviews
  },
  async getUsers() {
    await wait()
    return users
  }
}
