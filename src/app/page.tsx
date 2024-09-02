import CollegesHome from "./components/CollegesHome";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5">
      <SearchBar/>
      <CollegesHome/>
    </div>
  );
}
