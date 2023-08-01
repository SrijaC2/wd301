import React from 'react'
import './TaskCard.css'

const TaskCard =(props) =>{
    if (props.id=='0'){
        return (

            <div className="TaskItem bg-cyan-100">
                <h2 className="text-xl font-bold">{props.task.title}</h2>
                <p>Due on: {props.task.dueDate}</p>
                <p>Assignee: {props.task.assigneeName}</p>
            </div>
        )
    }else{
        return (

            <div className="TaskItem bg-cyan-100">
                <h2 className="text-xl font-bold">{props.task.title}</h2>
                <p>Completed on: {props.task.completedAtDate}</p>
                <p>Assignee: {props.task.assigneeName}</p>
            </div>
        )
    }
}

export default TaskCard