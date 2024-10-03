// import React, { useState } from 'react';
// import axios from 'axios';

// const ToDoItem = ({ todo, onUpdate, onDelete }) => {
//     const [completed,setCompleted]=useState(todo.completed)
//   const handleUpdate=()=>{
//     axios.put(`http://localhost:5000/api/todos/${todo._id}`,{
//         completed:!completed
//     })
//     .then((response) => setCompleted(response.data.completed))
//     .catch(error => console.error(error));


//   }
//   const handleDelete = () => {
//     axios.delete(`http://localhost:5000/api/todos/${todo._id}`)
//       .then(() => window.location.reload())
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <p>{todo.title}</p>
//       <p>{todo.description}</p>
      

//       <button onClick={handleUpdate}>

//     {completed ? "Completed" : "Incomplete"}
//       </button>
       
      
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default ToDoItem;

import React, { useState } from 'react';
import axios from 'axios';

const ToDoItem = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/api/todos/${todo._id}`, {
      completed: !completed,
    })
    .then((response) => setCompleted(response.data.completed))
    .catch(error => console.error(error));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/todos/${todo._id}`)
      .then(() => window.location.reload())
      .catch(error => console.error(error));
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-lg mx-auto mb-4">
      {/* Title and Description */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-white">{todo.title}</h3>
        <p className="text-gray-300">{todo.description}</p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        {/* Update Button */}
        <button 
          onClick={handleUpdate} 
          className={`px-4 py-2 rounded-md font-semibold shadow-md transition-colors duration-300 ${
            completed ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
          } text-white`}
        >
          {completed ? 'Completed' : 'Incomplete'}
        </button>

        {/* Delete Button */}
        <button 
          onClick={handleDelete} 
          className="px-4 py-2 rounded-md bg-red-700 hover:bg-red-800 font-semibold text-white shadow-md transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
