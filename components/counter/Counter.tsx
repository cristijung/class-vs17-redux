'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { increment, decrement, incrementByAmount } from '@/store/counterSlice';

export default function Counter() {
  // lendo o valor do estado
  const count = useSelector((state: RootState) => state.counter.value);
  // hook para disparar ações
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-24">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Contador RTK</h1>
        
        <div className="text-6xl font-black text-blue-600 mb-8">
          {count}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            -1
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
          >
            +1
          </button>
        </div>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="mt-4 w-full px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition-colors"
        >
          Adicionar +5
        </button>
      </div>
    </main>
  );
}