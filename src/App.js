import React, { Fragment } from "react";
import TodoItem from './pages/todoItem/todoItem'
import { CSSTransition } from "react-transition-group";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "map",
      list: ["www", "ert"],
      show: true
    };
  }
  handleInput = (e) => {
    // 异步setState
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  };

  hanldeClick = () => {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: "",
    // })

    // preState 等价于修改数据之前的数据
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ""
    }))
  };

  handleDel(index) {
    this.setState((preState) => {
      const list = [...preState.list]
      list.splice(index, 1)
      return {list}
    })
  }

  handleToggle() {
    this.setState((preState) => {
      return {show: preState.show ? false : true}
    })
  }
  render() {
    return (
      <Fragment>
        <TodoItem />
        <input
          value={this.state.inputValue}
          onChange={(e) => this.handleInput(e)}
        />
        <button onClick={() => this.hanldeClick()}>提交</button>
        <ul>
          {this.state.list.map((item, index) => (
            <TodoItem 
              key={index} 
              handleDel= {()=> this.handleDel()}
              index={index}
              content={item} 
            />
          ))}
        </ul>
            {/* className={this.state.show ? 'show' : 'hide'} */}
        <CSSTransition 
          in={this.state.show}
          classNames="fade"
          timeout={1000}
          unmountOnExit
          onEntered={(el) => {el.style.color = 'blue'}}
          appear={true}
        >
          <div>hehe</div>
        </CSSTransition>
        <button onClick={() => this.handleToggle()}>click</button>
      </Fragment>
    );
  }
}

export default App;
