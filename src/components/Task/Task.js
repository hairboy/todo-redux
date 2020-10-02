import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { taskDelete, toggleTask } from '../../store/main/main.actions';

class Task extends Component {

  deleteTask = () => {
    const {  dispatch, id } = this.props
    
      if (id) {
        dispatch(taskDelete(id))
      }
    
  }
  
  checkTask = () => {
    const { dispatch, id, isChecked } = this.props

    if (id) {
      dispatch(toggleTask(id, isChecked))
    } 
  }

  
  render() {
    const { content, isChecked } = this.props;

      
      
    return (
      <div>
        {content} 
        <input 
          type='checkbox' 
          checked={isChecked}
          onChange={this.checkTask}
          
          /> 
        <Button 
          variant="outline-secondary" 
          onClick={this.deleteTask}>
          Delete
        </Button> 
      </div>
    )
  }

}

export const ConnectedTask = connect(null, dispatch => ({ dispatch }))(Task) 