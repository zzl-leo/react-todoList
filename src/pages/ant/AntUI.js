import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import "./ant.css";

const AntUI = (props) => {
  return (
    <div className="ant">
      <Input
        onChange={props.handleInput}
        value={props.inputValue}
        placeholder="todo info"
        className="input"
      />
      <Button onClick={props.handleClick} type="primary">
        提交
      </Button>
      <List
        className="list"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleDelItem(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

// class AntUI extends React.Component {
//   render() {
//     return (
//       <div className="ant">
//         <Input
//           onChange={this.props.handleInput}
//           value={this.props.inputValue}
//           placeholder="todo info"
//           className="input"
//         />
//         <Button onClick={this.props.handleClick} type="primary">
//           提交
//         </Button>
//         <List
//           className="list"
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => this.props.handleDelItem(index)}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default AntUI;
