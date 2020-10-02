import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedTask as Task } from '../../components/Task/Task';

 class List extends Component { 

    state = {
      filteredTasks: this.props.tasks,
    }

    componentDidUpdate(prevProps) {
      const { tasks, filterType } = this.props
      
      if (this.props !== prevProps) {
        if (filterType === 'completed') {
          const updatedTasks = tasks.filter(task => task.isChecked)

          return this.setState({ filteredTasks: updatedTasks })
        }

        if (filterType === 'uncompleted') {
          const updatedTasks = tasks.filter(task => !task.isChecked)

          return this.setState({ filteredTasks: updatedTasks })
        }
      }
    }

    render() {
      const { filteredTasks } = this.state
      const { tasks,  filterType } = this.props;
      const currentTasks = filterType === 'all' ? tasks : filteredTasks

        return(
          <div>
            {currentTasks.map(currentTask => 
              <Task 
                key={currentTask.id} 
                id={currentTask.id} 
                content={currentTask.content} 
                isChecked={currentTask.isChecked} 
                 />
            )}
          </div>
     )
   }
 }

 export const ConnectedList = connect(store => ({ tasks: store.main.tasks, filterType: store.main.filterType, }), null)(List)