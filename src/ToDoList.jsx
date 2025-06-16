// ToDoList: Shows the list of all to-do items.
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";

function ToDoList({ completedTasks, markAsIncomplete}) {
    

    return(<>
    <div className="flex flex-col pt-5  items-center sm:flex-row sm:justify-center ">

        {/* COMPLETED */}
        <div className="ml-0  p-6 w-69 mt-5 mb-5   rounded 
            sm:border sm:rounded sm:rounded-t-lg ">
                {/*  */}
            <h2 className="text-3xl font-bold mb-3 font-headings border-b-2 border-white-500 text-green-200
             uppercase sm:text-2xl sm:border-b-2 sm:border-white-500 sm:font-headings sm:text-green-200">Completed <FontAwesomeIcon className='text-green-200 ml-2' icon={ faClipboardCheck}/></h2>
           
            {/* TASK LIST */}
            <ul>
            {completedTasks.map((task, index) => (
             <li key={index} className="text-center m-2 text-white font-toDoList2 text-lg 
                    sm:m-2 sm:text-center sm:mr-7 sm:text-green-400 sm:font-toDoList">

                {/*  */}
                 <span className="line-through text-red-200 text-2xl sm:text-red-200 sm:text-2xl sm:font-toDoList2">{task.text}</span>
                 {/* */}
                 <div className="text-sm text-white italic">
                       Completed on: {task.completedAt}
                </div>
                  {/*  */}
                 <button
                   className="bg-white text-black hover:bg-yellow-200 border border-black rounded ml-4 px-2"
                   onClick={() => markAsIncomplete(index)}>
                    Undo
                 </button>
             </li>
))}

            </ul>
        </div>
    </div>
    </>)
   
}

export default ToDoList;