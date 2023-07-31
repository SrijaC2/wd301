

import TaskCard from "./TaskCard";
function App() {
  return (
    <div className="font-serif">
      <h1 className="ml-16 mt-6 text-xl">Smarter Tasks</h1>
      <h3 className="ml-16 mt-3 "><b>Project:</b> Graduation Final Year Project (Revamp College Website)</h3>
      <div className="flex justify-center space-x-7  m-10">
      <div className="w-1/3 p-4 bg-sky-950 rounded">
        <h1 className=" text-white text-xl m-2 text-center">Pending</h1>
        <TaskCard
          title="Build the website with static content"
          dueDate="10th April"
          assigneeName="Rohit S"
          id="0"
        />
        <TaskCard title="Add blog" dueDate="22nd March" assigneeName="Rohit M"  id="0" />
      </div>
      <div className="w-1/3 p-4 bg-sky-950 rounded">
        <h1 className="text-white text-xl m-2 text-center">Done</h1>
        <TaskCard
          title="Design the mockup"
          completedAtDate="10th April"
          assigneeName="Rohit M"
          id="1"
        />
        <TaskCard
          title="Get approval from principal"
          completedAtDate="20th April"
          assigneeName="Ajay S"
          id="1"
        />
      </div>
    </div>
    </div>

  );
}
export default App;