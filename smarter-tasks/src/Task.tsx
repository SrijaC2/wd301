import "./TaskCard.css";

interface TaskProp {
  id: string,
  title: string,
  dueDate: string,
  description: string,
  taskToBeDeleted: () => void;
}



const Task = (props: TaskProp) => {

  return (
    <div className="TaskItem shadow-md border border-slate-100 bg-cyan-100 m-3">
      <a href={`/tasks/${props.id || ""}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </a>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button className="deleteTaskButton bg-red-400 rounded p-1" onClick={props.taskToBeDeleted}>Delete</button>
    </div>
  );
};
export default Task;