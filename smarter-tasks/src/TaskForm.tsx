import React from "react";
import { TaskItem } from "./types";



interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: '',
      description: "",
    }
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ 
      title: "",
      dueDate: '',
      description: "",
     });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value, });
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value, });
  };
  render(){
    return (
      <form onSubmit={this.addTask}>
      <div className="mb-4">
        <label htmlFor="todoTitle" className="block text-white font-bold mb-1">
          Title:
        </label>
        <input
          id="todoTitle"
          type="text"
          className="w-full px-3 py-2 placeholder-slate-300 border rounded focus:outline-none focus:ring focus:border-sky-300"
          value={this.state.title}
          onChange={this.titleChanged}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="todoDueDate" className="block text-white font-bold mb-1">
          Due Date:
        </label>
        <input
          id="todoDueDate"
          type="date"
          name="dueDate"
          className="w-full px-3 py-2 placeholder-slate-300 border rounded focus:outline-none focus:ring focus:border-sky-300"
          value={this.state.dueDate}
          onChange={this.dueDateChanged}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="todoDescription" className="block text-white font-bold mb-1">
          Description:
        </label>
        <input
          type="text"
          name="description"
          id="todoDescription"
          className="w-full px-3 py-2 placeholder-slate-300 border rounded focus:outline-none focus:ring focus:border-sky-300"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />
      </div>

      <button
        type="submit"
        id="addTaskButton"
        className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
      >
        Add item
      </button>
    </form>

    )
  }
}
export default TaskForm;