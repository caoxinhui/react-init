import counter from './reducers/counter'
import useInfo from './reducers/useInfo'
export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    useInfo: useInfo(state.useInfo, action)
  }
}