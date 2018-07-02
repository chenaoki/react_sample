import React from 'react';
import { render } from 'react-dom';

export class TodoList extends React.Component {
  
  handleDelete() {
    this.props.onTodoDelete(this.props.todo.id)
  }

  render(){
    return (
      <tr> 
        <td>{this.props.todo.title}</td>
        <td>{this.props.todo.text}</td>
      </tr>
    )
  }
}

