import React, { Component } from "react";
import "./style.css";
class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="todolistmain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="O que precisa ser feito..."
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Adicionar </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
