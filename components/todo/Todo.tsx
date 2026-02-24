'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { addTodo, removeTodo } from '@/store/todoSlice';

export default function ToDo() {
  const [inputText, setInputText] = useState('');
  const todos = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText)); // enviando a string como payload
      setInputText('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Minhas Tarefas</h2>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
          placeholder="Nova tarefa..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li 
            key={todo.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group hover:bg-gray-100"
          >
            <span className="text-gray-700">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-center text-gray-400 text-sm">Nenhuma tarefa por enquanto.</p>
      )}
    </div>
  );
}