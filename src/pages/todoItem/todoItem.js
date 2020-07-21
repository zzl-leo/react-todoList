import React from 'react'
import PropTypes from 'prop-types'
class todoItem extends React.Component {
    handleClick() {
        const {index, handleDel} = this.props
        console.log(index)
        handleDel(index)
    }
    render (props) {
        return (
        <div onClick={() => this.handleClick(this.props.index)}>
            {this.props.test}-{this.props.content}</div>
        )
    }
}

// 对todoitem属性校验
// PropTypes.string  => 代表接收的必须是字符串类型  
// .isRequired表示必传（父组件->子组件）
todoItem.propTypes = {
    content: PropTypes.string,
    handleDel: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired,
}

// 设置默认值 即使父组件没传，会取默认值
todoItem.defaultProps = {
    test: 'ghehncjds'
}
export default todoItem