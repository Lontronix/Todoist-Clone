import React from 'react';
import Checkbox from './Checkbox'
import { useTasks } from '../hooks'

export const Tasks = () => {
    const { tasks } = useTasks("1");  // takes currently selected project as an argument.
    let projectName = '';
    
    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid= "project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task=> (
                    // key is how react figures out which to update
                    <li key = {`${task.id}`}> 
                        <Checkbox id={task.id} />
                        <span>{task.content}</span>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Tasks;