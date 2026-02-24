"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleTheme } from "@/store/themeSlice";

export default function ThemeApp() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`min-h-screen transition-all duration-500 flex flex-col items-center justify-center 
      ${darkMode ? "bg-slate-900 text-white" : "bg-orange-50 text-slate-900"}`}
      >
        <div
          className={`p-10 rounded-3xl shadow-2xl border transition-all
        ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-orange-200"}`}
        >
          <h1 className="text-3xl font-bold mb-4">
            {darkMode ? "Modo Escuro Ativado 🌙" : "Modo Claro Ativado ☀️"}
          </h1>

          <p className="mb-8 opacity-70">
            Este estado está sendo controlado globalmente pelo Redux RTK.
          </p>

          <button
            onClick={() => dispatch(toggleTheme())}
            className={`px-8 py-3 rounded-full font-bold transition-transform active:scale-95
            ${
              darkMode
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Trocar para {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </>
  );
}
