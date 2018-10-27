import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
  return new Vuex.Store({
    strict:true,
    state: defaultState,
    mutations: mutations,
    getters: getters,
    actions: actions,
    modules: {
      a: {
        state: {
          text :1
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
}
