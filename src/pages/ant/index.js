import React from 'react'
import store from '../../store/index'
import {getTodoList, getInputChangeAction, getAddItemAction, getDelItemAction} from '../../store/actionCreators'
import AntUI from './AntUI'
class Ant extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange); 
    }

    handleInput = (e) => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleClick = () => {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleDelItem = (index) => {
        const action = getDelItemAction(index)
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }

    render () {
        return (
            <AntUI
                handleInput={this.handleInput}
                inputValue={this.state.inputValue}
                handleClick={this.handleClick}
                list={this.state.list}
                handleDelItem={this.handleDelItem}
            />
        )
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }
}

export default Ant 