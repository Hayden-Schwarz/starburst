import { defineStore } from 'pinia'

export const useUser = defineStore('userStore', {
  state: () => ({
    userId: 0,
    cardId: '',
    mobile: '',
    email: '',
    firstName: '',
    lastName: '',
    cardUrl: '',
    storeImageUrl: '',
    storeId: 0,
  }),
  persist: true,
  getters: {
    cardImage (state) {
      return state.cardUrl
    },
    getCardId (state) {
      return state.cardId
    },
    getUserId (state) {
      return state.userId
    }

  }
})
