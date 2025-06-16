import ToDoList from './ToDoList';
import AddToDo from './AddToDo';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  
  // useState
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // const [completedTasks, setCompletedTasks] = useState(() =>{
  //   const saved = localStorage.getItem('completedTasks');
  //   return saved ? JSON.parse(saved) : [];
  // });
const [completedTasks, setCompletedTasks] = useState(() => {
  const saved = localStorage.getItem('completedTasks');
  return saved ? JSON.parse(saved) : [];
});



  // useEffect
    useEffect(() =>{
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      const savedCompleted = JSON.parse(localStorage.getItem('completedTasks'));

      if (savedTasks) setTasks(savedTasks);
      if(savedCompleted) setCompletedTasks(savedCompleted);
    }, []);

    useEffect(() =>{
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() =>{
      localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }, [completedTasks]);


  function addTask(task) {
         if (task.trim() !== "") {
             setTasks(t => [...t, task]);
         }
     }
     function deleteTask(index) {
         const updatedTasks = tasks.filter((_, i) => i !== index);
         setTasks(updatedTasks);
     }
     function moveTaskUp(index) {
         if (index > 0) {
             const updatedTasks = [...tasks];
             [updatedTasks[index], updatedTasks[index - 1]] = 
             [updatedTasks[index - 1], updatedTasks[index]];
             setTasks(updatedTasks);
         }
     }  
     function moveTaskDown(index) {
 
               if (index < tasks.length - 1) {
             const updatedTasks = [...tasks];
             [updatedTasks[index], updatedTasks[index + 1]] = 
             [updatedTasks[index + 1], updatedTasks[index]];
             setTasks(updatedTasks);
         }
     }

  //  function markAsCompleted(index) {
  //     const completedItem = tasks[index];
  //     setCompletedTasks(function(prev){
  //       return [...prev, completedItem];
  //     });
  //     deleteTask(index);
  //  }

  function markAsCompleted(index) {
  const completedAt = new Date().toLocaleString(); // capture current date/time
  const completedTask = {
    text: tasks[index],
    completedAt: completedAt,
  };

  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);

  setCompletedTasks([...completedTasks, completedTask]);
}

 
// function markAsIncomplete(index) {
//   const task = completedTasks[index];
//   setTasks(function (prev) {
//     return [...prev, task.text];
//   });
//   setCompletedTasks(function (prev) {
//     return prev.filter(function (_, i) {
//       return i !== index;
//     });
//   });
//    }
function markAsIncomplete(index) {
  const task = completedTasks[index];

  // Push only the task text back to tasks list
  setTasks(prev => [...prev, task.text]);

  // Remove from completedTasks
  setCompletedTasks(prev =>
    prev.filter((_, i) => i !== index)
  );
}


  return (

    <div className="text-center">
        <AddToDo addTask={addTask}
        deleteTask={deleteTask}
        tasks={tasks}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
        markAsCompleted={markAsCompleted}
        />        
        <ToDoList 
        tasks={tasks}
        completedTasks={completedTasks}
        markAsIncomplete={markAsIncomplete}
        />
    </div>
  )
}

export default App
