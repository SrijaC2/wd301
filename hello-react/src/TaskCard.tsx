import React from 'react'
import './TaskCard.css'

const TaskCard =(props) =>{
    if (props.completedAtDate==null){
        return (

            <div className="TaskItem bg-cyan-100">
                <h2 className="text-xl font-bold">{props.title}</h2>
                <p>Due on: {props.dueDate}</p>
                <p>Assignee: {props.assigneeName}</p>
            </div>
        )
    }else{
        return (

            <div className="TaskItem bg-cyan-100">
                <h2 className="text-xl font-bold">{props.title}</h2>
                <p>Completed on: {props.completedAtDate}</p>
                <p>Assignee: {props.assigneeName}</p>
            </div>
        )
    }
}

export default TaskCard