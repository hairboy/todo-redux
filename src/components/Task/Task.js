import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Task extends Component {

  deleteTask = () => {
    const{ deleteTask, id } = this.props

    deleteTask(id)
  }
  
  checkTask = () => {
    const{ checkedTask, id, isChecked } = this.props

    checkedTask(id, isChecked)
  }

  
  render() {
    const { content, isChecked } = this.props;

    
    
    return (
      <div>
        {content} 
        <input 
          type='checkbox' 
          onChange={this.checkTask} 
          checked={isChecked}  /> 
        <Button 
          variant="outline-secondary" 
          onClick={this.deleteTask}>
          Delete
        </Button> 
      </div>
    )
  }

}