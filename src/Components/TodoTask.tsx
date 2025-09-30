import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask
}

const TodoTask = ({ task}: Props) => {
    return (
        <div className="task">
            <span>{task.taskName} </span>
            <span>{task.deadline}</span>  
        <button>X</button>
        </div>
    )
}

export default TodoTask;