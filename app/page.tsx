import Counter from "@/components/counter/Counter";
import ThemeApp from "@/components/themeApp/ThemeApp";
import ToDo from "../components/todo/Todo";
import Cats from "@/components/cats/Cats";
import BreedCatalog from "@/components/cats/BreedCatalog";
import PostList from "@/components/postList/PostList";

export default function Home() {
  return (
    <>
      <ThemeApp />
      <Counter />
      <ToDo />
      <Cats />
      <BreedCatalog />
      <PostList />
    </>
  );
}
