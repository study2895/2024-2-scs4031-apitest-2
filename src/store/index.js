import { createStore } from 'vuex'
import { search } from './modules/search.js'

const store = createStore({
  modules: {
    search
  }
})

export default store
