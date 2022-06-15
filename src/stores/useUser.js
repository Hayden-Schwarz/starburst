import { defineStore } from 'pinia';

export const useUser = defineStore('userStore', {
  state: () => ({
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
    cardImage(state) { return state.cardUrl }
  }
})
