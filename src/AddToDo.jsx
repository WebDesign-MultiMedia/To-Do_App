// AddToDo: Contains an input field and a button to add new to-do items.

import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import './index.css'

function AddToDo({tasks, addTask, deleteTask, moveTaskUp, moveTaskDown, markAsCompleted,}) {

    const [newTask, setNewTask] = useState("");
    

     function handleInputChange(event) {
         setNewTask(event.target.value);
         
     }

     function handleAddClick() {
        addTask(newTask);
        setNewTask("");
     };

     return(
         <>

         {/* INPUT TASKS */}
         {/* to-do-list flex justify-center pb-5 pt-5 bg-red-200 sm:bg-white  sm:rounded */}
         <div>
             <input className="bg-transparent text-green-200 border-b-2 hover:border-green-200 hover:bg-green-200 border-green-200 placeholder:text-green-200 hover:placeholder:text-black hover:text-black sm:text-green-200 placeholder:font-toDoList2 placeholder:text-lg  placeholder-white rounded w-69  text-center" 
             type="text" 
             placeholder="Enter a Task..." 
             value={newTask} 
             onChange={handleInputChange}/>

             <button className="font-bold  w-20 font-toDoList 
             sm:font-toDoList" 
             onClick={handleAddClick}><FontAwesomeIcon className="text-green-200 relative top-1 text-2xl hover:text-red-200 mr-4" icon={faPlusCircle}/></button>
         </div>
 
        {/* TO-DO LIST */}
        <div className="flex flex-col pt-10 items-center sm:flex-col sm:justify-center">
            <h2 className="text-3xl font-headings border-b-2 border-white-500
            sm:font-headings sm:border-b-2 sm:border-white-500 text-red-200">To-Do <FontAwesomeIcon className="text-red-200 ml-2" icon={faClipboardList}/></h2>
         
         <ol className="flex flex-col mt-3 p-3
         sm:flex-row sm:flex-wrap sm:justify-center sm:mt-10 sm:bg-black sm:border sm:m-4 rounded sm:border-none font-toDoList sm:font-toDoList">
             {tasks.map((task, index) => (
             <li key={index} className="bg-black rounded mb-0 sm:mb-20">
                 <span className="text-white p-6 rounded text-2xl sm:text-1xl sm:p-20">{task}</span>
                
                <div className=" flex flex-row z-0 sm:flex-row justify-center ">
                <button className="text-green-400  hover:bg-green-200 sm:bg-gray-900  hover:text-black sm:border sm:border-black rounded w-8 m-1 ml-2 " 
                 onClick={()=>markAsCompleted(index)}><FontAwesomeIcon icon={faCheck} /></button>

                 <button className="text-blue-300  hover:bg-gray-200 sm:bg-gray-900 hover:text-black sm:border sm:border-black rounded w-8 m-1 ml-2" 
                 onClick={()=>moveTaskUp(index)}><FontAwesomeIcon icon={faArrowUp}/></button>

                 <button className="text-white hover:bg-yellow-200 sm:bg-gray-900 hover:text-black  sm:border sm:border-black rounded w-8 m-1 ml-2" 
                 onClick={()=>moveTaskDown(index)}><FontAwesomeIcon icon={faArrowDown}/></button>

                  <button className="text-red-500 hover:text-red-200 sm:bg-gray-900 sm:border sm:border-black rounded w-8 m-2" 
                 onClick={()=>deleteTask(index)}><FontAwesomeIcon icon={faTrashCan}/></button>   
                </div>

             </li>
             ))}
         </ol>
        </div>
        
         </>
     )
}

export default AddToDo;