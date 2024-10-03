// import React, { useState } from 'react';
// import axios from 'axios';

// const AddToDoForm = () => {
//   const [title, setTitle] = useState('');
//   const [description,setDescription]=useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/todos', { title ,description})
//       .then(() => {
//         setTitle('');
//         setDescription('');
//         window.location.reload();
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <form  className="text-white flex gap-1 w-full mb-4" onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         value={title} 
//         onChange={(e) => setTitle(e.target.value)} 
//         placeholder="Add new TODO"
//       />
//       <textarea
//         type="text" 
//         value={description} 
//         onChange={(e) => setDescription(e.target.value)} 
//         placeholder="Add Description"
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default AddToDoForm;




import React, { useState } from 'react';
import axios from 'axios';

const AddToDoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/todos', { title, description })
      .then(() => {
        setTitle('');
        setDescription('');
        window.location.reload();
      })
      .catch(error => console.error(error));
  };

  return (
    <form 
      className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg text-white w-full max-w-xl mx-auto flex flex-col gap-6" 
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold text-center mb-4">Add New Todo</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-lg font-semibold">Title</label>
        <input 
          id="title"
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter TODO title" 
          className="p-3 bg-gray-700 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-lg font-semibold">Description</label>
        <textarea
          id="description"
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter TODO description" 
          className="p-3 bg-gray-700 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32"
        />
      </div>

      <button 
        type="submit" 
        className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold shadow-lg transition duration-300 ease-in-out w-full"
      >
        Add TODO
      </button>
    </form>
  );
};

export default AddToDoForm;