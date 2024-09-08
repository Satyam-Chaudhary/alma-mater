import Link from "next/link";
import CollegesHome from "./components/CollegesHome";
import SearchBar from "./components/SearchBar";
import { fetchCollegeNames } from "./Actions/helpers";
import About from "./components/About";
import Footer from "./components/Footer";


export default async function Home() {


  return (
    <>
      <div className="flex flex-col space-y-5">
        <SearchBar />
      </div>
      <CollegesHome />
      <About/>
      <Footer/>
    </>
  );
}
