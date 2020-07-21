import {CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DEL_ITEM} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action ) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if(action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if(action.type === DEL_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
}