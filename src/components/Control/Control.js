import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { taskAdd, deleteAll, setFilter } from '../../store/main/main.actions';

class Control extends Component {

  state = {
    field: '',
  }

  fieldChange = (e) => {
    this.setState({
      field: e.target.value,
    })
  }

  handleSubimtTask = () => {
    const { field } = this.state
    const { dispatch } = this.props
    if (field) {
      dispatch(taskAdd(field))
    }
    
    this.setState({ field: '' }) 
    
  }

  handlKeyDown = (e) => {
    if(e.keyCode === 13) {
     this.handleSubimtTask();
    }
  }

  handleDeleteAllTask = (task) => {
    const { dispatch } = this.props

    if (task){
      dispatch(deleteAll(task))
    }
  }

  handleFilterType = (e) => {
    const { dispatch } = this.props

    dispatch(setFilter(e.target.value))
  }

  render() {
    return(
      <div >
        <input
          className='field-task' 
          type='text'
          placeholder='Need to do'
          value={this.state.field}
          onChange={this.fieldChange} 
          onKeyDown={this.handlKeyDown}
        />
        <Button 
          variant="outline-primary" 
          onClick={this.handleSubimtTask}
          className='add-button'>
            Add
        </Button>
        <Button 
          variant="outline-primary"
          className='clear-button'
          onClick={this.handleDeleteAllTask}>
            Delete all
        </Button>
        <select onChange={this.handleFilterType}
          className='status-task'
          >
          <option value='all'> all </option>
          <option value='uncompleted'> uncompleted </option>
          <option value='completed'> completed </option>
        </select>
      </div>
    )
  }  

  }

  export const ConnectedControl = connect(null, dispatch => ({ dispatch }))(Control) 