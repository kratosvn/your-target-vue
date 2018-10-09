import { ADD_TARGET } from '../types'

export function addTarget ({commit}, data) {
  commit(ADD_TARGET, data)
}
