import {handleActions} from 'redux-actions'
import {UPDATE, ASYNC_UPDATE} from '../types/tab-bar'

const initState = {
    menuData: [
        {id: "showing", text: "热映", url: "/pages/index"},
        {id: "cinema", text: "影院", url: "/pages/index"},
    ]
}

export default handleActions({
    [UPDATE](state, action) {
        return {
            ...state,
            menuData: action.payload
        }
    },
    [ASYNC_UPDATE](state, action) {
        return {
            ...state,
            menuData: action.payload
        }
    }
}, initState)
