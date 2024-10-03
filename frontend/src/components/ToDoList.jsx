// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ToDoItem from './ToDoItem';

// const ToDoList = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     // Fetch to-do items from the backend
//     axios.get('http://localhost:5000/api/todos')
//       .then(response => setTodos(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {todos.map(todo => (
//         <ToDoItem key={todo._id} todo={todo} />
//       ))}
//     </div>
//   );
// };

// export default ToDoList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch to-do items from the backend
    axios.get('http://localhost:5000/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto my-8 ">
      <div className="space-y-4">
        {todos.length > 0 ? (
          todos.map(todo => (
            <ToDoItem key={todo._id} todo={todo} />
          ))
        ) : (
          <p className="text-center text-gray-400">No todos found. Please add a new task.</p>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
