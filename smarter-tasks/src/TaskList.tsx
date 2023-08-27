import Task from "./Task";

import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  tasksRemaining: (updatedTasks: TaskItem[]) => void;
}

const TaskList = (props: Props) => {
  const deleteTask = (taskIndex: number) => {
    const updatedTasks = props.tasks.filter((_, index) => index !== taskIndex);
    props.tasksRemaining(updatedTasks);
  };

  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task
        id={task.id}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        taskToBeDeleted={() => deleteTask(idx)}
      />
    </li>
  ));
  return <ul>{list}</ul>;
};

export default TaskList;


