import React from "react";
import { connect } from "react-redux";
import {
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM,
  DEL_ITEM,
} from "../src/store/actionTypes";

const TodoList = (props) => {
  const { handleChange, inputValue, handleClick, handleDel, list } = props;
  return (
    <div>
      <input onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>submit</button>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => handleDel(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value,
      };
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: ADD_LIST_ITEM,
      };
      dispatch(action);
    },

    handleDel(index) {
      const action = {
        type: DEL_ITEM,
        value: index,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
