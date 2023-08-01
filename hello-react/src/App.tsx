import React from "react";
import TaskCard from "./TaskCard";

interface TaskItems {
  title: string;
  dueDate: string;
  completedAtDate: string;
  assigneeName: string;
}

function App() {

  const Pending: TaskItems[] = [
    {
      title: "Build the website with static content",
      dueDate: "10th April",
      completedAtDate: "",
      assigneeName: "Rohit S"
    },
    {
      title: "Add a blog",
      dueDate: "22nd March",
      assigneeName: "Rohit M",
      completedAtDate: ""
    }
  ];

  const doneTasks: TaskItems[] = [
    {
      title: "Design the mockup",
      completedAtDate: "10th April",
      assigneeName: "Rohit M",
      dueDate: ""
    },
    {
      title: "Get the approval from principal",
      completedAtDate: "20th April",
      assigneeName: "Ajay S",
      dueDate: ""
    }
  ];
  return (
    <div className="font-serif">
      <h1 className="ml-16 mt-6 text-xl">Smarter Tasks</h1>
      <h3 className="ml-16 mt-3 "><b>Project:</b> Graduation Final Year Project (Revamp College Website)</h3>
      <div className="flex justify-center space-x-7  m-10">
        <div className="w-1/3 p-4 bg-sky-950 rounded">
          <h1 className=" text-white text-xl m-2 text-center">Pending</h1>
          <TaskCard
            title={Pending[0].title}
            dueDate={Pending[0].dueDate}
            assigneeName={Pending[0].assigneeName}
            id="0"
          />
          <TaskCard 
          title={Pending[1].title}
          dueDate={Pending[1].dueDate}
          assigneeName={Pending[1].assigneeName}
          id="0" 
          />
        </div>
        <div className="w-1/3 p-4 bg-sky-950 rounded">
          <h1 className="text-white text-xl m-2 text-center">Done</h1>
          <TaskCard
            title={doneTasks[0].title}
            completedAtDate={doneTasks[0].completedAtDate}
            assigneeName={doneTasks[0].assigneeName}
            id="1"
          />
          <TaskCard
            title={doneTasks[1].title}
            completedAtDate={doneTasks[1].completedAtDate}
            assigneeName={doneTasks[1].assigneeName}
            id="1"
          />
        </div>
      </div>
    </div>

  );
}
export default App;
