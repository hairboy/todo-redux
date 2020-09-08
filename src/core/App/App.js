import React, { Component } from 'react';
import { ConnectedControl as Control } from '../../components/Control/Control';
import { ConnectedList as List } from '../../components/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
      
    state = {
      tasks: [],
      filterType: 'all',
      filteredTasks: [],
    }
    
    componentDidMount() {
      const savedTasks = localStorage.getItem('tasks')

      if (savedTasks) {
        this.setState({ tasks: JSON.parse(savedTasks) })
      }
    }
    
    deleteTask = (id) => {
      const { tasks } = this.state
      const updatedTasks = tasks.filter(task => task.id !== id)

      this.setState({tasks: updatedTasks}, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks)))
    }
    
    deleteAllTasks = () => {
      this.setState({
        tasks: [],
      }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks)))
    }

    setFilter = (filterType) => {
      const { tasks } = this.state
  
      this.setState({ filterType }, () => {
        if (this.state.filterType === 'completed') {
          return this.setState({ filteredTasks: tasks.filter(task => task.isChecked) })
        }
  
        if (this.state.filterType === 'uncompleted') {
          return this.setState({ filteredTasks: tasks.filter(task => !task.isChecked) })
        }
  
        return this.setState({ filteredTasks: [] })
      })
    }

    checkedTask = (id, isChecked) => {
      const { tasks } = this.state
      const nowTask = tasks.map(task => task.id === id ? ({ ...task, isChecked: !isChecked }) : task)

      this.setState({tasks: nowTask}, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks)))
    }

    render() {
      const { filterType } = this.state

      return(
        <div>
          <Control 
            deleteAllTasks={this.deleteAllTasks}
            setFilter={this.setFilter}
            />
          <List
            filterType={filterType}
            deleteTask= {this.deleteTask} 
            checkedTask={this.checkedTask} />
        </div>
      )
    }

}
