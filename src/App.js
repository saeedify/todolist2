import './App.css';
import {useState} from "react";
import {Task} from './Task.js';

function App() {

  const [currTask, setCurrTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const change=(event)=> setCurrTask(event.target.value);

  const addTask=()=>{
      const task={
        name: currTask,
        complete: false,
        id: tasksList.length===0 ? 1 : tasksList[tasksList.length-1].id+1,
      };

      setTasksList(
        [...tasksList,task]
      );
  }

  const deleteTask=(taskid)=>{
    const newTasksList=tasksList.filter( (task)=>{
      if(task.id===taskid)
        return false;
      else
        return true;
    } );
    setTasksList(newTasksList);
  }

  const update=(taskid)=>{
    const newTasksList=tasksList.map( (task)=>{
      if(taskid===task.id)
        return {...task, complete: !task.complete};
      else
        return task;
    }
    );

    setTasksList(newTasksList);
  }



  return (
    <div className="App">

      <div className="taketask">
        
        <input onChange={ change }/>
        <button onClick={ addTask }>Add Task</button>

      </div>

      <div className="showtasks">
        {
          tasksList.map( (task)=>{
            return (
              <Task 
                name={task.name} id={task.id} complete={task.complete} deleteTask={deleteTask} update={update}/>
            );
          } )
        }
      </div>

    </div>
  );
}

export default App;
