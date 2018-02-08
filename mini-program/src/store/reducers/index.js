import { combineReducers } from 'redux'
import counter from './counter'
import tabBar from './tab-bar'

export default combineReducers({
  counter, tabBar
})
