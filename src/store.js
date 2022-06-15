import { reactive } from 'vue'

export const store = reactive({
    userinfo: null,
    cardurl: null,
    empty() {
        this.userinfo = null
    }
})
