import { defineStore } from 'pinia';

export const useDeals = defineStore('dealStore', {
  state: () => ({
    deals:[]
  }),
  persist: true,
  getters: {
    getDeals(state) { return state.deals }
  }
})
