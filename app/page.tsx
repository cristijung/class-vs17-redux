import Counter from "@/components/counter/Counter";
import ThemeApp from "@/components/themeApp/ThemeApp";
import ToDo from "../components/todo/Todo";

export default function Home() {
  return (
    <>
      <ThemeApp />
      <Counter />
      <ToDo />
    </>
  );
}
