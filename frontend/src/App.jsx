import React from 'react';
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/AddToDoForm';
import './App.css'; // Import the custom CSS file

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/3">
          {/* AddToDoForm Component */}
          
          <AddToDoForm />
        </div>

        <div className="w-full md:w-2/3 h-[80vh] overflow-y-auto custom-scrollbar">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Your Todos</h2>
          {/* ToDoList Component */}
          <ToDoList />
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
        Made By Abhinav
      </div>
    </div>
  );
};

export default App;
