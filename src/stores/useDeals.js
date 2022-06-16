import { defineStore } from 'pinia';

export const useDeals = defineStore('dealStore', {
  state: () => ({
    deals:[]
  }),
  persist: true,
  getters: {
    getDeals(state) { return state.deals },
    getDealById(state) {return(dealId)=>state.deals.find((deal) => deal.dealId === dealId)}
  }
})
