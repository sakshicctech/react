import  {useState} from 'react'

function App() {
  const[task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    
    if(newTask){
      setTask([...task, newTask]);
      setNewTask('');
    }
  }

  const delTask = (index) =>{
    const tasks = [...task];
    tasks.splice(index, 1);
    setTask(tasks);
  }

  // const taskRef = useRef(null);

  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-black text-center">TODO List</h1>
        <div className='text-black bg-slate-300 rounded-lg shadow-lg flex justify-center p-2'>
          <input type="text" className='w-full p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white' placeholder='Add a task' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
          <button className='outline-none rounded-lg bg-blue-600 text-white px-3 py-0.5 shrink-0 mx-1' onClick={addTask}>Add Task</button>
        </div>
        <div className='mt-4'>
          <ul className='flex flex-col gap-2'>
            {task.map((item, index) => (
              <li key={index} className='text-black bg-slate-300 rounded-lg shadow-lg flex justify-center p-2'>
                <span className="flex-1">{item}</span> 
              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                  Done
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700" onClick={delTask}>
                  Del
                </button>
              </div>
              </li>
            ))}
          </ul>
          
        </div>
      </div>  
    </div>
    </>
  )
}

export default App
