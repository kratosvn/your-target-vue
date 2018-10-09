import { ADD_TARGET } from '../types'

export default {
  [ADD_TARGET]: (state, payload) => {
    const tg = {
      name: payload,
      point: 0
    }
    state.targets.push(tg)
  },
}
