import React, { Component } from 'react';
import Task from '../Task/Task';
import { connect } from 'react-redux';

 class List extends Component { 

    render() {
      const { tasks, deleteTask, checkedTask, filterType, filteredTasks } = this.props;

        return(
          <div>
            {tasks.map(currentTask => 
              <Task 
                key={currentTask.id} 
                id={currentTask.id} 
                content={currentTask.content} 
                isChecked={currentTask.isChecked} 
                deleteTask={deleteTask} 
                checkedTask={checkedTask} />
            )}
          </div>
     )
   }
 }

 export const ConnectedList = connect(store => ({ tasks: store.main.tasks }), null)(List)