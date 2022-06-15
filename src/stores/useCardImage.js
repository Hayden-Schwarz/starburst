import { defineStore } from 'pinia';

export const useCardImage = defineStore('dealStore', {
  state: () => ({
    image: null
  }),
  persist: true,
  getters: {
    getImage(state) { return state.image }
  }
})
