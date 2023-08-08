import React from "react";
import "./TaskCard.css";

interface TaskProp {
    title: string,
    dueDate: string,
    description: string
  }

  class Task extends React.Component<TaskProp> {
    render() {
      return (
        <div className="TaskItem shadow-md border border-slate-100 bg-cyan-100 m-3">
          <h2 className=" text-xl font-bold my-1">{this.props.title}</h2>
          <p className="text-sm ">
            Due Date: {this.props.dueDate}
          </p>
          <p className="text-sm ">
            Description: {this.props.description} 
          </p>
        </div>
      );
    }
  
  }
  export default Task;